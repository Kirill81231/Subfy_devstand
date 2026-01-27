import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

async function hmacSha256(key: ArrayBuffer, data: string): Promise<ArrayBuffer> {
  const cryptoKey = await crypto.subtle.importKey(
    "raw", key, { name: "HMAC", hash: "SHA-256" }, false, ["sign"]
  );
  return await crypto.subtle.sign("HMAC", cryptoKey, new TextEncoder().encode(data));
}

function bufferToHex(buffer: ArrayBuffer): string {
  return Array.from(new Uint8Array(buffer)).map(b => b.toString(16).padStart(2, "0")).join("");
}

async function verifyTelegramAuth(initData: string, botToken: string): Promise<boolean> {
  try {
    const params = new URLSearchParams(initData);
    const hash = params.get("hash");
    if (!hash) return false;
    
    params.delete("hash");
    const sortedParams = Array.from(params.entries())
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([key, value]) => `${key}=${value}`)
      .join("\n");
    
    const secretKeyData = new TextEncoder().encode("WebAppData");
    const botTokenData = new TextEncoder().encode(botToken);
    const secretKeyCryptoKey = await crypto.subtle.importKey(
      "raw", secretKeyData, { name: "HMAC", hash: "SHA-256" }, false, ["sign"]
    );
    const secretKey = await crypto.subtle.sign("HMAC", secretKeyCryptoKey, botTokenData);
    const dataHash = await hmacSha256(secretKey, sortedParams);
    
    return bufferToHex(dataHash) === hash;
  } catch (error) {
    console.error("Verification error:", error);
    return false;
  }
}

function parseUserData(initData: string): any {
  const params = new URLSearchParams(initData);
  const userStr = params.get("user");
  if (!userStr) return null;
  try { return JSON.parse(userStr); } catch { return null; }
}

serve(async (req) => {
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

    const isValid = await verifyTelegramAuth(initData, botToken);
    const userData = parseUserData(initData);
    
    if (!userData) {
      return new Response(
        JSON.stringify({ error: "Invalid user data" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    const userId = userData.id.toString();
    
    const { error: userError } = await supabase
      .from("users")
      .upsert({
        id: userId,
        telegram_id: userData.id,
        first_name: userData.first_name || null,
        last_name: userData.last_name || null,
        username: userData.username || null,
        language_code: userData.language_code || "ru",
        updated_at: new Date().toISOString(),
      }, { onConflict: "id" });

    if (userError) console.error("User upsert error:", userError);

    return new Response(
      JSON.stringify({
        user: {
          id: userId,
          telegram_id: userData.id,
          first_name: userData.first_name,
          last_name: userData.last_name,
          username: userData.username,
        },
        verified: isValid,
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