// SubFi - Notification Sender Edge Function
// Отправляет уведомления о предстоящих списаниях через Telegram Bot API
// Вызывается через pg_cron каждый час

import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const TELEGRAM_BOT_TOKEN = Deno.env.get("TELEGRAM_BOT_TOKEN")!;
const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const CRON_SECRET = Deno.env.get("CRON_SECRET")!;

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

// Форматирование суммы
function formatAmount(amount: number, currency: string): string {
  const symbols: Record<string, string> = {
    RUB: "₽",
    USD: "$",
    EUR: "€",
  };
  return `${amount.toLocaleString("ru-RU")} ${symbols[currency] || currency}`;
}

// Получить emoji из иконки подписки
function getEmoji(icon: string | null): string {
  if (!icon) return "📦";
  if (icon.startsWith("symbol:")) return "📦";
  return icon;
}

// Отправка сообщения через Telegram Bot API
async function sendTelegramMessage(chatId: number, text: string): Promise<boolean> {
  try {
    const response = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          parse_mode: "HTML",
          disable_web_page_preview: true,
        }),
      }
    );

    const result = await response.json();
    return result.ok;
  } catch (error) {
    console.error(`Failed to send message to ${chatId}:`, error);
    return false;
  }
}

// Создание текста уведомления
function createNotificationText(subscriptions: any[], daysUntil: number): string {
  const totalAmount = subscriptions.reduce((sum, sub) => {
    const rates: Record<string, number> = { RUB: 1, USD: 96, EUR: 104 };
    return sum + sub.amount * (rates[sub.currency] || 1);
  }, 0);

  let emoji = "🔔";
  let urgencyText = "";

  if (daysUntil === 0) {
    emoji = "⚠️";
    urgencyText = "<b>Сегодня</b>";
  } else if (daysUntil === 1) {
    emoji = "📅";
    urgencyText = "<b>Завтра</b>";
  } else {
    urgencyText = `<b>Через ${daysUntil} дн.</b>`;
  }

  let text = `${emoji} ${urgencyText} списание:\n\n`;

  for (const sub of subscriptions) {
    const subEmoji = getEmoji(sub.icon);
    text += `• ${subEmoji} <b>${sub.subscription_name || sub.name}</b> — ${formatAmount(sub.amount, sub.currency)}\n`;
  }

  text += `\n💰 Всего: <b>${formatAmount(Math.round(totalAmount), "RUB")}</b>`;

  if (daysUntil <= 1) {
    text += `\n\n💡 Убедитесь, что на карте достаточно средств`;
  }

  return text;
}

// Получить текущий час в Москве (UTC+3)
function getMoscowHour(): number {
  const now = new Date();
  const moscowOffset = 3 * 60; // UTC+3 in minutes
  const utcMinutes = now.getUTCHours() * 60 + now.getUTCMinutes();
  const moscowMinutes = utcMinutes + moscowOffset;
  return Math.floor(((moscowMinutes % 1440) + 1440) % 1440 / 60);
}

serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Проверка авторизации для cron-запросов
    const authHeader = req.headers.get("Authorization");
    if (authHeader !== `Bearer ${CRON_SECRET}`) {
      return new Response(
        JSON.stringify({ error: "Unauthorized" }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);
    const currentMoscowHour = getMoscowHour();

    // Получаем пользователей с включёнными уведомлениями
    // Фильтруем по часу: первый или второй reminder time должен совпадать с текущим часом
    const { data: users, error: usersError } = await supabase
      .from("users")
      .select("id, first_reminder_days, first_reminder_time, second_reminder_days, second_reminder_time")
      .eq("notifications_enabled", true);

    if (usersError) {
      console.error("Error fetching users:", usersError);
      throw usersError;
    }

    // Фильтруем: только пользователей, чьё время уведомления = текущий час
    const daysSet = new Set<number>();
    const userReminderMap: Record<string, Set<number>> = {};

    for (const u of (users || [])) {
      const userDays = new Set<number>();

      // Проверяем первое напоминание: час совпадает?
      if (u.first_reminder_days >= 0) {
        const timeStr = u.first_reminder_time || "09:00:00";
        const hour = parseInt(timeStr.split(":")[0], 10);
        if (hour === currentMoscowHour) {
          daysSet.add(u.first_reminder_days);
          userDays.add(u.first_reminder_days);
        }
      }

      // Проверяем второе напоминание: час совпадает?
      if (u.second_reminder_days >= 0) {
        const timeStr = u.second_reminder_time || "09:00:00";
        const hour = parseInt(timeStr.split(":")[0], 10);
        if (hour === currentMoscowHour) {
          daysSet.add(u.second_reminder_days);
          userDays.add(u.second_reminder_days);
        }
      }

      if (userDays.size > 0) {
        userReminderMap[u.id] = userDays;
      }
    }

    const notificationDays = Array.from(daysSet).sort((a, b) => b - a);
    let totalSent = 0;
    let totalFailed = 0;
    let totalSkipped = 0;

    // Получаем уже отправленные уведомления за сегодня для дедупликации
    const todayStart = new Date();
    todayStart.setUTCHours(0, 0, 0, 0);
    const { data: sentToday } = await supabase
      .from("notifications")
      .select("user_id, subscription_id, type")
      .eq("is_sent", true)
      .gte("sent_at", todayStart.toISOString());

    const sentKeys = new Set(
      (sentToday || []).map(n => `${n.user_id}:${n.subscription_id}:${n.type}`)
    );

    for (const daysAhead of notificationDays) {
      const { data: subscriptions, error } = await supabase.rpc(
        "get_subscriptions_for_notification",
        { days_ahead: daysAhead }
      );

      if (error) {
        console.error(`Error fetching subscriptions for ${daysAhead} days:`, error);
        continue;
      }

      if (!subscriptions || subscriptions.length === 0) {
        continue;
      }

      // Группируем по пользователям (только тем, у кого настроен этот days_ahead на текущий час)
      const userSubscriptions: Record<number, any[]> = {};
      for (const sub of subscriptions) {
        const userDays = userReminderMap[sub.user_id];
        if (!userDays || !userDays.has(daysAhead)) continue;

        // Дедупликация: не отправлять повторно
        const notifType = daysAhead === 0 ? "billing" : "reminder";
        const key = `${sub.user_id}:${sub.subscription_id}:${notifType}`;
        if (sentKeys.has(key)) {
          totalSkipped++;
          continue;
        }

        if (!userSubscriptions[sub.telegram_id]) {
          userSubscriptions[sub.telegram_id] = [];
        }
        userSubscriptions[sub.telegram_id].push(sub);
      }

      // Отправляем уведомления
      for (const [telegramId, subs] of Object.entries(userSubscriptions)) {
        const text = createNotificationText(subs, daysAhead);
        const success = await sendTelegramMessage(Number(telegramId), text);

        if (success) {
          totalSent++;

          for (const sub of subs) {
            await supabase.from("notifications").insert({
              user_id: sub.user_id,
              subscription_id: sub.subscription_id,
              type: daysAhead === 0 ? "billing" : "reminder",
              message: text,
              is_sent: true,
              sent_at: new Date().toISOString(),
              scheduled_for: new Date().toISOString(),
            });
          }
        } else {
          totalFailed++;
        }

        // Rate limiting
        await new Promise(resolve => setTimeout(resolve, 50));
      }
    }

    return new Response(
      JSON.stringify({
        success: true,
        sent: totalSent,
        failed: totalFailed,
        skipped: totalSkipped,
        days_checked: notificationDays,
        moscow_hour: currentMoscowHour,
        timestamp: new Date().toISOString(),
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("Notification error:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
