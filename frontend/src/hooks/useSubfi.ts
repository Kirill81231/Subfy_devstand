// SubFi - Main hook for Telegram Mini App integration
import { useState, useEffect, useCallback } from 'react';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Типы
export interface User {
  id: string;
  telegram_id: number;
  first_name: string;
  last_name?: string;
  username?: string;
}

export interface Subscription {
  id: string;
  user_id: string;
  name: string;
  amount: number;
  currency: 'RUB' | 'USD' | 'EUR';
  billing_cycle: 'weekly' | 'monthly' | 'quarterly' | 'yearly';
  first_billing_date: string;
  category_id?: string;
  color: string;
  icon?: string;
  domain?: string;
  is_active: boolean;
  created_at: string;
}

export interface SubscriptionTemplate {
  id: string;
  name: string;
  domain?: string;
  default_price: number;
  default_currency: string;
  color: string;
  category_id: string;
}

interface UseSubfiReturn {
  user: User | null;
  subscriptions: Subscription[];
  templates: SubscriptionTemplate[];
  isLoading: boolean;
  error: string | null;
  addSubscription: (data: Partial<Subscription>) => Promise<Subscription | null>;
  updateSubscription: (id: string, data: Partial<Subscription>) => Promise<boolean>;
  deleteSubscription: (id: string) => Promise<boolean>;
  refreshSubscriptions: () => Promise<void>;
}

// Конфигурация
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;
const AUTH_ENDPOINT = import.meta.env.VITE_AUTH_ENDPOINT;

// Получение initData из Telegram
function getTelegramInitData(): string | null {
  if (typeof window !== 'undefined' && window.Telegram?.WebApp) {
    return window.Telegram.WebApp.initData;
  }
  return null;
}

// Хук для работы с SubFi
export function useSubfi(): UseSubfiReturn {
  const [user, setUser] = useState<User | null>(null);
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [templates, setTemplates] = useState<SubscriptionTemplate[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [supabase, setSupabase] = useState<SupabaseClient | null>(null);

  // Инициализация и авторизация
  useEffect(() => {
    async function initialize() {
      try {
        setIsLoading(true);
        setError(null);

        // Получаем initData от Telegram
        const initData = getTelegramInitData();
        
        if (!initData) {
          // Для разработки - используем mock данные
          if (import.meta.env.DEV) {
            console.log('DEV mode: using mock data');
            setUser({
              id: 'mock-user-id',
              telegram_id: 123456789,
              first_name: 'Test',
              username: 'testuser',
            });
            setIsLoading(false);
            return;
          }
          throw new Error('Telegram WebApp not available');
        }

        // Авторизация через Edge Function
        const authResponse = await fetch(AUTH_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ initData }),
        });

        if (!authResponse.ok) {
          throw new Error('Authentication failed');
        }

        const { token, user: userData } = await authResponse.json();

        // Создаём клиент Supabase с JWT токеном
        const client = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
          global: {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        });

        setSupabase(client);
        setUser(userData);

        // Загружаем данные
        await Promise.all([
          loadSubscriptions(client, userData.id),
          loadTemplates(client),
        ]);

      } catch (err) {
        console.error('Initialization error:', err);
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setIsLoading(false);
      }
    }

    initialize();
  }, []);

  // Загрузка подписок пользователя
  const loadSubscriptions = async (client: SupabaseClient, userId: string) => {
    const { data, error } = await client
      .from('subscriptions')
      .select('*')
      .eq('user_id', userId)
      .eq('is_active', true)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error loading subscriptions:', error);
      return;
    }

    setSubscriptions(data || []);
  };

  // Загрузка шаблонов
  const loadTemplates = async (client: SupabaseClient) => {
    const { data, error } = await client
      .from('subscription_templates')
      .select('*')
      .eq('is_active', true)
      .order('sort_order');

    if (error) {
      console.error('Error loading templates:', error);
      return;
    }

    setTemplates(data || []);
  };

  // Обновление списка подписок
  const refreshSubscriptions = useCallback(async () => {
    if (!supabase || !user) return;
    await loadSubscriptions(supabase, user.id);
  }, [supabase, user]);

  // Добавление подписки
  const addSubscription = useCallback(async (data: Partial<Subscription>): Promise<Subscription | null> => {
    if (!supabase || !user) return null;

    const { data: newSub, error } = await supabase
      .from('subscriptions')
      .insert({
        ...data,
        user_id: user.id,
        is_active: true,
      })
      .select()
      .single();

    if (error) {
      console.error('Error adding subscription:', error);
      setError(error.message);
      return null;
    }

    setSubscriptions(prev => [newSub, ...prev]);
    
    // Хаптик фидбек
    window.Telegram?.WebApp?.HapticFeedback?.notificationOccurred('success');
    
    return newSub;
  }, [supabase, user]);

  // Обновление подписки
  const updateSubscription = useCallback(async (id: string, data: Partial<Subscription>): Promise<boolean> => {
    if (!supabase) return false;

    const { error } = await supabase
      .from('subscriptions')
      .update(data)
      .eq('id', id);

    if (error) {
      console.error('Error updating subscription:', error);
      setError(error.message);
      return false;
    }

    setSubscriptions(prev =>
      prev.map(sub => (sub.id === id ? { ...sub, ...data } : sub))
    );

    window.Telegram?.WebApp?.HapticFeedback?.impactOccurred('light');
    
    return true;
  }, [supabase]);

  // Удаление подписки (soft delete)
  const deleteSubscription = useCallback(async (id: string): Promise<boolean> => {
    if (!supabase) return false;

    const { error } = await supabase
      .from('subscriptions')
      .update({ is_active: false })
      .eq('id', id);

    if (error) {
      console.error('Error deleting subscription:', error);
      setError(error.message);
      return false;
    }

    setSubscriptions(prev => prev.filter(sub => sub.id !== id));
    
    window.Telegram?.WebApp?.HapticFeedback?.notificationOccurred('warning');
    
    return true;
  }, [supabase]);

  return {
    user,
    subscriptions,
    templates,
    isLoading,
    error,
    addSubscription,
    updateSubscription,
    deleteSubscription,
    refreshSubscriptions,
  };
}

// Типы для Telegram WebApp
declare global {
  interface Window {
    Telegram?: {
      WebApp?: {
        initData: string;
        initDataUnsafe: {
          user?: {
            id: number;
            first_name: string;
            last_name?: string;
            username?: string;
            language_code?: string;
          };
        };
        ready: () => void;
        expand: () => void;
        close: () => void;
        MainButton: {
          text: string;
          color: string;
          textColor: string;
          isVisible: boolean;
          isActive: boolean;
          show: () => void;
          hide: () => void;
          onClick: (callback: () => void) => void;
          offClick: (callback: () => void) => void;
        };
        BackButton: {
          isVisible: boolean;
          show: () => void;
          hide: () => void;
          onClick: (callback: () => void) => void;
          offClick: (callback: () => void) => void;
        };
        HapticFeedback?: {
          impactOccurred: (style: 'light' | 'medium' | 'heavy' | 'rigid' | 'soft') => void;
          notificationOccurred: (type: 'error' | 'success' | 'warning') => void;
          selectionChanged: () => void;
        };
        themeParams: {
          bg_color?: string;
          text_color?: string;
          hint_color?: string;
          link_color?: string;
          button_color?: string;
          button_text_color?: string;
          secondary_bg_color?: string;
        };
        colorScheme: 'light' | 'dark';
      };
    };
  }
}

export default useSubfi;
