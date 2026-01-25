// SubFi Telegram Bot
// grammY bot для работы с Mini App и уведомлениями

import { Bot, Context, webhookCallback, InlineKeyboard } from "grammy";
import { createClient } from "@supabase/supabase-js";
import express from "express";

// Конфигурация
const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN!;
const WEBAPP_URL = process.env.WEBAPP_URL!; // URL Mini App
const SUPABASE_URL = process.env.SUPABASE_URL!;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET || "subfi-webhook-secret";
const PORT = process.env.PORT || 3000;

// Инициализация
const bot = new Bot(BOT_TOKEN);
const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

// ============================================
// ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ
// ============================================

// Получение пользователя из БД
async function getUser(telegramId: number) {
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("telegram_id", telegramId)
    .single();

  return data;
}

// Получение статистики пользователя
async function getUserStats(userId: string) {
  const { data: subscriptions } = await supabase
    .from("subscriptions")
    .select("amount, currency, billing_cycle")
    .eq("user_id", userId)
    .eq("is_active", true);

  if (!subscriptions || subscriptions.length === 0) {
    return { count: 0, monthlyTotal: 0 };
  }

  const cycleMultipliers: Record<string, number> = {
    weekly: 4.33,
    monthly: 1,
    quarterly: 0.33,
    yearly: 0.083,
  };

  const currencyRates: Record<string, number> = {
    RUB: 1,
    USD: 96,
    EUR: 104,
  };

  let monthlyTotal = 0;
  for (const sub of subscriptions) {
    const amountInRub = sub.amount * (currencyRates[sub.currency] || 1);
    monthlyTotal += amountInRub * (cycleMultipliers[sub.billing_cycle] || 1);
  }

  return {
    count: subscriptions.length,
    monthlyTotal: Math.round(monthlyTotal),
  };
}

// Форматирование суммы
function formatAmount(amount: number): string {
  return amount.toLocaleString("ru-RU") + " ₽";
}

// ============================================
// КОМАНДЫ БОТА
// ============================================

// Команда /start
bot.command("start", async (ctx) => {
  const user = ctx.from;
  if (!user) return;

  // Клавиатура с кнопкой открытия Mini App
  const keyboard = new InlineKeyboard()
    .webApp("📊 Открыть SubFi", WEBAPP_URL)
    .row()
    .text("ℹ️ О боте", "about");

  await ctx.reply(
    `👋 Привет, ${user.first_name}!\n\n` +
    `Я помогу тебе отслеживать подписки и не пропускать списания.\n\n` +
    `🎯 <b>Что умеет SubFi:</b>\n` +
    `• Отслеживать все подписки в одном месте\n` +
    `• Напоминать о предстоящих списаниях\n` +
    `• Показывать статистику расходов\n` +
    `• Работать с популярными сервисами\n\n` +
    `Нажми кнопку ниже, чтобы начать 👇`,
    {
      parse_mode: "HTML",
      reply_markup: keyboard,
    }
  );
});

// Команда /stats - статистика
bot.command("stats", async (ctx) => {
  const telegramId = ctx.from?.id;
  if (!telegramId) return;

  const user = await getUser(telegramId);
  if (!user) {
    await ctx.reply(
      "⚠️ Ты ещё не начал использовать SubFi.\n\n" +
      "Нажми /start чтобы начать!"
    );
    return;
  }

  const stats = await getUserStats(user.id);

  if (stats.count === 0) {
    await ctx.reply(
      "📊 <b>Статистика</b>\n\n" +
      "У тебя пока нет активных подписок.\n" +
      "Добавь первую подписку в приложении!",
      { parse_mode: "HTML" }
    );
    return;
  }

  await ctx.reply(
    `📊 <b>Твоя статистика</b>\n\n` +
    `📦 Активных подписок: <b>${stats.count}</b>\n` +
    `💰 Расходы в месяц: <b>${formatAmount(stats.monthlyTotal)}</b>\n` +
    `📅 В год: <b>${formatAmount(stats.monthlyTotal * 12)}</b>`,
    { parse_mode: "HTML" }
  );
});

// Команда /settings - настройки уведомлений
bot.command("settings", async (ctx) => {
  const telegramId = ctx.from?.id;
  if (!telegramId) return;

  const user = await getUser(telegramId);
  if (!user) {
    await ctx.reply("⚠️ Нажми /start чтобы начать!");
    return;
  }

  const keyboard = new InlineKeyboard()
    .text(
      user.notifications_enabled ? "🔕 Выключить уведомления" : "🔔 Включить уведомления",
      user.notifications_enabled ? "notif_off" : "notif_on"
    );

  await ctx.reply(
    `⚙️ <b>Настройки</b>\n\n` +
    `🔔 Уведомления: ${user.notifications_enabled ? "<b>включены</b>" : "<b>выключены</b>"}\n` +
    `⏰ Время уведомлений: <b>${user.notification_time || "09:00"}</b>\n` +
    `🌍 Часовой пояс: <b>${user.timezone || "Europe/Moscow"}</b>`,
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
    `/start — Начать работу с ботом\n` +
    `/stats — Статистика подписок\n` +
    `/settings — Настройки уведомлений\n` +
    `/help — Список команд\n\n` +
    `💡 <b>Совет:</b> Используй Mini App для добавления и управления подписками`,
    { parse_mode: "HTML" }
  );
});

// ============================================
// ОБРАБОТКА CALLBACK QUERY
// ============================================

// Информация о боте
bot.callbackQuery("about", async (ctx) => {
  await ctx.answerCallbackQuery();
  await ctx.reply(
    `ℹ️ <b>О SubFi</b>\n\n` +
    `SubFi — это бесплатный трекер подписок для Telegram.\n\n` +
    `🔹 Добавляй подписки из готовых шаблонов или создавай свои\n` +
    `🔹 Получай напоминания за 3 дня и в день списания\n` +
    `🔹 Отслеживай общие расходы на подписки\n\n` +
    `📧 По вопросам: @subfi_support`,
    { parse_mode: "HTML" }
  );
});

// Включение уведомлений
bot.callbackQuery("notif_on", async (ctx) => {
  const telegramId = ctx.from?.id;
  if (!telegramId) return;

  await supabase
    .from("users")
    .update({ notifications_enabled: true })
    .eq("telegram_id", telegramId);

  await ctx.answerCallbackQuery("✅ Уведомления включены");
  
  // Обновляем сообщение
  const keyboard = new InlineKeyboard()
    .text("🔕 Выключить уведомления", "notif_off");

  await ctx.editMessageText(
    `⚙️ <b>Настройки</b>\n\n` +
    `🔔 Уведомления: <b>включены</b>\n` +
    `⏰ Время уведомлений: <b>09:00</b>\n` +
    `🌍 Часовой пояс: <b>Europe/Moscow</b>`,
    {
      parse_mode: "HTML",
      reply_markup: keyboard,
    }
  );
});

// Выключение уведомлений
bot.callbackQuery("notif_off", async (ctx) => {
  const telegramId = ctx.from?.id;
  if (!telegramId) return;

  await supabase
    .from("users")
    .update({ notifications_enabled: false })
    .eq("telegram_id", telegramId);

  await ctx.answerCallbackQuery("🔕 Уведомления выключены");

  const keyboard = new InlineKeyboard()
    .text("🔔 Включить уведомления", "notif_on");

  await ctx.editMessageText(
    `⚙️ <b>Настройки</b>\n\n` +
    `🔔 Уведомления: <b>выключены</b>\n` +
    `⏰ Время уведомлений: <b>09:00</b>\n` +
    `🌍 Часовой пояс: <b>Europe/Moscow</b>`,
    {
      parse_mode: "HTML",
      reply_markup: keyboard,
    }
  );
});

// ============================================
// ЗАПУСК БОТА
// ============================================

// Express сервер для webhook
const app = express();
app.use(express.json());

// Healthcheck endpoint
app.get("/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Webhook endpoint
app.post(`/webhook/${WEBHOOK_SECRET}`, webhookCallback(bot, "express"));

// Запуск
async function start() {
  // Установка webhook
  const webhookUrl = `${process.env.PUBLIC_URL}/webhook/${WEBHOOK_SECRET}`;
  await bot.api.setWebhook(webhookUrl);
  console.log(`Webhook set to ${webhookUrl}`);

  // Запуск сервера
  app.listen(PORT, () => {
    console.log(`SubFi Bot server running on port ${PORT}`);
  });
}

start().catch(console.error);
