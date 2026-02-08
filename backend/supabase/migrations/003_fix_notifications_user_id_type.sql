-- Fix notifications.user_id type: UUID -> TEXT
-- The users table and subscriptions table use TEXT IDs (Telegram user IDs like "820187903"),
-- but notifications.user_id was UUID, causing all INSERTs to silently fail.

-- Drop RLS policy that depends on user_id
DROP POLICY IF EXISTS "Users can view own notifications" ON notifications;

-- Change user_id from UUID to TEXT to match users.id type
ALTER TABLE notifications ALTER COLUMN user_id TYPE TEXT USING user_id::TEXT;

-- Recreate the RLS policy
CREATE POLICY "Users can view own notifications" ON notifications
    FOR SELECT USING (user_id = auth.uid()::TEXT);
