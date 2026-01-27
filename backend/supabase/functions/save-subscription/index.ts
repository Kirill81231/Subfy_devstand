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
    const { userId, subscription } = await req.json();

    if (!userId || !subscription) {
      return new Response(
        JSON.stringify({ error: "userId and subscription are required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    // Подготавливаем данные
    const data = {
      user_id: userId,
      name: subscription.name,
      amount: parseFloat(subscription.amount),
      currency: subscription.currency || "RUB",
      billing_cycle: subscription.billing_cycle || subscription.billingCycle || "monthly",
      next_billing_date: subscription.next_billing_date || subscription.nextBillingDate || subscription.first_billing_date || subscription.firstBillingDate,
      category: subscription.category || "Другое",
      color: subscription.color || "#6366f1",
      icon: subscription.icon || "📦",
      logo_url: subscription.logo_url || subscription.logoUrl || null,
      is_active: true,
    };

    let result;

    // Проверяем это обновление или создание
    const isUUID = subscription.id && /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(subscription.id);

    if (isUUID) {
      // Обновление
      const { data: updated, error } = await supabase
        .from("subscriptions")
        .update(data)
        .eq("id", subscription.id)
        .eq("user_id", userId)
        .select()
        .single();

      if (error) throw error;
      result = updated;
    } else {
      // Создание
      const { data: created, error } = await supabase
        .from("subscriptions")
        .insert(data)
        .select()
        .single();

      if (error) throw error;
      result = created;
    }

    return new Response(
      JSON.stringify({ subscription: result }),
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
