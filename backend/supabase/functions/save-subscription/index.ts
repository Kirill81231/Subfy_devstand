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
    const subscriptionData = {
      user_id: userId,
      name: subscription.name,
      amount: parseFloat(subscription.amount),
      currency: subscription.currency || "RUB",
      billing_cycle: subscription.billing_cycle || subscription.billingCycle || "monthly",
      first_billing_date: subscription.first_billing_date || subscription.firstBillingDate,
      category: subscription.category || "Другое",
      color: subscription.color || "#6366f1",
      icon: subscription.icon || "📦",
      domain: subscription.domain || null,
      is_active: true,
    };

    let result;

    // Если есть id и это UUID — обновляем, иначе создаём новую
    const isUpdate = subscription.id && 
      /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(subscription.id);

    if (isUpdate) {
      // Обновление существующей подписки
      const { data, error } = await supabase
        .from("subscriptions")
        .update(subscriptionData)
        .eq("id", subscription.id)
        .eq("user_id", userId) // Проверка владельца
        .select()
        .single();

      if (error) {
        console.error("Update error:", error);
        return new Response(
          JSON.stringify({ error: "Failed to update subscription" }),
          { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      result = data;
    } else {
      // Создание новой подписки
      const { data, error } = await supabase
        .from("subscriptions")
        .insert(subscriptionData)
        .select()
        .single();

      if (error) {
        console.error("Insert error:", error);
        return new Response(
          JSON.stringify({ error: "Failed to create subscription" }),
          { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      result = data;
    }

    return new Response(
      JSON.stringify({ subscription: result }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (err) {
    console.error("Error:", err);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
