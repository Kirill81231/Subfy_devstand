import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

// HMAC-SHA256 используя Web Crypto API (Deno)
async function hmacSha256(key: ArrayBuffer, data: string): Promise<ArrayBuffer> {
  const cryptoKey = await crypto.subtle.importKey(
    "raw",
    key,
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const encoded = new TextEncoder().encode(data);
  return await crypto.subtle.sign("HMAC", cryptoKey, encoded);
}

// SHA256 hash
async function sha256(data: string): Promise<ArrayBuffer> {
  const encoded = new TextEncoder().encode(data);
  return await crypto.subtle.digest("SHA-256", encoded);
}

// ArrayBuffer to hex string
function bufferToHex(buffer: ArrayBuffer): string {
  return Array.from(new Uint8Array(buffer))
    .map(b => b.toString(16).padStart(2, "0"))
    .join("");
}

// Проверка подписи Telegram
async function verifyTelegramAuth(initData: string, botToken: string): Promise<boolean> {
  try {
    const params = new URLSearchParams(initData);
    const hash = params.get("hash");
    
    if (!hash) return false;
    
    params.delete("hash");
    
    // Сортируем параметры
    const sortedParams = Array.from(params.entries())
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([key, value]) => `${key}=${value}`)
      .join("\n");
    
    // Создаём secret key: HMAC-SHA256(botToken, "WebAppData")
    const secretKeyData = new TextEncoder().encode("WebAppData");
    const botTokenData = new TextEncoder().encode(botToken);
    
    const secretKeyCryptoKey = await crypto.subtle.importKey(
      "raw",
      secretKeyData,
      { name: "HMAC", hash: "SHA-256" },
      false,
      ["sign"]
    );
    const secretKey = await crypto.subtle.sign("HMAC", secretKeyCryptoKey, botTokenData);
    
    // Вычисляем HMAC-SHA256 от данных
    const dataHash = await hmacSha256(secretKey, sortedParams);
    const calculatedHash = bufferToHex(dataHash);
    
    return calculatedHash === hash;
  } catch (error) {
    console.error("Verification error:", error);
    return false;
  }
}

// Парсинг данных пользователя
function parseUserData(initData: string): any {
  const params = new URLSearchParams(initData);
  const userStr = params.get("user");
  
  if (!userStr) return null;
  
  try {
    return JSON.parse(userStr);
  } catch {
    return null;
  }
}

serve(async (req) => {
  // CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { initData } = await req.json();
    
    if (!initData) {
      return new Response(
        JSON.stringify({ error: "initData is required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const botToken = Deno.env.get("TELEGRAM_BOT_TOKEN");
    
    if (!botToken) {
      console.error("TELEGRAM_BOT_TOKEN not set");
      return new Response(
        JSON.stringify({ error: "Server configuration error" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Проверяем подпись (в dev можно пропустить)
    const isValid = await verifyTelegramAuth(initData, botToken);
    
    // Парсим данные пользователя
    const userData = parseUserData(initData);
    
    if (!userData) {
      return new Response(
        JSON.stringify({ error: "Invalid user data" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Подключаемся к Supabase с service role
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    // Upsert пользователя в базу
    const userId = userData.id.toString();
    
    const { data: user, error: userError } = await supabase
      .from("users")
      .upsert({
        id: userId,
        telegram_id: userData.id,
        first_name: userData.first_name || null,
        last_name: userData.last_name || null,
        username: userData.username || null,
        language_code: userData.language_code || "ru",
        updated_at: new Date().toISOString(),
      }, {
        onConflict: "id",
      })
      .select()
      .single();

    if (userError) {
      console.error("User upsert error:", userError);
      // Продолжаем даже если ошибка - вернём данные из Telegram
    }

    // Возвращаем данные пользователя
    return new Response(
      JSON.stringify({
        user: {
          id: userId,
          telegram_id: userData.id,
          first_name: userData.first_name,
          last_name: userData.last_name,
          username: userData.username,
          language_code: userData.language_code,
        },
        verified: isValid,
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("Auth error:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error", details: error.message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});