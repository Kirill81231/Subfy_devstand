import { Bot, webhookCallback, InlineKeyboard } from "grammy";
import { createClient } from "@supabase/supabase-js";
import express from "express";

// Конфигурация
const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || "";
const WEBAPP_URL = process.env.WEBAPP_URL || "https://example.com";
const SUPABASE_URL = process.env.SUPABASE_URL || "";
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || "";
const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET || "subfi-webhook-secret";
const PORT = parseInt(process.env.PORT || "3000", 10);
const PUBLIC_URL = process.env.PUBLIC_URL || "";

// Проверка токена
if (!BOT_TOKEN) {
  console.error("❌ TELEGRAM_BOT_TOKEN is not set!");
  process.exit(1);
}

console.log("✅ Bot token found");
console.log("📍 WEBAPP_URL:", WEBAPP_URL);
console.log("📍 PUBLIC_URL:", PUBLIC_URL || "(not set yet)");

// Инициализация
const bot = new Bot(BOT_TOKEN);
const supabase = SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY 
  ? createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)
  : null;

// Команда /start
bot.command("start", async (ctx) => {
  const user = ctx.from;
  if (!user) return;

  const keyboard = new InlineKeyboard();
  
  if (WEBAPP_URL && WEBAPP_URL !== "https://example.com") {
    keyboard.webApp("📊 Открыть SubFi", WEBAPP_URL);
    keyboard.row();
  }
  keyboard.text("ℹ️ О боте", "about");

  await ctx.reply(
    `👋 Привет, ${user.first_name}!\n\n` +
    `Я помогу тебе отслеживать подписки.\n\n` +
    `Нажми кнопку ниже, чтобы начать 👇`,
    {
      parse_mode: "HTML",
      reply_markup: keyboard,
    }
  );
});

// Команда /help
bot.command("help", async (ctx) => {
  await ctx.reply(
    `📚 <b>Команды SubFi</b>\n\n` +
    `/start — Начать работу\n` +
    `/help — Список команд`,
    { parse_mode: "HTML" }
  );
});

// Callback: about
bot.callbackQuery("about", async (ctx) => {
  await ctx.answerCallbackQuery();
  await ctx.reply(
    `ℹ️ <b>О SubFi</b>\n\nБесплатный трекер подписок для Telegram.`,
    { parse_mode: "HTML" }
  );
});

// Express сервер
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ status: "SubFi Bot is running", timestamp: new Date().toISOString() });
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.post(`/webhook/${WEBHOOK_SECRET}`, webhookCallback(bot, "express"));

// Запуск
async function start() {
  try {
    if (PUBLIC_URL) {
      const webhookUrl = `${PUBLIC_URL}/webhook/${WEBHOOK_SECRET}`;
      await bot.api.setWebhook(webhookUrl);
      console.log(`✅ Webhook set: ${webhookUrl}`);
    } else {
      console.log("⚠️ PUBLIC_URL not set - webhook not configured");
      console.log("Bot will work, but add PUBLIC_URL for webhooks");
    }

    app.listen(PORT, "0.0.0.0", () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Startup error:", error);
    process.exit(1);
  }
}

start();