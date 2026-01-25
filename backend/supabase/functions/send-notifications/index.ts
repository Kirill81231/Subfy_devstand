// SubFi - Notification Sender Edge Function
// Отправляет уведомления о предстоящих списаниях через Telegram Bot API
// Вызывается через pg_cron ежедневно

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

// Форматирование даты
function formatDate(date: Date): string {
  return date.toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
  });
}

// Отправка сообщения через Telegram Bot API
async function sendTelegramMessage(chatId: number, text: string, parseMode: string = "HTML"): Promise<boolean> {
  try {
    const response = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          parse_mode: parseMode,
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
    // Конвертация в рубли для общей суммы
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
    text += `• <b>${sub.name}</b> — ${formatAmount(sub.amount, sub.currency)}\n`;
  }

  text += `\n💰 Всего: <b>${formatAmount(Math.round(totalAmount), "RUB")}</b>`;
  
  if (daysUntil <= 1) {
    text += `\n\n💡 Убедитесь, что на карте достаточно средств`;
  }

  return text;
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

    // Отправляем уведомления за 3 дня, за 1 день и в день списания
    const notificationDays = [3, 1, 0];
    let totalSent = 0;
    let totalFailed = 0;

    for (const daysAhead of notificationDays) {
      // Получаем подписки для уведомления
      const { data: subscriptions, error } = await supabase.rpc(
        "get_subscriptions_for_notification",
        { days_ahead: daysAhead }
      );

      if (error) {
        console.error(`Error fetching subscriptions for ${daysAhead} days:`, error);
        continue;
      }

      if (!subscriptions || subscriptions.length === 0) {
        console.log(`No subscriptions for ${daysAhead} days ahead`);
        continue;
      }

      // Группируем подписки по пользователям
      const userSubscriptions: Record<number, any[]> = {};
      for (const sub of subscriptions) {
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
          
          // Записываем в историю уведомлений
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

        // Rate limiting - не более 30 сообщений в секунду
        await new Promise(resolve => setTimeout(resolve, 50));
      }
    }

    return new Response(
      JSON.stringify({
        success: true,
        sent: totalSent,
        failed: totalFailed,
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
