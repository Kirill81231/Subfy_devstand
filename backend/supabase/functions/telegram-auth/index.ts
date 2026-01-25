// SubFi - Telegram Auth Edge Function
// Валидация initData и выдача JWT токена

import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { createHmac } from "https://deno.land/std@0.168.0/crypto/mod.ts";

const TELEGRAM_BOT_TOKEN = Deno.env.get("TELEGRAM_BOT_TOKEN")!;
const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const JWT_SECRET = Deno.env.get("JWT_SECRET")!;

// CORS headers
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

// Парсинг initData из Telegram
function parseInitData(initData: string): Record<string, string> {
  const params = new URLSearchParams(initData);
  const result: Record<string, string> = {};
  for (const [key, value] of params) {
    result[key] = value;
  }
  return result;
}

// Валидация initData через HMAC-SHA256
async function validateInitData(initData: string, botToken: string): Promise<boolean> {
  const params = parseInitData(initData);
  const hash = params.hash;
  
  if (!hash) return false;

  // Создаём data-check-string
  const dataCheckArr: string[] = [];
  for (const [key, value] of Object.entries(params)) {
    if (key !== "hash") {
      dataCheckArr.push(`${key}=${value}`);
    }
  }
  dataCheckArr.sort();
  const dataCheckString = dataCheckArr.join("\n");

  // Вычисляем HMAC
  const encoder = new TextEncoder();
  const secretKey = createHmac("sha256", encoder.encode("WebAppData"))
    .update(encoder.encode(botToken))
    .digest();
  
  const calculatedHash = createHmac("sha256", secretKey)
    .update(encoder.encode(dataCheckString))
    .digest("hex");

  return calculatedHash === hash;
}

// Создание JWT токена
async function createJWT(userId: string): Promise<string> {
  const header = btoa(JSON.stringify({ alg: "HS256", typ: "JWT" }));
  
  const payload = btoa(JSON.stringify({
    sub: userId,
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60), // 24 часа
    role: "authenticated",
  }));

  const encoder = new TextEncoder();
  const data = encoder.encode(`${header}.${payload}`);
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(JWT_SECRET),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  
  const signature = await crypto.subtle.sign("HMAC", key, data);
  const signatureBase64 = btoa(String.fromCharCode(...new Uint8Array(signature)))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");

  return `${header}.${payload}.${signatureBase64}`;
}

serve(async (req: Request) => {
  // Handle CORS preflight
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

    // Валидация initData
    const isValid = await validateInitData(initData, TELEGRAM_BOT_TOKEN);
    
    if (!isValid) {
      return new Response(
        JSON.stringify({ error: "Invalid initData" }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Парсим данные пользователя
    const params = parseInitData(initData);
    const userData = JSON.parse(params.user || "{}");

    if (!userData.id) {
      return new Response(
        JSON.stringify({ error: "User data not found" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Создаём/обновляем пользователя в базе
    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

    const { data: existingUser, error: fetchError } = await supabase
      .from("users")
      .select("*")
      .eq("telegram_id", userData.id)
      .single();

    let user;

    if (existingUser) {
      // Обновляем данные пользователя
      const { data, error } = await supabase
        .from("users")
        .update({
          telegram_username: userData.username,
          first_name: userData.first_name,
          last_name: userData.last_name,
          language_code: userData.language_code || "ru",
        })
        .eq("telegram_id", userData.id)
        .select()
        .single();

      if (error) throw error;
      user = data;
    } else {
      // Создаём нового пользователя
      const { data, error } = await supabase
        .from("users")
        .insert({
          telegram_id: userData.id,
          telegram_username: userData.username,
          first_name: userData.first_name,
          last_name: userData.last_name,
          language_code: userData.language_code || "ru",
        })
        .select()
        .single();

      if (error) throw error;
      user = data;
    }

    // Создаём JWT токен
    const token = await createJWT(user.id);

    return new Response(
      JSON.stringify({
        success: true,
        token,
        user: {
          id: user.id,
          telegram_id: user.telegram_id,
          first_name: user.first_name,
          last_name: user.last_name,
          username: user.telegram_username,
        },
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("Auth error:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
