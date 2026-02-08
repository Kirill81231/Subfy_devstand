-- Add timezone column for per-user notification timing
ALTER TABLE users ADD COLUMN IF NOT EXISTS timezone TEXT NOT NULL DEFAULT 'Europe/Moscow';

-- Fix calculate_next_billing_date: change <= to <
-- so that today's billing date is correctly returned (not skipped to next cycle)
CREATE OR REPLACE FUNCTION calculate_next_billing_date(first_date DATE, cycle TEXT)
RETURNS DATE AS $$
DECLARE
    next_date DATE := first_date;
BEGIN
    WHILE next_date < CURRENT_DATE LOOP
        CASE cycle
            WHEN 'weekly' THEN next_date := next_date + INTERVAL '7 days';
            WHEN 'biweekly' THEN next_date := next_date + INTERVAL '14 days';
            WHEN 'monthly' THEN next_date := next_date + INTERVAL '1 month';
            WHEN 'quarterly' THEN next_date := next_date + INTERVAL '3 months';
            WHEN 'semiannual' THEN next_date := next_date + INTERVAL '6 months';
            WHEN 'yearly' THEN next_date := next_date + INTERVAL '1 year';
            ELSE next_date := next_date + INTERVAL '1 month';
        END CASE;
    END LOOP;
    RETURN next_date;
END;
$$ LANGUAGE plpgsql;
