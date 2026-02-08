-- Drop unused tables that are not referenced by any edge function
-- categories: 7 rows, never queried (subscriptions use TEXT category, not FK)
-- payment_history: 0 rows, never populated or read
DROP TABLE IF EXISTS payment_history;
DROP TABLE IF EXISTS categories;
