import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

serve(async (req) => {
  // CORS
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const reqBody = await req.json();
    const { initData, timezone } = reqBody;
    console.log("Auth request received");

    if (!initData) {
      return new Response(
        JSON.stringify({ error: "initData is required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Парсим данные пользователя из initData
    const params = new URLSearchParams(initData);
    const userStr = params.get("user");

    if (!userStr) {
      return new Response(
        JSON.stringify({ error: "User data not found" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    let userData;
    try {
      userData = JSON.parse(userStr);
    } catch {
      return new Response(
        JSON.stringify({ error: "Invalid user data format" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const userId = String(userData.id);
    const firstName = userData.first_name || null;

    console.log("User:", userId, firstName, "TZ:", timezone);

    // Подключаемся к Supabase
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    // Создаём или обновляем пользователя (включая timezone)
    const upsertData: Record<string, unknown> = { id: userId, first_name: firstName };
    if (timezone && typeof timezone === "string") {
      upsertData.timezone = timezone;
    }

    const { data: user, error } = await supabase
      .from("users")
      .upsert(
        upsertData,
        { onConflict: "id" }
      )
      .select()
      .single();

    if (error) {
      console.error("DB Error:", error);
      // Даже если ошибка в БД, возвращаем данные пользователя
      return new Response(
        JSON.stringify({
          user: { id: userId, first_name: firstName },
          dbError: error.message
        }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log("User saved:", user);

    // Загружаем подписки пользователя сразу — чтобы фронтенд не делал отдельный запрос
    const { data: subscriptions } = await supabase
      .from("subscriptions")
      .select("*")
      .eq("user_id", userId)
      .eq("is_active", true)
      .order("created_at", { ascending: false });

    return new Response(
      JSON.stringify({ user, subscriptions: subscriptions || [] }),
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
