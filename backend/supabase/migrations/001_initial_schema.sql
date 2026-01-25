-- SubFi Database Schema
-- Создание расширений
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS pg_cron;

-- ============================================
-- ТАБЛИЦА ПОЛЬЗОВАТЕЛЕЙ
-- ============================================
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    telegram_id BIGINT UNIQUE NOT NULL,
    telegram_username TEXT,
    first_name TEXT,
    last_name TEXT,
    language_code TEXT DEFAULT 'ru',
    timezone TEXT DEFAULT 'Europe/Moscow',
    notification_time TIME DEFAULT '09:00',
    notifications_enabled BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Индекс для быстрого поиска по telegram_id
CREATE INDEX idx_users_telegram_id ON users(telegram_id);

-- ============================================
-- ТАБЛИЦА КАТЕГОРИЙ
-- ============================================
CREATE TABLE categories (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    icon TEXT,
    color TEXT,
    sort_order INT DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Начальные категории
INSERT INTO categories (name, icon, color, sort_order) VALUES
    ('Экосистема', '🏢', '#6366f1', 1),
    ('Видео', '🎬', '#ef4444', 2),
    ('Музыка', '🎵', '#22c55e', 3),
    ('Облако', '☁️', '#3b82f6', 4),
    ('Книги', '📚', '#f59e0b', 5),
    ('Фитнес', '🏋️', '#ec4899', 6),
    ('Другое', '📦', '#6b7280', 7);

-- ============================================
-- ШАБЛОНЫ ПОДПИСОК
-- ============================================
CREATE TABLE subscription_templates (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    domain TEXT,
    default_price DECIMAL(10, 2),
    default_currency TEXT DEFAULT 'RUB',
    color TEXT,
    category_id UUID REFERENCES categories(id),
    logo_url TEXT,
    is_active BOOLEAN DEFAULT TRUE,
    sort_order INT DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Индекс для поиска шаблонов
CREATE INDEX idx_templates_category ON subscription_templates(category_id);
CREATE INDEX idx_templates_name ON subscription_templates(name);

-- ============================================
-- ПОДПИСКИ ПОЛЬЗОВАТЕЛЕЙ
-- ============================================
CREATE TABLE subscriptions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE NOT NULL,
    template_id UUID REFERENCES subscription_templates(id),
    
    -- Основные данные
    name TEXT NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    currency TEXT DEFAULT 'RUB' CHECK (currency IN ('RUB', 'USD', 'EUR')),
    
    -- Периодичность
    billing_cycle TEXT DEFAULT 'monthly' CHECK (billing_cycle IN ('weekly', 'monthly', 'quarterly', 'yearly')),
    first_billing_date DATE NOT NULL,
    
    -- Отображение
    category_id UUID REFERENCES categories(id),
    color TEXT,
    icon TEXT,
    domain TEXT,
    
    -- Статус
    is_active BOOLEAN DEFAULT TRUE,
    is_trial BOOLEAN DEFAULT FALSE,
    trial_end_date DATE,
    
    -- Уведомления
    notification_days_before INT DEFAULT 3,
    
    -- Мета
    notes TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Индексы для подписок
CREATE INDEX idx_subscriptions_user ON subscriptions(user_id);
CREATE INDEX idx_subscriptions_billing ON subscriptions(first_billing_date);
CREATE INDEX idx_subscriptions_active ON subscriptions(is_active) WHERE is_active = TRUE;

-- ============================================
-- ИСТОРИЯ ПЛАТЕЖЕЙ
-- ============================================
CREATE TABLE payment_history (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    subscription_id UUID REFERENCES subscriptions(id) ON DELETE CASCADE NOT NULL,
    user_id UUID REFERENCES users(id) ON DELETE CASCADE NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    currency TEXT NOT NULL,
    payment_date DATE NOT NULL,
    is_confirmed BOOLEAN DEFAULT FALSE,
    notes TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_payments_subscription ON payment_history(subscription_id);
CREATE INDEX idx_payments_user ON payment_history(user_id);
CREATE INDEX idx_payments_date ON payment_history(payment_date);

-- ============================================
-- УВЕДОМЛЕНИЯ
-- ============================================
CREATE TABLE notifications (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE NOT NULL,
    subscription_id UUID REFERENCES subscriptions(id) ON DELETE CASCADE,
    type TEXT NOT NULL CHECK (type IN ('reminder', 'billing', 'trial_ending', 'price_change')),
    message TEXT NOT NULL,
    is_sent BOOLEAN DEFAULT FALSE,
    sent_at TIMESTAMPTZ,
    scheduled_for TIMESTAMPTZ NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_notifications_user ON notifications(user_id);
CREATE INDEX idx_notifications_scheduled ON notifications(scheduled_for) WHERE is_sent = FALSE;

-- ============================================
-- ФУНКЦИИ И ТРИГГЕРЫ
-- ============================================

-- Функция для обновления updated_at
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Триггеры для updated_at
CREATE TRIGGER update_users_updated_at
    BEFORE UPDATE ON users
    FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER update_subscriptions_updated_at
    BEFORE UPDATE ON subscriptions
    FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- Функция расчёта следующей даты списания
CREATE OR REPLACE FUNCTION calculate_next_billing_date(
    first_date DATE,
    cycle TEXT
) RETURNS DATE AS $$
DECLARE
    next_date DATE := first_date;
BEGIN
    WHILE next_date <= CURRENT_DATE LOOP
        CASE cycle
            WHEN 'weekly' THEN next_date := next_date + INTERVAL '7 days';
            WHEN 'monthly' THEN next_date := next_date + INTERVAL '1 month';
            WHEN 'quarterly' THEN next_date := next_date + INTERVAL '3 months';
            WHEN 'yearly' THEN next_date := next_date + INTERVAL '1 year';
            ELSE next_date := next_date + INTERVAL '1 month';
        END CASE;
    END LOOP;
    RETURN next_date;
END;
$$ LANGUAGE plpgsql IMMUTABLE;

-- Функция получения подписок для уведомлений
CREATE OR REPLACE FUNCTION get_subscriptions_for_notification(days_ahead INT)
RETURNS TABLE (
    subscription_id UUID,
    user_id UUID,
    telegram_id BIGINT,
    subscription_name TEXT,
    amount DECIMAL,
    currency TEXT,
    next_billing_date DATE,
    days_until INT
) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        s.id AS subscription_id,
        s.user_id,
        u.telegram_id,
        s.name AS subscription_name,
        s.amount,
        s.currency,
        calculate_next_billing_date(s.first_billing_date, s.billing_cycle) AS next_billing_date,
        (calculate_next_billing_date(s.first_billing_date, s.billing_cycle) - CURRENT_DATE)::INT AS days_until
    FROM subscriptions s
    JOIN users u ON s.user_id = u.id
    WHERE s.is_active = TRUE
      AND u.notifications_enabled = TRUE
      AND (calculate_next_billing_date(s.first_billing_date, s.billing_cycle) - CURRENT_DATE) = days_ahead;
END;
$$ LANGUAGE plpgsql;

-- ============================================
-- ROW LEVEL SECURITY (RLS)
-- ============================================

-- Включаем RLS для всех таблиц
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE payment_history ENABLE ROW LEVEL SECURITY;
ALTER TABLE notifications ENABLE ROW LEVEL SECURITY;

-- Политики для users
CREATE POLICY "Users can view own data"
    ON users FOR SELECT
    USING (id = auth.uid());

CREATE POLICY "Users can update own data"
    ON users FOR UPDATE
    USING (id = auth.uid());

-- Политики для subscriptions
CREATE POLICY "Users can view own subscriptions"
    ON subscriptions FOR SELECT
    USING (user_id = auth.uid());

CREATE POLICY "Users can insert own subscriptions"
    ON subscriptions FOR INSERT
    WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can update own subscriptions"
    ON subscriptions FOR UPDATE
    USING (user_id = auth.uid());

CREATE POLICY "Users can delete own subscriptions"
    ON subscriptions FOR DELETE
    USING (user_id = auth.uid());

-- Политики для payment_history
CREATE POLICY "Users can view own payments"
    ON payment_history FOR SELECT
    USING (user_id = auth.uid());

CREATE POLICY "Users can insert own payments"
    ON payment_history FOR INSERT
    WITH CHECK (user_id = auth.uid());

-- Политики для notifications
CREATE POLICY "Users can view own notifications"
    ON notifications FOR SELECT
    USING (user_id = auth.uid());

-- ============================================
-- НАЧАЛЬНЫЕ ШАБЛОНЫ ПОДПИСОК
-- ============================================
DO $$
DECLARE
    ecosystem_id UUID;
    video_id UUID;
    music_id UUID;
    cloud_id UUID;
    books_id UUID;
    other_id UUID;
BEGIN
    SELECT id INTO ecosystem_id FROM categories WHERE name = 'Экосистема';
    SELECT id INTO video_id FROM categories WHERE name = 'Видео';
    SELECT id INTO music_id FROM categories WHERE name = 'Музыка';
    SELECT id INTO cloud_id FROM categories WHERE name = 'Облако';
    SELECT id INTO books_id FROM categories WHERE name = 'Книги';
    SELECT id INTO other_id FROM categories WHERE name = 'Другое';

    INSERT INTO subscription_templates (name, domain, default_price, color, category_id, sort_order) VALUES
        -- Экосистемы
        ('Яндекс Плюс', 'plus.yandex.ru', 299, '#FFCC00', ecosystem_id, 1),
        ('СберПрайм', 'sberbank.ru', 399, '#21A038', ecosystem_id, 2),
        ('МТС Premium', 'mts.ru', 299, '#E30611', ecosystem_id, 3),
        ('Тинькофф Pro', 'tinkoff.ru', 399, '#FFDD2D', ecosystem_id, 4),
        
        -- Видео
        ('Кинопоиск', 'kinopoisk.ru', 269, '#FF6600', video_id, 5),
        ('Okko', 'okko.tv', 399, '#6B4EFF', video_id, 6),
        ('ivi', 'ivi.ru', 399, '#EA003D', video_id, 7),
        ('Premier', 'premier.one', 399, '#FF0066', video_id, 8),
        ('Wink', 'wink.ru', 299, '#7B2BFC', video_id, 9),
        ('Netflix', 'netflix.com', 699, '#E50914', video_id, 10),
        ('YouTube Premium', 'youtube.com', 299, '#FF0000', video_id, 11),
        
        -- Музыка
        ('Яндекс Музыка', 'music.yandex.ru', 249, '#FFCC00', music_id, 12),
        ('VK Музыка', 'vk.com', 249, '#0077FF', music_id, 13),
        ('Apple Music', 'apple.com', 169, '#FA2D48', music_id, 14),
        ('Spotify', 'spotify.com', 199, '#1DB954', music_id, 15),
        
        -- Облако
        ('Яндекс 360', '360.yandex.ru', 299, '#FFCC00', cloud_id, 16),
        ('iCloud+', 'icloud.com', 149, '#3693F3', cloud_id, 17),
        ('Google One', 'one.google.com', 139, '#4285F4', cloud_id, 18),
        
        -- Книги
        ('Литрес', 'litres.ru', 399, '#FF6B00', books_id, 19),
        ('Bookmate', 'bookmate.com', 299, '#FF5C35', books_id, 20),
        
        -- Другое
        ('Telegram Premium', 'telegram.org', 299, '#0088CC', other_id, 21),
        ('ChatGPT Plus', 'openai.com', 1900, '#10A37F', other_id, 22),
        ('Notion', 'notion.so', 800, '#000000', other_id, 23),
        ('Figma', 'figma.com', 1200, '#F24E1E', other_id, 24);
END $$;
