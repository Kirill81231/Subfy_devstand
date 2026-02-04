import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { Plus, X, Calendar, ChevronRight, ChevronLeft, Sun, Moon, Search, Check, Trash2, Edit3, Bell, CreditCard, Loader, Settings, TrendingUp, PieChart, ArrowLeft, BellOff, Clock, ExternalLink } from 'lucide-react';

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

const CATEGORIES = [
  { id: 'entertainment', name: 'Развлечения', color: '#8B5CF6' },
  { id: 'work', name: 'Работа', color: '#3B82F6' },
  { id: 'utilities', name: 'Утилиты', color: '#10B981' },
  { id: 'education', name: 'Образование', color: '#F59E0B' },
  { id: 'other', name: 'Другое', color: '#6B7280' },
];

const BILLING_CYCLES = [
  { value: 'monthly', label: 'Ежемесячно', multiplier: 1, short: 'мес', daysApprox: 30 },
  { value: 'yearly', label: 'Ежегодно', multiplier: 0.083, short: 'год', daysApprox: 365 },
];

const EXTRA_BILLING_CYCLES = [
  { value: 'weekly', label: 'Еженедельно', multiplier: 4.33, short: 'нед', daysApprox: 7 },
  { value: 'biweekly', label: 'Раз в 2 недели', multiplier: 2.17, short: '2 нед', daysApprox: 14 },
  { value: 'quarterly', label: 'Раз в 3 месяца', multiplier: 0.33, short: 'квартал', daysApprox: 90 },
  { value: 'semiannual', label: 'Раз в 6 месяцев', multiplier: 0.167, short: '6 мес', daysApprox: 180 },
];

const ALL_BILLING_CYCLES = [...BILLING_CYCLES, ...EXTRA_BILLING_CYCLES];

const CURRENCIES = [
  { code: 'RUB', symbol: '₽', rate: 1 },
  { code: 'USD', symbol: '$', rate: 96 },
  { code: 'EUR', symbol: '€', rate: 104 },
];

const REMINDER_DAYS = [
  { value: 0, label: 'В день списания' },
  { value: 1, label: 'За 1 день' },
  { value: 3, label: 'За 3 дня' },
  { value: 7, label: 'За 7 дней' },
];

const REMINDER_TIMES = [
  { value: 'morning', label: 'Утром (9:00)' },
  { value: 'afternoon', label: 'Днём (14:00)' },
  { value: 'evening', label: 'Вечером (19:00)' },
];

const EMOJI_OPTIONS = ['📦', '🎮', '💼', '🏋️', '🎨', '📱', '🖥️', '🎧', '📚', '🎬', '🎵', '☁️', '🔒', '💳', '🛒', '✈️'];

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

const formatDate = (date) => {
  if (!date || isNaN(new Date(date).getTime())) return 'дата не указана';
  return new Date(date).toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' });
};

const formatDateFull = (date) => {
  if (!date || isNaN(new Date(date).getTime())) return 'дата не указана';
  return new Date(date).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' });
};

const getDaysUntil = (date) => {
  if (!date) return null;
  return Math.ceil((new Date(date) - new Date()) / (1000 * 60 * 60 * 24));
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
    const response = await fetch(ENDPOINTS.auth, {
      method: 'POST',
      headers: apiHeaders,
      body: JSON.stringify({ initData }),
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
};

// ============================================
// КОМПОНЕНТ: TOAST УВЕДОМЛЕНИЕ
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
    <div className="toast">
      <Check size={18} />
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
const Logo = ({ domain, emoji, color, size = 32 }) => {
  const [hasError, setHasError] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const logoUrl = domain ? `https://logo.clearbit.com/${domain}` : null;
  
  if (!domain || hasError) {
    return (
      <div className="logo-emoji" style={{ 
        width: size, height: size, 
        background: color + '20', color: color,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        borderRadius: 8, fontSize: size * 0.5, flexShrink: 0,
      }}>
        {emoji || '📦'}
      </div>
    );
  }
  
  return (
    <div className="logo-container" style={{ 
      width: size, height: size, 
      background: loaded ? 'white' : color + '20',
      borderRadius: 8, overflow: 'hidden',
      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
    }}>
      <img
        src={logoUrl}
        alt=""
        style={{ 
          width: size - 4, height: size - 4, objectFit: 'contain',
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
    <div className="modal-overlay" onClick={onCancel}>
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
  const firstDate = subscription.first_billing_date || subscription.firstBillingDate;
  const nextDate = calculateNextBillingDate(firstDate, billingCycle);
  const daysUntil = getDaysUntil(nextDate);
  const cycle = ALL_BILLING_CYCLES.find(c => c.value === billingCycle) || ALL_BILLING_CYCLES[0];
  
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
          onClick={() => swipeX === 0 && onEdit(subscription)}
        >
          <div className="sub-card-accent" />
          <div className="sub-card-content">
            <div className="sub-card-header">
              <Logo 
                domain={subscription.domain} 
                emoji={subscription.icon} 
                color={subscription.color}
                size={44}
              />
              <div className="sub-info">
                <h3 className="sub-name">{subscription.name}</h3>
                <div className="sub-price-inline">
                  <span className="price-amount">{Math.round(monthlyAmount).toLocaleString('ru-RU')}</span>
                  <span className="price-currency">{currency.symbol}</span>
                  <span className="price-cycle">/ мес</span>
                </div>
              </div>
              <div className={`sub-next ${daysUntil !== null && daysUntil <= 3 ? 'soon' : ''}`}>
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
// КОМПОНЕНТ: МОДАЛЬНОЕ ОКНО ВЫБОРА ПЕРИОДА
// ============================================
const PeriodModal = ({ visible, onSelect, onClose, currentValue }) => {
  if (!visible) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="period-modal" onClick={e => e.stopPropagation()}>
        <div className="period-modal-header">
          <h3>Другой период</h3>
          <button className="close-btn" onClick={onClose}><X size={20} /></button>
        </div>
        <div className="period-options">
          {EXTRA_BILLING_CYCLES.map(cycle => (
            <button
              key={cycle.value}
              className={`period-option ${currentValue === cycle.value ? 'active' : ''}`}
              onClick={() => { onSelect(cycle.value); onClose(); }}
            >
              {cycle.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// ============================================
// КОМПОНЕНТ: ФОРМА ПОДПИСКИ
// ============================================
const SubscriptionForm = ({ onClose, onSave, editData, templates, isLoading, defaultNotificationSettings }) => {
  const [step, setStep] = useState(editData ? 2 : 1);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [showPeriodModal, setShowPeriodModal] = useState(false);
  
  const [formData, setFormData] = useState(editData ? {
    ...editData,
    firstBillingDate: editData.first_billing_date || editData.firstBillingDate,
    billingCycle: editData.billing_cycle || editData.billingCycle || 'monthly',
    category: editData.category || 'Другое',
    paymentMethod: editData.payment_method || editData.paymentMethod || '',
    notifyEnabled: editData.notify_enabled ?? true,
    notifyDaysBefore: editData.notify_days_before ?? defaultNotificationSettings.daysBefore,
    notifyOnDay: editData.notify_on_day ?? defaultNotificationSettings.notifyOnDay,
    notifyTime: editData.notify_time ?? defaultNotificationSettings.time,
  } : {
    name: '',
    amount: '',
    currency: 'RUB',
    billingCycle: 'monthly',
    firstBillingDate: new Date().toISOString().split('T')[0],
    category: 'Другое',
    color: '#6366f1',
    icon: '📦',
    domain: null,
    isCustom: true,
    paymentMethod: '',
    notifyEnabled: true,
    notifyDaysBefore: defaultNotificationSettings.daysBefore,
    notifyOnDay: defaultNotificationSettings.notifyOnDay,
    notifyTime: defaultNotificationSettings.time,
  });

  const categories = ['Все', 'Развлечения', 'Работа', 'Утилиты', 'Образование', 'Другое'];

  const filteredTemplates = templates.filter(t => {
    const matchesSearch = t.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'Все' || t.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const selectTemplate = (template) => {
    setFormData({
      ...formData,
      name: template.name,
      amount: template.price,
      color: template.color,
      icon: template.icon || '📦',
      domain: template.domain,
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
      first_billing_date: formData.firstBillingDate,
      billing_cycle: formData.billingCycle,
      payment_method: formData.paymentMethod,
      notify_enabled: formData.notifyEnabled,
      notify_days_before: formData.notifyDaysBefore,
      notify_on_day: formData.notifyOnDay,
      notify_time: formData.notifyTime,
    });
  };

  const isExtraCycle = EXTRA_BILLING_CYCLES.some(c => c.value === formData.billingCycle);
  const currentCycleLabel = ALL_BILLING_CYCLES.find(c => c.value === formData.billingCycle)?.label;

  const getNotificationSummary = () => {
    if (!formData.notifyEnabled) return 'Уведомления отключены';
    const daysBefore = REMINDER_DAYS.find(d => d.value === formData.notifyDaysBefore)?.label || '';
    const time = REMINDER_TIMES.find(t => t.value === formData.notifyTime)?.label?.split(' ')[0].toLowerCase() || '';
    const onDay = formData.notifyOnDay && formData.notifyDaysBefore !== 0 ? ' и в день списания' : '';
    return `Напомним ${daysBefore.toLowerCase()}${onDay}, ${time}`;
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal subscription-modal" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <button className="back-btn" onClick={() => step === 1 ? onClose() : setStep(1)}>
            {step === 1 ? <X size={20} /> : <ChevronLeft size={20} />}
          </button>
          <h2>{editData ? 'Редактировать' : step === 1 ? 'Выберите сервис' : 'Настройка'}</h2>
          <div style={{ width: 32 }} />
        </div>

        {step === 1 ? (
          <div className="template-selector">
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
              {categories.map(cat => (
                <button
                  key={cat}
                  className={`cat-tab ${selectedCategory === cat ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="template-grid">
              <button className="template-item custom" onClick={() => setStep(2)}>
                <div className="template-icon" style={{ background: '#6366f1' }}>
                  <Plus size={24} color="white" />
                </div>
                <span>Своя</span>
              </button>
              {filteredTemplates.map(template => (
                <button key={template.id} className="template-item" onClick={() => selectTemplate(template)}>
                  <Logo domain={template.domain} color={template.color} size={40} />
                  <span>{template.name}</span>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="subscription-form">
            <div className="form-preview">
              <Logo domain={formData.domain} emoji={formData.icon} color={formData.color} size={56} />
              <div className="preview-info">
                <h3>{formData.name || 'Название'}</h3>
                <p>{formData.amount ? `${formData.amount} ${CURRENCIES.find(c => c.code === formData.currency)?.symbol}` : '0 ₽'}</p>
              </div>
            </div>

            {formData.isCustom && (
              <div className="form-section">
                <label>Название</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Название подписки"
                />
              </div>
            )}

            <div className="form-row">
              <div className="form-section flex-1">
                <label>Сумма</label>
                <input
                  type="number"
                  inputMode="decimal"
                  value={formData.amount}
                  onChange={e => setFormData({ ...formData, amount: e.target.value })}
                  placeholder="299"
                />
              </div>
              <div className="form-section">
                <label>Валюта</label>
                <div className="currency-selector">
                  {CURRENCIES.map(cur => (
                    <button
                      key={cur.code}
                      className={`currency-btn ${formData.currency === cur.code ? 'active' : ''}`}
                      onClick={() => setFormData({ ...formData, currency: cur.code })}
                    >
                      {cur.symbol}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="form-section">
              <label>Периодичность</label>
              <div className="cycle-selector-main">
                {BILLING_CYCLES.map(cycle => (
                  <button
                    key={cycle.value}
                    className={`cycle-btn ${formData.billingCycle === cycle.value ? 'active' : ''}`}
                    onClick={() => setFormData({ ...formData, billingCycle: cycle.value })}
                  >
                    {cycle.label}
                  </button>
                ))}
              </div>
              <button 
                className={`other-period-link ${isExtraCycle ? 'selected' : ''}`}
                onClick={() => setShowPeriodModal(true)}
              >
                {isExtraCycle ? currentCycleLabel : 'Другой период'}
                <ChevronRight size={16} />
              </button>
            </div>

            <div className="form-section">
              <label>Дата первого списания</label>
              <input
                type="date"
                value={formData.firstBillingDate}
                onChange={e => setFormData({ ...formData, firstBillingDate: e.target.value })}
              />
            </div>

            <div className="form-section">
              <label>Категория</label>
              <div className="category-selector">
                {CATEGORIES.map(cat => (
                  <button
                    key={cat.id}
                    className={`category-btn ${formData.category === cat.name ? 'active' : ''}`}
                    style={{ '--cat-color': cat.color }}
                    onClick={() => setFormData({ ...formData, category: cat.name })}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="form-section">
              <label>Способ оплаты (опционально)</label>
              <input
                type="text"
                value={formData.paymentMethod}
                onChange={e => setFormData({ ...formData, paymentMethod: e.target.value })}
                placeholder="Например: Тинькофф *1234"
              />
            </div>

            {/* Блок уведомлений */}
            <div className="notification-section">
              <div className="notification-header">
                <Bell size={18} />
                <span>Уведомления по этой подписке</span>
              </div>
              
              <div className="toggle-row">
                <span>Напоминать о списании</span>
                <label className="toggle">
                  <input
                    type="checkbox"
                    checked={formData.notifyEnabled}
                    onChange={e => setFormData({ ...formData, notifyEnabled: e.target.checked })}
                  />
                  <span className="toggle-slider"></span>
                </label>
              </div>

              {formData.notifyEnabled && (
                <>
                  <div className="form-section compact">
                    <label>Когда напомнить</label>
                    <div className="reminder-selector">
                      {REMINDER_DAYS.map(day => (
                        <button
                          key={day.value}
                          className={`reminder-btn ${formData.notifyDaysBefore === day.value ? 'active' : ''}`}
                          onClick={() => setFormData({ ...formData, notifyDaysBefore: day.value })}
                        >
                          {day.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {formData.notifyDaysBefore !== 0 && (
                    <div className="toggle-row">
                      <span>Дополнительно в день списания</span>
                      <label className="toggle">
                        <input
                          type="checkbox"
                          checked={formData.notifyOnDay}
                          onChange={e => setFormData({ ...formData, notifyOnDay: e.target.checked })}
                        />
                        <span className="toggle-slider"></span>
                      </label>
                    </div>
                  )}

                  <div className="form-section compact">
                    <label>Время уведомления</label>
                    <div className="time-selector">
                      {REMINDER_TIMES.map(time => (
                        <button
                          key={time.value}
                          className={`time-btn ${formData.notifyTime === time.value ? 'active' : ''}`}
                          onClick={() => setFormData({ ...formData, notifyTime: time.value })}
                        >
                          {time.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              )}
              
              <p className="notification-summary">{getNotificationSummary()}</p>
            </div>

            {formData.isCustom && (
              <>
                <div className="form-section">
                  <label>Иконка</label>
                  <div className="emoji-selector">
                    {EMOJI_OPTIONS.map(emoji => (
                      <button
                        key={emoji}
                        className={`emoji-btn ${formData.icon === emoji ? 'active' : ''}`}
                        onClick={() => setFormData({ ...formData, icon: emoji })}
                      >
                        {emoji}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="form-section">
                  <label>Цвет</label>
                  <div className="color-picker">
                    <input
                      type="color"
                      value={formData.color}
                      onChange={e => setFormData({ ...formData, color: e.target.value })}
                    />
                    <span>{formData.color}</span>
                  </div>
                </div>
              </>
            )}

            <button className="save-btn" onClick={handleSave} disabled={isLoading || !formData.name || !formData.amount}>
              {isLoading ? <Loader className="spin" size={20} /> : <Check size={20} />}
              {editData ? 'Сохранить' : 'Добавить'}
            </button>
          </div>
        )}
      </div>
      
      <PeriodModal
        visible={showPeriodModal}
        currentValue={formData.billingCycle}
        onSelect={(value) => setFormData({ ...formData, billingCycle: value })}
        onClose={() => setShowPeriodModal(false)}
      />
    </div>
  );
};

// ============================================
// КОМПОНЕНТ: ЭКРАН АНАЛИТИКИ
// ============================================
const AnalyticsScreen = ({ subscriptions, currencies, onClose }) => {
  const [period, setPeriod] = useState('month');
  
  const stats = useMemo(() => {
    let monthlyTotal = 0;
    const categoryTotals = {};
    
    subscriptions.forEach(sub => {
      const cycle = ALL_BILLING_CYCLES.find(c => c.value === (sub.billing_cycle || sub.billingCycle));
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
        const cycle = ALL_BILLING_CYCLES.find(c => c.value === (sub.billing_cycle || sub.billingCycle));
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
    <div className="analytics-screen">
      <div className="analytics-header">
        <button className="back-btn" onClick={onClose}>
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
                <Logo domain={sub.domain} emoji={sub.icon} color={sub.color} size={36} />
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
// КОМПОНЕНТ: ЭКРАН НАСТРОЕК
// ============================================
const SettingsScreen = ({ settings, onUpdateSettings, onClose }) => {
  const [localSettings, setLocalSettings] = useState(settings);

  const handleSave = () => {
    onUpdateSettings(localSettings);
    onClose();
  };

  return (
    <div className="settings-screen">
      <div className="settings-header">
        <button className="back-btn" onClick={onClose}>
          <ArrowLeft size={20} />
        </button>
        <h2>Настройки</h2>
        <button className="save-text-btn" onClick={handleSave}>Готово</button>
      </div>

      <div className="settings-content">
        {/* Уведомления */}
        <div className="settings-section">
          <h3><Bell size={18} /> Уведомления</h3>
          
          <div className="setting-row">
            <div className="setting-info">
              <span className="setting-title">Все уведомления</span>
              <span className="setting-desc">Включить или выключить все уведомления</span>
            </div>
            <label className="toggle">
              <input
                type="checkbox"
                checked={localSettings.notificationsEnabled}
                onChange={e => setLocalSettings({ ...localSettings, notificationsEnabled: e.target.checked })}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>

          {localSettings.notificationsEnabled && (
            <>
              <div className="settings-subsection">
                <h4>Настройки по умолчанию для новых подписок</h4>
                
                <div className="setting-select">
                  <label>Напоминать за</label>
                  <select 
                    value={localSettings.defaultDaysBefore}
                    onChange={e => setLocalSettings({ ...localSettings, defaultDaysBefore: parseInt(e.target.value) })}
                  >
                    {REMINDER_DAYS.map(day => (
                      <option key={day.value} value={day.value}>{day.label}</option>
                    ))}
                  </select>
                </div>

                <div className="setting-row">
                  <span>Напоминать в день списания</span>
                  <label className="toggle">
                    <input
                      type="checkbox"
                      checked={localSettings.defaultNotifyOnDay}
                      onChange={e => setLocalSettings({ ...localSettings, defaultNotifyOnDay: e.target.checked })}
                    />
                    <span className="toggle-slider"></span>
                  </label>
                </div>

                <div className="setting-select">
                  <label>Время уведомлений</label>
                  <select 
                    value={localSettings.defaultTime}
                    onChange={e => setLocalSettings({ ...localSettings, defaultTime: e.target.value })}
                  >
                    {REMINDER_TIMES.map(time => (
                      <option key={time.value} value={time.value}>{time.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="settings-subsection">
                <h4>Тихие часы</h4>
                
                <div className="setting-row">
                  <div className="setting-info">
                    <span className="setting-title"><BellOff size={16} /> Тихие часы</span>
                    <span className="setting-desc">Не показывать уведомления в указанный период</span>
                  </div>
                  <label className="toggle">
                    <input
                      type="checkbox"
                      checked={localSettings.quietHoursEnabled}
                      onChange={e => setLocalSettings({ ...localSettings, quietHoursEnabled: e.target.checked })}
                    />
                    <span className="toggle-slider"></span>
                  </label>
                </div>

                {localSettings.quietHoursEnabled && (
                  <div className="quiet-hours-time">
                    <div className="time-input">
                      <label>С</label>
                      <input
                        type="time"
                        value={localSettings.quietHoursStart}
                        onChange={e => setLocalSettings({ ...localSettings, quietHoursStart: e.target.value })}
                      />
                    </div>
                    <div className="time-input">
                      <label>До</label>
                      <input
                        type="time"
                        value={localSettings.quietHoursEnd}
                        onChange={e => setLocalSettings({ ...localSettings, quietHoursEnd: e.target.value })}
                      />
                    </div>
                  </div>
                )}
              </div>
            </>
          )}

          <button 
            className="system-settings-link"
            onClick={() => {
              // Попытка открыть системные настройки (работает на iOS/Android)
              if (getTelegram()?.openLink) {
                getTelegram().openLink('app-settings:');
              }
            }}
          >
            <ExternalLink size={16} />
            Системные настройки уведомлений
          </button>
        </div>
      </div>
    </div>
  );
};

// ============================================
// КОМПОНЕНТ: КАЛЕНДАРЬ
// ============================================
const CalendarView = ({ subscriptions, currencies }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(null);
  
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
        const nextBilling = calculateNextBillingDate(
          sub.first_billing_date || sub.firstBillingDate, 
          sub.billing_cycle || sub.billingCycle
        );
        return nextBilling && 
               nextBilling.getDate() === day && 
               nextBilling.getMonth() === month && 
               nextBilling.getFullYear() === year;
      });
      days.push({ date: dayDate, subscriptions: daySubs });
    }
    
    return days;
  };

  const days = getDaysInMonth(currentMonth);
  const monthName = currentMonth.toLocaleDateString('ru-RU', { month: 'long', year: 'numeric' });

  const monthlyTotal = useMemo(() => {
    return subscriptions.reduce((total, sub) => {
      const nextBilling = calculateNextBillingDate(
        sub.first_billing_date || sub.firstBillingDate, 
        sub.billing_cycle || sub.billingCycle
      );
      if (nextBilling && 
          nextBilling.getMonth() === currentMonth.getMonth() && 
          nextBilling.getFullYear() === currentMonth.getFullYear()) {
        const currency = currencies.find(c => c.code === sub.currency) || currencies[0];
        return total + (sub.amount * currency.rate);
      }
      return total;
    }, 0);
  }, [subscriptions, currentMonth, currencies]);

  const changeMonth = (delta) => {
    const newDate = new Date(currentMonth);
    newDate.setMonth(newDate.getMonth() + delta);
    setCurrentMonth(newDate);
    setSelectedDay(null);
  };

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
          const isSelected = selectedDay?.date?.getTime() === day.date?.getTime();
          return (
            <div 
              key={i} 
              className={`calendar-day ${!day.date ? 'empty' : ''} ${day.subscriptions.length > 0 ? 'has-subs' : ''} ${day.date?.toDateString() === new Date().toDateString() ? 'today' : ''} ${isSelected ? 'selected' : ''}`}
              onClick={() => day.date && day.subscriptions.length > 0 && setSelectedDay(isSelected ? null : day)}
            >
              {day.date && (
                <>
                  <span className="day-number">{day.date.getDate()}</span>
                  {day.subscriptions.length > 0 && (
                    <div className="day-subs">
                      {day.subscriptions.slice(0, 3).map(sub => (
                        <div key={sub.id} className="day-sub-dot" style={{ background: sub.color }} />
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          );
        })}
      </div>

      {selectedDay && (
        <div className="day-details">
          <div className="day-details-header">
            <h4>{formatDateFull(selectedDay.date)}</h4>
            <button className="close-details" onClick={() => setSelectedDay(null)}><X size={18} /></button>
          </div>
          <div className="day-details-list">
            {selectedDay.subscriptions.map(sub => {
              const currency = currencies.find(c => c.code === sub.currency) || currencies[0];
              return (
                <div key={sub.id} className="day-detail-item">
                  <Logo domain={sub.domain} emoji={sub.icon} color={sub.color} size={36} />
                  <div className="detail-info">
                    <span className="detail-name">{sub.name}</span>
                    <span className="detail-category">{sub.category}</span>
                  </div>
                  <span className="detail-amount">{sub.amount.toLocaleString('ru-RU')} {currency.symbol}</span>
                </div>
              );
            })}
          </div>
        </div>
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
  const [theme, setTheme] = useState('dark');
  const [activeTab, setActiveTab] = useState('home');
  const [showForm, setShowForm] = useState(false);
  const [editingSubscription, setEditingSubscription] = useState(null);
  const [subscriptions, setSubscriptions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isDevMode, setIsDevMode] = useState(false);
  const [showAnalytics, setShowAnalytics] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [toast, setToast] = useState({ visible: false, message: '' });

  // Настройки приложения
  const [appSettings, setAppSettings] = useState(() => {
    const saved = localStorage.getItem('subfy_settings');
    return saved ? JSON.parse(saved) : {
      notificationsEnabled: true,
      defaultDaysBefore: 1,
      defaultNotifyOnDay: true,
      defaultTime: 'morning',
      quietHoursEnabled: false,
      quietHoursStart: '23:00',
      quietHoursEnd: '08:00',
    };
  });

  // Сохранение настроек
  useEffect(() => {
    localStorage.setItem('subfy_settings', JSON.stringify(appSettings));
  }, [appSettings]);

  // Инициализация Telegram WebApp
  useEffect(() => {
    const tg = getTelegram();
    if (tg) {
      tg.ready();
      tg.expand();
      if (tg.colorScheme === 'light') setTheme('light');
    }
    initializeApp();
  }, []);

  const initializeApp = async () => {
    try {
      const tg = getTelegram();
      const initData = tg?.initData;
      const hasSeenOnboarding = localStorage.getItem('subfy_onboarding_complete');
      
      if (!initData || !SUPABASE_URL) {
        setIsDevMode(true);
        const savedSubs = localStorage.getItem('subfy_subscriptions');
        if (savedSubs) setSubscriptions(JSON.parse(savedSubs));
        setUser({ id: 'dev-user', first_name: 'Developer' });
        setAppState(hasSeenOnboarding ? 'main' : 'onboarding');
        return;
      }

      const authData = await api.auth(initData);
      setUser(authData.user);

      const { subscriptions: subs } = await api.getSubscriptions(authData.user.id);
      setSubscriptions(subs || []);
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

  const showToast = (message) => {
    setToast({ visible: true, message });
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
      setError('Ошибка сохранения');
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

  const handleOnboardingComplete = () => {
    localStorage.setItem('subfy_onboarding_complete', 'true');
    setAppState('main');
  };

  // Статистика (только месяц и год)
  const stats = useMemo(() => {
    let monthlyTotal = 0;
    subscriptions.forEach(sub => {
      const cycle = ALL_BILLING_CYCLES.find(c => c.value === (sub.billing_cycle || sub.billingCycle));
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
          sub.first_billing_date || sub.firstBillingDate, 
          sub.billing_cycle || sub.billingCycle
        ),
      }))
      .filter(sub => sub.nextDate !== null)
      .sort((a, b) => a.nextDate - b.nextDate);
  }, [subscriptions]);

  const defaultNotificationSettings = {
    daysBefore: appSettings.defaultDaysBefore,
    notifyOnDay: appSettings.defaultNotifyOnDay,
    time: appSettings.defaultTime,
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

  if (showAnalytics) {
    return (
      <div className={`app ${theme}`}>
        <style>{styles}</style>
        <AnalyticsScreen 
          subscriptions={subscriptions} 
          currencies={CURRENCIES} 
          onClose={() => setShowAnalytics(false)} 
        />
      </div>
    );
  }

  if (showSettings) {
    return (
      <div className={`app ${theme}`}>
        <style>{styles}</style>
        <SettingsScreen 
          settings={appSettings}
          onUpdateSettings={setAppSettings}
          onClose={() => setShowSettings(false)}
        />
      </div>
    );
  }

  return (
    <div className={`app ${theme}`}>
      <style>{styles}</style>

      {/* Header */}
      <header className="app-header">
        <span className="logo">Subfy</span>
        <div className="header-actions">
          <button className="icon-btn" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className="icon-btn" onClick={() => setShowSettings(true)}>
            <Settings size={20} />
          </button>
          <button className="icon-btn primary" onClick={() => {
            hapticFeedbackForCreate();
            setEditingSubscription(null);
            setShowForm(true);
          }}>
            <Plus size={20} />
          </button>
        </div>
      </header>

      {/* Stats Card - кликабельный для аналитики */}
      <div className="stats-card" onClick={() => setShowAnalytics(true)}>
        <div className="stats-main">
          <span className="stats-amount">{stats.monthly.toLocaleString('ru-RU')}</span>
          <span className="stats-currency">₽</span>
          <p className="stats-label">в месяц</p>
        </div>
        <div className="stats-yearly">
          <span>{stats.yearly.toLocaleString('ru-RU')} ₽ в год</span>
        </div>
        <div className="stats-arrow">
          <ChevronRight size={20} />
        </div>
      </div>

      {/* Tabs */}
      <div className="view-tabs">
        <button className={`view-tab ${activeTab === 'home' ? 'active' : ''}`} onClick={() => setActiveTab('home')}>
          <CreditCard size={18} />
          Подписки
        </button>
        <button className={`view-tab ${activeTab === 'calendar' ? 'active' : ''}`} onClick={() => setActiveTab('calendar')}>
          <Calendar size={18} />
          Календарь
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
                  {upcomingBillings.slice(0, 3).map(sub => {
                    const currency = CURRENCIES.find(c => c.code === sub.currency);
                    const daysUntil = getDaysUntil(sub.nextDate);
                    return (
                      <div key={sub.id} className="upcoming-item">
                        <Logo domain={sub.domain} emoji={sub.icon} color={sub.color} size={36} />
                        <div className="upcoming-info">
                          <div className="upcoming-name">{sub.name}</div>
                          <div className="upcoming-date">{formatDateFull(sub.nextDate)}</div>
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

            <div className="subscriptions-list">
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
                subscriptions.map(sub => (
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
                ))
              )}
            </div>
          </>
        ) : (
          <CalendarView subscriptions={subscriptions} currencies={CURRENCIES} />
        )}
      </div>

      {/* Form Modal */}
      {showForm && (
        <SubscriptionForm
          onClose={() => { setShowForm(false); setEditingSubscription(null); }}
          onSave={saveSubscription}
          editData={editingSubscription}
          templates={SUBSCRIPTION_TEMPLATES}
          isLoading={isLoading}
          defaultNotificationSettings={defaultNotificationSettings}
        />
      )}

      {/* Toast */}
      <Toast 
        message={toast.message} 
        visible={toast.visible} 
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

  @keyframes toastIn {
    from { opacity: 0; transform: translateX(-50%) translateY(20px); }
    to { opacity: 1; transform: translateX(-50%) translateY(0); }
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

  .onboarding-slides { flex: 1; overflow: hidden; }
  
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
    padding-bottom: max(24px, env(safe-area-inset-bottom));
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
    padding-top: max(12px, env(safe-area-inset-top));
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

  /* Stats Card */
  .stats-card {
    background: linear-gradient(135deg, var(--accent), var(--accent-secondary));
    border-radius: 20px;
    padding: 20px;
    margin: 0 16px 16px;
    color: white;
    flex-shrink: 0;
    cursor: pointer;
    position: relative;
    transition: transform 0.2s;
  }

  .stats-card:active { transform: scale(0.98); }

  .stats-main { text-align: center; margin-bottom: 8px; }
  .stats-amount { font-size: 2.5rem; font-weight: 800; line-height: 1; }
  .stats-currency { font-size: 1.25rem; font-weight: 600; opacity: 0.8; margin-left: 4px; }
  .stats-label { font-size: 0.875rem; opacity: 0.8; margin-top: 4px; }

  .stats-yearly {
    text-align: center;
    font-size: 0.9rem;
    opacity: 0.9;
  }

  .stats-arrow {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    opacity: 0.7;
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
    padding-bottom: max(16px, env(safe-area-inset-bottom));
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

  .upcoming-info { flex: 1; min-width: 0; }
  .upcoming-name { font-weight: 600; font-size: 0.875rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .upcoming-date { font-size: 0.75rem; color: var(--text-secondary); }
  .upcoming-amount { font-weight: 700; font-size: 0.875rem; flex-shrink: 0; }

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

  .sub-next.soon { background: rgba(239, 68, 68, 0.1); color: var(--danger); }

  /* Confirm Modal */
  .confirm-modal {
    background: var(--bg-secondary);
    border-radius: 20px;
    padding: 24px;
    width: calc(100% - 48px);
    max-width: 320px;
    text-align: center;
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
    align-items: flex-end;
    justify-content: center;
    z-index: 1000;
  }

  .modal {
    background: var(--bg-primary);
    border-radius: 24px 24px 0 0;
    width: 100%;
    max-height: 90vh;
    max-height: 90dvh;
    overflow: hidden;
    animation: slideUp 0.3s ease;
  }

  .subscription-modal {
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
  }

  @keyframes slideUp {
    from { transform: translateY(100%); }
    to { transform: translateY(0); }
  }

  .modal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 20px;
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
    padding: 16px;
    overflow-y: auto;
    flex: 1;
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
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }

  .template-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    padding: 12px 6px;
    background: var(--bg-secondary);
    border: 2px solid transparent;
    border-radius: 14px;
    cursor: pointer;
    transition: all 0.2s;
  }

  .template-item:active { transform: scale(0.97); }
  .template-item.custom { border: 2px dashed var(--border); }

  .template-icon {
    width: 40px;
    height: 40px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .template-item span { font-size: 0.6875rem; font-weight: 600; text-align: center; line-height: 1.2; }

  /* Subscription Form */
  .subscription-form {
    padding: 16px;
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

  .form-row { display: flex; gap: 12px; }
  .flex-1 { flex: 1; }

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

  .category-selector {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .category-btn {
    padding: 8px 14px;
    border: 2px solid var(--border);
    background: var(--bg-secondary);
    border-radius: 20px;
    font-size: 0.8125rem;
    font-weight: 600;
    color: var(--text-primary);
    cursor: pointer;
  }

  .category-btn.active { 
    border-color: var(--cat-color, var(--accent)); 
    background: color-mix(in srgb, var(--cat-color, var(--accent)) 15%, transparent);
  }

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

  .emoji-selector { display: flex; flex-wrap: wrap; gap: 6px; }

  .emoji-btn {
    width: 40px;
    height: 40px;
    border: 2px solid var(--border);
    background: var(--bg-secondary);
    border-radius: 10px;
    font-size: 1.125rem;
    cursor: pointer;
  }

  .emoji-btn.active { border-color: var(--accent); background: rgba(99, 102, 241, 0.1); }

  .color-picker { display: flex; align-items: center; gap: 12px; }

  .color-picker input[type="color"] {
    width: 48px;
    height: 48px;
    padding: 4px;
    border-radius: 10px;
    cursor: pointer;
  }

  .color-picker span { font-family: monospace; color: var(--text-secondary); font-size: 0.875rem; }

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

  /* Period Modal */
  .period-modal {
    background: var(--bg-secondary);
    border-radius: 20px 20px 0 0;
    width: 100%;
    padding-bottom: max(20px, env(safe-area-inset-bottom));
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
  }

  .analytics-header, .settings-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    padding-top: max(12px, env(safe-area-inset-top));
    border-bottom: 1px solid var(--border);
    flex-shrink: 0;
  }

  .analytics-header h2, .settings-header h2 { font-size: 1rem; font-weight: 700; }

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
    padding-bottom: max(16px, env(safe-area-inset-bottom));
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
    aspect-ratio: 1;
    background: var(--bg-secondary);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 4px;
  }

  .calendar-day.empty { background: transparent; }
  .calendar-day.today { border: 2px solid var(--accent); }
  .calendar-day.has-subs { background: var(--bg-tertiary); cursor: pointer; }
  .calendar-day.has-subs:active { transform: scale(0.95); }
  .calendar-day.selected { background: var(--accent); color: white; }

  .day-number { font-size: 0.8125rem; font-weight: 600; }
  .day-subs { display: flex; gap: 2px; margin-top: 2px; }
  .day-sub-dot { width: 5px; height: 5px; border-radius: 50%; }

  .day-details {
    background: var(--bg-secondary);
    border-radius: 14px;
    padding: 14px;
    margin-top: 16px;
    animation: fadeIn 0.2s ease;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .day-details-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 14px;
  }

  .day-details-header h4 { font-size: 0.9375rem; font-weight: 700; text-transform: capitalize; }

  .close-details {
    width: 28px;
    height: 28px;
    border: none;
    background: var(--bg-tertiary);
    color: var(--text-primary);
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .day-details-list { display: flex; flex-direction: column; gap: 10px; }

  .day-detail-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    background: var(--bg-tertiary);
    border-radius: 10px;
  }

  .detail-info { flex: 1; min-width: 0; }
  .detail-name { display: block; font-weight: 600; font-size: 0.875rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .detail-category { font-size: 0.6875rem; color: var(--text-secondary); }
  .detail-amount { font-weight: 700; font-size: 0.875rem; flex-shrink: 0; }
`;
