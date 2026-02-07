import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.0";

const TELEGRAM_BOT_TOKEN = Deno.env.get("TELEGRAM_BOT_TOKEN")!;

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

function formatAmount(amount: number, currency: string): string {
  const symbols: Record<string, string> = { RUB: "₽", USD: "$", EUR: "€" };
  return `${amount.toLocaleString("ru-RU")} ${symbols[currency] || currency}`;
}

function getEmoji(icon: string | null): string {
  if (!icon) return "📦";
  if (icon.startsWith("symbol:")) return "📦";
  return icon;
}

async function sendTelegramMessage(chatId: string, text: string): Promise<boolean> {
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

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { userId } = await req.json();

    if (!userId) {
      return new Response(
        JSON.stringify({ error: "userId is required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    // Получаем одну подписку пользователя
    const { data: subscriptions } = await supabase
      .from("subscriptions")
      .select("name, amount, currency, icon")
      .eq("user_id", userId)
      .eq("is_active", true)
      .limit(1);

    let messageBody: string;

    if (subscriptions && subscriptions.length > 0) {
      const sub = subscriptions[0];
      const emoji = getEmoji(sub.icon);
      messageBody = `📅 <b>Завтра</b> списание:\n\n• ${emoji} <b>${sub.name}</b> — ${formatAmount(sub.amount, sub.currency)}`;
    } else {
      messageBody = `📅 <b>Завтра</b> списание:\n\n• 📦 <b>Пример подписки</b> — 299 ₽`;
    }

    const text = `🔔 <b>Тестовое уведомление</b>\n\n${messageBody}\n\n✅ Уведомления настроены и работают`;

    const success = await sendTelegramMessage(userId, text);

    if (!success) {
      return new Response(
        JSON.stringify({ error: "Failed to send Telegram message" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
