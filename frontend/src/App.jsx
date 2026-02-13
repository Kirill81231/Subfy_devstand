import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { Plus, X, Calendar, ChevronRight, ChevronLeft, Sun, Moon, Search, Check, Trash2, Edit3, Bell, CreditCard, Loader, Settings, TrendingUp, PieChart, ArrowLeft, BellOff, Clock, ExternalLink, Camera, Landmark, ShoppingCart, ShoppingBag, Tv, Music, Gamepad2, Cloud, Phone, Wifi, Zap, Droplet, Home, Car, Plane, Heart, Pill, GraduationCap, Briefcase, Lock, Key, Keyboard, Globe, Star, CircleDot, Monitor, Headphones, BookOpen, BarChart3 } from 'lucide-react';

// ============================================
// КОНФИГУРАЦИЯ
// ============================================
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || '';
const AUTH_ENDPOINT = import.meta.env.VITE_AUTH_ENDPOINT || '';

const API_BASE = SUPABASE_URL ? `${SUPABASE_URL}/functions/v1` : '';
const ENDPOINTS = {
  auth: AUTH_ENDPOINT || `${API_BASE}/telegram-auth`,
  getSubscriptions: `${API_BASE}/get-subscriptions`,
  saveSubscription: `${API_BASE}/save-subscription`,
  deleteSubscription: `${API_BASE}/delete-subscription`,
  getTemplates: `${API_BASE}/get-templates`,
  saveNotificationSettings: `${API_BASE}/save-notification-settings`,
  sendTestNotification: `${API_BASE}/send-test-notification`,
};

// ============================================
// КОНСТАНТЫ
// ============================================
const SUBSCRIPTION_TEMPLATES = [
  { id: 't1', name: 'Яндекс Плюс', price: 299, color: '#FFCC00', category: 'Развлечения', domain: 'plus.yandex.ru' },
  { id: 't2', name: 'СберПрайм', price: 399, color: '#21A038', category: 'Утилиты', domain: 'sberbank.ru' },
  { id: 't3', name: 'МТС Premium', price: 299, color: '#E30611', category: 'Утилиты', domain: 'mts.ru' },
  { id: 't4', name: 'Тинькофф Pro', price: 399, color: '#FFDD2D', category: 'Утилиты', domain: 'tinkoff.ru' },
  { id: 't5', name: 'Кинопоиск', price: 269, color: '#FF6600', category: 'Развлечения', domain: 'kinopoisk.ru' },
  { id: 't6', name: 'Okko', price: 399, color: '#6B4EFF', category: 'Развлечения', domain: 'okko.tv' },
  { id: 't7', name: 'ivi', price: 399, color: '#EA003D', category: 'Развлечения', domain: 'ivi.ru' },
  { id: 't8', name: 'Netflix', price: 699, color: '#E50914', category: 'Развлечения', domain: 'netflix.com' },
  { id: 't9', name: 'YouTube Premium', price: 299, color: '#FF0000', category: 'Развлечения', domain: 'youtube.com' },
  { id: 't10', name: 'Spotify', price: 199, color: '#1DB954', category: 'Развлечения', domain: 'spotify.com' },
  { id: 't11', name: 'Яндекс Музыка', price: 249, color: '#FFCC00', category: 'Развлечения', domain: 'music.yandex.ru' },
  { id: 't12', name: 'Apple Music', price: 169, color: '#FA2D48', category: 'Развлечения', domain: 'apple.com' },
  { id: 't13', name: 'VK Музыка', price: 249, color: '#0077FF', category: 'Развлечения', domain: 'vk.com' },
  { id: 't14', name: 'iCloud+', price: 149, color: '#3693F3', category: 'Утилиты', domain: 'icloud.com' },
  { id: 't15', name: 'Google One', price: 139, color: '#4285F4', category: 'Утилиты', domain: 'one.google.com' },
  { id: 't16', name: 'Telegram Premium', price: 299, color: '#0088CC', category: 'Утилиты', domain: 'telegram.org' },
  { id: 't17', name: 'ChatGPT Plus', price: 1900, color: '#10A37F', category: 'Работа', domain: 'openai.com' },
  { id: 't18', name: 'Notion', price: 800, color: '#000000', category: 'Работа', domain: 'notion.so' },
];

const normalizeTemplate = (t) => ({
  id: t.id,
  name: t.name,
  price: t.default_price,
  color: t.color,
  category: t.category,
  domain: t.domain || null,
  icon: t.icon || '📦',
  logo_url: t.logo_url || null,
  currency: t.default_currency || 'RUB',
});

const CATEGORIES = [
  { id: 'entertainment', name: 'Развлечения', color: '#EF4444' },
  { id: 'productivity', name: 'Продуктивность', color: '#22C55E' },
  { id: 'lifestyle', name: 'Лайфстайл', color: '#FBBF24' },
  { id: 'utilities', name: 'Утилиты', color: '#3B82F6' },
  { id: 'finance', name: 'Финансы', color: '#EAB308' },
  { id: 'health', name: 'Здоровье', color: '#F97316' },
  { id: 'gaming', name: 'Игры', color: '#EC4899' },
  { id: 'other', name: 'Другое', color: '#9CA3AF' },
];

const BILLING_CYCLES = [
  { value: 'monthly', label: 'Ежемесячно', multiplier: 1, short: 'мес', daysApprox: 30 },
  { value: 'yearly', label: 'Ежегодно', multiplier: 0.083, short: 'год', daysApprox: 365 },
  { value: 'trial', label: 'Пробная', multiplier: 0, short: 'проба', daysApprox: 0 },
  { value: 'one-time', label: 'Одноразовая', multiplier: 0, short: 'раз', daysApprox: 0 },
];

const CURRENCIES = [
  { code: 'RUB', symbol: '₽', rate: 1 },
  { code: 'USD', symbol: '$', rate: 96 },
  { code: 'EUR', symbol: '€', rate: 104 },
];

const REMINDER_DAYS = [
  { value: 0, label: 'В день списания' },
  { value: 1, label: 'За 1 день' },
  { value: 2, label: 'За 2 дня' },
  { value: 3, label: 'За 3 дня' },
  { value: 4, label: 'За 4 дня' },
  { value: 5, label: 'За 5 дней' },
  { value: 10, label: 'За 10 дней' },
  { value: 15, label: 'За 15 дней' },
  { value: 25, label: 'За 25 дней' },
  { value: 30, label: 'За 30 дней' },
  { value: -1, label: 'Никогда' },
];

const COLOR_PALETTE = [
  '#EF4444', '#22C55E', '#FBBF24', '#3B82F6', '#EAB308', '#F97316', '#EC4899',
  '#9CA3AF', '#F43F5E', '#2563EB', '#7C3AED', '#06B6D4', '#10B981', '#84CC16',
  '#F59E0B', '#FB923C', '#A78BFA', '#67E8F9',
];

const EMOJI_OPTIONS = [
  '🎬', '🎵', '🎮', '📱', '🖥️', '🎧', '📚', '☁️', '💳', '🛒',
  '🏠', '🚗', '✈️', '🍔', '☕', '🍕', '💡', '⭐', '🎓', '💊',
  '🏀', '🎸', '📷', '🎨', '💼', '🏋️', '🔒', '🔑', '📦', '🎯',
  '🍿', '📺', '🎤', '🎹', '🕹️', '📰', '💎', '🛡️', '🔔', '💰',
  '🧘', '🚀', '🌍', '❤️', '🐾', '🧠', '🎁', '📧', '🏦', '🛠️',
];

const SYMBOL_OPTIONS = [
  { name: 'credit-card', icon: CreditCard },
  { name: 'sport', icon: CircleDot },
  { name: 'bank', icon: Landmark },
  { name: 'shopping-cart', icon: ShoppingCart },
  { name: 'bag', icon: ShoppingBag },
  { name: 'tv', icon: Tv },
  { name: 'music', icon: Music },
  { name: 'gamepad', icon: Gamepad2 },
  { name: 'cloud', icon: Cloud },
  { name: 'phone', icon: Phone },
  { name: 'wifi', icon: Wifi },
  { name: 'lightning', icon: Zap },
  { name: 'droplet', icon: Droplet },
  { name: 'house', icon: Home },
  { name: 'car', icon: Car },
  { name: 'plane', icon: Plane },
  { name: 'heart', icon: Heart },
  { name: 'pill', icon: Pill },
  { name: 'graduation', icon: GraduationCap },
  { name: 'briefcase', icon: Briefcase },
  { name: 'lock', icon: Lock },
  { name: 'key', icon: Key },
  { name: 'keyboard', icon: Keyboard },
  { name: 'globe', icon: Globe },
  { name: 'star', icon: Star },
];

// ============================================
// УТИЛИТЫ
// ============================================
// Парсит дату "YYYY-MM-DD" как ЛОКАЛЬНУЮ (не UTC)
const parseLocalDate = (str) => {
  if (!str) return null;
  if (str instanceof Date) return new Date(str.getFullYear(), str.getMonth(), str.getDate());
  const s = String(str).split('T')[0];
  const [y, m, d] = s.split('-').map(Number);
  if (!y || !m || !d) return null;
  return new Date(y, m - 1, d);
};

const getLocalToday = () => {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate());
};

const getLocalDateString = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
};

const calculateNextBillingDate = (firstDate, cycle) => {
  const date = parseLocalDate(firstDate);
  if (!date) return null;

  const today = getLocalToday();

  if (cycle === 'one-time' || cycle === 'trial') {
    return date > today ? date : null;
  }

  while (date <= today) {
    switch (cycle) {
      case 'weekly': date.setDate(date.getDate() + 7); break;
      case 'biweekly': date.setDate(date.getDate() + 14); break;
      case 'monthly': date.setMonth(date.getMonth() + 1); break;
      case 'quarterly': date.setMonth(date.getMonth() + 3); break;
      case 'semiannual': date.setMonth(date.getMonth() + 6); break;
      case 'yearly': date.setFullYear(date.getFullYear() + 1); break;
      default: date.setMonth(date.getMonth() + 1);
    }
  }
  return date;
};

const getBillingDatesInMonth = (startDate, cycle, year, month) => {
  const date = parseLocalDate(startDate);
  if (!date) return [];

  const monthStart = new Date(year, month, 1);
  const monthEnd = new Date(year, month + 1, 0);
  const dates = [];

  const advance = (d, c) => {
    switch (c) {
      case 'weekly': d.setDate(d.getDate() + 7); break;
      case 'biweekly': d.setDate(d.getDate() + 14); break;
      case 'monthly': d.setMonth(d.getMonth() + 1); break;
      case 'quarterly': d.setMonth(d.getMonth() + 3); break;
      case 'semiannual': d.setMonth(d.getMonth() + 6); break;
      case 'yearly': d.setFullYear(d.getFullYear() + 1); break;
      case 'one-time': case 'trial': return;
      default: d.setMonth(d.getMonth() + 1);
    }
  };

  while (date < monthStart) advance(date, cycle);
  while (date <= monthEnd) {
    if (date >= monthStart) dates.push(new Date(date));
    advance(date, cycle);
  }

  return dates;
};

const formatDate = (date) => {
  const d = parseLocalDate(date);
  if (!d) return 'дата не указана';
  return d.toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' });
};

const formatDateFull = (date) => {
  const d = parseLocalDate(date);
  if (!d) return 'дата не указана';
  return d.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' });
};

const getDaysUntil = (date) => {
  if (!date) return null;
  const target = parseLocalDate(date) || new Date(date);
  const today = getLocalToday();
  return Math.round((target - today) / (1000 * 60 * 60 * 24));
};

const formatDaysUntil = (days) => {
  if (days === null) return 'дата не указана';
  if (days === 0) return 'сегодня';
  if (days === 1) return 'завтра';
  if (days < 0) return 'просрочено';
  return `через ${days} дн.`;
};

// Telegram WebApp helpers
const getTelegram = () => window.Telegram?.WebApp;

// Haptic feedback ТОЛЬКО для создания подписки
const hapticFeedbackForCreate = () => {
  getTelegram()?.HapticFeedback?.impactOccurred('medium');
};

const hapticNotificationSuccess = () => {
  getTelegram()?.HapticFeedback?.notificationOccurred('success');
};

// ============================================
// API КЛИЕНТ
// ============================================
const ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

const apiHeaders = {
  'Content-Type': 'application/json',
  'apikey': ANON_KEY,
};

const api = {
  async auth(initData) {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || 'Europe/Moscow';
    const response = await fetch(ENDPOINTS.auth, {
      method: 'POST',
      headers: apiHeaders,
      body: JSON.stringify({ initData, timezone }),
    });
    if (!response.ok) throw new Error('Auth failed');
    return response.json();
  },

  async getSubscriptions(userId) {
    const response = await fetch(ENDPOINTS.getSubscriptions, {
      method: 'POST',
      headers: apiHeaders,
      body: JSON.stringify({ userId }),
    });
    if (!response.ok) throw new Error('Failed to fetch');
    return response.json();
  },

  async saveSubscription(userId, subscription) {
    const response = await fetch(ENDPOINTS.saveSubscription, {
      method: 'POST',
      headers: apiHeaders,
      body: JSON.stringify({ userId, subscription }),
    });
    if (!response.ok) throw new Error('Failed to save');
    return response.json();
  },

  async deleteSubscription(userId, subscriptionId) {
    const response = await fetch(ENDPOINTS.deleteSubscription, {
      method: 'POST',
      headers: apiHeaders,
      body: JSON.stringify({ userId, subscriptionId }),
    });
    if (!response.ok) throw new Error('Failed to delete');
    return response.json();
  },

  async getTemplates() {
    const response = await fetch(ENDPOINTS.getTemplates, {
      method: 'GET',
      headers: apiHeaders,
    });
    if (!response.ok) throw new Error('Failed to fetch templates');
    return response.json();
  },

  async saveNotificationSettings(userId, settings) {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || 'Europe/Moscow';
    const response = await fetch(ENDPOINTS.saveNotificationSettings, {
      method: 'POST',
      headers: apiHeaders,
      body: JSON.stringify({ userId, settings, timezone }),
    });
    if (!response.ok) throw new Error('Failed to save notification settings');
    return response.json();
  },

  async sendTestNotification(userId) {
    const response = await fetch(ENDPOINTS.sendTestNotification, {
      method: 'POST',
      headers: apiHeaders,
      body: JSON.stringify({ userId }),
    });
    if (!response.ok) throw new Error('Failed to send test notification');
    return response.json();
  },
};

// ============================================
// КОМПОНЕНТ: TOAST УВЕДОМЛЕНИЕ
// ============================================
const Toast = ({ message, visible, type = 'success', onHide }) => {
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    if (visible) {
      setIsLeaving(false);
      const timer = setTimeout(() => {
        setIsLeaving(true);
        setTimeout(onHide, 300);
      }, 2700);
      return () => clearTimeout(timer);
    }
  }, [visible, onHide]);

  if (!visible) return null;

  return (
    <div className={`toast ${type} ${isLeaving ? 'leaving' : ''}`}>
      {type === 'error' ? <X size={18} /> : <Check size={18} />}
      <span>{message}</span>
    </div>
  );
};

// ============================================
// КОМПОНЕНТ: ОНБОРДИНГ
// ============================================
const OnboardingScreen = ({ onComplete }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const slides = [
    {
      emoji: '👋',
      title: 'Привет!',
      subtitle: 'Это Subfy',
      description: 'Сервис отслеживания подписок прямо в Telegram',
    },
    {
      emoji: '📊',
      title: 'Все подписки',
      subtitle: 'в одном месте',
      description: 'Добавляй подписки из готовых шаблонов или создавай свои',
    },
    {
      emoji: '🔔',
      title: 'Уведомления',
      subtitle: 'о списаниях',
      description: 'Получай напоминания за 3 дня и в день списания',
    },
  ];

  const handleTouchStart = (e) => setTouchStart(e.touches[0].clientX);
  const handleTouchMove = (e) => setTouchEnd(e.touches[0].clientX);

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (Math.abs(distance) > minSwipeDistance) {
      if (distance > 0 && currentSlide < slides.length - 1) {
        setCurrentSlide(prev => prev + 1);
      } else if (distance < 0 && currentSlide > 0) {
        setCurrentSlide(prev => prev - 1);
      }
    }
    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <div className="onboarding">
      <div 
        className="onboarding-slides"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="slides-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slides.map((slide, index) => (
            <div key={index} className="slide">
              <div className="slide-emoji">{slide.emoji}</div>
              <h1 className="slide-title">{slide.title}</h1>
              <h2 className="slide-subtitle">{slide.subtitle}</h2>
              <p className="slide-description">{slide.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="onboarding-footer">
        <div className="dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>

        {currentSlide === slides.length - 1 ? (
          <button className="start-btn" onClick={onComplete}>Начать</button>
        ) : (
          <button className="next-btn" onClick={() => setCurrentSlide(prev => prev + 1)}>
            Далее <ChevronRight size={20} />
          </button>
        )}
      </div>
    </div>
  );
};

// ============================================
// КОМПОНЕНТ: ЗАГРУЗКА
// ============================================
const LoadingScreen = ({ message = 'Загрузка...' }) => (
  <div className="loading-screen">
    <div className="loading-content">
      <div className="loading-logo">Subfy</div>
      <Loader className="loading-spinner" size={32} />
      <p className="loading-message">{message}</p>
    </div>
  </div>
);

// ============================================
// КОМПОНЕНТ: ЛОГОТИП
// ============================================
const Logo = ({ domain, emoji, color, size = 32, logoUrl }) => {
  const [hasError, setHasError] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const imageUrl = logoUrl || (domain ? `https://logo.clearbit.com/${domain}` : null);

  if (!imageUrl || hasError) {
    // Check if emoji is a symbol reference (e.g. "symbol:credit-card")
    const isSymbol = emoji && typeof emoji === 'string' && emoji.startsWith('symbol:');
    if (isSymbol) {
      const symbolName = emoji.replace('symbol:', '');
      const sym = SYMBOL_OPTIONS.find(s => s.name === symbolName);
      if (sym) {
        const SymIcon = sym.icon;
        return (
          <div className="logo-emoji" style={{
            width: size, height: size,
            background: color,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            borderRadius: size > 60 ? 20 : 8, flexShrink: 0,
          }}>
            <SymIcon size={size * 0.5} color="white" strokeWidth={2} />
          </div>
        );
      }
    }
    return (
      <div className="logo-emoji" style={{
        width: size, height: size,
        background: color + '20', color: color,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        borderRadius: size > 60 ? 20 : 8, fontSize: size * 0.5, flexShrink: 0,
      }}>
        {emoji || '📦'}
      </div>
    );
  }
  
  return (
    <div className="logo-container" style={{
      width: size, height: size,
      background: loaded ? 'white' : color + '20',
      borderRadius: size > 60 ? 20 : 8, overflow: 'hidden',
      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
    }}>
      <img
        src={imageUrl}
        alt=""
        style={{ 
          width: size, height: size, objectFit: 'cover',
          opacity: loaded ? 1 : 0, transition: 'opacity 0.2s'
        }}
        onLoad={() => setLoaded(true)}
        onError={() => setHasError(true)}
      />
      {!loaded && !hasError && <div style={{ fontSize: size * 0.5 }}>{emoji || '📦'}</div>}
    </div>
  );
};

// ============================================
// КОМПОНЕНТ: МОДАЛЬНОЕ ОКНО ПОДТВЕРЖДЕНИЯ
// ============================================
const ConfirmModal = ({ visible, title, message, onConfirm, onCancel }) => {
  if (!visible) return null;

  return (
    <div className="modal-overlay confirm-overlay" onClick={onCancel}>
      <div className="confirm-modal" onClick={e => e.stopPropagation()}>
        <h3>{title}</h3>
        <p>{message}</p>
        <div className="confirm-actions">
          <button className="cancel-btn" onClick={onCancel}>Отмена</button>
          <button className="delete-confirm-btn" onClick={onConfirm}>Удалить</button>
        </div>
      </div>
    </div>
  );
};

// ============================================
// КОМПОНЕНТ: КАРТОЧКА ПОДПИСКИ СО СВАЙПОМ
// ============================================
const SubscriptionCard = ({ subscription, onEdit, onDelete, currencies }) => {
  const [swipeX, setSwipeX] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  
  const currency = currencies.find(c => c.code === subscription.currency) || currencies[0];
  const billingCycle = subscription.billing_cycle || subscription.billingCycle || 'monthly';
  const firstDate = subscription.first_billing_date || subscription.next_billing_date || subscription.firstBillingDate;
  const nextDate = calculateNextBillingDate(firstDate, billingCycle);
  const daysUntil = getDaysUntil(nextDate);
  const cycle = BILLING_CYCLES.find(c => c.value === billingCycle) || BILLING_CYCLES[0];
  
  // Конвертируем в месячную стоимость для отображения
  const monthlyAmount = subscription.amount * (cycle?.multiplier || 1);
  
  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
    setIsSwiping(true);
  };

  const handleTouchMove = (e) => {
    if (!isSwiping) return;
    const diff = startX - e.touches[0].clientX;
    setSwipeX(Math.max(0, Math.min(80, diff)));
  };

  const handleTouchEnd = () => {
    setIsSwiping(false);
    if (swipeX > 40) {
      setSwipeX(80);
    } else {
      setSwipeX(0);
    }
  };

  const handleDeleteClick = () => {
    setShowDeleteConfirm(true);
  };

  const confirmDelete = () => {
    setShowDeleteConfirm(false);
    setSwipeX(0);
    onDelete(subscription.id);
  };

  return (
    <>
      <div className="sub-card-wrapper">
        <div 
          className="sub-card-swipe-bg"
          style={{ opacity: swipeX / 80 }}
        >
          <button className="swipe-delete-btn" onClick={handleDeleteClick}>
            <Trash2 size={20} />
            <span>Удалить</span>
          </button>
        </div>
        <div 
          className="sub-card" 
          style={{ 
            '--accent': subscription.color,
            transform: `translateX(-${swipeX}px)`,
            transition: isSwiping ? 'none' : 'transform 0.2s ease'
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="sub-card-accent" />
          <div className="sub-card-content">
            <div className="sub-card-header">
              <Logo
                domain={subscription.domain}
                emoji={subscription.icon}
                color={subscription.color}
                size={44}
                logoUrl={subscription.logo_url}
              />
              <div className="sub-info">
                <h3 className="sub-name">{subscription.name}</h3>
                <div className="sub-price-inline">
                  <span className="price-amount">{Math.round(monthlyAmount).toLocaleString('ru-RU')}</span>
                  <span className="price-currency">{currency.symbol}</span>
                  <span className="price-cycle">/ мес</span>
                </div>
              </div>
              <button className="sub-edit-btn" onClick={(e) => { e.stopPropagation(); onEdit(subscription); }}>
                <Edit3 size={16} />
              </button>
              <div className={`sub-next ${daysUntil !== null && daysUntil <= 0 ? 'soon' : daysUntil !== null && daysUntil <= 2 ? 'warning' : ''}`}>
                <span>{formatDaysUntil(daysUntil)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <ConfirmModal
        visible={showDeleteConfirm}
        title="Удалить подписку?"
        message={`Подписка «${subscription.name}» будет удалена безвозвратно.`}
        onConfirm={confirmDelete}
        onCancel={() => {
          setShowDeleteConfirm(false);
          setSwipeX(0);
        }}
      />
    </>
  );
};

// ============================================
// КОМПОНЕНТ: МОДАЛ ВВОДА СУММЫ
// ============================================
const AmountModal = ({ visible, amount, currency, currencies, onAmountChange, onCurrencyChange, onClose }) => {
  const [displayValue, setDisplayValue] = useState(amount ? String(amount) : '');
  const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [bounceKey, setBounceKey] = useState(0);

  useEffect(() => {
    if (visible) {
      setDisplayValue(amount ? String(amount) : '');
      setIsClosing(false);
      setShowCurrencyDropdown(false);
    }
  }, [visible, amount]);

  if (!visible) return null;

  const currencyObj = currencies.find(c => c.code === currency);

  const handleDigit = (digit) => {
    window.Telegram?.WebApp?.HapticFeedback?.impactOccurred('light');
    setDisplayValue(prev => {
      if (prev === '0' && digit !== '.') return digit;
      if (digit === '.' && prev.includes('.')) return prev;
      if (prev.includes('.') && prev.split('.')[1].length >= 2) return prev;
      if (prev.replace('.', '').length >= 8) return prev;
      return prev + digit;
    });
    setBounceKey(k => k + 1);
  };

  const handleBackspace = () => {
    window.Telegram?.WebApp?.HapticFeedback?.impactOccurred('light');
    setDisplayValue(prev => prev.slice(0, -1));
    setBounceKey(k => k + 1);
  };

  const handleCloseModal = () => {
    setIsClosing(true);
    setTimeout(() => onClose(), 280);
  };

  const handleDone = () => {
    const val = displayValue || '0';
    onAmountChange(parseFloat(val) > 0 ? val : '');
    handleCloseModal();
  };

  const formattedAmount = displayValue
    ? `${currencyObj?.symbol || ''} ${displayValue}`
    : `${currencyObj?.symbol || ''} 0`;

  return (
    <div className="amount-modal-overlay" onClick={handleCloseModal}>
      <div className={`amount-modal ${isClosing ? 'closing' : ''}`} onClick={e => e.stopPropagation()}>
        <div className="amount-modal-topbar">
          <div className="currency-capsule-wrapper">
            <button
              className="currency-capsule"
              onClick={() => setShowCurrencyDropdown(!showCurrencyDropdown)}
            >
              {currency} ({currencyObj?.symbol})
              <ChevronRight size={14} className={`capsule-chevron ${showCurrencyDropdown ? 'open' : ''}`} />
            </button>
            {showCurrencyDropdown && (
              <div className="currency-dropdown">
                {currencies.map(c => (
                  <button
                    key={c.code}
                    className={`currency-dropdown-item ${currency === c.code ? 'active' : ''}`}
                    onClick={() => { onCurrencyChange(c.code); setShowCurrencyDropdown(false); }}
                  >
                    {c.code} ({c.symbol})
                  </button>
                ))}
              </div>
            )}
          </div>
          <button className="amount-modal-close" onClick={handleCloseModal}>
            <X size={20} />
          </button>
        </div>

        <div className="amount-display-section">
          <span className="amount-display-label">Сумма</span>
          <span className="amount-display-value" key={bounceKey}>
            {formattedAmount}
          </span>
        </div>

        <div className="numpad">
          {['1','2','3','4','5','6','7','8','9','.','0','back'].map(key => (
            <button
              key={key}
              className={`numpad-key ${key === 'back' ? 'numpad-back' : ''}`}
              onClick={() => key === 'back' ? handleBackspace() : handleDigit(key)}
            >
              {key === 'back' ? <ArrowLeft size={24} /> : key}
            </button>
          ))}
        </div>

        <button className="amount-done-btn" onClick={handleDone}>
          Готово
        </button>
      </div>
    </div>
  );
};

// ============================================
// КОМПОНЕНТ: ФОРМА ПОДПИСКИ
// ============================================
const SubscriptionForm = ({ onClose, onSave, editData, templates, isLoading, defaultNotificationSettings, customCategories = [], onAddCategory, categories = CATEGORIES, preselectedDate }) => {
  const [step, setStep] = useState(editData ? 2 : 1);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [isClosing, setIsClosing] = useState(false);
  const [showLogoSheet, setShowLogoSheet] = useState(false);
  const [logoSheetClosing, setLogoSheetClosing] = useState(false);
  const [logoSheetTab, setLogoSheetTab] = useState('emoji');
  const [logoScaledUp, setLogoScaledUp] = useState(false);
  const [showAmountModal, setShowAmountModal] = useState(false);

  // Fix viewport shrink on keyboard open
  useEffect(() => {
    const tg = window.Telegram?.WebApp;
    if (tg) tg.expand();

    const handleResize = () => {
      if (document.activeElement?.tagName === 'INPUT' || document.activeElement?.tagName === 'TEXTAREA') {
        setTimeout(() => {
          document.activeElement?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
      }
    };
    window.visualViewport?.addEventListener('resize', handleResize);
    return () => window.visualViewport?.removeEventListener('resize', handleResize);
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => onClose(), 280);
  };

  // Combine default and custom categories
  const otherCat = categories.find(c => c.id === 'other');
  const allCategories = [...categories.filter(c => c.id !== 'other'), ...customCategories, ...(otherCat ? [otherCat] : [])];
  
  const [formData, setFormData] = useState(editData ? {
    ...editData,
    firstBillingDate: (editData.next_billing_date || editData.first_billing_date || editData.firstBillingDate || '').split('T')[0],
    billingCycle: editData.billing_cycle || editData.billingCycle || 'monthly',
    category: editData.category || 'Другое',
    notifyEnabled: editData.notify_enabled ?? true,
  } : {
    name: '',
    amount: '',
    currency: 'RUB',
    billingCycle: 'monthly',
    firstBillingDate: preselectedDate || getLocalDateString(),
    category: 'Другое',
    color: '#6366f1',
    icon: '📦',
    domain: null,
    logo_url: null,
    isCustom: true,
    notifyEnabled: true,
  });

  const categoryTabs = ['Все', ...CATEGORIES.map(c => c.name)];

  const filteredTemplates = templates.filter(t => {
    const matchesSearch = t.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'Все' || t.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const selectTemplate = (template) => {
    setFormData({
      ...formData,
      name: template.name,
      color: template.color,
      icon: template.icon || '📦',
      domain: template.domain,
      logo_url: template.logo_url || null,
      category: template.category,
      isCustom: false,
      templateId: template.id,
    });
    setStep(2);
  };

  const handleSave = () => {
    if (!formData.name || !formData.amount) return;
    hapticFeedbackForCreate();
    onSave({
      ...formData,
      id: editData?.id,
      amount: parseFloat(formData.amount),
      next_billing_date: formData.firstBillingDate,
      first_billing_date: formData.firstBillingDate,
      billing_cycle: formData.billingCycle,
      notify_enabled: formData.notifyEnabled,
    });
  };

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className={`modal subscription-modal ${isClosing ? 'closing' : ''}`} onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <button className="back-btn" onClick={() => (step === 1 || editData) ? handleClose() : setStep(1)}>
            {(step === 1 || editData) ? <X size={20} /> : <ChevronLeft size={20} />}
          </button>
          <h2>{editData ? 'Редактировать' : step === 1 ? 'Выберите сервис' : 'Новая подписка'}</h2>
          <div style={{ width: 32 }} />
        </div>

        {step === 1 ? (
          <div className="template-selector">
            <div className="template-selector-sticky">
              <div className="search-box">
                <Search size={18} />
                <input
                  type="text"
                  placeholder="Поиск сервиса..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="category-tabs">
                {categoryTabs.map(cat => (
                  <button
                    key={cat}
                    className={`cat-tab ${selectedCategory === cat ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="template-selector-scroll">
              <button className="custom-sub-btn" onClick={() => setStep(2)}>
                <div className="custom-sub-icon">
                  <Plus size={22} color="white" />
                </div>
                <span>Своя подписка</span>
                <ChevronRight size={18} className="custom-sub-chevron" />
              </button>

              <div className="template-divider">
                <span>Или выберите из шаблонов</span>
              </div>

              <div className="template-grid">
                {filteredTemplates.map(template => (
                  <button key={template.id} className="template-item" onClick={() => selectTemplate(template)}>
                    <Logo domain={template.domain} emoji={template.icon} color={template.color} size={48} logoUrl={template.logo_url} />
                    <span>{template.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="subscription-form card-form">
            {/* Centered Logo */}
            <div
              className={`card-form-logo ${logoScaledUp ? 'scaled-up' : ''}`}
              onClick={() => {
                setLogoScaledUp(true);
                setTimeout(() => setShowLogoSheet(true), 150);
              }}
            >
              <Logo domain={formData.domain} emoji={formData.icon} color={formData.color} size={96} logoUrl={formData.logo_url} />
              <div className="logo-edit-badge"><Edit3 size={14} /></div>
            </div>

            {/* Card 1: Name, Period, Date */}
            <div className="settings-card">
              <div className="settings-row">
                <span className="settings-row-label">Название</span>
                <input
                  className="settings-row-value-input"
                  type="text"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Название"
                />
              </div>
              <div className="settings-row-divider" />

              <div className="settings-row">
                <span className="settings-row-label">Периодичность</span>
                <div className="settings-row-value">
                  <select
                    className="native-select"
                    value={formData.billingCycle}
                    onChange={e => setFormData({ ...formData, billingCycle: e.target.value })}
                  >
                    {BILLING_CYCLES.map(cycle => (
                      <option key={cycle.value} value={cycle.value}>{cycle.label}</option>
                    ))}
                  </select>
                  <ChevronRight size={16} className="settings-row-chevron" />
                </div>
              </div>
              <div className="settings-row-divider" />

              <div className="settings-row">
                <span className="settings-row-label">Дата начала</span>
                <input
                  type="date"
                  className="settings-date-input"
                  value={formData.firstBillingDate}
                  onChange={e => setFormData({ ...formData, firstBillingDate: e.target.value })}
                />
              </div>
            </div>

            {/* Card 2: Amount */}
            <div className="settings-card" onClick={() => setShowAmountModal(true)}>
              <div className="settings-row">
                <span className="settings-row-label">Сумма</span>
                <div className="settings-row-value">
                  <span>
                    {formData.amount
                      ? `${CURRENCIES.find(c => c.code === formData.currency)?.symbol} ${formData.amount} (${formData.currency})`
                      : `${CURRENCIES.find(c => c.code === formData.currency)?.symbol} 0.00 (${formData.currency})`
                    }
                  </span>
                  <ChevronRight size={16} className="settings-row-chevron" />
                </div>
              </div>
            </div>

            {/* Card 3: Category, Notifications */}
            <div className="settings-card">
              <div className="settings-row">
                <div className="settings-row-left">
                  <div className="settings-row-icon" style={{ background: 'rgba(139, 92, 246, 0.15)', color: '#8B5CF6' }}>
                    <PieChart size={16} />
                  </div>
                  <span className="settings-row-label">Категория</span>
                </div>
                <div className="settings-row-value">
                  <select
                    className="native-select"
                    value={formData.category}
                    onChange={e => setFormData({ ...formData, category: e.target.value })}
                  >
                    {allCategories.map(cat => (
                      <option key={cat.id} value={cat.name}>{cat.name}</option>
                    ))}
                  </select>
                  <ChevronRight size={16} className="settings-row-chevron" />
                </div>
              </div>

              <div className="settings-row-divider" />

              <div className="settings-row">
                <div className="settings-row-left">
                  <div className="settings-row-icon" style={{ background: 'rgba(245, 158, 11, 0.15)', color: '#F59E0B' }}>
                    <Bell size={16} />
                  </div>
                  <div>
                    <span className="settings-row-label">Уведомления</span>
                    <p className="settings-row-hint">Настроить можно в настройках</p>
                  </div>
                </div>
                <label className="toggle" onClick={e => e.stopPropagation()}>
                  <input
                    type="checkbox"
                    checked={formData.notifyEnabled}
                    onChange={() => setFormData({ ...formData, notifyEnabled: !formData.notifyEnabled })}
                  />
                  <span className="toggle-slider" />
                </label>
              </div>
            </div>

            {/* Save button */}
            <button className="save-btn" onClick={handleSave} disabled={isLoading || !formData.name || !formData.amount}>
              {isLoading ? <Loader className="spin" size={20} /> : null}
              {editData ? 'Сохранить' : 'Добавить подписку'}
            </button>
          </div>
        )}
      </div>

      <AmountModal
        visible={showAmountModal}
        amount={formData.amount}
        currency={formData.currency}
        currencies={CURRENCIES}
        onAmountChange={(val) => setFormData({ ...formData, amount: val })}
        onCurrencyChange={(code) => setFormData({ ...formData, currency: code })}
        onClose={() => setShowAmountModal(false)}
      />

      {/* Logo Editor Bottom Sheet */}
      {showLogoSheet && (() => {
        const closeLogoSheet = () => {
          setLogoSheetClosing(true);
          setLogoScaledUp(false);
          setTimeout(() => { setShowLogoSheet(false); setLogoSheetClosing(false); }, 280);
        };

        let sheetStartY = 0;
        let sheetCurrentY = 0;
        let canSwipeClose = false;

        const handleSheetTouchStart = (e) => {
          sheetStartY = e.touches[0].clientY;
          sheetCurrentY = 0;
          // Only allow swipe-close if the grid is at the top
          const grid = e.currentTarget.querySelector('.logo-sheet-grid');
          canSwipeClose = !grid || grid.scrollTop <= 0;
        };
        const handleSheetTouchMove = (e) => {
          const diff = e.touches[0].clientY - sheetStartY;
          sheetCurrentY = diff;
          if (canSwipeClose && diff > 0) {
            e.currentTarget.style.transform = `translateY(${diff}px)`;
          }
        };
        const handleSheetTouchEnd = (e) => {
          if (canSwipeClose && sheetCurrentY > 80) {
            closeLogoSheet();
          }
          e.currentTarget.style.transform = '';
          e.currentTarget.style.transition = 'transform 0.2s ease';
          setTimeout(() => { if (e.currentTarget) e.currentTarget.style.transition = ''; }, 200);
        };

        return (
          <div className="logo-sheet-overlay" onClick={(e) => {
            e.stopPropagation();
            closeLogoSheet();
          }}>
            <div
              className={`logo-sheet ${logoSheetClosing ? 'closing' : ''}`}
              onClick={e => e.stopPropagation()}
              onTouchStart={handleSheetTouchStart}
              onTouchMove={handleSheetTouchMove}
              onTouchEnd={handleSheetTouchEnd}
            >
              <div className="logo-sheet-handle" />

              {/* Preview */}
              <div className="logo-sheet-preview">
                <Logo domain={null} emoji={formData.icon} color={formData.color} size={80} logoUrl={null} />
              </div>

              {/* Color Palette Row */}
              <div className="logo-sheet-colors">
                {COLOR_PALETTE.slice(0, 7).map(color => (
                  <button
                    key={color}
                    className={`logo-color-btn ${formData.color === color ? 'active' : ''}`}
                    style={{ background: color }}
                    onClick={() => setFormData({ ...formData, color, domain: null, logo_url: null })}
                  />
                ))}
              </div>

              {/* Tabs */}
              <div className="logo-sheet-tabs">
                <button
                  className={`logo-sheet-tab ${logoSheetTab === 'photo' ? 'active' : ''}`}
                  onClick={() => setLogoSheetTab('photo')}
                >
                  Фото
                </button>
                <button
                  className={`logo-sheet-tab ${logoSheetTab === 'emoji' ? 'active' : ''}`}
                  onClick={() => setLogoSheetTab('emoji')}
                >
                  Эмодзи
                </button>
                <button
                  className={`logo-sheet-tab ${logoSheetTab === 'symbols' ? 'active' : ''}`}
                  onClick={() => setLogoSheetTab('symbols')}
                >
                  Символы
                </button>
              </div>

              {/* Grid */}
              <div className="logo-sheet-grid">
                {logoSheetTab === 'photo' ? (
                  <div className="logo-sheet-placeholder">
                    <Camera size={32} color="var(--text-secondary)" />
                    <span>В разработке</span>
                    <p>Загрузка фото будет доступна в следующем обновлении</p>
                  </div>
                ) : logoSheetTab === 'emoji' ? (
                  EMOJI_OPTIONS.map((em, i) => (
                    <button
                      key={em + i}
                      className={`logo-grid-item ${formData.icon === em ? 'active' : ''}`}
                      onClick={() => setFormData({ ...formData, icon: em, domain: null, logo_url: null })}
                    >
                      <span className="logo-grid-emoji">{em}</span>
                    </button>
                  ))
                ) : (
                  SYMBOL_OPTIONS.map(sym => (
                    <button
                      key={sym.name}
                      className={`logo-grid-item ${formData.icon === 'symbol:' + sym.name ? 'active' : ''}`}
                      onClick={() => setFormData({ ...formData, icon: 'symbol:' + sym.name, domain: null, logo_url: null })}
                    >
                      <sym.icon size={24} color="var(--text-primary)" strokeWidth={1.5} />
                    </button>
                  ))
                )}
              </div>
            </div>
          </div>
        );
      })()}
    </div>
  );
};

// ============================================
// КОМПОНЕНТ: ЭКРАН АНАЛИТИКИ
// ============================================
const AnalyticsScreen = ({ subscriptions, currencies, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);
  const [period, setPeriod] = useState('month');

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => onClose(), 280);
  };
  
  const stats = useMemo(() => {
    let monthlyTotal = 0;
    const categoryTotals = {};
    
    subscriptions.forEach(sub => {
      const cycle = BILLING_CYCLES.find(c => c.value === (sub.billing_cycle || sub.billingCycle));
      const currency = CURRENCIES.find(c => c.code === sub.currency);
      const amountInRub = sub.amount * (currency?.rate || 1);
      const monthly = amountInRub * (cycle?.multiplier || 1);
      monthlyTotal += monthly;
      
      const cat = sub.category || 'Другое';
      categoryTotals[cat] = (categoryTotals[cat] || 0) + monthly;
    });

    return {
      monthly: Math.round(monthlyTotal),
      yearly: Math.round(monthlyTotal * 12),
      count: subscriptions.length,
      categories: categoryTotals,
    };
  }, [subscriptions]);

  // Топ-5 самых дорогих подписок по годовой стоимости
  const topSubscriptions = useMemo(() => {
    return subscriptions
      .map(sub => {
        const cycle = BILLING_CYCLES.find(c => c.value === (sub.billing_cycle || sub.billingCycle));
        const currency = CURRENCIES.find(c => c.code === sub.currency);
        const amountInRub = sub.amount * (currency?.rate || 1);
        const monthly = amountInRub * (cycle?.multiplier || 1);
        return { ...sub, monthlyRub: monthly, yearlyRub: monthly * 12 };
      })
      .sort((a, b) => b.yearlyRub - a.yearlyRub)
      .slice(0, 5);
  }, [subscriptions]);

  // Данные для графика
  const chartData = useMemo(() => {
    if (period === 'year') {
      const months = [];
      for (let i = 0; i < 12; i++) {
        const date = new Date();
        date.setMonth(date.getMonth() - 11 + i);
        months.push({
          label: date.toLocaleDateString('ru-RU', { month: 'short' }),
          value: stats.monthly, // Упрощённо - одинаковая сумма
        });
      }
      return months;
    } else {
      const days = [];
      for (let i = 0; i < 30; i++) {
        const date = new Date();
        date.setDate(date.getDate() - 29 + i);
        days.push({
          label: date.getDate().toString(),
          value: i % 7 === 0 ? stats.monthly / 4 : 0, // Упрощённо
        });
      }
      return days;
    }
  }, [period, stats.monthly]);

  const maxChartValue = Math.max(...chartData.map(d => d.value), 1);

  // Категории для диаграммы
  const categoryData = Object.entries(stats.categories).map(([name, value]) => ({
    name,
    value: Math.round(value),
    color: CATEGORIES.find(c => c.name === name)?.color || '#6B7280',
    percent: Math.round((value / stats.monthly) * 100) || 0,
  })).sort((a, b) => b.value - a.value);

  return (
    <div className={`analytics-screen screen-enter ${isClosing ? 'screen-exit' : ''}`}>
      <div className="analytics-header">
        <button className="back-btn" onClick={handleClose}>
          <ArrowLeft size={20} />
        </button>
        <h2>Аналитика подписок</h2>
        <div style={{ width: 32 }} />
      </div>

      <div className="analytics-content">
        {/* Сводка */}
        <div className="analytics-summary">
          <div className="summary-item">
            <span className="summary-value">{stats.monthly.toLocaleString('ru-RU')} ₽</span>
            <span className="summary-label">в месяц</span>
          </div>
          <div className="summary-item">
            <span className="summary-value">{stats.yearly.toLocaleString('ru-RU')} ₽</span>
            <span className="summary-label">в год</span>
          </div>
          <div className="summary-item">
            <span className="summary-value">{stats.count}</span>
            <span className="summary-label">подписок</span>
          </div>
        </div>

        {/* Переключатель периода */}
        <div className="period-tabs">
          <button 
            className={`period-tab ${period === 'month' ? 'active' : ''}`}
            onClick={() => setPeriod('month')}
          >
            Месяц
          </button>
          <button 
            className={`period-tab ${period === 'year' ? 'active' : ''}`}
            onClick={() => setPeriod('year')}
          >
            Год
          </button>
        </div>

        {/* График */}
        <div className="chart-section">
          <h3><TrendingUp size={18} /> Динамика расходов</h3>
          <div className="bar-chart">
            {chartData.map((item, idx) => (
              <div key={idx} className="bar-item">
                <div 
                  className="bar" 
                  style={{ height: `${(item.value / maxChartValue) * 100}%` }}
                />
                {(period === 'year' || idx % 5 === 0) && (
                  <span className="bar-label">{item.label}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Диаграмма категорий */}
        <div className="categories-section">
          <h3><PieChart size={18} /> Расходы по категориям</h3>
          <div className="categories-chart">
            <div className="pie-chart">
              {categoryData.map((cat, idx) => (
                <div 
                  key={cat.name}
                  className="pie-segment"
                  style={{
                    '--color': cat.color,
                    '--percent': cat.percent,
                    '--offset': categoryData.slice(0, idx).reduce((sum, c) => sum + c.percent, 0),
                  }}
                />
              ))}
            </div>
            <div className="categories-list">
              {categoryData.map(cat => (
                <div key={cat.name} className="category-item">
                  <div className="category-dot" style={{ background: cat.color }} />
                  <span className="category-name">{cat.name}</span>
                  <span className="category-value">{cat.value.toLocaleString('ru-RU')} ₽</span>
                  <span className="category-percent">{cat.percent}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Топ подписок */}
        <div className="top-section">
          <h3>💰 Самые дорогие подписки</h3>
          <div className="top-list">
            {topSubscriptions.map((sub, idx) => (
              <div key={sub.id} className="top-item">
                <span className="top-rank">{idx + 1}</span>
                <Logo domain={sub.domain} emoji={sub.icon} color={sub.color} size={36} logoUrl={sub.logo_url} />
                <div className="top-info">
                  <span className="top-name">{sub.name}</span>
                  <span className="top-monthly">{Math.round(sub.monthlyRub).toLocaleString('ru-RU')} ₽/мес</span>
                </div>
                <span className="top-yearly">{Math.round(sub.yearlyRub).toLocaleString('ru-RU')} ₽/год</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================
// КОМПОНЕНТ: CATEGORIES BOTTOM SHEET
// ============================================
const CategoriesSheet = ({ visible, categories, customCategories, onAddCategory, onDeleteCategory, onClose }) => {
  const [newCategoryName, setNewCategoryName] = useState('');
  const [selectedColor, setSelectedColor] = useState(COLOR_PALETTE[0]);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [swipeStates, setSwipeStates] = useState({});
  const [deletingCat, setDeletingCat] = useState(null);

  useEffect(() => {
    if (visible) { setIsClosing(false); setSwipeStates({}); }
  }, [visible]);

  if (!visible) return null;

  const allCats = categories;

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => onClose(), 280);
  };

  const handleAdd = () => {
    if (newCategoryName.trim()) {
      onAddCategory(newCategoryName.trim(), selectedColor);
      setNewCategoryName('');
      setSelectedColor(COLOR_PALETTE[0]);
    }
  };

  const handleCatTouchStart = (catId, e) => {
    setSwipeStates(prev => ({
      ...prev,
      [catId]: { ...prev[catId], startX: e.touches[0].clientX, swiping: true }
    }));
  };

  const handleCatTouchMove = (catId, e) => {
    const state = swipeStates[catId];
    if (!state?.swiping) return;
    const diff = state.startX - e.touches[0].clientX;
    setSwipeStates(prev => ({
      ...prev,
      [catId]: { ...prev[catId], x: Math.max(0, Math.min(80, diff)) }
    }));
  };

  const handleCatTouchEnd = (catId) => {
    const state = swipeStates[catId];
    if (!state) return;
    setSwipeStates(prev => ({
      ...prev,
      [catId]: { ...prev[catId], swiping: false, x: state.x > 40 ? 80 : 0 }
    }));
  };

  const confirmCatDelete = () => {
    if (deletingCat) {
      onDeleteCategory(deletingCat.id);
      setSwipeStates(prev => {
        const next = { ...prev };
        delete next[deletingCat.id];
        return next;
      });
      setDeletingCat(null);
    }
  };

  return (
    <div className="categories-sheet-overlay" onClick={handleClose}>
      <div className={`categories-sheet ${isClosing ? 'closing' : ''}`} onClick={e => e.stopPropagation()}>
        <div className="categories-sheet-header">
          <h3>Категории</h3>
          <button className="amount-modal-close" onClick={handleClose}>
            <X size={20} />
          </button>
        </div>

        <div className="categories-list-wrapper">
          <div className="settings-card">
            {allCats.map((cat, i) => {
              const swipe = swipeStates[cat.id] || { x: 0, swiping: false };
              return (
                <React.Fragment key={cat.id}>
                  <div className="cat-swipe-wrapper">
                    <div className="cat-swipe-bg" style={{ opacity: swipe.x / 80 }}>
                      <button className="swipe-delete-btn" onClick={() => setDeletingCat(cat)}>
                        <Trash2 size={18} />
                        <span>Удалить</span>
                      </button>
                    </div>
                    <div
                      className="category-list-item"
                      style={{
                        transform: `translateX(-${swipe.x}px)`,
                        transition: swipe.swiping ? 'none' : 'transform 0.2s ease'
                      }}
                      onTouchStart={e => handleCatTouchStart(cat.id, e)}
                      onTouchMove={e => handleCatTouchMove(cat.id, e)}
                      onTouchEnd={() => handleCatTouchEnd(cat.id)}
                    >
                      <span className="category-list-name">{cat.name}</span>
                      <div className="category-color-dot" style={{ background: cat.color }} />
                    </div>
                  </div>
                  {i < allCats.length - 1 && <div className="settings-row-divider" />}
                </React.Fragment>
              );
            })}
          </div>

          <p className="categories-hint">Свайпните влево, чтобы удалить категорию. Подписки из удалённой категории перейдут в «Другое».</p>

          <div className="new-category-row">
            <div
              className="category-color-dot clickable"
              style={{ background: selectedColor }}
              onClick={() => setShowColorPicker(!showColorPicker)}
            />
            <input
              type="text"
              className="new-category-input"
              value={newCategoryName}
              onChange={e => setNewCategoryName(e.target.value)}
              placeholder="Новая категория"
            />
            <button
              className="new-category-add-btn"
              onClick={handleAdd}
              disabled={!newCategoryName.trim()}
            >
              Добавить
            </button>
          </div>
        </div>

        {showColorPicker && (
          <div className="color-picker-sheet">
            <div className="color-picker-handle" />
            <h4>Выберите цвет</h4>
            <div className="color-palette">
              {COLOR_PALETTE.map(color => (
                <button
                  key={color}
                  className={`color-palette-item ${selectedColor === color ? 'active' : ''}`}
                  style={{ background: color }}
                  onClick={() => { setSelectedColor(color); setShowColorPicker(false); }}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      <ConfirmModal
        visible={!!deletingCat}
        title="Удалить категорию?"
        message={deletingCat ? `Категория «${deletingCat.name}» будет удалена. Подписки с этой категорией станут «Другое».` : ''}
        onConfirm={confirmCatDelete}
        onCancel={() => setDeletingCat(null)}
      />
    </div>
  );
};

// ============================================
// КОМПОНЕНТ: ЭКРАН НАСТРОЕК
// ============================================
const SettingsScreen = ({ user, appSettings, onUpdateSettings, categories, customCategories, onAddCategory, onDeleteCategory, theme, onToggleTheme, onClose, onSendTestNotification }) => {
  const tg = getTelegram();
  const telegramUser = tg?.initDataUnsafe?.user;
  const [isClosing, setIsClosing] = useState(false);
  const [showVersionInfo, setShowVersionInfo] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => onClose(), 280);
  };
  const [showCategories, setShowCategories] = useState(false);

  const photoUrl = telegramUser?.photo_url || null;
  const displayName = telegramUser?.first_name
    ? `${telegramUser.first_name}${telegramUser.last_name ? ' ' + telegramUser.last_name : ''}`
    : user?.first_name || 'Пользователь';
  const telegramId = telegramUser?.id || user?.telegram_id || user?.id || '—';

  const allCats = categories;
  const firstReminder = appSettings.firstReminder || { days: 1, time: '09:00' };
  const secondReminder = appSettings.secondReminder || { days: -1, time: '09:00' };

  const updateFirstReminder = (field, value) => {
    onUpdateSettings(prev => ({
      ...prev,
      firstReminder: { ...prev.firstReminder || { days: 1, time: '09:00' }, [field]: value },
    }));
  };

  const updateSecondReminder = (field, value) => {
    onUpdateSettings(prev => ({
      ...prev,
      secondReminder: { ...prev.secondReminder || { days: -1, time: '09:00' }, [field]: value },
    }));
  };

  const getReminderLabel = (days) => {
    return REMINDER_DAYS.find(d => d.value === days)?.label || 'Никогда';
  };

  return (
    <div className={`settings-screen screen-enter ${isClosing ? 'screen-exit' : ''}`}>
      <div className="settings-header">
        <button className="back-btn" onClick={handleClose}>
          <ArrowLeft size={20} />
        </button>
        <h2>Настройки</h2>
        <div style={{ width: 32 }} />
      </div>

      <div className="settings-content">
        {/* Profile */}
        <div className="profile-section">
          <div className="profile-avatar">
            {photoUrl ? (
              <img src={photoUrl} alt="Avatar" />
            ) : (
              <div className="avatar-placeholder">
                {displayName.charAt(0).toUpperCase()}
              </div>
            )}
          </div>
          <h3 className="profile-name">{displayName}</h3>
          <span className="profile-id">ID: {telegramId}</span>
        </div>

        {/* Categories */}
        <div className="settings-section-label">КАТЕГОРИИ</div>
        <div className="settings-card" onClick={() => setShowCategories(true)}>
          <div className="settings-row">
            <span className="settings-row-label">Категории</span>
            <div className="settings-row-value">
              <span>{allCats.length}</span>
              <ChevronRight size={16} className="settings-row-chevron" />
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="settings-section-label">УВЕДОМЛЕНИЯ</div>
        <div className="settings-card">
          {/* First Reminder */}
          <div className="settings-row notification-row">
            <span className="settings-row-label">Первое уведомление</span>
            <div className="notification-row-controls">
              <select
                className="native-select"
                value={firstReminder.days}
                onChange={e => updateFirstReminder('days', parseInt(e.target.value))}
              >
                {REMINDER_DAYS.map(day => (
                  <option key={day.value} value={day.value}>{day.label}</option>
                ))}
              </select>
              {firstReminder.days !== -1 && (
                <input
                  type="time"
                  className="time-input-capsule"
                  value={firstReminder.time}
                  onChange={e => updateFirstReminder('time', e.target.value)}
                />
              )}
            </div>
          </div>
          <div className="settings-row-divider" />

          {/* Second Reminder */}
          <div className="settings-row notification-row">
            <span className="settings-row-label">Второе уведомление</span>
            <div className="notification-row-controls">
              <select
                className="native-select"
                value={secondReminder.days}
                onChange={e => updateSecondReminder('days', parseInt(e.target.value))}
              >
                {REMINDER_DAYS.map(day => (
                  <option key={day.value} value={day.value}>{day.label}</option>
                ))}
              </select>
              {secondReminder.days !== -1 && (
                <input
                  type="time"
                  className="time-input-capsule"
                  value={secondReminder.time}
                  onChange={e => updateSecondReminder('time', e.target.value)}
                />
              )}
            </div>
          </div>
          <div className="settings-row-divider" />

          {/* Test Notification */}
          <div className="settings-row">
            <button className="test-notification-btn" onClick={() => {
              if (onSendTestNotification) {
                onSendTestNotification();
              }
            }}>
              Тест уведомлений
            </button>
          </div>
        </div>
        <p className="settings-hint">Уведомления приходят через Telegram‑бот. Убедитесь, что бот не заблокирован и уведомления от него включены.</p>

        {/* Theme */}
        <div className="settings-section-label">ОФОРМЛЕНИЕ</div>
        <div className="settings-card">
          <div className="settings-row">
            <span className="settings-row-label">Тёмная тема</span>
            <label className="toggle">
              <input
                type="checkbox"
                checked={theme === 'dark'}
                onChange={() => onToggleTheme()}
              />
              <span className="toggle-slider" />
            </label>
          </div>
        </div>

        {/* Version */}
        <div className="version-badge" onClick={() => setShowVersionInfo(true)}>
          <span className="version-tag">Beta 0.1.13</span>
          <ChevronRight size={14} />
        </div>
      </div>

      {showVersionInfo && (
        <div className="modal-overlay confirm-overlay" onClick={() => setShowVersionInfo(false)}>
          <div className="version-modal" onClick={e => e.stopPropagation()}>
            <div className="version-modal-header">
              <h3>О приложении</h3>
              <button className="close-btn" onClick={() => setShowVersionInfo(false)}>
                <X size={18} />
              </button>
            </div>
            <div className="version-modal-body">
              <div className="version-logo">Subfy</div>
              <span className="version-number">Beta 0.1.13</span>
              <p className="version-desc">⚙️ Это бета‑версия приложения. Если вы заметили ошибку или баг — сообщите нам через Telegram‑бот</p>
              <button className="contact-btn" onClick={() => {
                const tg = getTelegram();
                tg?.openTelegramLink?.('https://t.me/subfy_support_bot');
              }}>
                Написать в бот
              </button>
            </div>
          </div>
        </div>
      )}

      <CategoriesSheet
        visible={showCategories}
        categories={categories}
        customCategories={customCategories}
        onAddCategory={onAddCategory}
        onDeleteCategory={onDeleteCategory}
        onClose={() => setShowCategories(false)}
      />
    </div>
  );
};

// ============================================
// КОМПОНЕНТ: КАЛЕНДАРЬ
// ============================================
const CalendarView = ({ subscriptions, currencies, onOpenForm, onEditSubscription }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(null);
  const [sheetClosing, setSheetClosing] = useState(false);

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const days = [];

    const startDay = firstDay.getDay() || 7;
    for (let i = 1; i < startDay; i++) {
      days.push({ date: null, subscriptions: [] });
    }

    for (let day = 1; day <= lastDay.getDate(); day++) {
      const dayDate = new Date(year, month, day);
      const daySubs = subscriptions.filter(sub => {
        const startDate = sub.first_billing_date || sub.next_billing_date || sub.firstBillingDate;
        const cycle = sub.billing_cycle || sub.billingCycle || 'monthly';
        const billingDates = getBillingDatesInMonth(startDate, cycle, year, month);
        return billingDates.some(d => d.getDate() === day);
      });
      days.push({ date: dayDate, subscriptions: daySubs });
    }

    return days;
  };

  const days = getDaysInMonth(currentMonth);
  const monthName = currentMonth.toLocaleDateString('ru-RU', { month: 'long', year: 'numeric' });

  const monthlyTotal = useMemo(() => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    return subscriptions.reduce((total, sub) => {
      const startDate = sub.first_billing_date || sub.next_billing_date || sub.firstBillingDate;
      const cycle = sub.billing_cycle || sub.billingCycle || 'monthly';
      const dates = getBillingDatesInMonth(startDate, cycle, year, month);
      if (dates.length > 0) {
        const currency = currencies.find(c => c.code === sub.currency) || currencies[0];
        return total + (sub.amount * currency.rate * dates.length);
      }
      return total;
    }, 0);
  }, [subscriptions, currentMonth, currencies]);

  const changeMonth = (delta) => {
    const newDate = new Date(currentMonth);
    newDate.setMonth(newDate.getMonth() + delta);
    setCurrentMonth(newDate);
    closeSheet();
  };

  const formatDateForForm = (date) => {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  };

  const handleDayClick = (day) => {
    if (!day.date) return;
    if (day.subscriptions.length > 0) {
      setSelectedDay(day);
      setSheetClosing(false);
    } else {
      onOpenForm?.(formatDateForForm(day.date));
    }
  };

  const closeSheet = () => {
    if (selectedDay) {
      setSheetClosing(true);
      setTimeout(() => {
        setSelectedDay(null);
        setSheetClosing(false);
      }, 250);
    }
  };

  const sheetTotal = useMemo(() => {
    if (!selectedDay) return 0;
    return selectedDay.subscriptions.reduce((sum, sub) => {
      const currency = currencies.find(c => c.code === sub.currency) || currencies[0];
      return sum + (sub.amount * currency.rate);
    }, 0);
  }, [selectedDay, currencies]);

  return (
    <div className="calendar-view">
      <div className="calendar-header">
        <button onClick={() => changeMonth(-1)}><ChevronLeft size={20} /></button>
        <div className="calendar-title">
          <h3>{monthName}</h3>
          <span className="month-total">{Math.round(monthlyTotal).toLocaleString('ru-RU')} ₽</span>
        </div>
        <button onClick={() => changeMonth(1)}><ChevronRight size={20} /></button>
      </div>

      <div className="calendar-weekdays">
        {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map(day => (
          <div key={day} className="weekday">{day}</div>
        ))}
      </div>

      <div className="calendar-grid">
        {days.map((day, i) => {
          const isToday = day.date?.toDateString() === new Date().toDateString();
          const hasSubs = day.subscriptions.length > 0;
          const firstColor = hasSubs ? day.subscriptions[0].color : null;
          return (
            <div
              key={i}
              className={`calendar-day ${!day.date ? 'empty' : ''} ${hasSubs ? 'has-subs' : ''} ${isToday ? 'today' : ''}`}
              style={hasSubs && isToday ? { background: firstColor + '25' } : hasSubs ? { background: firstColor + '15' } : undefined}
              onClick={() => handleDayClick(day)}
            >
              {day.date && (
                <>
                  <div className="day-logo-container">
                    {hasSubs && (
                      day.subscriptions.length === 1 ? (
                        <Logo domain={day.subscriptions[0].domain} emoji={day.subscriptions[0].icon} color={day.subscriptions[0].color} size={22} logoUrl={day.subscriptions[0].logo_url} />
                      ) : day.subscriptions.length === 2 ? (
                        <div className="day-logos-pair">
                          <Logo domain={day.subscriptions[0].domain} emoji={day.subscriptions[0].icon} color={day.subscriptions[0].color} size={18} logoUrl={day.subscriptions[0].logo_url} />
                          <Logo domain={day.subscriptions[1].domain} emoji={day.subscriptions[1].icon} color={day.subscriptions[1].color} size={18} logoUrl={day.subscriptions[1].logo_url} />
                        </div>
                      ) : (
                        <div className="day-logos-pair">
                          <Logo domain={day.subscriptions[0].domain} emoji={day.subscriptions[0].icon} color={day.subscriptions[0].color} size={18} logoUrl={day.subscriptions[0].logo_url} />
                          <div className="day-count-badge">+{day.subscriptions.length - 1}</div>
                        </div>
                      )
                    )}
                  </div>
                  <span className="day-number">{day.date.getDate()}</span>
                </>
              )}
            </div>
          );
        })}
      </div>

      {/* Add subscription button */}
      <button className="calendar-add-btn" onClick={() => onOpenForm?.(null)}>
        <Plus size={20} />
        Добавить подписку
      </button>

      {/* Bottom Sheet */}
      {selectedDay && (
        <>
          <div className={`day-bottom-sheet-overlay ${sheetClosing ? 'closing' : ''}`} onClick={closeSheet} />
          <div className={`day-bottom-sheet ${sheetClosing ? 'closing' : ''}`}>
            <div className="sheet-handle" />
            <div className="sheet-header">
              <h4>Подписки</h4>
              <span className="sheet-date">{formatDateFull(selectedDay.date)}</span>
            </div>
            <div className="sheet-list">
              {selectedDay.subscriptions.map(sub => {
                const currency = currencies.find(c => c.code === sub.currency) || currencies[0];
                const cycle = BILLING_CYCLES.find(c => c.value === (sub.billing_cycle || sub.billingCycle));
                return (
                  <div key={sub.id} className="sheet-subscription-item" onClick={() => { closeSheet(); onEditSubscription?.(sub); }}>
                    <Logo domain={sub.domain} emoji={sub.icon} color={sub.color} size={40} logoUrl={sub.logo_url} />
                    <div className="sheet-sub-info">
                      <span className="sheet-sub-name">{sub.name}</span>
                      <span className="sheet-sub-cycle">{cycle?.label || 'Ежемесячно'}</span>
                    </div>
                    <div className="sheet-sub-right">
                      <span className="sheet-sub-amount">{sub.amount.toLocaleString('ru-RU')} {currency.symbol}</span>
                      <ChevronRight size={16} className="sheet-chevron" />
                    </div>
                  </div>
                );
              })}
            </div>
            <button className="sheet-add-btn" onClick={() => { const d = formatDateForForm(selectedDay.date); closeSheet(); onOpenForm?.(d); }}>
              <Plus size={18} />
              Добавить подписку
            </button>
            <div className="sheet-total">
              <span>Итого</span>
              <span className="sheet-total-amount">{Math.round(sheetTotal).toLocaleString('ru-RU')} ₽</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

// ============================================
// ГЛАВНЫЙ КОМПОНЕНТ
// ============================================
export default function SubfyApp() {
  const [appState, setAppState] = useState('loading');
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('subfy_theme');
    if (saved) return saved;
    const tg = getTelegram();
    return tg?.colorScheme || 'dark';
  });
  const [activeTab, setActiveTab] = useState('calendar');
  const [preselectedDate, setPreselectedDate] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [editingSubscription, setEditingSubscription] = useState(null);
  const [subscriptions, setSubscriptions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isDevMode, setIsDevMode] = useState(false);
  const [showAnalytics, setShowAnalytics] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [toast, setToast] = useState({ visible: false, message: '', type: 'success' });
  const [dbTemplates, setDbTemplates] = useState([]);
  const [collapsedCategories, setCollapsedCategories] = useState({});

  // Настройки приложения
  const [appSettings, setAppSettings] = useState(() => {
    const saved = localStorage.getItem('subfy_settings');
    const defaults = {
      notificationsEnabled: true,
      firstReminder: { days: 1, time: '09:00' },
      secondReminder: { days: -1, time: '09:00' },
      categoryOrder: null,
      hiddenCategories: [],
    };
    return saved ? { ...defaults, ...JSON.parse(saved) } : defaults;
  });

  // Custom categories state
  const [customCategories, setCustomCategories] = useState(() => {
    const saved = localStorage.getItem('subfy_custom_categories');
    return saved ? JSON.parse(saved) : [];
  });

  const [deletedDefaultCategories, setDeletedDefaultCategories] = useState(() => {
    const saved = localStorage.getItem('subfy_deleted_default_categories');
    return saved ? JSON.parse(saved) : [];
  });

  // Add a new custom category with chosen color
  const addCustomCategory = (name, color = '#EF4444') => {
    const newCategory = {
      id: `custom-${Date.now()}`,
      name,
      color,
      isCustom: true,
    };
    setCustomCategories(prev => {
      const updated = [...prev, newCategory];
      localStorage.setItem('subfy_custom_categories', JSON.stringify(updated));
      return updated;
    });
  };

  // Delete any category (custom or default)
  const deleteCategory = (catId) => {
    const isCustom = customCategories.some(c => c.id === catId);
    const allCats = [...CATEGORIES, ...customCategories];
    const deletedCat = allCats.find(c => c.id === catId);

    if (isCustom) {
      setCustomCategories(prev => {
        const updated = prev.filter(c => c.id !== catId);
        localStorage.setItem('subfy_custom_categories', JSON.stringify(updated));
        return updated;
      });
    } else {
      setDeletedDefaultCategories(prev => {
        const updated = [...prev, catId];
        localStorage.setItem('subfy_deleted_default_categories', JSON.stringify(updated));
        return updated;
      });
    }

    // Reassign affected subscriptions to "Другое"
    if (deletedCat && deletedCat.name !== 'Другое') {
      setSubscriptions(prev => prev.map(sub =>
        sub.category === deletedCat.name ? { ...sub, category: 'Другое' } : sub
      ));
    }
  };

  const effectiveTemplates = useMemo(() => {
    return dbTemplates.length > 0 ? dbTemplates.map(normalizeTemplate) : SUBSCRIPTION_TEMPLATES;
  }, [dbTemplates]);

  const allCategories = useMemo(() => [
    ...CATEGORIES.filter(c => !deletedDefaultCategories.includes(c.id)),
    ...customCategories
  ], [customCategories, deletedDefaultCategories]);

  const groupedSubscriptions = useMemo(() => {
    const order = appSettings.categoryOrder || allCategories.map(c => c.id);

    const orderedCats = order
      .map(id => allCategories.find(c => c.id === id))
      .filter(Boolean);

    // Add any new categories not in order yet
    allCategories.forEach(cat => {
      if (!order.includes(cat.id)) {
        orderedCats.push(cat);
      }
    });

    const groups = {};
    orderedCats.forEach(cat => {
      const catSubs = subscriptions.filter(sub => sub.category === cat.name);
      if (catSubs.length > 0) {
        groups[cat.name] = { ...cat, subscriptions: catSubs };
      }
    });
    const uncategorized = subscriptions.filter(sub =>
      !allCategories.some(cat => cat.name === sub.category)
    );
    if (uncategorized.length > 0) {
      groups['Без категории'] = { id: 'uncategorized', name: 'Без категории', color: '#6B7280', subscriptions: uncategorized };
    }
    return groups;
  }, [subscriptions, allCategories, appSettings]);

  // Сохранение настроек (localStorage + синхронизация в БД)
  useEffect(() => {
    localStorage.setItem('subfy_settings', JSON.stringify(appSettings));
    // Синхронизируем в БД (fire-and-forget)
    if (user?.id && !isDevMode && SUPABASE_URL) {
      api.saveNotificationSettings(user.id, appSettings).catch(() => {});
    }
  }, [appSettings]);

  // Сохранение темы
  useEffect(() => {
    localStorage.setItem('subfy_theme', theme);
  }, [theme]);

  // Инициализация Telegram WebApp
  useEffect(() => {
    const tg = getTelegram();
    if (tg) {
      tg.ready();
      tg.expand();

      // Request full screen mode for Telegram 2.0
      if (tg.requestFullscreen) {
        tg.requestFullscreen();
      }

      // Disable swipe-to-close gesture
      if (tg.disableVerticalSwipes) {
        tg.disableVerticalSwipes();
      }

      // Set up CSS variables for Telegram safe area insets
      const updateSafeAreaInsets = () => {
        const safeAreaTop = tg.safeAreaInset?.top || 0;
        const safeAreaBottom = tg.safeAreaInset?.bottom || 0;
        const contentSafeAreaTop = tg.contentSafeAreaInset?.top || 0;
        const contentSafeAreaBottom = tg.contentSafeAreaInset?.bottom || 0;

        document.documentElement.style.setProperty('--tg-safe-area-top', `${safeAreaTop}px`);
        document.documentElement.style.setProperty('--tg-safe-area-bottom', `${safeAreaBottom}px`);
        document.documentElement.style.setProperty('--tg-content-safe-area-top', `${contentSafeAreaTop}px`);
        document.documentElement.style.setProperty('--tg-content-safe-area-bottom', `${contentSafeAreaBottom}px`);
      };

      updateSafeAreaInsets();

      // Listen for viewport changes
      tg.onEvent?.('viewportChanged', updateSafeAreaInsets);
      tg.onEvent?.('safeAreaChanged', updateSafeAreaInsets);
      tg.onEvent?.('contentSafeAreaChanged', updateSafeAreaInsets);
      tg.onEvent?.('fullscreenChanged', updateSafeAreaInsets);

    }
    initializeApp();
  }, []);

  const initializeApp = async () => {
    try {
      // Шаблоны из кэша — мгновенно
      const cachedTemplates = localStorage.getItem('subfy_templates');
      if (cachedTemplates) {
        try { setDbTemplates(JSON.parse(cachedTemplates)); } catch {}
      }

      const tg = getTelegram();
      const initData = tg?.initData;
      const hasSeenOnboarding = localStorage.getItem('subfy_onboarding_complete');

      if (!initData || !SUPABASE_URL) {
        setIsDevMode(true);
        const savedSubs = localStorage.getItem('subfy_subscriptions');
        if (savedSubs) setSubscriptions(JSON.parse(savedSubs));
        setUser({ id: 'dev-user', first_name: 'Developer' });
        setAppState(hasSeenOnboarding ? 'main' : 'onboarding');
        // Обновить шаблоны в фоне
        api.getTemplates().then(({ templates }) => {
          if (templates) {
            setDbTemplates(templates);
            localStorage.setItem('subfy_templates', JSON.stringify(templates));
          }
        }).catch(() => {});
        return;
      }

      // Параллельно: auth (с подписками) + шаблоны из БД
      const [authData, templatesData] = await Promise.all([
        api.auth(initData),
        api.getTemplates().catch(() => ({ templates: null })),
      ]);

      // Обновить шаблоны из БД
      if (templatesData.templates) {
        setDbTemplates(templatesData.templates);
        localStorage.setItem('subfy_templates', JSON.stringify(templatesData.templates));
      }

      setUser(authData.user);

      // Загружаем настройки уведомлений из БД (источник правды — сервер, не localStorage)
      const dbUser = authData.user;
      if (dbUser) {
        const formatTime = (t) => t ? t.substring(0, 5) : '09:00'; // "09:00:00" → "09:00"
        setAppSettings(prev => ({
          ...prev,
          notificationsEnabled: dbUser.notifications_enabled ?? prev.notificationsEnabled,
          firstReminder: {
            days: dbUser.first_reminder_days ?? prev.firstReminder?.days ?? 1,
            time: formatTime(dbUser.first_reminder_time) || prev.firstReminder?.time || '09:00',
          },
          secondReminder: {
            days: dbUser.second_reminder_days ?? prev.secondReminder?.days ?? -1,
            time: formatTime(dbUser.second_reminder_time) || prev.secondReminder?.time || '09:00',
          },
        }));
      }

      // Подписки приходят вместе с auth — отдельный запрос не нужен
      setSubscriptions(authData.subscriptions || []);
      setAppState(hasSeenOnboarding ? 'main' : 'onboarding');
    } catch (err) {
      console.error('Init error:', err);
      setIsDevMode(true);
      const savedSubs = localStorage.getItem('subfy_subscriptions');
      if (savedSubs) setSubscriptions(JSON.parse(savedSubs));
      setUser({ id: 'dev-user', first_name: 'User' });
      const hasSeenOnboarding = localStorage.getItem('subfy_onboarding_complete');
      setAppState(hasSeenOnboarding ? 'main' : 'onboarding');
    }
  };

  const showToast = (message, type = 'success') => {
    setToast({ visible: true, message, type });
  };

  const saveSubscription = async (data) => {
    setIsLoading(true);
    try {
      if (!isDevMode && user?.id) {
        const { subscription } = await api.saveSubscription(user.id, data);
        if (editingSubscription) {
          setSubscriptions(prev => prev.map(s => s.id === subscription.id ? subscription : s));
        } else {
          setSubscriptions(prev => [subscription, ...prev]);
        }
      } else {
        const newSub = { ...data, id: editingSubscription?.id || `local-${Date.now()}` };
        if (editingSubscription) {
          setSubscriptions(prev => {
            const updated = prev.map(s => s.id === newSub.id ? newSub : s);
            localStorage.setItem('subfy_subscriptions', JSON.stringify(updated));
            return updated;
          });
        } else {
          setSubscriptions(prev => {
            const updated = [newSub, ...prev];
            localStorage.setItem('subfy_subscriptions', JSON.stringify(updated));
            return updated;
          });
        }
      }
      
      setShowForm(false);
      showToast(editingSubscription ? 'Подписка сохранена' : 'Подписка добавлена');
      hapticNotificationSuccess();
      setEditingSubscription(null);
    } catch (err) {
      console.error('Save error:', err);
      showToast('Ошибка сохранения', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  const deleteSubscription = async (id) => {
    try {
      if (!isDevMode && user?.id) {
        await api.deleteSubscription(user.id, id);
      }
      setSubscriptions(prev => {
        const updated = prev.filter(s => s.id !== id);
        localStorage.setItem('subfy_subscriptions', JSON.stringify(updated));
        return updated;
      });
    } catch (err) {
      console.error('Delete error:', err);
    }
  };

  const sendTestNotification = async () => {
    if (!user?.id || isDevMode) {
      showToast('Недоступно в режиме разработки', 'error');
      return;
    }
    try {
      await api.sendTestNotification(user.id);
      hapticNotificationSuccess();
      showToast('Тестовое уведомление отправлено!');
    } catch (err) {
      console.error('Test notification error:', err);
      showToast('Не удалось отправить уведомление', 'error');
    }
  };

  const handleOnboardingComplete = () => {
    localStorage.setItem('subfy_onboarding_complete', 'true');
    setAppState('main');
  };

  // Статистика (только месяц и год)
  const stats = useMemo(() => {
    let monthlyTotal = 0;
    subscriptions.forEach(sub => {
      const cycle = BILLING_CYCLES.find(c => c.value === (sub.billing_cycle || sub.billingCycle));
      const currency = CURRENCIES.find(c => c.code === sub.currency);
      const amountInRub = sub.amount * (currency?.rate || 1);
      monthlyTotal += amountInRub * (cycle?.multiplier || 1);
    });
    return {
      monthly: Math.round(monthlyTotal),
      yearly: Math.round(monthlyTotal * 12),
    };
  }, [subscriptions]);

  // Ближайшие списания
  const upcomingBillings = useMemo(() => {
    return subscriptions
      .map(sub => ({
        ...sub,
        nextDate: calculateNextBillingDate(
          sub.first_billing_date || sub.next_billing_date || sub.firstBillingDate,
          sub.billing_cycle || sub.billingCycle
        ),
      }))
      .filter(sub => {
        if (!sub.nextDate) return false;
        const days = getDaysUntil(sub.nextDate);
        return days !== null && days >= 0 && days <= 3;
      })
      .sort((a, b) => a.nextDate - b.nextDate);
  }, [subscriptions]);

  const defaultNotificationSettings = {
    firstReminder: appSettings.firstReminder || { days: 1, time: '09:00' },
    secondReminder: appSettings.secondReminder || { days: -1, time: '09:00' },
  };

  if (appState === 'loading') return <LoadingScreen message="Подключение..." />;

  if (appState === 'onboarding') {
    return (
      <>
        <style>{styles}</style>
        <OnboardingScreen onComplete={handleOnboardingComplete} />
      </>
    );
  }

  return (
    <div className={`app ${theme}`}>
      <style>{styles}</style>

      {/* Overlay screens */}
      {showAnalytics && (
        <div className="screen-overlay">
          <AnalyticsScreen
            subscriptions={subscriptions}
            currencies={CURRENCIES}
            onClose={() => setShowAnalytics(false)}
          />
        </div>
      )}

      {showSettings && (
        <div className="screen-overlay">
          <SettingsScreen
            user={user}
            appSettings={appSettings}
            onUpdateSettings={setAppSettings}
            categories={allCategories}
            customCategories={customCategories}
            onAddCategory={addCustomCategory}
            onDeleteCategory={deleteCategory}
            theme={theme}
            onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            onClose={() => setShowSettings(false)}
            onSendTestNotification={sendTestNotification}
          />
        </div>
      )}

      {/* Header */}
      <header className="app-header">
        <span className="logo">Subfy</span>
        <div className="header-actions">
          <button className="icon-btn" onClick={() => setShowAnalytics(true)}>
            <BarChart3 size={20} />
          </button>
          <button className="icon-btn" onClick={() => setShowSettings(true)}>
            <Settings size={20} />
          </button>
        </div>
      </header>

      {/* Hero Amount */}
      <div className="hero-amount">
        <div className="hero-amount-glow" />
        <span className="hero-amount-text">₽ {stats.monthly.toLocaleString('ru-RU')}</span>
        <span className="hero-badge">В месяц</span>
      </div>

      {/* Tabs */}
      <div className="view-tabs">
        <button className={`view-tab ${activeTab === 'calendar' ? 'active' : ''}`} onClick={() => setActiveTab('calendar')}>
          <Calendar size={18} />
          Календарь
        </button>
        <button className={`view-tab ${activeTab === 'home' ? 'active' : ''}`} onClick={() => setActiveTab('home')}>
          <CreditCard size={18} />
          Подписки
        </button>
      </div>

      {/* Content */}
      <div className="content">
        {activeTab === 'home' ? (
          <>
            {upcomingBillings.length > 0 && (
              <>
                <div className="section-header">
                  <h2 className="section-title">Ближайшие списания</h2>
                </div>
                <div className="upcoming-list">
                  {upcomingBillings.map(sub => {
                    const currency = CURRENCIES.find(c => c.code === sub.currency);
                    const daysUntil = getDaysUntil(sub.nextDate);
                    const daysLabel = daysUntil === 0 ? 'Сегодня' : daysUntil === 1 ? 'Завтра' : `Через ${daysUntil} дн.`;
                    return (
                      <div key={sub.id} className={`upcoming-item ${daysUntil === 0 ? 'today' : ''}`}>
                        <Logo domain={sub.domain} emoji={sub.icon} color={sub.color} size={36} logoUrl={sub.logo_url} />
                        <div className="upcoming-info">
                          <div className="upcoming-name">{sub.name}</div>
                          <div className="upcoming-date">{daysLabel}</div>
                        </div>
                        <div className="upcoming-amount">{sub.amount} {currency?.symbol}</div>
                      </div>
                    );
                  })}
                </div>
              </>
            )}

            <div className="section-header">
              <h2 className="section-title">Все подписки</h2>
              <span className="section-count">{subscriptions.length}</span>
            </div>

            {subscriptions.length === 0 ? (
              <div className="empty-state">
                <div className="empty-icon">📦</div>
                <h3 className="empty-title">Нет подписок</h3>
                <p className="empty-text">Добавьте первую подписку</p>
                <button className="empty-btn" onClick={() => {
                  hapticFeedbackForCreate();
                  setShowForm(true);
                }}>
                  <Plus size={20} />
                  Добавить
                </button>
              </div>
            ) : (
              Object.entries(groupedSubscriptions).map(([catName, group]) => (
                <div key={catName} className="category-group">
                  <button
                    className="category-group-header"
                    onClick={() => setCollapsedCategories(prev => ({
                      ...prev, [catName]: !prev[catName]
                    }))}
                  >
                    <div className="category-group-dot" style={{ background: group.color }} />
                    <span className="category-group-name">{catName}</span>
                    <span className="category-group-count">{group.subscriptions.length}</span>
                    <ChevronRight
                      size={16}
                      className={`category-group-chevron ${collapsedCategories[catName] ? '' : 'expanded'}`}
                    />
                  </button>
                  {!collapsedCategories[catName] && (
                    <div className="subscriptions-list">
                      {group.subscriptions.map(sub => (
                        <SubscriptionCard
                          key={sub.id}
                          subscription={sub}
                          onEdit={(s) => {
                            setEditingSubscription(s);
                            setShowForm(true);
                          }}
                          onDelete={deleteSubscription}
                          currencies={CURRENCIES}
                        />
                      ))}
                    </div>
                  )}
                </div>
              ))
            )}
          </>
        ) : (
          <CalendarView
            subscriptions={subscriptions}
            currencies={CURRENCIES}
            onOpenForm={(date) => {
              setPreselectedDate(date);
              setEditingSubscription(null);
              setShowForm(true);
            }}
            onEditSubscription={(sub) => {
              setEditingSubscription(sub);
              setShowForm(true);
            }}
          />
        )}
      </div>

      {/* Form Modal */}
      {showForm && (
        <SubscriptionForm
          onClose={() => { setShowForm(false); setEditingSubscription(null); setPreselectedDate(null); }}
          onSave={saveSubscription}
          editData={editingSubscription}
          templates={effectiveTemplates}
          isLoading={isLoading}
          defaultNotificationSettings={defaultNotificationSettings}
          customCategories={customCategories}
          onAddCategory={addCustomCategory}
          categories={allCategories}
          preselectedDate={preselectedDate}
        />
      )}

      {/* Toast */}
      <Toast
        message={toast.message}
        visible={toast.visible}
        type={toast.type}
        onHide={() => setToast({ ...toast, visible: false })}
      />
    </div>
  );
}

// ============================================
// СТИЛИ
// ============================================
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }

  :root {
    --tg-safe-area-top: 0px;
    --tg-safe-area-bottom: 0px;
    --tg-content-safe-area-top: 0px;
    --tg-content-safe-area-bottom: 0px;
  }

  html, body, #root {
    height: 100%;
    overflow: hidden;
  }

  body {
    font-family: 'Manrope', -apple-system, BlinkMacSystemFont, sans-serif;
    background: var(--bg-primary);
    overscroll-behavior: none;
    user-select: none;
    -webkit-user-select: none;
  }

  .app {
    --bg-primary: #0a0a0a;
    --bg-secondary: #141414;
    --bg-tertiary: #1a1a1a;
    --text-primary: #ffffff;
    --text-secondary: #888888;
    --accent: #6366f1;
    --accent-secondary: #8b5cf6;
    --border: #222222;
    --danger: #ef4444;
    --success: #10b981;
    
    display: flex;
    flex-direction: column;
    height: 100%;
    max-width: 100%;
    margin: 0 auto;
    background: var(--bg-primary);
    color: var(--text-primary);
    overflow: hidden;
  }

  .app.light {
    --bg-primary: #ffffff;
    --bg-secondary: #f5f5f5;
    --bg-tertiary: #eeeeee;
    --text-primary: #0a0a0a;
    --text-secondary: #666666;
    --border: #e0e0e0;
  }

  /* Toast */
  .toast {
    position: fixed;
    bottom: 100px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--success);
    color: white;
    padding: 12px 20px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.875rem;
    font-weight: 600;
    z-index: 2000;
    animation: toastIn 0.3s ease;
    box-shadow: 0 4px 20px rgba(0,0,0,0.3);
  }

  .toast.error { background: var(--danger); }

  .toast.leaving {
    animation: toastOut 0.3s ease forwards;
  }

  @keyframes toastIn {
    from { opacity: 0; transform: translateX(-50%) translateY(20px); }
    to { opacity: 1; transform: translateX(-50%) translateY(0); }
  }

  @keyframes toastOut {
    from { opacity: 1; transform: translateX(-50%) translateY(0); }
    to { opacity: 0; transform: translateX(-50%) translateY(20px); }
  }

  /* Loading Screen */
  .loading-screen {
    position: fixed;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--bg-primary);
  }

  .loading-content { text-align: center; }

  .loading-logo {
    font-size: 2rem;
    font-weight: 800;
    background: linear-gradient(135deg, var(--accent), var(--accent-secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 24px;
  }

  .loading-spinner {
    animation: spin 1s linear infinite;
    color: var(--accent);
    margin-bottom: 16px;
  }

  .loading-message { color: var(--text-secondary); font-size: 0.875rem; }

  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  .spin { animation: spin 1s linear infinite; }

  /* Onboarding */
  .onboarding {
    position: fixed;
    inset: 0;
    display: flex;
    flex-direction: column;
    background: var(--bg-primary);
    color: var(--text-primary);
  }

  .onboarding-slides {
    flex: 1;
    overflow: hidden;
    padding-top: calc(var(--tg-safe-area-top) + var(--tg-content-safe-area-top));
  }

  .slides-track {
    display: flex;
    height: 100%;
    transition: transform 0.3s ease;
  }

  .slide {
    min-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px 32px;
    text-align: center;
  }

  .slide-emoji { font-size: 80px; margin-bottom: 32px; }
  .slide-title { font-size: 2rem; font-weight: 800; margin-bottom: 8px; }
  .slide-subtitle { font-size: 1.5rem; font-weight: 600; color: var(--accent); margin-bottom: 16px; }
  .slide-description { font-size: 1rem; color: var(--text-secondary); max-width: 280px; line-height: 1.5; }

  .onboarding-footer {
    padding: 24px 32px;
    padding-bottom: calc(24px + var(--tg-safe-area-bottom));
  }

  .dots { display: flex; justify-content: center; gap: 8px; margin-bottom: 24px; }

  .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    border: none;
    background: var(--border);
    cursor: pointer;
    transition: all 0.2s;
  }

  .dot.active {
    width: 24px;
    border-radius: 4px;
    background: var(--accent);
  }

  .next-btn, .start-btn {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 16px;
    border: none;
    border-radius: 12px;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
  }

  .next-btn { background: var(--bg-secondary); color: var(--text-primary); }
  .start-btn { background: var(--accent); color: white; }

  /* Header */
  .app-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    padding-top: calc(12px + var(--tg-safe-area-top) + var(--tg-content-safe-area-top));
    background: var(--bg-primary);
    flex-shrink: 0;
  }

  .logo {
    font-size: 1.5rem;
    font-weight: 800;
    background: linear-gradient(135deg, var(--accent), var(--accent-secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .header-actions { display: flex; gap: 8px; }

  .icon-btn {
    width: 40px;
    height: 40px;
    border-radius: 12px;
    border: none;
    background: var(--bg-secondary);
    color: var(--text-primary);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;
  }

  .icon-btn:active { transform: scale(0.95); }
  .icon-btn.primary { background: var(--accent); color: white; }
  .icon-btn.delete:active { background: var(--danger); color: white; }

  /* Hero Amount */
  .hero-amount {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 16px 16px 12px;
    position: relative;
    flex-shrink: 0;
  }

  .hero-amount-glow {
    position: absolute;
    width: 180px;
    height: 80px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: radial-gradient(ellipse, var(--accent) 0%, transparent 70%);
    opacity: 0.2;
    filter: blur(30px);
    pointer-events: none;
  }

  .hero-amount-text {
    font-size: 2.75rem;
    font-weight: 800;
    color: var(--text-primary);
    position: relative;
    z-index: 1;
    line-height: 1;
  }

  .hero-badge {
    display: inline-block;
    margin-top: 8px;
    padding: 4px 14px;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 600;
    background: rgba(100, 180, 80, 0.2);
    color: #6ab854;
    position: relative;
    z-index: 1;
  }

  /* Tabs */
  .view-tabs {
    display: flex;
    gap: 8px;
    margin: 0 16px 16px;
    background: var(--bg-secondary);
    padding: 4px;
    border-radius: 12px;
    flex-shrink: 0;
  }

  .view-tab {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding: 10px;
    border: none;
    background: transparent;
    color: var(--text-secondary);
    font-size: 0.875rem;
    font-weight: 600;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.2s;
  }

  .view-tab.active { background: var(--accent); color: white; }

  /* Content */
  .content {
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 0 16px 16px;
    padding-bottom: calc(16px + var(--tg-safe-area-bottom));
    -webkit-overflow-scrolling: touch;
  }

  /* Sections */
  .section-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;
  }

  .section-title { font-size: 1rem; font-weight: 700; }

  .section-count {
    font-size: 0.75rem;
    color: var(--text-secondary);
    background: var(--bg-secondary);
    padding: 4px 10px;
    border-radius: 20px;
  }

  /* Upcoming List */
  .upcoming-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 20px;
  }

  .upcoming-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px;
    background: var(--bg-secondary);
    border-radius: 12px;
  }

  .upcoming-item.today { border-left: 3px solid var(--danger); }

  .upcoming-info { flex: 1; min-width: 0; }
  .upcoming-name { font-weight: 600; font-size: 0.875rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .upcoming-date { font-size: 0.75rem; color: var(--text-secondary); }
  .upcoming-amount { font-weight: 700; font-size: 0.875rem; flex-shrink: 0; }

  /* Category Groups */
  .category-group { margin-bottom: 12px; }

  .category-group-header {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 12px;
    background: var(--bg-secondary);
    border: none;
    border-radius: 12px;
    color: var(--text-primary);
    cursor: pointer;
    margin-bottom: 8px;
  }

  .category-group-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    flex-shrink: 0;
  }

  .category-group-name {
    flex: 1;
    text-align: left;
    font-weight: 600;
    font-size: 0.875rem;
  }

  .category-group-count {
    font-size: 0.75rem;
    color: var(--text-secondary);
    padding: 2px 8px;
    background: var(--bg-tertiary);
    border-radius: 10px;
  }

  .category-group-chevron {
    color: var(--text-secondary);
    transition: transform 0.2s;
    transform: rotate(0deg);
  }

  .category-group-chevron.expanded {
    transform: rotate(90deg);
  }

  /* Subscription Cards with Swipe */
  .subscriptions-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .sub-card-wrapper {
    position: relative;
    overflow: hidden;
    border-radius: 16px;
  }

  .sub-card-swipe-bg {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 80px;
    background: var(--danger);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0 16px 16px 0;
  }

  .swipe-delete-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    color: white;
    background: none;
    border: none;
    font-size: 0.625rem;
    font-weight: 600;
  }

  .sub-card {
    background: var(--bg-secondary);
    border-radius: 16px;
    overflow: hidden;
    display: flex;
    position: relative;
    z-index: 1;
  }

  .sub-card-accent {
    width: 4px;
    background: var(--accent);
    flex-shrink: 0;
  }

  .sub-card-content {
    flex: 1;
    padding: 14px;
    min-width: 0;
  }

  .sub-card-header {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .sub-info { flex: 1; min-width: 0; }
  .sub-name { font-size: 0.9375rem; font-weight: 700; margin-bottom: 2px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

  .sub-price-inline {
    display: flex;
    align-items: baseline;
    gap: 2px;
    font-size: 0.8125rem;
    color: var(--text-secondary);
  }

  .sub-price-inline .price-amount { font-weight: 700; color: var(--text-primary); }

  .sub-edit-btn {
    width: 32px;
    height: 32px;
    border: none;
    background: var(--bg-tertiary);
    color: var(--text-secondary);
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    transition: all 0.2s;
  }

  .sub-edit-btn:active { background: var(--accent); color: white; }

  .sub-next {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 0.75rem;
    color: var(--text-secondary);
    background: var(--bg-tertiary);
    padding: 6px 10px;
    border-radius: 20px;
    flex-shrink: 0;
  }

  .sub-next.warning { background: rgba(245, 158, 11, 0.12); color: #F59E0B; }
  .sub-next.soon { background: rgba(239, 68, 68, 0.1); color: var(--danger); }

  /* Confirm Modal */
  .confirm-modal {
    background: var(--bg-secondary);
    border-radius: 20px;
    padding: 24px;
    width: calc(100% - 48px);
    max-width: 320px;
    text-align: center;
    animation: confirmPopIn 0.2s ease;
  }

  @keyframes confirmPopIn {
    from { opacity: 0; transform: scale(0.9); }
    to { opacity: 1; transform: scale(1); }
  }

  .confirm-modal h3 { font-size: 1.125rem; font-weight: 700; margin-bottom: 8px; }
  .confirm-modal p { color: var(--text-secondary); font-size: 0.875rem; margin-bottom: 20px; }

  .confirm-actions { display: flex; gap: 12px; }

  .cancel-btn, .delete-confirm-btn {
    flex: 1;
    padding: 12px;
    border-radius: 12px;
    font-size: 0.9375rem;
    font-weight: 600;
    border: none;
    cursor: pointer;
  }

  .cancel-btn { background: var(--bg-tertiary); color: var(--text-primary); }
  .delete-confirm-btn { background: var(--danger); color: white; }

  /* Empty State */
  .empty-state { text-align: center; padding: 48px 32px; }
  .empty-icon { font-size: 3rem; margin-bottom: 16px; }
  .empty-title { font-size: 1.125rem; font-weight: 700; margin-bottom: 8px; }
  .empty-text { color: var(--text-secondary); margin-bottom: 20px; font-size: 0.875rem; }

  .empty-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 12px 24px;
    background: var(--accent);
    color: white;
    border: none;
    border-radius: 12px;
    font-size: 0.9375rem;
    font-weight: 600;
    cursor: pointer;
  }

  /* Modal */
  .modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: stretch;
    justify-content: center;
    z-index: 1000;
  }

  .modal-overlay.confirm-overlay {
    align-items: center;
    animation: fadeOverlayIn 0.2s ease;
  }

  @keyframes fadeOverlayIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  .modal {
    background: var(--bg-primary);
    width: 100%;
    height: 100%;
    overflow: hidden;
    animation: slideUp 0.3s ease;
  }

  .modal.closing {
    animation: slideDown 0.3s ease forwards;
  }

  .subscription-modal {
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    height: 100vh;
  }

  @keyframes slideUp {
    from { transform: translateY(100%); }
    to { transform: translateY(0); }
  }

  @keyframes slideDown {
    from { transform: translateY(0); }
    to { transform: translateY(100%); }
  }

  /* Screen transitions */
  @keyframes screenSlideIn {
    from { transform: translateX(100%); opacity: 0.8; }
    to { transform: translateX(0); opacity: 1; }
  }

  @keyframes screenSlideOut {
    from { transform: translateX(0); opacity: 1; }
    to { transform: translateX(100%); opacity: 0.8; }
  }

  .screen-overlay {
    position: fixed;
    inset: 0;
    z-index: 900;
  }

  .screen-enter {
    animation: screenSlideIn 0.35s cubic-bezier(0.32, 0.72, 0, 1);
  }

  .screen-exit {
    animation: screenSlideOut 0.3s cubic-bezier(0.32, 0.72, 0, 1) forwards;
  }

  .modal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 20px;
    padding-top: calc(16px + var(--tg-safe-area-top) + var(--tg-content-safe-area-top));
    border-bottom: 1px solid var(--border);
    position: sticky;
    top: 0;
    background: var(--bg-primary);
    z-index: 10;
    flex-shrink: 0;
  }

  .modal-header h2 { font-size: 1rem; font-weight: 700; }

  .back-btn {
    width: 32px;
    height: 32px;
    border-radius: 8px;
    border: none;
    background: var(--bg-secondary);
    color: var(--text-primary);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Template Selector */
  .template-selector {
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow: hidden;
  }

  .template-selector-sticky {
    padding: 16px 16px 0;
    flex-shrink: 0;
  }

  .template-selector-scroll {
    flex: 1;
    overflow-y: auto;
    padding: 0 16px 16px;
    padding-bottom: calc(16px + var(--tg-safe-area-bottom));
    -webkit-overflow-scrolling: touch;
  }

  .custom-sub-btn {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 14px 16px;
    background: var(--bg-secondary);
    border: 2px dashed var(--border);
    border-radius: 14px;
    cursor: pointer;
    margin-bottom: 16px;
    color: var(--text-primary);
    transition: all 0.2s;
  }

  .custom-sub-btn:active { transform: scale(0.98); }

  .custom-sub-btn span {
    flex: 1;
    text-align: left;
    font-weight: 600;
    font-size: 0.9375rem;
  }

  .custom-sub-icon {
    width: 40px;
    height: 40px;
    background: var(--accent);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .custom-sub-chevron {
    color: var(--text-secondary);
    flex-shrink: 0;
  }

  .template-divider {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 16px;
    color: var(--text-secondary);
    font-size: 0.75rem;
  }

  .template-divider::before,
  .template-divider::after {
    content: '';
    flex: 1;
    height: 1px;
    background: var(--border);
  }

  .search-box {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 16px;
    background: var(--bg-secondary);
    border-radius: 12px;
    margin-bottom: 16px;
  }

  .search-box input {
    flex: 1;
    border: none;
    background: transparent;
    font-size: 1rem;
    color: var(--text-primary);
    outline: none;
  }

  .search-box svg { color: var(--text-secondary); flex-shrink: 0; }

  .category-tabs {
    display: flex;
    gap: 8px;
    overflow-x: auto;
    padding-bottom: 12px;
    margin-bottom: 8px;
    -webkit-overflow-scrolling: touch;
  }

  .category-tabs::-webkit-scrollbar { display: none; }

  .cat-tab {
    padding: 8px 14px;
    border: none;
    background: var(--bg-secondary);
    color: var(--text-secondary);
    border-radius: 20px;
    font-size: 0.8125rem;
    font-weight: 600;
    cursor: pointer;
    white-space: nowrap;
    flex-shrink: 0;
  }

  .cat-tab.active { background: var(--accent); color: white; }

  .template-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }

  @media (min-width: 480px) {
    .template-grid { grid-template-columns: repeat(3, 1fr); }
  }

  @media (min-width: 768px) {
    .template-grid { grid-template-columns: repeat(4, 1fr); }
  }

  .template-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 16px 8px;
    background: var(--bg-secondary);
    border: 2px solid transparent;
    border-radius: 16px;
    cursor: pointer;
    transition: all 0.2s;
  }

  .template-item:active { transform: scale(0.97); }

  .template-icon {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .template-item span { font-size: 0.875rem; font-weight: 600; text-align: center; line-height: 1.3; color: var(--text-primary); }

  /* Subscription Form */
  .subscription-form {
    padding: 16px;
    padding-bottom: calc(16px + var(--tg-safe-area-bottom));
    overflow-y: auto;
    overflow-x: hidden;
    flex: 1;
    width: 100%;
    max-width: 100%;
  }

  .form-preview {
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 16px;
    background: var(--bg-secondary);
    border-radius: 14px;
    margin-bottom: 20px;
  }

  .preview-info h3 { font-size: 1.125rem; font-weight: 700; }
  .preview-info p { color: var(--text-secondary); font-size: 0.875rem; }

  .form-section { margin-bottom: 16px; width: 100%; }

  .form-section label {
    display: block;
    font-size: 0.8125rem;
    font-weight: 600;
    color: var(--text-secondary);
    margin-bottom: 8px;
  }

  .form-section input,
  .form-section select {
    width: 100%;
    padding: 12px 14px;
    background: var(--bg-secondary);
    border: 2px solid var(--border);
    border-radius: 12px;
    font-size: 1rem;
    color: var(--text-primary);
    outline: none;
    transition: border-color 0.2s;
  }

  .form-section input:focus,
  .form-section select:focus { border-color: var(--accent); }

  /* Date input fix for iOS */
  .form-section input[type="date"] {
    -webkit-appearance: none;
    appearance: none;
    min-height: 44px;
    max-height: 48px;
    line-height: 1.2;
  }

  .form-section input[type="date"]::-webkit-date-and-time-value {
    text-align: left;
  }

  .form-row { display: flex; gap: 12px; }
  .flex-1 { flex: 1; }

  /* Amount input with compact currency selector */
  .amount-row {
    display: flex;
    gap: 10px;
    align-items: stretch;
  }

  .amount-input {
    flex: 1;
    padding: 16px 18px;
    background: var(--bg-secondary);
    border: 2px solid var(--border);
    border-radius: 14px;
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--text-primary);
    outline: none;
    transition: border-color 0.2s;
  }

  .amount-input:focus { border-color: var(--accent); }
  .amount-input::placeholder { color: var(--text-secondary); font-weight: 500; }

  .currency-selector-compact {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .currency-btn-sm {
    padding: 8px 12px;
    border: 1.5px solid var(--border);
    background: var(--bg-secondary);
    border-radius: 8px;
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--text-secondary);
    cursor: pointer;
    transition: all 0.2s;
  }

  .currency-btn-sm.active {
    border-color: var(--accent);
    background: rgba(99, 102, 241, 0.1);
    color: var(--accent);
  }

  .currency-selector { display: flex; gap: 8px; }

  .currency-btn {
    flex: 1;
    padding: 12px;
    border: 2px solid var(--border);
    background: var(--bg-secondary);
    border-radius: 12px;
    font-size: 1rem;
    font-weight: 700;
    color: var(--text-primary);
    cursor: pointer;
  }

  .currency-btn.active { border-color: var(--accent); background: rgba(99, 102, 241, 0.1); }

  .cycle-selector-main {
    display: flex;
    gap: 8px;
    margin-bottom: 8px;
  }

  .cycle-btn {
    flex: 1;
    padding: 12px 8px;
    border: 2px solid var(--border);
    background: var(--bg-secondary);
    border-radius: 10px;
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--text-primary);
    cursor: pointer;
  }

  .cycle-btn.active { border-color: var(--accent); background: rgba(99, 102, 241, 0.1); }

  .other-period-link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 10px 14px;
    background: transparent;
    border: none;
    color: var(--accent);
    font-size: 0.875rem;
    font-weight: 600;
    cursor: pointer;
  }

  .other-period-link.selected { color: var(--success); }

  .settings-row-hint {
    font-size: 0.6875rem;
    color: var(--text-secondary);
    margin: 2px 0 0;
    font-weight: 400;
    line-height: 1.3;
  }

  .custom-category-input {
    display: flex;
    gap: 8px;
    margin-top: 10px;
  }

  .custom-category-input input {
    flex: 1;
    padding: 10px 14px;
    background: var(--bg-secondary);
    border: 2px solid var(--border);
    border-radius: 10px;
    font-size: 0.875rem;
    color: var(--text-primary);
    outline: none;
  }

  .custom-category-input input:focus { border-color: var(--accent); }

  .add-category-btn {
    padding: 10px 14px;
    background: var(--accent);
    border: none;
    border-radius: 10px;
    color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .add-category-btn:disabled { opacity: 0.5; cursor: not-allowed; }

  /* Notification Section */
  .notification-section {
    background: var(--bg-secondary);
    border-radius: 14px;
    padding: 16px;
    margin-bottom: 16px;
  }

  .notification-header {
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 700;
    margin-bottom: 16px;
  }

  .toggle-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    font-size: 0.875rem;
  }

  .toggle {
    position: relative;
    width: 48px;
    height: 28px;
    display: block;
  }

  .toggle input { opacity: 0; width: 0; height: 0; }

  .toggle-slider {
    position: absolute;
    cursor: pointer;
    inset: 0;
    background: var(--border);
    border-radius: 28px;
    transition: 0.3s;
  }

  .toggle-slider:before {
    content: '';
    position: absolute;
    height: 22px;
    width: 22px;
    left: 3px;
    bottom: 3px;
    background: white;
    border-radius: 50%;
    transition: 0.3s;
  }

  .toggle input:checked + .toggle-slider { background: var(--accent); }
  .toggle input:checked + .toggle-slider:before { transform: translateX(20px); }

  .form-section.compact { margin-bottom: 12px; }
  .form-section.compact label { margin-bottom: 6px; }

  .reminder-selector, .time-selector {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }

  .reminder-btn, .time-btn {
    padding: 8px 12px;
    border: 2px solid var(--border);
    background: var(--bg-tertiary);
    border-radius: 8px;
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--text-primary);
    cursor: pointer;
  }

  .reminder-btn.active, .time-btn.active { border-color: var(--accent); background: rgba(99, 102, 241, 0.1); }

  .notification-summary {
    margin-top: 12px;
    padding: 10px 12px;
    background: var(--bg-tertiary);
    border-radius: 8px;
    font-size: 0.75rem;
    color: var(--text-secondary);
  }


  .form-logo-btn {
    position: relative;
    cursor: pointer;
    flex-shrink: 0;
  }

  .logo-edit-badge {
    position: absolute;
    bottom: -2px;
    right: -2px;
    width: 20px;
    height: 20px;
    background: var(--accent);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    border: 2px solid var(--bg-primary);
  }

  .logo-picker {
    background: var(--bg-secondary);
    border-radius: 14px;
    padding: 16px;
    margin-bottom: 16px;
  }

  .upload-photo-btn {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 12px;
    background: var(--bg-tertiary);
    border: 2px dashed var(--border);
    border-radius: 10px;
    color: var(--text-secondary);
    font-size: 0.875rem;
    cursor: not-allowed;
    opacity: 0.6;
    margin-top: 12px;
  }

  .badge-dev {
    font-size: 0.625rem;
    padding: 2px 6px;
    background: var(--accent);
    color: white;
    border-radius: 4px;
    font-weight: 700;
  }

  .save-btn {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 14px;
    background: var(--accent);
    color: white;
    border: none;
    border-radius: 12px;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
    margin-top: 20px;
  }

  .save-btn:disabled { opacity: 0.6; }

  /* =============================================
     CARD-BASED FORM LAYOUT
     ============================================= */
  .card-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }

  .card-form-logo {
    position: relative;
    cursor: pointer;
    margin: 8px 0 4px;
    transition: transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);
  }

  .card-form-logo.scaled-up {
    transform: scale(1.15);
  }

  .card-form-logo .logo-edit-badge {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 26px;
    height: 26px;
    background: var(--accent);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    border: 2px solid var(--bg-primary);
  }

  /* Logo Editor Bottom Sheet */
  .logo-sheet-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: flex-end;
    justify-content: center;
    z-index: 1200;
    animation: fadeOverlayIn 0.2s ease;
  }

  @keyframes fadeOverlayIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  .logo-sheet {
    width: 100%;
    background: var(--bg-primary);
    border-radius: 20px 20px 0 0;
    padding: 12px 20px calc(20px + var(--tg-safe-area-bottom, 0px));
    animation: amountSlideUp 0.3s cubic-bezier(0.32, 0.72, 0, 1);
    max-height: 65vh;
    display: flex;
    flex-direction: column;
  }

  .logo-sheet.closing {
    animation: amountSlideDown 0.28s cubic-bezier(0.32, 0.72, 0, 1) forwards;
  }

  .logo-sheet-handle {
    width: 36px;
    height: 4px;
    background: var(--border);
    border-radius: 2px;
    margin: 0 auto 12px;
  }

  .logo-sheet-preview {
    display: flex;
    justify-content: center;
    margin-bottom: 16px;
  }

  .logo-sheet-colors {
    display: flex;
    justify-content: center;
    gap: 12px;
    margin-bottom: 16px;
  }

  .logo-color-btn {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 3px solid transparent;
    cursor: pointer;
    transition: transform 0.15s, border-color 0.15s;
  }

  .logo-color-btn.active {
    border-color: white;
    transform: scale(1.15);
    box-shadow: 0 0 0 1px rgba(0,0,0,0.2);
  }

  .logo-color-btn:active {
    transform: scale(0.9);
  }

  .logo-sheet-tabs {
    display: flex;
    gap: 0;
    background: var(--bg-secondary);
    border-radius: 10px;
    padding: 3px;
    margin-bottom: 16px;
  }

  .logo-sheet-tab {
    flex: 1;
    padding: 8px;
    border: none;
    background: transparent;
    color: var(--text-secondary);
    font-size: 0.875rem;
    font-weight: 600;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s;
  }

  .logo-sheet-tab.active {
    background: var(--bg-primary);
    color: var(--text-primary);
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  }

  .logo-sheet-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 8px;
    overflow-y: auto;
    flex: 1;
    padding-bottom: 8px;
  }

  .logo-grid-item {
    aspect-ratio: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid var(--border);
    background: var(--bg-secondary);
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.15s;
  }

  .logo-grid-item.active {
    border-color: var(--accent);
    background: rgba(99, 102, 241, 0.15);
  }

  .logo-grid-item:active {
    transform: scale(0.93);
  }

  .logo-grid-emoji {
    font-size: 1.5rem;
  }

  .logo-sheet-placeholder {
    grid-column: 1 / -1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 32px 16px;
    text-align: center;
  }

  .logo-sheet-placeholder span {
    font-size: 0.9375rem;
    font-weight: 600;
    color: var(--text-secondary);
  }

  .logo-sheet-placeholder p {
    font-size: 0.75rem;
    color: var(--text-secondary);
    opacity: 0.7;
    margin: 0;
  }

  .settings-card {
    width: 100%;
    background: var(--bg-secondary);
    border-radius: 14px;
    overflow: hidden;
  }

  .settings-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 16px;
    min-height: 48px;
    cursor: pointer;
    gap: 12px;
  }

  .settings-row-left {
    display: flex;
    align-items: center;
    gap: 12px;
    flex-shrink: 0;
  }

  .settings-row-icon {
    width: 32px;
    height: 32px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .settings-row-label {
    font-size: 0.9375rem;
    font-weight: 500;
    color: var(--text-primary);
    white-space: nowrap;
    flex-shrink: 0;
  }

  .settings-row-value {
    display: flex;
    align-items: center;
    gap: 6px;
    color: var(--text-secondary);
    font-size: 0.9375rem;
    min-width: 0;
  }

  .settings-row-value span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .native-select {
    appearance: none;
    -webkit-appearance: none;
    border: none;
    background: transparent;
    color: var(--text-secondary);
    font-size: 0.9375rem;
    font-family: inherit;
    font-weight: 500;
    padding: 0;
    outline: none;
    cursor: pointer;
    text-align: right;
    direction: rtl;
  }

  .native-select option {
    direction: ltr;
    color: #000;
    background: #fff;
  }

  .settings-row-value-input {
    text-align: right;
    border: none;
    background: transparent;
    padding: 0;
    font-size: 0.9375rem;
    color: var(--text-primary);
    outline: none;
    width: 100%;
    min-width: 0;
    font-family: inherit;
  }

  .settings-row-value-input::placeholder {
    color: var(--text-secondary);
  }

  .settings-row-chevron {
    color: var(--text-secondary);
    opacity: 0.4;
    flex-shrink: 0;
    transition: transform 0.2s;
  }

  .settings-row-chevron.open {
    transform: rotate(90deg);
  }

  .settings-row-divider {
    height: 0.5px;
    background: var(--border);
    margin-left: 16px;
  }

  .settings-date-input {
    border: none;
    background: transparent;
    padding: 4px 0;
    font-size: 0.9375rem;
    color: var(--text-secondary);
    outline: none;
    text-align: right;
    font-family: inherit;
    cursor: pointer;
    min-width: 130px;
  }
  .settings-date-input::-webkit-calendar-picker-indicator {
    filter: var(--calendar-icon-filter, none);
    cursor: pointer;
  }

  .settings-card-expand {
    padding: 8px 16px 16px;
  }


  .notification-expanded {
    padding: 16px;
  }

  /* Period Dropdown (inline in card) */

  /* =============================================
     AMOUNT MODAL (Bottom Sheet)
     ============================================= */
  .amount-modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: flex-end;
    justify-content: center;
    z-index: 1100;
    animation: fadeOverlayIn 0.2s ease;
  }

  @keyframes fadeOverlayIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  .amount-modal {
    width: 100%;
    background: var(--bg-primary);
    border-radius: 20px 20px 0 0;
    padding: 20px 20px calc(20px + var(--tg-safe-area-bottom, 0px));
    animation: amountSlideUp 0.3s cubic-bezier(0.32, 0.72, 0, 1);
  }

  .amount-modal.closing {
    animation: amountSlideDown 0.28s cubic-bezier(0.32, 0.72, 0, 1) forwards;
  }

  @keyframes amountSlideUp {
    from { transform: translateY(100%); }
    to { transform: translateY(0); }
  }

  @keyframes amountSlideDown {
    from { transform: translateY(0); }
    to { transform: translateY(100%); }
  }

  .amount-modal-topbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .currency-capsule-wrapper {
    position: relative;
  }

  .currency-capsule {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 8px 14px;
    background: var(--bg-secondary);
    border: 1.5px solid var(--border);
    border-radius: 20px;
    font-size: 0.8125rem;
    font-weight: 600;
    color: var(--text-primary);
    cursor: pointer;
  }

  .capsule-chevron {
    transition: transform 0.2s;
  }

  .capsule-chevron.open {
    transform: rotate(90deg);
  }

  .currency-dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    margin-top: 6px;
    background: var(--bg-secondary);
    border: 1px solid var(--border);
    border-radius: 12px;
    overflow: hidden;
    z-index: 10;
    min-width: 140px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
    animation: dropdownFadeIn 0.15s ease;
  }

  @keyframes dropdownFadeIn {
    from { opacity: 0; transform: translateY(-4px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .currency-dropdown-item {
    width: 100%;
    padding: 12px 16px;
    border: none;
    background: transparent;
    color: var(--text-primary);
    font-size: 0.875rem;
    font-weight: 500;
    text-align: left;
    cursor: pointer;
    transition: background 0.15s;
  }

  .currency-dropdown-item:active {
    background: var(--bg-tertiary);
  }

  .currency-dropdown-item.active {
    color: var(--accent);
    font-weight: 600;
  }

  .amount-modal-close {
    width: 36px;
    height: 36px;
    border: none;
    background: var(--bg-secondary);
    color: var(--text-secondary);
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.15s;
  }

  .amount-modal-close:active {
    background: var(--bg-tertiary);
  }

  .amount-display-section {
    text-align: center;
    margin-bottom: 28px;
  }

  .amount-display-label {
    display: block;
    font-size: 0.8125rem;
    color: var(--text-secondary);
    margin-bottom: 8px;
    font-weight: 500;
  }

  .amount-display-value {
    display: inline-block;
    font-size: 2.5rem;
    font-weight: 800;
    color: var(--text-primary);
    animation: amountBounce 0.15s ease;
    letter-spacing: -0.02em;
  }

  @keyframes amountBounce {
    0% { transform: scale(1); }
    50% { transform: scale(1.06); }
    100% { transform: scale(1); }
  }

  /* Numpad */
  .numpad {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    margin-bottom: 20px;
  }

  .numpad-key {
    height: 56px;
    border: none;
    background: var(--bg-secondary);
    color: var(--text-primary);
    font-size: 1.375rem;
    font-weight: 600;
    border-radius: 14px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.1s ease, background 0.1s ease;
    -webkit-tap-highlight-color: transparent;
    user-select: none;
  }

  .numpad-key:active {
    transform: scale(0.92);
    background: var(--bg-tertiary);
  }

  .numpad-back {
    background: transparent;
  }

  .numpad-back:active {
    background: var(--bg-secondary);
    transform: scale(0.92);
  }

  .amount-done-btn {
    width: 100%;
    padding: 16px;
    background: white;
    color: #000;
    border: none;
    border-radius: 14px;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
    transition: transform 0.1s ease;
  }

  .amount-done-btn:active {
    transform: scale(0.98);
  }

  /* =============================================
     CATEGORIES BOTTOM SHEET
     ============================================= */
  .categories-sheet-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: flex-end;
    justify-content: center;
    z-index: 1100;
    animation: fadeOverlayIn 0.2s ease;
  }

  .categories-sheet {
    width: 100%;
    max-height: 85vh;
    background: var(--bg-primary);
    border-radius: 20px 20px 0 0;
    padding: 20px 20px calc(20px + var(--tg-safe-area-bottom, 0px));
    animation: amountSlideUp 0.3s cubic-bezier(0.32, 0.72, 0, 1);
    overflow-y: auto;
    display: flex;
    flex-direction: column;
  }

  .categories-sheet.closing {
    animation: amountSlideDown 0.28s cubic-bezier(0.32, 0.72, 0, 1) forwards;
  }

  .categories-sheet-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .categories-sheet-header h3 {
    font-size: 1.125rem;
    font-weight: 700;
    flex: 1;
    text-align: center;
  }

  .categories-list-wrapper {
    flex: 1;
    overflow-y: auto;
  }

  .cat-swipe-wrapper {
    position: relative;
    overflow: hidden;
  }

  .cat-swipe-bg {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 80px;
    background: #EF4444;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .category-list-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
    min-height: 48px;
    background: var(--bg-secondary);
    position: relative;
  }

  .category-list-name {
    font-size: 0.9375rem;
    font-weight: 500;
    color: var(--text-primary);
  }

  .category-color-dot {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    flex-shrink: 0;
  }

  .category-color-dot.clickable {
    cursor: pointer;
    border: 2px solid var(--border);
  }

  .categories-hint {
    font-size: 0.75rem;
    color: var(--text-secondary);
    margin: 12px 0 16px;
    line-height: 1.4;
    padding: 0 4px;
  }

  .new-category-row {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px;
    background: var(--bg-secondary);
    border-radius: 14px;
  }

  .new-category-input {
    flex: 1;
    border: none;
    background: transparent;
    font-size: 0.9375rem;
    color: var(--text-primary);
    outline: none;
    font-family: inherit;
  }

  .new-category-input::placeholder {
    color: var(--text-secondary);
  }

  .new-category-add-btn {
    padding: 6px 14px;
    background: transparent;
    border: none;
    color: var(--text-secondary);
    font-size: 0.875rem;
    font-weight: 600;
    cursor: pointer;
  }

  .new-category-add-btn:not(:disabled) {
    color: var(--accent);
  }

  /* Color Picker Sheet */
  .color-picker-sheet {
    background: var(--bg-secondary);
    border-radius: 20px 20px 0 0;
    padding: 16px 20px 24px;
    margin: 16px -20px calc(-20px - var(--tg-safe-area-bottom, 0px));
    animation: amountSlideUp 0.2s ease;
  }

  .color-picker-handle {
    width: 36px;
    height: 4px;
    background: var(--border);
    border-radius: 2px;
    margin: 0 auto 12px;
  }

  .color-picker-sheet h4 {
    text-align: center;
    font-size: 0.9375rem;
    font-weight: 600;
    margin-bottom: 16px;
  }

  .color-palette {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    justify-content: center;
  }

  .color-palette-item {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: 3px solid transparent;
    cursor: pointer;
    transition: transform 0.15s, border-color 0.15s;
  }

  .color-palette-item.active {
    border-color: white;
    transform: scale(1.1);
  }

  .color-palette-item:active {
    transform: scale(0.9);
  }

  /* =============================================
     SETTINGS SCREEN ADDITIONS
     ============================================= */
  .settings-section-label {
    font-size: 0.6875rem;
    font-weight: 600;
    color: var(--text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    padding: 16px 4px 8px;
  }

  .settings-hint {
    font-size: 0.6875rem;
    color: var(--text-secondary);
    padding: 8px 4px 0;
    font-style: italic;
  }

  .notification-row {
    flex-wrap: wrap;
    gap: 8px;
  }

  .notification-row-controls {
    display: flex;
    align-items: center;
    gap: 8px;
  }


  .time-input-capsule {
    padding: 6px 12px;
    background: var(--bg-tertiary);
    border: none;
    border-radius: 8px;
    font-size: 0.8125rem;
    font-weight: 600;
    color: var(--text-primary);
    outline: none;
    font-family: inherit;
    -webkit-appearance: none;
    appearance: none;
    cursor: pointer;
  }

  .test-notification-btn {
    background: transparent;
    border: none;
    color: #F59E0B;
    font-size: 0.9375rem;
    font-weight: 600;
    cursor: pointer;
    padding: 0;
  }

  .test-notification-btn:active {
    opacity: 0.7;
  }

  /* Period Modal */
  .period-modal {
    background: var(--bg-secondary);
    border-radius: 20px 20px 0 0;
    width: 100%;
    padding-bottom: calc(20px + var(--tg-safe-area-bottom));
  }

  .period-modal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 20px;
    border-bottom: 1px solid var(--border);
  }

  .period-modal-header h3 { font-size: 1rem; font-weight: 700; }

  .close-btn {
    width: 32px;
    height: 32px;
    border: none;
    background: var(--bg-tertiary);
    color: var(--text-primary);
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .period-options { padding: 12px 16px; }

  .period-option {
    width: 100%;
    padding: 14px 16px;
    border: none;
    background: transparent;
    color: var(--text-primary);
    font-size: 1rem;
    font-weight: 500;
    text-align: left;
    cursor: pointer;
    border-radius: 10px;
  }

  .period-option:active { background: var(--bg-tertiary); }
  .period-option.active { color: var(--accent); }

  /* Analytics Screen */
  .analytics-screen, .settings-screen {
    display: flex;
    flex-direction: column;
    height: 100%;
    background: var(--bg-primary);
  }

  .analytics-header, .settings-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    padding-top: calc(12px + var(--tg-safe-area-top) + var(--tg-content-safe-area-top));
    border-bottom: 1px solid var(--border);
    flex-shrink: 0;
  }

  .analytics-header h2, .settings-header h2 { font-size: 1rem; font-weight: 700; }

  .settings-tabs {
    display: flex;
    gap: 8px;
    margin: 12px 16px 0;
    background: var(--bg-secondary);
    padding: 4px;
    border-radius: 12px;
    flex-shrink: 0;
  }

  .settings-tab {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border: none;
    background: transparent;
    color: var(--text-secondary);
    font-size: 0.8125rem;
    font-weight: 600;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.2s;
  }

  .settings-tab.active { background: var(--accent); color: white; }

  .settings-section-desc {
    font-size: 0.75rem;
    color: var(--text-secondary);
    margin-bottom: 12px;
  }

  .save-text-btn {
    background: none;
    border: none;
    color: var(--accent);
    font-size: 0.9375rem;
    font-weight: 600;
    cursor: pointer;
  }

  .analytics-content, .settings-content {
    flex: 1;
    overflow-y: auto;
    padding: 16px;
    padding-bottom: calc(16px + var(--tg-safe-area-bottom));
  }

  /* Profile Section */
  .profile-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 32px 20px;
    background: var(--bg-secondary);
    border-radius: 20px;
  }

  .profile-avatar {
    width: 96px;
    height: 96px;
    border-radius: 50%;
    overflow: hidden;
    margin-bottom: 16px;
    background: var(--accent);
  }

  .profile-avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .avatar-placeholder {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
    font-weight: 700;
    color: white;
    background: linear-gradient(135deg, var(--accent), var(--accent-secondary));
  }

  .profile-name {
    font-size: 1.375rem;
    font-weight: 700;
    margin-bottom: 4px;
    text-align: center;
  }

  .profile-id {
    font-size: 0.875rem;
    color: var(--text-secondary);
    font-family: monospace;
  }

  .version-badge {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding: 12px;
    margin-top: 24px;
    color: var(--text-secondary);
    font-size: 0.75rem;
    cursor: pointer;
  }

  .version-tag {
    padding: 4px 10px;
    background: var(--bg-secondary);
    border-radius: 8px;
    font-weight: 600;
  }

  .version-modal {
    background: var(--bg-secondary);
    border-radius: 20px;
    width: calc(100% - 48px);
    max-width: 320px;
    overflow: hidden;
  }

  .version-modal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 20px;
    border-bottom: 1px solid var(--border);
  }

  .version-modal-header h3 { font-size: 1rem; font-weight: 700; }

  .version-modal-body {
    padding: 24px;
    text-align: center;
  }

  .version-logo {
    font-size: 1.5rem;
    font-weight: 800;
    background: linear-gradient(135deg, var(--accent), var(--accent-secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 8px;
  }

  .version-number {
    display: inline-block;
    padding: 4px 12px;
    background: var(--bg-tertiary);
    border-radius: 8px;
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--text-secondary);
    margin-bottom: 12px;
  }

  .version-desc {
    color: var(--text-secondary);
    font-size: 0.875rem;
    margin-bottom: 20px;
  }

  .contact-btn {
    width: 100%;
    padding: 12px;
    background: var(--accent);
    color: white;
    border: none;
    border-radius: 12px;
    font-size: 0.9375rem;
    font-weight: 600;
    cursor: pointer;
  }

  .analytics-summary {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    margin-bottom: 20px;
  }

  .summary-item {
    background: var(--bg-secondary);
    border-radius: 14px;
    padding: 14px 10px;
    text-align: center;
  }

  .summary-value { display: block; font-size: 1.125rem; font-weight: 800; }
  .summary-label { font-size: 0.6875rem; color: var(--text-secondary); }

  .period-tabs {
    display: flex;
    background: var(--bg-secondary);
    padding: 4px;
    border-radius: 10px;
    margin-bottom: 20px;
  }

  .period-tab {
    flex: 1;
    padding: 10px;
    border: none;
    background: transparent;
    color: var(--text-secondary);
    font-size: 0.875rem;
    font-weight: 600;
    border-radius: 8px;
    cursor: pointer;
  }

  .period-tab.active { background: var(--accent); color: white; }

  .chart-section, .categories-section, .top-section {
    background: var(--bg-secondary);
    border-radius: 14px;
    padding: 16px;
    margin-bottom: 16px;
  }

  .chart-section h3, .categories-section h3, .top-section h3 {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.9375rem;
    font-weight: 700;
    margin-bottom: 16px;
  }

  .bar-chart {
    display: flex;
    align-items: flex-end;
    height: 120px;
    gap: 2px;
  }

  .bar-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    justify-content: flex-end;
  }

  .bar {
    width: 100%;
    background: var(--accent);
    border-radius: 2px 2px 0 0;
    min-height: 2px;
  }

  .bar-label { font-size: 0.5rem; color: var(--text-secondary); margin-top: 4px; }

  .categories-chart { display: flex; gap: 16px; align-items: center; }

  .pie-chart {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: conic-gradient(var(--accent) 0deg 90deg, var(--success) 90deg 180deg, #f59e0b 180deg 270deg, #6b7280 270deg 360deg);
    flex-shrink: 0;
  }

  .categories-list { flex: 1; }

  .category-item {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 0;
    font-size: 0.8125rem;
  }

  .category-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
  .category-name { flex: 1; }
  .category-value { font-weight: 600; }
  .category-percent { color: var(--text-secondary); font-size: 0.75rem; width: 40px; text-align: right; }

  .top-list { display: flex; flex-direction: column; gap: 10px; }

  .top-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    background: var(--bg-tertiary);
    border-radius: 10px;
  }

  .top-rank {
    width: 20px;
    height: 20px;
    background: var(--accent);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.6875rem;
    font-weight: 700;
    flex-shrink: 0;
  }

  .top-info { flex: 1; min-width: 0; }
  .top-name { display: block; font-weight: 600; font-size: 0.875rem; }
  .top-monthly { font-size: 0.6875rem; color: var(--text-secondary); }
  .top-yearly { font-size: 0.8125rem; font-weight: 700; flex-shrink: 0; }

  /* Settings Screen */
  .settings-section {
    background: var(--bg-secondary);
    border-radius: 14px;
    padding: 16px;
    margin-bottom: 16px;
  }

  .settings-section h3 {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 16px;
  }

  .setting-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 0;
    border-bottom: 1px solid var(--border);
  }

  .setting-row:last-child { border-bottom: none; }

  .setting-info { flex: 1; margin-right: 12px; }
  .setting-title { display: flex; align-items: center; gap: 6px; font-weight: 600; font-size: 0.9375rem; }
  .setting-desc { font-size: 0.75rem; color: var(--text-secondary); margin-top: 2px; }

  .settings-subsection {
    background: var(--bg-tertiary);
    border-radius: 10px;
    padding: 14px;
    margin: 12px 0;
  }

  .settings-subsection h4 { font-size: 0.8125rem; font-weight: 600; margin-bottom: 12px; }

  .setting-select { margin-bottom: 12px; }

  .setting-select label {
    display: block;
    font-size: 0.75rem;
    color: var(--text-secondary);
    margin-bottom: 6px;
  }

  .setting-select select {
    width: 100%;
    padding: 10px 12px;
    background: var(--bg-secondary);
    border: 1px solid var(--border);
    border-radius: 8px;
    color: var(--text-primary);
    font-size: 0.875rem;
  }

  .quiet-hours-time {
    display: flex;
    gap: 12px;
    margin-top: 12px;
  }

  .time-input {
    flex: 1;
  }

  .time-input label {
    display: block;
    font-size: 0.75rem;
    color: var(--text-secondary);
    margin-bottom: 4px;
  }

  .time-input input {
    width: 100%;
    padding: 10px;
    background: var(--bg-secondary);
    border: 1px solid var(--border);
    border-radius: 8px;
    color: var(--text-primary);
    font-size: 0.875rem;
  }

  /* Category Management in Settings */
  .category-manage-list {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .category-manage-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 12px;
    background: var(--bg-tertiary);
    border-radius: 10px;
  }

  .category-manage-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    flex-shrink: 0;
  }

  .category-manage-name {
    flex: 1;
    font-weight: 600;
    font-size: 0.875rem;
  }

  .category-manage-actions {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .category-manage-actions button {
    width: 28px;
    height: 28px;
    border: none;
    background: var(--bg-secondary);
    color: var(--text-secondary);
    border-radius: 6px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .category-manage-actions button:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  .toggle.small {
    width: 36px;
    height: 20px;
  }

  .toggle.small .toggle-slider:before {
    height: 16px;
    width: 16px;
    left: 2px;
    bottom: 2px;
  }

  .toggle.small input:checked + .toggle-slider:before {
    transform: translateX(16px);
  }

  .system-settings-link {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 100%;
    padding: 12px;
    background: var(--bg-tertiary);
    border: none;
    border-radius: 10px;
    color: var(--accent);
    font-size: 0.875rem;
    font-weight: 600;
    cursor: pointer;
    margin-top: 12px;
  }

  /* Calendar */
  .calendar-view { padding-bottom: 16px; }

  .calendar-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
  }

  .calendar-header button {
    width: 36px;
    height: 36px;
    border: none;
    background: var(--bg-secondary);
    color: var(--text-primary);
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .calendar-title { text-align: center; }
  .calendar-title h3 { font-size: 1rem; font-weight: 700; text-transform: capitalize; }
  .month-total { font-size: 0.8125rem; color: var(--accent); font-weight: 600; }

  .calendar-weekdays {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 4px;
    margin-bottom: 8px;
  }

  .weekday { text-align: center; font-size: 0.6875rem; font-weight: 600; color: var(--text-secondary); padding: 6px 0; }

  .calendar-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 4px;
  }

  .calendar-day {
    min-height: 52px;
    background: var(--bg-secondary);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 4px 2px;
    cursor: pointer;
    position: relative;
    transition: transform 0.15s;
  }

  .calendar-day:active { transform: scale(0.95); }
  .calendar-day.empty { background: transparent; cursor: default; }
  .calendar-day.empty:active { transform: none; }

  .calendar-day.today {
    box-shadow: inset 0 0 0 2px var(--accent), 0 0 12px rgba(99, 102, 241, 0.3);
  }

  .calendar-day.has-subs { cursor: pointer; }

  .day-logo-container {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 24px;
  }

  .day-logos-pair {
    display: flex;
    gap: 2px;
    align-items: center;
  }

  .day-count-badge {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: var(--accent);
    color: white;
    font-size: 0.5625rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .day-number {
    font-size: 0.6875rem;
    font-weight: 500;
    color: var(--text-secondary);
    line-height: 1;
  }

  .calendar-day.today .day-number { color: var(--accent); font-weight: 700; }

  /* Calendar add button */
  .calendar-add-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 100%;
    padding: 14px;
    margin-top: 16px;
    border: none;
    border-radius: 14px;
    background: var(--accent);
    color: white;
    font-size: 0.9375rem;
    font-weight: 600;
    cursor: pointer;
    transition: transform 0.2s;
    font-family: inherit;
  }

  .calendar-add-btn:active { transform: scale(0.98); }

  /* Bottom Sheet */
  .day-bottom-sheet-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 900;
    animation: sheetOverlayIn 0.3s ease;
  }

  .day-bottom-sheet-overlay.closing {
    animation: sheetOverlayOut 0.25s ease forwards;
  }

  @keyframes sheetOverlayIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes sheetOverlayOut {
    from { opacity: 1; }
    to { opacity: 0; }
  }

  .day-bottom-sheet {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: var(--bg-secondary);
    border-radius: 20px 20px 0 0;
    padding: 12px 16px;
    padding-bottom: calc(16px + var(--tg-safe-area-bottom));
    z-index: 950;
    max-height: 70vh;
    overflow-y: auto;
    animation: sheetSlideUp 0.3s ease-out;
  }

  .day-bottom-sheet.closing {
    animation: sheetSlideDown 0.25s ease forwards;
  }

  @keyframes sheetSlideUp {
    from { transform: translateY(100%); }
    to { transform: translateY(0); }
  }

  @keyframes sheetSlideDown {
    from { transform: translateY(0); }
    to { transform: translateY(100%); }
  }

  .sheet-handle {
    width: 36px;
    height: 4px;
    background: var(--border);
    border-radius: 2px;
    margin: 0 auto 12px;
  }

  .sheet-header {
    display: flex;
    align-items: baseline;
    gap: 8px;
    margin-bottom: 14px;
  }

  .sheet-header h4 {
    font-size: 1.125rem;
    font-weight: 700;
  }

  .sheet-date {
    font-size: 0.8125rem;
    color: var(--text-secondary);
    text-transform: capitalize;
  }

  .sheet-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 12px;
  }

  .sheet-subscription-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px;
    background: var(--bg-tertiary);
    border-radius: 12px;
    cursor: pointer;
    transition: transform 0.15s;
  }

  .sheet-subscription-item:active { transform: scale(0.98); }

  .sheet-sub-info {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
  }

  .sheet-sub-name {
    font-weight: 600;
    font-size: 0.9375rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .sheet-sub-cycle {
    font-size: 0.75rem;
    color: var(--text-secondary);
  }

  .sheet-sub-right {
    display: flex;
    align-items: center;
    gap: 4px;
    flex-shrink: 0;
  }

  .sheet-sub-amount {
    font-weight: 700;
    font-size: 0.9375rem;
  }

  .sheet-chevron {
    color: var(--text-secondary);
  }

  .sheet-add-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    width: 100%;
    padding: 12px;
    border: 2px dashed var(--border);
    border-radius: 12px;
    background: transparent;
    color: var(--text-secondary);
    font-size: 0.875rem;
    font-weight: 600;
    cursor: pointer;
    margin-bottom: 12px;
    font-family: inherit;
    transition: all 0.2s;
  }

  .sheet-add-btn:active {
    border-color: var(--accent);
    color: var(--accent);
  }

  .sheet-total {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 14px;
    background: var(--bg-tertiary);
    border-radius: 12px;
    font-size: 0.875rem;
    color: var(--text-secondary);
    font-weight: 600;
  }

  .sheet-total-amount {
    font-size: 1rem;
    font-weight: 700;
    color: var(--text-primary);
  }
`;
