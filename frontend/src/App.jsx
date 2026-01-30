import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { Plus, X, Calendar, ChevronRight, ChevronLeft, Sun, Moon, Search, Check, Trash2, Edit3, Bell, CreditCard, Loader, Settings, TrendingUp, PieChart, ArrowLeft } from 'lucide-react';

// ============================================
// КОНФИГУРАЦИЯ
// ============================================
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || '';
const AUTH_ENDPOINT = import.meta.env.VITE_AUTH_ENDPOINT || '';
const ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

const API_BASE = SUPABASE_URL ? `${SUPABASE_URL}/functions/v1` : '';
const ENDPOINTS = {
  auth: AUTH_ENDPOINT || `${API_BASE}/telegram-auth`,
  getSubscriptions: `${API_BASE}/get-subscriptions`,
  saveSubscription: `${API_BASE}/save-subscription`,
  deleteSubscription: `${API_BASE}/delete-subscription`,
};

const apiHeaders = {
  'Content-Type': 'application/json',
  'apikey': ANON_KEY,
};

// ============================================
// КОНСТАНТЫ
// ============================================
const SUBSCRIPTION_TEMPLATES = [
  { id: 't1', name: 'Яндекс Плюс', price: 299, color: '#FFCC00', category: 'Экосистема', domain: 'plus.yandex.ru' },
  { id: 't2', name: 'СберПрайм', price: 399, color: '#21A038', category: 'Экосистема', domain: 'sberbank.ru' },
  { id: 't3', name: 'МТС Premium', price: 299, color: '#E30611', category: 'Экосистема', domain: 'mts.ru' },
  { id: 't4', name: 'Тинькофф Pro', price: 399, color: '#FFDD2D', category: 'Экосистема', domain: 'tinkoff.ru' },
  { id: 't5', name: 'Кинопоиск', price: 269, color: '#FF6600', category: 'Видео', domain: 'kinopoisk.ru' },
  { id: 't6', name: 'Okko', price: 399, color: '#6B4EFF', category: 'Видео', domain: 'okko.tv' },
  { id: 't7', name: 'ivi', price: 399, color: '#EA003D', category: 'Видео', domain: 'ivi.ru' },
  { id: 't8', name: 'Netflix', price: 699, color: '#E50914', category: 'Видео', domain: 'netflix.com' },
  { id: 't9', name: 'YouTube Premium', price: 299, color: '#FF0000', category: 'Видео', domain: 'youtube.com' },
  { id: 't10', name: 'Spotify', price: 199, color: '#1DB954', category: 'Музыка', domain: 'spotify.com' },
  { id: 't11', name: 'Яндекс Музыка', price: 249, color: '#FFCC00', category: 'Музыка', domain: 'music.yandex.ru' },
  { id: 't12', name: 'Apple Music', price: 169, color: '#FA2D48', category: 'Музыка', domain: 'apple.com' },
  { id: 't13', name: 'VK Музыка', price: 249, color: '#0077FF', category: 'Музыка', domain: 'vk.com' },
  { id: 't14', name: 'iCloud+', price: 149, color: '#3693F3', category: 'Облако', domain: 'icloud.com' },
  { id: 't15', name: 'Google One', price: 139, color: '#4285F4', category: 'Облако', domain: 'one.google.com' },
  { id: 't16', name: 'Telegram Premium', price: 299, color: '#0088CC', category: 'Другое', domain: 'telegram.org' },
  { id: 't17', name: 'ChatGPT Plus', price: 1900, color: '#10A37F', category: 'Другое', domain: 'openai.com' },
  { id: 't18', name: 'Notion', price: 800, color: '#000000', category: 'Другое', domain: 'notion.so' },
];

const BILLING_CYCLES = [
  { value: 'weekly', label: 'Еженедельно', days: 7, monthlyMultiplier: 4.33, short: 'нед' },
  { value: 'biweekly', label: 'Раз в 2 недели', days: 14, monthlyMultiplier: 2.17, short: '2 нед' },
  { value: 'monthly', label: 'Ежемесячно', days: 30, monthlyMultiplier: 1, short: 'мес' },
  { value: 'quarterly', label: 'Раз в 3 месяца', days: 90, monthlyMultiplier: 0.33, short: 'квартал' },
  { value: 'semiannual', label: 'Раз в 6 месяцев', days: 180, monthlyMultiplier: 0.167, short: 'полгода' },
  { value: 'yearly', label: 'Ежегодно', days: 365, monthlyMultiplier: 0.083, short: 'год' },
];

const CATEGORIES = [
  { value: 'Развлечения', label: 'Развлечения', color: '#FF6B6B' },
  { value: 'Работа', label: 'Работа', color: '#4ECDC4' },
  { value: 'Экосистема', label: 'Экосистема', color: '#45B7D1' },
  { value: 'Видео', label: 'Видео', color: '#96CEB4' },
  { value: 'Музыка', label: 'Музыка', color: '#FFEAA7' },
  { value: 'Облако', label: 'Облако', color: '#DDA0DD' },
  { value: 'Образование', label: 'Образование', color: '#98D8C8' },
  { value: 'Утилиты', label: 'Утилиты', color: '#F7DC6F' },
  { value: 'Другое', label: 'Другое', color: '#B0BEC5' },
];

const CURRENCIES = [
  { code: 'RUB', symbol: '₽', rate: 1 },
  { code: 'USD', symbol: '$', rate: 96 },
  { code: 'EUR', symbol: '€', rate: 104 },
];

const NOTIFICATION_DAYS = [
  { value: 0, label: 'В день списания' },
  { value: 1, label: 'За 1 день' },
  { value: 3, label: 'За 3 дня' },
  { value: 7, label: 'За 7 дней' },
];

const NOTIFICATION_TIMES = [
  { value: 'morning', label: 'Утром (9:00)', hour: 9 },
  { value: 'afternoon', label: 'Днём (14:00)', hour: 14 },
  { value: 'evening', label: 'Вечером (19:00)', hour: 19 },
];

// ============================================
// УТИЛИТЫ
// ============================================
const calculateNextBillingDate = (firstDate, cycle) => {
  if (!firstDate) return null;
  const date = new Date(firstDate);
  if (isNaN(date.getTime())) return null;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
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

const getDaysUntil = (date) => {
  if (!date) return null;
  const target = new Date(date);
  if (isNaN(target.getTime())) return null;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  target.setHours(0, 0, 0, 0);
  return Math.ceil((target - today) / (1000 * 60 * 60 * 24));
};

const formatDaysUntil = (days) => {
  if (days === null || days === undefined) return 'дата не указана';
  if (days === 0) return 'сегодня';
  if (days === 1) return 'завтра';
  if (days < 0) return 'просрочено';
  if (days < 7) return `через ${days} ${getDayWord(days)}`;
  if (days < 30) {
    const weeks = Math.floor(days / 7);
    return `через ${weeks} ${getWeekWord(weeks)}`;
  }
  const months = Math.floor(days / 30);
  return `через ${months} ${getMonthWord(months)}`;
};

const getDayWord = (n) => {
  if (n === 1) return 'день';
  if (n >= 2 && n <= 4) return 'дня';
  return 'дней';
};

const getWeekWord = (n) => {
  if (n === 1) return 'неделю';
  if (n >= 2 && n <= 4) return 'недели';
  return 'недель';
};

const getMonthWord = (n) => {
  if (n === 1) return 'месяц';
  if (n >= 2 && n <= 4) return 'месяца';
  return 'месяцев';
};

const formatDate = (date) => {
  if (!date) return 'дата не указана';
  const d = new Date(date);
  if (isNaN(d.getTime())) return 'дата не указана';
  return d.toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' });
};

const formatDateFull = (date) => {
  if (!date) return 'дата не указана';
  const d = new Date(date);
  if (isNaN(d.getTime())) return 'дата не указана';
  return d.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' });
};

const formatMoney = (amount, currency = 'RUB') => {
  const curr = CURRENCIES.find(c => c.code === currency) || CURRENCIES[0];
  return `${Math.round(amount).toLocaleString('ru-RU')} ${curr.symbol}`;
};

const getMonthlyAmount = (amount, cycle) => {
  const cycleInfo = BILLING_CYCLES.find(c => c.value === cycle);
  return amount * (cycleInfo?.monthlyMultiplier || 1);
};

const getYearlyAmount = (amount, cycle) => getMonthlyAmount(amount, cycle) * 12;

const getTelegram = () => window.Telegram?.WebApp;
const hapticFeedback = (type = 'light') => getTelegram()?.HapticFeedback?.impactOccurred(type);
const hapticNotification = (type = 'success') => getTelegram()?.HapticFeedback?.notificationOccurred(type);

// ============================================
// API КЛИЕНТ
// ============================================
const api = {
  async auth(initData) {
    const response = await fetch(ENDPOINTS.auth, { method: 'POST', headers: apiHeaders, body: JSON.stringify({ initData }) });
    if (!response.ok) throw new Error('Auth failed');
    return response.json();
  },
  async getSubscriptions(userId) {
    const response = await fetch(ENDPOINTS.getSubscriptions, { method: 'POST', headers: apiHeaders, body: JSON.stringify({ userId }) });
    if (!response.ok) throw new Error('Failed to fetch');
    return response.json();
  },
  async saveSubscription(userId, subscription) {
    const response = await fetch(ENDPOINTS.saveSubscription, { method: 'POST', headers: apiHeaders, body: JSON.stringify({ userId, subscription }) });
    if (!response.ok) throw new Error('Failed to save');
    return response.json();
  },
  async deleteSubscription(userId, subscriptionId) {
    const response = await fetch(ENDPOINTS.deleteSubscription, { method: 'POST', headers: apiHeaders, body: JSON.stringify({ userId, subscriptionId }) });
    if (!response.ok) throw new Error('Failed to delete');
    return response.json();
  },
};

// ============================================
// КОМПОНЕНТ: TOAST
// ============================================
const Toast = ({ message, visible, onHide }) => {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(onHide, 3000);
      return () => clearTimeout(timer);
    }
  }, [visible, onHide]);
  if (!visible) return null;
  return (
    <div style={{
      position: 'fixed', bottom: '100px', left: '50%', transform: 'translateX(-50%)',
      background: 'rgba(0,0,0,0.8)', color: '#fff', padding: '12px 24px', borderRadius: '25px',
      fontSize: '14px', fontWeight: '500', zIndex: 9999, animation: 'fadeInUp 0.3s ease',
    }}>{message}</div>
  );
};

// ============================================
// КОМПОНЕНТ: ОНБОРДИНГ
// ============================================
const OnboardingScreen = ({ onComplete, userName }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const displayName = userName || 'друг';

  const slides = [
    { emoji: '👋', title: `Привет, ${displayName}!`, subtitle: 'Это Subfy', description: 'Сервис отслеживания подписок прямо в Telegram' },
    { emoji: '📊', title: 'Все расходы', subtitle: 'под контролем', description: 'Смотри сколько тратишь в месяц и в год на подписки' },
    { emoji: '🔔', title: 'Напомним', subtitle: 'о списании', description: 'Получай уведомления заранее и в день оплаты' },
    { emoji: '📅', title: 'Календарь', subtitle: 'расходов', description: 'Планируй бюджет с наглядным календарём платежей' },
  ];

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (Math.abs(distance) > 50) {
      if (distance > 0 && currentSlide < slides.length - 1) setCurrentSlide(prev => prev + 1);
      else if (distance < 0 && currentSlide > 0) setCurrentSlide(prev => prev - 1);
    }
    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <div style={{
      position: 'fixed', inset: 0, background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px', zIndex: 1000,
    }}
    onTouchStart={(e) => setTouchStart(e.touches[0].clientX)}
    onTouchMove={(e) => setTouchEnd(e.touches[0].clientX)}
    onTouchEnd={handleTouchEnd}>
      <div style={{ fontSize: '80px', marginBottom: '20px' }}>{slides[currentSlide].emoji}</div>
      <h1 style={{ color: '#fff', fontSize: '28px', fontWeight: '700', margin: '0 0 8px', textAlign: 'center' }}>{slides[currentSlide].title}</h1>
      <h2 style={{ color: 'rgba(255,255,255,0.9)', fontSize: '24px', fontWeight: '500', margin: '0 0 16px', textAlign: 'center' }}>{slides[currentSlide].subtitle}</h2>
      <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '16px', textAlign: 'center', maxWidth: '280px', lineHeight: '1.5' }}>{slides[currentSlide].description}</p>
      <div style={{ display: 'flex', gap: '8px', marginTop: '40px' }}>
        {slides.map((_, idx) => (
          <div key={idx} style={{
            width: idx === currentSlide ? '24px' : '8px', height: '8px', borderRadius: '4px',
            background: idx === currentSlide ? '#fff' : 'rgba(255,255,255,0.4)', transition: 'all 0.3s ease',
          }} />
        ))}
      </div>
      {currentSlide === slides.length - 1 ? (
        <button onClick={() => { hapticFeedback('medium'); onComplete(); }} style={{
          marginTop: '40px', padding: '16px 48px', background: '#fff', color: '#667eea',
          border: 'none', borderRadius: '30px', fontSize: '18px', fontWeight: '600', cursor: 'pointer',
        }}>Начать</button>
      ) : (
        <button onClick={() => setCurrentSlide(slides.length - 1)} style={{
          marginTop: '40px', padding: '12px 24px', background: 'transparent', color: 'rgba(255,255,255,0.8)',
          border: '1px solid rgba(255,255,255,0.3)', borderRadius: '20px', fontSize: '14px', cursor: 'pointer',
        }}>Пропустить</button>
      )}
    </div>
  );
};

// ============================================
// КОМПОНЕНТ: ЭКРАН АНАЛИТИКИ
// ============================================
const AnalyticsScreen = ({ subscriptions, onBack }) => {
  const [period, setPeriod] = useState('month');
  const stats = useMemo(() => {
    const monthly = subscriptions.reduce((sum, sub) => sum + getMonthlyAmount(sub.amount, sub.billing_cycle || sub.billingCycle || 'monthly'), 0);
    const yearly = monthly * 12;
    const count = subscriptions.length;
    const byCategory = {};
    subscriptions.forEach(sub => {
      const cat = sub.category || 'Другое';
      const monthlyAmount = getMonthlyAmount(sub.amount, sub.billing_cycle || sub.billingCycle || 'monthly');
      byCategory[cat] = (byCategory[cat] || 0) + monthlyAmount;
    });
    const topExpensive = [...subscriptions]
      .map(sub => ({
        ...sub,
        monthlyAmount: getMonthlyAmount(sub.amount, sub.billing_cycle || sub.billingCycle || 'monthly'),
        yearlyAmount: getYearlyAmount(sub.amount, sub.billing_cycle || sub.billingCycle || 'monthly'),
      }))
      .sort((a, b) => b.yearlyAmount - a.yearlyAmount)
      .slice(0, 5);
    return { monthly, yearly, count, byCategory, topExpensive };
  }, [subscriptions]);

  const categoryColors = { 'Развлечения': '#FF6B6B', 'Работа': '#4ECDC4', 'Экосистема': '#45B7D1', 'Видео': '#96CEB4', 'Музыка': '#FFEAA7', 'Облако': '#DDA0DD', 'Образование': '#98D8C8', 'Утилиты': '#F7DC6F', 'Другое': '#B0BEC5' };
  const maxCategoryValue = Math.max(...Object.values(stats.byCategory), 1);

  return (
    <div style={{ position: 'fixed', inset: 0, background: '#f5f5f5', zIndex: 100, overflow: 'auto', paddingBottom: '100px' }}>
      <div style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', padding: '60px 20px 30px', color: '#fff' }}>
        <button onClick={onBack} style={{
          position: 'absolute', top: '20px', left: '16px', background: 'rgba(255,255,255,0.2)',
          border: 'none', borderRadius: '50%', width: '40px', height: '40px',
          display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
        }}><ArrowLeft size={20} color="#fff" /></button>
        <h1 style={{ fontSize: '24px', fontWeight: '700', margin: '0 0 20px', textAlign: 'center' }}>Аналитика</h1>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px', textAlign: 'center' }}>
          <div><div style={{ fontSize: '24px', fontWeight: '700' }}>{formatMoney(stats.monthly)}</div><div style={{ fontSize: '12px', opacity: 0.8 }}>в месяц</div></div>
          <div><div style={{ fontSize: '24px', fontWeight: '700' }}>{formatMoney(stats.yearly)}</div><div style={{ fontSize: '12px', opacity: 0.8 }}>в год</div></div>
          <div><div style={{ fontSize: '24px', fontWeight: '700' }}>{stats.count}</div><div style={{ fontSize: '12px', opacity: 0.8 }}>{stats.count === 1 ? 'подписка' : 'подписок'}</div></div>
        </div>
      </div>
      <div style={{ padding: '20px', display: 'flex', gap: '10px' }}>
        {['month', 'year'].map(p => (
          <button key={p} onClick={() => setPeriod(p)} style={{
            flex: 1, padding: '12px', background: period === p ? '#667eea' : '#fff',
            color: period === p ? '#fff' : '#333', border: 'none', borderRadius: '12px', fontSize: '14px', fontWeight: '600', cursor: 'pointer',
          }}>{p === 'month' ? 'Месяц' : 'Год'}</button>
        ))}
      </div>
      <div style={{ padding: '0 20px 20px' }}>
        <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px', color: '#333' }}>По категориям</h3>
        <div style={{ background: '#fff', borderRadius: '16px', padding: '16px' }}>
          {Object.entries(stats.byCategory).length === 0 ? (
            <p style={{ color: '#999', textAlign: 'center', padding: '20px 0' }}>Нет данных</p>
          ) : (
            Object.entries(stats.byCategory).sort((a, b) => b[1] - a[1]).map(([category, amount]) => (
              <div key={category} style={{ marginBottom: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <span style={{ fontSize: '14px', color: '#333' }}>{category}</span>
                  <span style={{ fontSize: '14px', fontWeight: '600', color: '#333' }}>{formatMoney(period === 'year' ? amount * 12 : amount)}</span>
                </div>
                <div style={{ height: '8px', background: '#f0f0f0', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${(amount / maxCategoryValue) * 100}%`, background: categoryColors[category] || '#667eea', borderRadius: '4px', transition: 'width 0.3s ease' }} />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <div style={{ padding: '0 20px 20px' }}>
        <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px', color: '#333' }}>Самые дорогие</h3>
        <div style={{ background: '#fff', borderRadius: '16px', overflow: 'hidden' }}>
          {stats.topExpensive.length === 0 ? (
            <p style={{ color: '#999', textAlign: 'center', padding: '20px' }}>Нет подписок</p>
          ) : (
            stats.topExpensive.map((sub, idx) => (
              <div key={sub.id} style={{ display: 'flex', alignItems: 'center', padding: '16px', borderBottom: idx < stats.topExpensive.length - 1 ? '1px solid #f0f0f0' : 'none' }}>
                <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: sub.color || '#667eea', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '12px', fontSize: '12px', fontWeight: '700', color: '#fff' }}>{idx + 1}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '14px', fontWeight: '500', color: '#333' }}>{sub.name}</div>
                  <div style={{ fontSize: '12px', color: '#999' }}>{formatMoney(sub.monthlyAmount)}/мес</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '16px', fontWeight: '600', color: '#333' }}>{formatMoney(sub.yearlyAmount)}</div>
                  <div style={{ fontSize: '12px', color: '#999' }}>в год</div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

// ============================================
// КОМПОНЕНТ: SWIPEABLE КАРТОЧКА
// ============================================
const SwipeableSubscriptionCard = ({ subscription, onClick, onDelete }) => {
  const [swipeX, setSwipeX] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const nextBilling = subscription.next_billing_date || calculateNextBillingDate(subscription.first_billing_date || subscription.firstBillingDate, subscription.billing_cycle || subscription.billingCycle || 'monthly');
  const daysUntil = getDaysUntil(nextBilling);
  const cycle = BILLING_CYCLES.find(c => c.value === (subscription.billing_cycle || subscription.billingCycle)) || BILLING_CYCLES[2];

  const handleTouchStart = (e) => { setStartX(e.touches[0].clientX); setIsSwiping(true); };
  const handleTouchMove = (e) => { if (!isSwiping) return; const diff = e.touches[0].clientX - startX; if (diff < 0) setSwipeX(Math.max(diff, -100)); };
  const handleTouchEnd = () => { setIsSwiping(false); setSwipeX(swipeX < -80 ? -100 : 0); };
  const handleDeleteClick = (e) => { e.stopPropagation(); onDelete(subscription); };

  return (
    <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '16px', marginBottom: '12px' }}>
      <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '100px', background: '#FF3B30', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '16px' }}>
        <button onClick={handleDeleteClick} style={{ background: 'transparent', border: 'none', color: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', cursor: 'pointer' }}>
          <Trash2 size={20} /><span style={{ fontSize: '12px' }}>Удалить</span>
        </button>
      </div>
      <div onClick={() => swipeX === 0 && onClick(subscription)} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}
        style={{ background: '#fff', borderRadius: '16px', padding: '16px', display: 'flex', alignItems: 'center', cursor: 'pointer', transform: `translateX(${swipeX}px)`, transition: isSwiping ? 'none' : 'transform 0.3s ease' }}>
        <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: subscription.color || '#667eea', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '12px', fontSize: '24px' }}>
          {subscription.icon || subscription.name?.charAt(0) || '📦'}
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: '16px', fontWeight: '600', color: '#333', marginBottom: '4px' }}>{subscription.name}</div>
          <div style={{ fontSize: '13px', color: '#999' }}>{formatDaysUntil(daysUntil)}</div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: '16px', fontWeight: '700', color: '#333' }}>{formatMoney(subscription.amount, subscription.currency)}</div>
          <div style={{ fontSize: '12px', color: '#999' }}>/ {cycle.short}</div>
        </div>
      </div>
    </div>
  );
};

// ============================================
// КОМПОНЕНТ: МОДАЛЬНОЕ ПОДТВЕРЖДЕНИЕ
// ============================================
const ConfirmModal = ({ visible, title, message, onConfirm, onCancel }) => {
  if (!visible) return null;
  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: '20px' }} onClick={onCancel}>
      <div style={{ background: '#fff', borderRadius: '20px', padding: '24px', maxWidth: '300px', width: '100%' }} onClick={e => e.stopPropagation()}>
        <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px', textAlign: 'center' }}>{title}</h3>
        <p style={{ fontSize: '14px', color: '#666', marginBottom: '24px', textAlign: 'center' }}>{message}</p>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button onClick={onCancel} style={{ flex: 1, padding: '14px', background: '#f0f0f0', border: 'none', borderRadius: '12px', fontSize: '16px', fontWeight: '600', color: '#333', cursor: 'pointer' }}>Отмена</button>
          <button onClick={onConfirm} style={{ flex: 1, padding: '14px', background: '#FF3B30', border: 'none', borderRadius: '12px', fontSize: '16px', fontWeight: '600', color: '#fff', cursor: 'pointer' }}>Удалить</button>
        </div>
      </div>
    </div>
  );
};

// ============================================
// КОМПОНЕНТ: ВЫБОР ПЕРИОДИЧНОСТИ
// ============================================
const BillingCycleSelector = ({ value, onChange }) => {
  const [showOther, setShowOther] = useState(false);
  const mainOptions = ['monthly', 'yearly'];
  const otherOptions = ['weekly', 'biweekly', 'quarterly', 'semiannual'];
  const currentCycle = BILLING_CYCLES.find(c => c.value === value);
  const isOther = otherOptions.includes(value);

  return (
    <div>
      <label style={{ fontSize: '14px', color: '#666', marginBottom: '8px', display: 'block' }}>Периодичность</label>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '12px' }}>
        {mainOptions.map(opt => {
          const cycle = BILLING_CYCLES.find(c => c.value === opt);
          return (
            <button key={opt} onClick={() => { onChange(opt); setShowOther(false); }} style={{
              flex: 1, padding: '14px', background: value === opt ? '#667eea' : '#f5f5f5',
              color: value === opt ? '#fff' : '#333', border: 'none', borderRadius: '12px', fontSize: '14px', fontWeight: '600', cursor: 'pointer',
            }}>{cycle?.label}</button>
          );
        })}
      </div>
      <button onClick={() => setShowOther(!showOther)} style={{ background: 'transparent', border: 'none', color: '#667eea', fontSize: '14px', cursor: 'pointer', padding: '8px 0' }}>
        {isOther ? `Выбрано: ${currentCycle?.label}` : 'Другой период →'}
      </button>
      {showOther && (
        <div style={{ background: '#f5f5f5', borderRadius: '12px', padding: '8px', marginTop: '8px' }}>
          {otherOptions.map(opt => {
            const cycle = BILLING_CYCLES.find(c => c.value === opt);
            return (
              <button key={opt} onClick={() => { onChange(opt); setShowOther(false); }} style={{
                display: 'block', width: '100%', padding: '12px', background: value === opt ? '#667eea' : 'transparent',
                color: value === opt ? '#fff' : '#333', border: 'none', borderRadius: '8px', fontSize: '14px', textAlign: 'left', cursor: 'pointer', marginBottom: '4px',
              }}>{cycle?.label}</button>
            );
          })}
        </div>
      )}
    </div>
  );
};

// ============================================
// КОМПОНЕНТ: НАСТРОЙКИ УВЕДОМЛЕНИЙ
// ============================================
const SubscriptionNotificationSettings = ({ settings, onChange }) => {
  const { enabled, daysBefore, onDay, timeOfDay } = settings;
  const getSummary = () => {
    if (!enabled) return 'Уведомления отключены';
    let parts = [];
    if (daysBefore > 0) parts.push(`за ${daysBefore} ${getDayWord(daysBefore)}`);
    if (onDay) parts.push('в день списания');
    const time = NOTIFICATION_TIMES.find(t => t.value === timeOfDay)?.label || 'утром';
    return `Напомним ${parts.join(' и ')}, ${time.toLowerCase()}`;
  };

  return (
    <div style={{ background: '#f5f5f5', borderRadius: '16px', padding: '16px', marginTop: '20px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Bell size={20} color="#667eea" /><span style={{ fontSize: '16px', fontWeight: '600' }}>Уведомления</span>
        </div>
        <label style={{ position: 'relative', display: 'inline-block', width: '50px', height: '28px' }}>
          <input type="checkbox" checked={enabled} onChange={(e) => onChange({ ...settings, enabled: e.target.checked })} style={{ opacity: 0, width: 0, height: 0 }} />
          <span style={{ position: 'absolute', cursor: 'pointer', inset: 0, background: enabled ? '#667eea' : '#ccc', borderRadius: '28px', transition: '0.3s' }}>
            <span style={{ position: 'absolute', height: '22px', width: '22px', left: enabled ? '25px' : '3px', bottom: '3px', background: '#fff', borderRadius: '50%', transition: '0.3s' }} />
          </span>
        </label>
      </div>
      {enabled && (
        <>
          <div style={{ marginBottom: '16px' }}>
            <label style={{ fontSize: '13px', color: '#666', marginBottom: '8px', display: 'block' }}>Напомнить за</label>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {NOTIFICATION_DAYS.filter(d => d.value > 0).map(day => (
                <button key={day.value} onClick={() => onChange({ ...settings, daysBefore: day.value })} style={{
                  padding: '10px 16px', background: daysBefore === day.value ? '#667eea' : '#fff',
                  color: daysBefore === day.value ? '#fff' : '#333', border: 'none', borderRadius: '20px', fontSize: '13px', cursor: 'pointer',
                }}>{day.label}</button>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
            <span style={{ fontSize: '14px', color: '#333' }}>Также в день списания</span>
            <label style={{ position: 'relative', display: 'inline-block', width: '50px', height: '28px' }}>
              <input type="checkbox" checked={onDay} onChange={(e) => onChange({ ...settings, onDay: e.target.checked })} style={{ opacity: 0, width: 0, height: 0 }} />
              <span style={{ position: 'absolute', cursor: 'pointer', inset: 0, background: onDay ? '#667eea' : '#ccc', borderRadius: '28px', transition: '0.3s' }}>
                <span style={{ position: 'absolute', height: '22px', width: '22px', left: onDay ? '25px' : '3px', bottom: '3px', background: '#fff', borderRadius: '50%', transition: '0.3s' }} />
              </span>
            </label>
          </div>
          <div>
            <label style={{ fontSize: '13px', color: '#666', marginBottom: '8px', display: 'block' }}>Время уведомления</label>
            <div style={{ display: 'flex', gap: '8px' }}>
              {NOTIFICATION_TIMES.map(time => (
                <button key={time.value} onClick={() => onChange({ ...settings, timeOfDay: time.value })} style={{
                  flex: 1, padding: '10px', background: timeOfDay === time.value ? '#667eea' : '#fff',
                  color: timeOfDay === time.value ? '#fff' : '#333', border: 'none', borderRadius: '12px', fontSize: '12px', cursor: 'pointer',
                }}>{time.value === 'morning' ? '🌅 Утром' : time.value === 'afternoon' ? '☀️ Днём' : '🌙 Вечером'}</button>
              ))}
            </div>
          </div>
        </>
      )}
      <p style={{ fontSize: '12px', color: '#999', marginTop: '16px', fontStyle: 'italic' }}>{getSummary()}</p>
    </div>
  );
};

// ============================================
// КОМПОНЕНТ: РЕДАКТОР ПОДПИСКИ
// ============================================
const SubscriptionEditor = ({ subscription, templates, onSave, onClose }) => {
  const [formData, setFormData] = useState({
    name: subscription?.name || '',
    amount: subscription?.amount || '',
    currency: subscription?.currency || 'RUB',
    billing_cycle: subscription?.billing_cycle || subscription?.billingCycle || 'monthly',
    first_billing_date: subscription?.first_billing_date || subscription?.firstBillingDate || new Date().toISOString().split('T')[0],
    category: subscription?.category || 'Другое',
    color: subscription?.color || '#667eea',
    icon: subscription?.icon || '📦',
    payment_method: subscription?.payment_method || '',
    notification_settings: subscription?.notification_settings || { enabled: true, daysBefore: 3, onDay: true, timeOfDay: 'morning' },
  });
  const [showTemplates, setShowTemplates] = useState(!subscription);
  const [search, setSearch] = useState('');

  const filteredTemplates = templates.filter(t => t.name.toLowerCase().includes(search.toLowerCase()));
  const groupedTemplates = filteredTemplates.reduce((acc, t) => { const cat = t.category || 'Другое'; if (!acc[cat]) acc[cat] = []; acc[cat].push(t); return acc; }, {});

  const selectTemplate = (template) => {
    setFormData({ ...formData, name: template.name, amount: template.price || template.default_price, color: template.color, category: template.category, icon: template.icon || template.name.charAt(0) });
    setShowTemplates(false);
  };

  const handleSave = () => { if (!formData.name || !formData.amount) return; hapticFeedback('medium'); onSave({ ...subscription, ...formData, amount: parseFloat(formData.amount) }); };
  const isEditing = !!subscription?.id;

  return (
    <div style={{ position: 'fixed', inset: 0, background: '#f5f5f5', zIndex: 100, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      <div style={{ background: '#fff', padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #eee', flexShrink: 0 }}>
        <button onClick={onClose} style={{ background: 'transparent', border: 'none', fontSize: '16px', color: '#667eea', cursor: 'pointer' }}>Отмена</button>
        <h2 style={{ fontSize: '17px', fontWeight: '600', margin: 0 }}>{isEditing ? 'Редактирование' : 'Новая подписка'}</h2>
        <button onClick={handleSave} disabled={!formData.name || !formData.amount} style={{ background: 'transparent', border: 'none', fontSize: '16px', color: formData.name && formData.amount ? '#667eea' : '#ccc', fontWeight: '600', cursor: formData.name && formData.amount ? 'pointer' : 'default' }}>{isEditing ? 'Сохранить' : 'Добавить'}</button>
      </div>
      <div style={{ flex: 1, overflow: 'auto', overflowX: 'hidden', WebkitOverflowScrolling: 'touch' }}>
        {showTemplates && !isEditing && (
          <div style={{ padding: '16px 20px' }}>
            <input type="text" placeholder="Поиск сервиса..." value={search} onChange={(e) => setSearch(e.target.value)} style={{ width: '100%', padding: '14px 16px', border: 'none', borderRadius: '12px', fontSize: '16px', background: '#fff', marginBottom: '16px', boxSizing: 'border-box' }} />
            {Object.entries(groupedTemplates).map(([category, items]) => (
              <div key={category} style={{ marginBottom: '20px' }}>
                <h4 style={{ fontSize: '13px', color: '#999', marginBottom: '10px', textTransform: 'uppercase' }}>{category}</h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
                  {items.map(template => (
                    <button key={template.id} onClick={() => selectTemplate(template)} style={{ background: '#fff', border: 'none', borderRadius: '12px', padding: '14px', display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: template.color, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '8px', color: '#fff', fontSize: '18px', fontWeight: '700' }}>{template.icon || template.name.charAt(0)}</div>
                      <span style={{ fontSize: '13px', fontWeight: '500', color: '#333' }}>{template.name}</span>
                      <span style={{ fontSize: '12px', color: '#999' }}>{formatMoney(template.price || template.default_price)}</span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
            <button onClick={() => setShowTemplates(false)} style={{ width: '100%', padding: '16px', background: '#fff', border: 'none', borderRadius: '12px', fontSize: '16px', color: '#667eea', fontWeight: '600', cursor: 'pointer', marginTop: '10px' }}>+ Создать свою подписку</button>
          </div>
        )}
        {(!showTemplates || isEditing) && (
          <div style={{ padding: '20px' }}>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ fontSize: '14px', color: '#666', marginBottom: '8px', display: 'block' }}>Название</label>
              <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Например, Netflix" style={{ width: '100%', padding: '14px 16px', border: 'none', borderRadius: '12px', fontSize: '16px', background: '#fff', boxSizing: 'border-box' }} />
            </div>
            <div style={{ display: 'flex', gap: '12px', marginBottom: '20px' }}>
              <div style={{ flex: 2 }}>
                <label style={{ fontSize: '14px', color: '#666', marginBottom: '8px', display: 'block' }}>Сумма</label>
                <input type="number" value={formData.amount} onChange={(e) => setFormData({ ...formData, amount: e.target.value })} placeholder="0" style={{ width: '100%', padding: '14px 16px', border: 'none', borderRadius: '12px', fontSize: '16px', background: '#fff', boxSizing: 'border-box' }} />
              </div>
              <div style={{ flex: 1 }}>
                <label style={{ fontSize: '14px', color: '#666', marginBottom: '8px', display: 'block' }}>Валюта</label>
                <select value={formData.currency} onChange={(e) => setFormData({ ...formData, currency: e.target.value })} style={{ width: '100%', padding: '14px 16px', border: 'none', borderRadius: '12px', fontSize: '16px', background: '#fff', boxSizing: 'border-box' }}>
                  {CURRENCIES.map(c => (<option key={c.code} value={c.code}>{c.symbol} {c.code}</option>))}
                </select>
              </div>
            </div>
            <div style={{ marginBottom: '20px' }}><BillingCycleSelector value={formData.billing_cycle} onChange={(value) => setFormData({ ...formData, billing_cycle: value })} /></div>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ fontSize: '14px', color: '#666', marginBottom: '8px', display: 'block' }}>Дата первого списания</label>
              <input type="date" value={formData.first_billing_date} onChange={(e) => setFormData({ ...formData, first_billing_date: e.target.value })} style={{ width: '100%', padding: '14px 16px', border: 'none', borderRadius: '12px', fontSize: '16px', background: '#fff', boxSizing: 'border-box' }} />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ fontSize: '14px', color: '#666', marginBottom: '8px', display: 'block' }}>Категория</label>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {CATEGORIES.map(cat => (
                  <button key={cat.value} onClick={() => setFormData({ ...formData, category: cat.value })} style={{ padding: '10px 16px', background: formData.category === cat.value ? cat.color : '#fff', color: formData.category === cat.value ? '#fff' : '#333', border: 'none', borderRadius: '20px', fontSize: '13px', cursor: 'pointer' }}>{cat.label}</button>
                ))}
              </div>
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ fontSize: '14px', color: '#666', marginBottom: '8px', display: 'block' }}>Способ оплаты (опционально)</label>
              <input type="text" value={formData.payment_method} onChange={(e) => setFormData({ ...formData, payment_method: e.target.value })} placeholder="Например, Тинькофф *1234" style={{ width: '100%', padding: '14px 16px', border: 'none', borderRadius: '12px', fontSize: '16px', background: '#fff', boxSizing: 'border-box' }} />
            </div>
            <SubscriptionNotificationSettings settings={formData.notification_settings} onChange={(settings) => setFormData({ ...formData, notification_settings: settings })} />
            {!isEditing && (<button onClick={() => setShowTemplates(true)} style={{ width: '100%', padding: '16px', background: '#fff', border: 'none', borderRadius: '12px', fontSize: '14px', color: '#667eea', cursor: 'pointer', marginTop: '20px' }}>← Выбрать из шаблонов</button>)}
          </div>
        )}
      </div>
    </div>
  );
};

// ============================================
// ГЛАВНЫЙ КОМПОНЕНТ
// ============================================
export default function App() {
  const [user, setUser] = useState(null);
  const [subscriptions, setSubscriptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [showEditor, setShowEditor] = useState(false);
  const [editingSubscription, setEditingSubscription] = useState(null);
  const [showAnalytics, setShowAnalytics] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const [toast, setToast] = useState({ visible: false, message: '' });

  const monthlyTotal = useMemo(() => subscriptions.reduce((sum, sub) => sum + getMonthlyAmount(sub.amount, sub.billing_cycle || sub.billingCycle || 'monthly'), 0), [subscriptions]);
  const yearlyTotal = monthlyTotal * 12;

  const upcomingSubscriptions = useMemo(() => {
    return [...subscriptions]
      .map(sub => ({ ...sub, nextBilling: sub.next_billing_date || calculateNextBillingDate(sub.first_billing_date || sub.firstBillingDate, sub.billing_cycle || sub.billingCycle || 'monthly') }))
      .filter(sub => sub.nextBilling)
      .sort((a, b) => new Date(a.nextBilling) - new Date(b.nextBilling))
      .slice(0, 3);
  }, [subscriptions]);

  useEffect(() => {
    const init = async () => {
      try {
        const tg = getTelegram();
        if (tg) { tg.ready(); tg.expand(); tg.setHeaderColor('#667eea'); tg.setBackgroundColor('#f5f5f5'); }
        let userId = null, firstName = null;
        if (tg?.initData) {
          try {
            const authResult = await api.auth(tg.initData);
            if (authResult.user) { userId = authResult.user.id; firstName = authResult.user.first_name || tg.initDataUnsafe?.user?.first_name; }
          } catch (e) { userId = tg.initDataUnsafe?.user?.id?.toString(); firstName = tg.initDataUnsafe?.user?.first_name; }
        }
        if (!userId) { userId = localStorage.getItem('subfy_dev_user_id') || `dev_${Date.now()}`; localStorage.setItem('subfy_dev_user_id', userId); firstName = 'Разработчик'; }
        setUser({ id: userId, first_name: firstName });
        if (!localStorage.getItem(`subfy_onboarding_${userId}`)) setShowOnboarding(true);
        if (API_BASE) {
          try { const result = await api.getSubscriptions(userId); setSubscriptions(result.subscriptions || []); }
          catch (e) { const saved = localStorage.getItem(`subfy_subscriptions_${userId}`); if (saved) setSubscriptions(JSON.parse(saved)); }
        } else { const saved = localStorage.getItem(`subfy_subscriptions_${userId}`); if (saved) setSubscriptions(JSON.parse(saved)); }
      } catch (error) { console.error('Init error:', error); }
      finally { setLoading(false); }
    };
    init();
  }, []);

  useEffect(() => { if (user?.id && subscriptions.length > 0) localStorage.setItem(`subfy_subscriptions_${user.id}`, JSON.stringify(subscriptions)); }, [subscriptions, user]);

  const handleOnboardingComplete = () => { if (user?.id) localStorage.setItem(`subfy_onboarding_${user.id}`, 'true'); setShowOnboarding(false); };
  const handleAddSubscription = () => { hapticFeedback('medium'); setEditingSubscription(null); setShowEditor(true); };
  const handleEditSubscription = (sub) => { setEditingSubscription(sub); setShowEditor(true); };

  const handleSaveSubscription = async (data) => {
    try {
      if (API_BASE && user?.id) {
        const result = await api.saveSubscription(user.id, data);
        if (result.subscription) {
          if (data.id) { setSubscriptions(prev => prev.map(s => s.id === data.id ? result.subscription : s)); setToast({ visible: true, message: 'Подписка сохранена' }); }
          else { setSubscriptions(prev => [result.subscription, ...prev]); setToast({ visible: true, message: 'Подписка добавлена' }); }
        }
      } else {
        if (data.id) { setSubscriptions(prev => prev.map(s => s.id === data.id ? data : s)); setToast({ visible: true, message: 'Подписка сохранена' }); }
        else { setSubscriptions(prev => [{ ...data, id: `local_${Date.now()}` }, ...prev]); setToast({ visible: true, message: 'Подписка добавлена' }); }
      }
    } catch (error) { setToast({ visible: true, message: 'Ошибка сохранения' }); }
    setShowEditor(false); setEditingSubscription(null);
  };

  const handleDeleteSubscription = (sub) => setDeleteConfirm(sub);
  const confirmDelete = async () => {
    if (!deleteConfirm) return;
    try { if (API_BASE && user?.id) await api.deleteSubscription(user.id, deleteConfirm.id); setSubscriptions(prev => prev.filter(s => s.id !== deleteConfirm.id)); setToast({ visible: true, message: 'Подписка удалена' }); }
    catch (error) { setToast({ visible: true, message: 'Ошибка удаления' }); }
    setDeleteConfirm(null);
  };

  if (loading) return (<div style={{ position: 'fixed', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}><Loader size={40} color="#fff" style={{ animation: 'spin 1s linear infinite' }} /></div>);
  if (showOnboarding) return <OnboardingScreen onComplete={handleOnboardingComplete} userName={user?.first_name} />;
  if (showAnalytics) return <AnalyticsScreen subscriptions={subscriptions} onBack={() => setShowAnalytics(false)} />;
  if (showEditor) return <SubscriptionEditor subscription={editingSubscription} templates={SUBSCRIPTION_TEMPLATES} onSave={handleSaveSubscription} onClose={() => { setShowEditor(false); setEditingSubscription(null); }} />;

  return (
    <div style={{ position: 'fixed', inset: 0, background: '#f5f5f5', overflow: 'auto', paddingBottom: '100px' }}>
      <div onClick={() => setShowAnalytics(true)} style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', padding: '60px 20px 30px', color: '#fff', cursor: 'pointer' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '14px', opacity: 0.8, marginBottom: '8px' }}>Расходы в месяц</p>
          <h1 style={{ fontSize: '42px', fontWeight: '700', margin: '0 0 8px' }}>{formatMoney(monthlyTotal)}</h1>
          <p style={{ fontSize: '16px', opacity: 0.9 }}>{formatMoney(yearlyTotal)} в год</p>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', marginTop: '16px', padding: '8px 16px', background: 'rgba(255,255,255,0.2)', borderRadius: '20px', fontSize: '13px' }}>
            <TrendingUp size={14} />Подробная аналитика<ChevronRight size={14} />
          </div>
        </div>
      </div>
      {upcomingSubscriptions.length > 0 && (
        <div style={{ padding: '20px' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Ближайшие списания</h3>
          <div style={{ display: 'flex', gap: '12px', overflowX: 'auto', paddingBottom: '4px' }}>
            {upcomingSubscriptions.map(sub => {
              const days = getDaysUntil(sub.nextBilling);
              return (
                <div key={sub.id} style={{ minWidth: '140px', background: '#fff', borderRadius: '16px', padding: '16px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: sub.color || '#667eea', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px', fontSize: '20px' }}>{sub.icon || sub.name?.charAt(0) || '📦'}</div>
                  <div style={{ fontSize: '14px', fontWeight: '600', color: '#333', marginBottom: '4px' }}>{sub.name}</div>
                  <div style={{ fontSize: '12px', color: '#999', marginBottom: '8px' }}>{formatDateFull(sub.nextBilling)}</div>
                  <div style={{ fontSize: '16px', fontWeight: '700', color: days !== null && days <= 3 ? '#FF3B30' : '#333' }}>{formatMoney(sub.amount, sub.currency)}</div>
                </div>
              );
            })}
          </div>
        </div>
      )}
      <div style={{ padding: '0 20px 20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#333', margin: 0 }}>Все подписки</h3>
          <span style={{ fontSize: '14px', color: '#999' }}>{subscriptions.length} {subscriptions.length === 1 ? 'подписка' : 'подписок'}</span>
        </div>
        {subscriptions.length === 0 ? (
          <div style={{ background: '#fff', borderRadius: '16px', padding: '40px 20px', textAlign: 'center' }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>📭</div>
            <p style={{ color: '#999', marginBottom: '20px' }}>У вас пока нет подписок</p>
            <button onClick={handleAddSubscription} style={{ padding: '14px 28px', background: '#667eea', color: '#fff', border: 'none', borderRadius: '25px', fontSize: '16px', fontWeight: '600', cursor: 'pointer' }}>Добавить первую</button>
          </div>
        ) : subscriptions.map(sub => (<SwipeableSubscriptionCard key={sub.id} subscription={sub} onClick={handleEditSubscription} onDelete={handleDeleteSubscription} />))}
      </div>
      {subscriptions.length > 0 && (
        <button onClick={handleAddSubscription} style={{ position: 'fixed', bottom: '30px', right: '20px', width: '60px', height: '60px', borderRadius: '50%', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 4px 20px rgba(102, 126, 234, 0.4)' }}><Plus size={28} color="#fff" /></button>
      )}
      <Toast message={toast.message} visible={toast.visible} onHide={() => setToast({ ...toast, visible: false })} />
      <ConfirmModal visible={!!deleteConfirm} title="Удалить подписку?" message={`Вы уверены, что хотите удалить "${deleteConfirm?.name}"?`} onConfirm={confirmDelete} onCancel={() => setDeleteConfirm(null)} />
      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } } @keyframes fadeInUp { from { opacity: 0; transform: translate(-50%, 20px); } to { opacity: 1; transform: translate(-50%, 0); } } * { -webkit-tap-highlight-color: transparent; } html, body { overflow: hidden; position: fixed; width: 100%; height: 100%; }`}</style>
    </div>
  );
}
