-- Оптимизация cron-уведомлений: проверка в SQL, edge function только при необходимости
-- Вместо вызова edge function каждую минуту (2 REST-запроса каждый раз),
-- теперь pg_cron вызывает лёгкую SQL-функцию, которая проверяет,
-- есть ли пользователи с совпадающим временем напоминания.
-- Edge function вызывается только если такие пользователи найдены.

CREATE OR REPLACE FUNCTION public.check_notifications_needed()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  matching_count integer;
BEGIN
  SELECT COUNT(*) INTO matching_count
  FROM users
  WHERE notifications_enabled = true
    AND (
      (
        first_reminder_days >= 0
        AND to_char(NOW() AT TIME ZONE COALESCE(timezone, 'Europe/Moscow'), 'HH24:MI')
            = to_char(first_reminder_time, 'HH24:MI')
      )
      OR
      (
        second_reminder_days >= 0
        AND to_char(NOW() AT TIME ZONE COALESCE(timezone, 'Europe/Moscow'), 'HH24:MI')
            = to_char(second_reminder_time, 'HH24:MI')
      )
    );

  IF matching_count > 0 THEN
    PERFORM net.http_post(
      url := 'https://jvokgylbrvlymtnlqolu.supabase.co/functions/v1/send-notifications',
      headers := '{"Authorization": "Bearer 7c3e9a1f5b8d2c6e0a4f8b2d6c0e4a8f2b6d0c4e8a2f6b0d4c8e2a6f0b4d8c2e", "Content-Type": "application/json"}'::jsonb,
      body := '{}'::jsonb,
      timeout_milliseconds := 15000
    );
  END IF;
END;
$$;

-- Удаляем старый cron job (send-minute-notifications, вызывавший edge function каждую минуту)
-- SELECT cron.unschedule('send-minute-notifications');

-- Новый cron job: вызывает SQL-функцию проверки
-- SELECT cron.schedule(
--   'check-and-send-notifications',
--   '* * * * *',
--   'SELECT public.check_notifications_needed();'
-- );
