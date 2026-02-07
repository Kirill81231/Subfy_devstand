import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { userId, settings } = await req.json();

    if (!userId || !settings) {
      return new Response(
        JSON.stringify({ error: "userId and settings are required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    const updateData: Record<string, unknown> = {};

    if (typeof settings.notificationsEnabled === "boolean") {
      updateData.notifications_enabled = settings.notificationsEnabled;
    }

    if (settings.firstReminder) {
      if (typeof settings.firstReminder.days === "number") {
        updateData.first_reminder_days = settings.firstReminder.days;
      }
      if (typeof settings.firstReminder.time === "string") {
        updateData.first_reminder_time = settings.firstReminder.time;
      }
    }

    if (settings.secondReminder) {
      if (typeof settings.secondReminder.days === "number") {
        updateData.second_reminder_days = settings.secondReminder.days;
      }
      if (typeof settings.secondReminder.time === "string") {
        updateData.second_reminder_time = settings.secondReminder.time;
      }
    }

    if (Object.keys(updateData).length === 0) {
      return new Response(
        JSON.stringify({ success: true, message: "No settings to update" }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const { error } = await supabase
      .from("users")
      .update(updateData)
      .eq("id", userId);

    if (error) throw error;

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
