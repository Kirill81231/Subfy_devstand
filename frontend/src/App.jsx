import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Plus, X, Calendar, ChevronRight, ChevronLeft, Sun, Moon, Search, Check, Trash2, Edit3, Bell, CreditCard, Loader } from 'lucide-react';

// ============================================
// КОНФИГУРАЦИЯ
// ============================================
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || '';
const AUTH_ENDPOINT = import.meta.env.VITE_AUTH_ENDPOINT || '';

// Edge Functions endpoints
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
  { value: 'weekly', label: 'Еженедельно', multiplier: 4.33, short: 'нед' },
  { value: 'monthly', label: 'Ежемесячно', multiplier: 1, short: 'мес' },
  { value: 'quarterly', label: 'Раз в квартал', multiplier: 0.33, short: 'квартал' },
  { value: 'yearly', label: 'Ежегодно', multiplier: 0.083, short: 'год' },
];

const CURRENCIES = [
  { code: 'RUB', symbol: '₽', rate: 1 },
  { code: 'USD', symbol: '$', rate: 96 },
  { code: 'EUR', symbol: '€', rate: 104 },
];

const EMOJI_OPTIONS = ['📦', '🎮', '💼', '🏋️', '🎨', '📱', '🖥️', '🎧', '📚', '🎬', '🎵', '☁️', '🔒', '💳', '🛒', '✈️'];

// ============================================
// УТИЛИТЫ
// ============================================
const calculateNextBillingDate = (firstDate, cycle) => {
  const date = new Date(firstDate);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  while (date <= today) {
    switch (cycle) {
      case 'weekly': date.setDate(date.getDate() + 7); break;
      case 'monthly': date.setMonth(date.getMonth() + 1); break;
      case 'quarterly': date.setMonth(date.getMonth() + 3); break;
      case 'yearly': date.setFullYear(date.getFullYear() + 1); break;
      default: date.setMonth(date.getMonth() + 1);
    }
  }
  return date;
};

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' });
};

const formatDateFull = (date) => {
  return new Date(date).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' });
};

// Telegram WebApp helpers
const getTelegram = () => window.Telegram?.WebApp;
const hapticFeedback = (type = 'light') => {
  getTelegram()?.HapticFeedback?.impactOccurred(type);
};
const hapticNotification = (type = 'success') => {
  getTelegram()?.HapticFeedback?.notificationOccurred(type);
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

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (Math.abs(distance) > minSwipeDistance) {
      if (distance > 0 && currentSlide < slides.length - 1) {
        setCurrentSlide(prev => prev + 1);
        hapticFeedback('light');
      } else if (distance < 0 && currentSlide > 0) {
        setCurrentSlide(prev => prev - 1);
        hapticFeedback('light');
      }
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  const handleStart = () => {
    hapticNotification('success');
    onComplete();
  };

  return (
    <div className="onboarding">
      <div 
        className="onboarding-slides"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div 
          className="slides-track" 
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
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
              onClick={() => {
                setCurrentSlide(index);
                hapticFeedback('light');
              }}
            />
          ))}
        </div>

        {currentSlide === slides.length - 1 ? (
          <button className="start-btn" onClick={handleStart}>
            Начать
          </button>
        ) : (
          <button className="next-btn" onClick={() => {
            setCurrentSlide(prev => prev + 1);
            hapticFeedback('light');
          }}>
            Далее
            <ChevronRight size={20} />
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
      <div 
        className="logo-emoji" 
        style={{ 
          width: size, 
          height: size, 
          background: color + '20', 
          color: color,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 8,
          fontSize: size * 0.5,
          flexShrink: 0,
        }}
      >
        {emoji || '📦'}
      </div>
    );
  }
  
  return (
    <div 
      className="logo-container" 
      style={{ 
        width: size, 
        height: size, 
        background: loaded ? 'white' : color + '20',
        borderRadius: 8,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}
    >
      <img
        src={logoUrl}
        alt=""
        style={{ 
          width: size - 4, 
          height: size - 4, 
          objectFit: 'contain',
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.2s'
        }}
        onLoad={() => setLoaded(true)}
        onError={() => setHasError(true)}
      />
      {!loaded && !hasError && (
        <div style={{ fontSize: size * 0.5 }}>{emoji || '📦'}</div>
      )}
    </div>
  );
};

// ============================================
// КОМПОНЕНТ: КАРТОЧКА ПОДПИСКИ
// ============================================
const SubscriptionCard = ({ subscription, onEdit, onDelete, currencies }) => {
  const currency = currencies.find(c => c.code === subscription.currency) || currencies[0];
  const nextDate = calculateNextBillingDate(subscription.first_billing_date || subscription.firstBillingDate, subscription.billing_cycle || subscription.billingCycle);
  const daysUntil = Math.ceil((nextDate - new Date()) / (1000 * 60 * 60 * 24));
  const cycle = BILLING_CYCLES.find(c => c.value === (subscription.billing_cycle || subscription.billingCycle));
  
  return (
    <div className="sub-card" style={{ '--accent': subscription.color }}>
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
            <span className="sub-category">{subscription.category}</span>
          </div>
          <div className="sub-actions">
            <button className="icon-btn" onClick={() => { hapticFeedback(); onEdit(subscription); }}>
              <Edit3 size={16} />
            </button>
            <button className="icon-btn delete" onClick={() => { hapticNotification('warning'); onDelete(subscription.id); }}>
              <Trash2 size={16} />
            </button>
          </div>
        </div>
        <div className="sub-card-footer">
          <div className="sub-price">
            <span className="price-amount">{subscription.amount.toLocaleString('ru-RU')}</span>
            <span className="price-currency">{currency.symbol}</span>
            <span className="price-cycle">/{cycle?.short}</span>
          </div>
          <div className={`sub-next ${daysUntil <= 3 ? 'soon' : ''}`}>
            <Bell size={14} />
            <span>{daysUntil === 0 ? 'Сегодня' : daysUntil === 1 ? 'Завтра' : `Через ${daysUntil} дн.`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================
// КОМПОНЕНТ: ФОРМА ПОДПИСКИ
// ============================================
const SubscriptionForm = ({ onClose, onSave, editData, templates, isLoading }) => {
  const [step, setStep] = useState(editData ? 2 : 1);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [formData, setFormData] = useState(editData ? {
    ...editData,
    firstBillingDate: editData.first_billing_date || editData.firstBillingDate,
    billingCycle: editData.billing_cycle || editData.billingCycle,
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
  });

  const filteredTemplates = templates.filter(t => {
    const matchesSearch = t.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'Все' || t.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const selectTemplate = (template) => {
    hapticFeedback('medium');
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
    hapticNotification('success');
    onSave({
      ...formData,
      id: editData?.id,
      amount: parseFloat(formData.amount),
      first_billing_date: formData.firstBillingDate,
      billing_cycle: formData.billingCycle,
    });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <button className="back-btn" onClick={() => {
            hapticFeedback();
            step === 1 ? onClose() : setStep(1);
          }}>
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
              {['Все', 'Экосистема', 'Видео', 'Музыка', 'Облако', 'Другое'].map(cat => (
                <button
                  key={cat}
                  className={`cat-tab ${selectedCategory === cat ? 'active' : ''}`}
                  onClick={() => {
                    hapticFeedback('light');
                    setSelectedCategory(cat);
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="template-grid">
              <button className="template-item custom" onClick={() => {
                hapticFeedback('medium');
                setStep(2);
              }}>
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
              <Logo 
                domain={formData.domain} 
                emoji={formData.icon} 
                color={formData.color}
                size={56}
              />
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
                      onClick={() => {
                        hapticFeedback('light');
                        setFormData({ ...formData, currency: cur.code });
                      }}
                    >
                      {cur.symbol}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="form-section">
              <label>Периодичность</label>
              <div className="cycle-selector">
                {BILLING_CYCLES.map(cycle => (
                  <button
                    key={cycle.value}
                    className={`cycle-btn ${formData.billingCycle === cycle.value ? 'active' : ''}`}
                    onClick={() => {
                      hapticFeedback('light');
                      setFormData({ ...formData, billingCycle: cycle.value });
                    }}
                  >
                    {cycle.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="form-section">
              <label>Дата первого списания</label>
              <input
                type="date"
                value={formData.firstBillingDate}
                onChange={e => setFormData({ ...formData, firstBillingDate: e.target.value })}
              />
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
                        onClick={() => {
                          hapticFeedback('light');
                          setFormData({ ...formData, icon: emoji });
                        }}
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

            <button className="save-btn" onClick={handleSave} disabled={isLoading}>
              {isLoading ? <Loader className="spin" size={20} /> : <Check size={20} />}
              {editData ? 'Сохранить' : 'Добавить'}
            </button>
          </div>
        )}
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
        const nextBilling = calculateNextBillingDate(sub.first_billing_date || sub.firstBillingDate, sub.billing_cycle || sub.billingCycle);
        return nextBilling.getDate() === day && 
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
      const nextBilling = calculateNextBillingDate(sub.first_billing_date || sub.firstBillingDate, sub.billing_cycle || sub.billingCycle);
      if (nextBilling.getMonth() === currentMonth.getMonth() && 
          nextBilling.getFullYear() === currentMonth.getFullYear()) {
        const currency = currencies.find(c => c.code === sub.currency) || currencies[0];
        return total + (sub.amount * currency.rate);
      }
      return total;
    }, 0);
  }, [subscriptions, currentMonth, currencies]);

  const handleDayClick = (day) => {
    if (day.date && day.subscriptions.length > 0) {
      hapticFeedback('medium');
      setSelectedDay(selectedDay?.date?.getTime() === day.date.getTime() ? null : day);
    }
  };

  const changeMonth = (delta) => {
    hapticFeedback('light');
    const newDate = new Date(currentMonth);
    newDate.setMonth(newDate.getMonth() + delta);
    setCurrentMonth(newDate);
    setSelectedDay(null);
  };

  return (
    <div className="calendar-view">
      <div className="calendar-header">
        <button onClick={() => changeMonth(-1)}>
          <ChevronLeft size={20} />
        </button>
        <div className="calendar-title">
          <h3>{monthName}</h3>
          <span className="month-total">{Math.round(monthlyTotal).toLocaleString('ru-RU')} ₽</span>
        </div>
        <button onClick={() => changeMonth(1)}>
          <ChevronRight size={20} />
        </button>
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
              onClick={() => handleDayClick(day)}
            >
              {day.date && (
                <>
                  <span className="day-number">{day.date.getDate()}</span>
                  {day.subscriptions.length > 0 && (
                    <div className="day-subs">
                      {day.subscriptions.slice(0, 3).map(sub => (
                        <div 
                          key={sub.id} 
                          className="day-sub-dot" 
                          style={{ background: sub.color }}
                        />
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
            <button className="close-details" onClick={() => setSelectedDay(null)}>
              <X size={18} />
            </button>
          </div>
          <div className="day-details-list">
            {selectedDay.subscriptions.map(sub => {
              const currency = currencies.find(c => c.code === sub.currency) || currencies[0];
              return (
                <div key={sub.id} className="day-detail-item">
                  <Logo 
                    domain={sub.domain} 
                    emoji={sub.icon} 
                    color={sub.color}
                    size={36}
                  />
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
  // Состояния приложения
  const [appState, setAppState] = useState('loading'); // loading, onboarding, main
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState('dark');
  const [activeTab, setActiveTab] = useState('home');
  const [showForm, setShowForm] = useState(false);
  const [editingSubscription, setEditingSubscription] = useState(null);
  const [subscriptions, setSubscriptions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isDevMode, setIsDevMode] = useState(false);

  // Инициализация Telegram WebApp
  useEffect(() => {
    const tg = getTelegram();
    if (tg) {
      tg.ready();
      tg.expand();
      
      // Устанавливаем тему из Telegram
      if (tg.colorScheme === 'light') {
        setTheme('light');
      }
    }
    
    initializeApp();
  }, []);

  // Инициализация приложения
  const initializeApp = async () => {
    try {
      const tg = getTelegram();
      const initData = tg?.initData;
      
      // Проверяем, проходил ли пользователь онбординг
      const hasSeenOnboarding = localStorage.getItem('subfy_onboarding_complete');
      
      // Режим разработки (нет Telegram или нет API)
      if (!initData || !SUPABASE_URL) {
        console.log('Dev mode: using local storage');
        setIsDevMode(true);
        
        // Загружаем подписки из localStorage
        const savedSubs = localStorage.getItem('subfy_subscriptions');
        if (savedSubs) {
          setSubscriptions(JSON.parse(savedSubs));
        }
        
        setUser({ id: 'dev-user', first_name: 'Developer' });
        setAppState(hasSeenOnboarding ? 'main' : 'onboarding');
        return;
      }

      // Авторизация через Telegram
      const authData = await api.auth(initData);
      setUser(authData.user);

      // Загружаем подписки из Supabase
      const { subscriptions: subs } = await api.getSubscriptions(authData.user.id);
      setSubscriptions(subs || []);
      
      setAppState(hasSeenOnboarding ? 'main' : 'onboarding');
      
    } catch (err) {
      console.error('Init error:', err);
      setError(err.message);
      
      // Fallback to dev mode
      setIsDevMode(true);
      const savedSubs = localStorage.getItem('subfy_subscriptions');
      if (savedSubs) {
        setSubscriptions(JSON.parse(savedSubs));
      }
      setUser({ id: 'dev-user', first_name: 'User' });
      
      const hasSeenOnboarding = localStorage.getItem('subfy_onboarding_complete');
      setAppState(hasSeenOnboarding ? 'main' : 'onboarding');
    }
  };

  // Сохранение подписки
  const saveSubscription = async (data) => {
    setIsLoading(true);
    
    try {
      if (!isDevMode && user?.id) {
        // Сохраняем через API
        const { subscription } = await api.saveSubscription(user.id, data);
        
        if (editingSubscription) {
          setSubscriptions(prev => prev.map(s => s.id === subscription.id ? subscription : s));
        } else {
          setSubscriptions(prev => [subscription, ...prev]);
        }
      } else {
        // Сохраняем в localStorage (dev mode)
        const newSub = {
          ...data,
          id: editingSubscription?.id || `local-${Date.now()}`,
        };
        
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
      setEditingSubscription(null);
    } catch (err) {
      console.error('Save error:', err);
      setError('Ошибка сохранения');
      hapticNotification('error');
    } finally {
      setIsLoading(false);
    }
  };

  // Удаление подписки
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
      hapticNotification('error');
    }
  };

  // Завершение онбординга
  const handleOnboardingComplete = () => {
    localStorage.setItem('subfy_onboarding_complete', 'true');
    hapticNotification('success');
    setAppState('main');
  };

  // Статистика
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
      weekly: Math.round(monthlyTotal / 4.33),
      yearly: Math.round(monthlyTotal * 12),
      count: subscriptions.length,
    };
  }, [subscriptions]);

  // Ближайшие списания
  const upcomingBillings = useMemo(() => {
    return subscriptions
      .map(sub => ({
        ...sub,
        nextDate: calculateNextBillingDate(sub.first_billing_date || sub.firstBillingDate, sub.billing_cycle || sub.billingCycle),
      }))
      .sort((a, b) => a.nextDate - b.nextDate);
  }, [subscriptions]);

  // Рендер по состоянию
  if (appState === 'loading') {
    return <LoadingScreen message="Подключение..." />;
  }

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

      {/* Header */}
      <header className="app-header">
        <span className="logo">Subfy</span>
        <div className="header-actions">
          <button className="icon-btn" onClick={() => {
            hapticFeedback();
            setTheme(theme === 'dark' ? 'light' : 'dark');
          }}>
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className="icon-btn primary" onClick={() => {
            hapticFeedback('medium');
            setEditingSubscription(null);
            setShowForm(true);
          }}>
            <Plus size={20} />
          </button>
        </div>
      </header>

      {/* Stats Card */}
      <div className="stats-card">
        <div className="stats-main">
          <span className="stats-amount">{stats.monthly.toLocaleString('ru-RU')}</span>
          <span className="stats-currency">₽</span>
          <p className="stats-label">в месяц</p>
        </div>
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-value">{stats.weekly.toLocaleString('ru-RU')} ₽</div>
            <div className="stat-label">в неделю</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">{stats.yearly.toLocaleString('ru-RU')} ₽</div>
            <div className="stat-label">в год</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">{stats.count}</div>
            <div className="stat-label">подписок</div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="view-tabs">
        <button className={`view-tab ${activeTab === 'home' ? 'active' : ''}`} onClick={() => {
          hapticFeedback();
          setActiveTab('home');
        }}>
          <CreditCard size={18} />
          Подписки
        </button>
        <button className={`view-tab ${activeTab === 'calendar' ? 'active' : ''}`} onClick={() => {
          hapticFeedback();
          setActiveTab('calendar');
        }}>
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
                    const daysUntil = Math.ceil((sub.nextDate - new Date()) / (1000 * 60 * 60 * 24));
                    return (
                      <div key={sub.id} className="upcoming-item">
                        <Logo domain={sub.domain} emoji={sub.icon} color={sub.color} size={36} />
                        <div className="upcoming-info">
                          <div className="upcoming-name">{sub.name}</div>
                          <div className="upcoming-date">
                            {daysUntil === 0 ? 'Сегодня' : daysUntil === 1 ? 'Завтра' : formatDate(sub.nextDate)}
                          </div>
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
                    hapticFeedback('medium');
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
          onClose={() => {
            setShowForm(false);
            setEditingSubscription(null);
          }}
          onSave={saveSubscription}
          editData={editingSubscription}
          templates={SUBSCRIPTION_TEMPLATES}
          isLoading={isLoading}
        />
      )}
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

  /* Loading Screen */
  .loading-screen {
    position: fixed;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--bg-primary);
  }

  .loading-content {
    text-align: center;
  }

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

  .loading-message {
    color: var(--text-secondary);
    font-size: 0.875rem;
  }

  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  .spin {
    animation: spin 1s linear infinite;
  }

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

  .slide-emoji {
    font-size: 80px;
    margin-bottom: 32px;
  }

  .slide-title {
    font-size: 2rem;
    font-weight: 800;
    margin-bottom: 8px;
  }

  .slide-subtitle {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--accent);
    margin-bottom: 16px;
  }

  .slide-description {
    font-size: 1rem;
    color: var(--text-secondary);
    max-width: 280px;
    line-height: 1.5;
  }

  .onboarding-footer {
    padding: 24px 32px;
    padding-bottom: max(24px, env(safe-area-inset-bottom));
  }

  .dots {
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-bottom: 24px;
  }

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
    transition: opacity 0.2s;
  }

  .next-btn {
    background: var(--bg-secondary);
    color: var(--text-primary);
  }

  .start-btn {
    background: var(--accent);
    color: white;
  }

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

  .header-actions {
    display: flex;
    gap: 8px;
  }

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

  .icon-btn:active {
    transform: scale(0.95);
  }

  .icon-btn.primary {
    background: var(--accent);
    color: white;
  }

  .icon-btn.delete:active {
    background: var(--danger);
    color: white;
  }

  /* Stats Card */
  .stats-card {
    background: linear-gradient(135deg, var(--accent), var(--accent-secondary));
    border-radius: 20px;
    padding: 20px;
    margin: 0 16px 16px;
    color: white;
    flex-shrink: 0;
  }

  .stats-main {
    text-align: center;
    margin-bottom: 16px;
  }

  .stats-amount {
    font-size: 2.5rem;
    font-weight: 800;
    line-height: 1;
  }

  .stats-currency {
    font-size: 1.25rem;
    font-weight: 600;
    opacity: 0.8;
    margin-left: 4px;
  }

  .stats-label {
    font-size: 0.875rem;
    opacity: 0.8;
    margin-top: 4px;
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
  }

  .stat-item {
    text-align: center;
    padding: 10px 8px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 12px;
  }

  .stat-value {
    font-size: 0.875rem;
    font-weight: 700;
  }

  .stat-label {
    font-size: 0.625rem;
    opacity: 0.8;
    margin-top: 2px;
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

  .view-tab.active {
    background: var(--accent);
    color: white;
  }

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

  .section-title {
    font-size: 1rem;
    font-weight: 700;
  }

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

  .upcoming-info {
    flex: 1;
    min-width: 0;
  }

  .upcoming-name {
    font-weight: 600;
    font-size: 0.875rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .upcoming-date {
    font-size: 0.75rem;
    color: var(--text-secondary);
  }

  .upcoming-amount {
    font-weight: 700;
    font-size: 0.875rem;
    flex-shrink: 0;
  }

  /* Subscription Cards */
  .subscriptions-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .sub-card {
    background: var(--bg-secondary);
    border-radius: 16px;
    overflow: hidden;
    display: flex;
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
    margin-bottom: 12px;
  }

  .sub-info {
    flex: 1;
    min-width: 0;
  }

  .sub-name {
    font-size: 0.9375rem;
    font-weight: 700;
    margin-bottom: 2px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .sub-category {
    font-size: 0.75rem;
    color: var(--text-secondary);
  }

  .sub-actions {
    display: flex;
    gap: 4px;
    flex-shrink: 0;
  }

  .sub-actions .icon-btn {
    width: 32px;
    height: 32px;
    border-radius: 8px;
  }

  .sub-card-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .sub-price {
    display: flex;
    align-items: baseline;
    gap: 2px;
  }

  .price-amount {
    font-size: 1.125rem;
    font-weight: 800;
  }

  .price-currency {
    font-size: 0.875rem;
    font-weight: 600;
  }

  .price-cycle {
    font-size: 0.75rem;
    color: var(--text-secondary);
    margin-left: 2px;
  }

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

  .sub-next.soon {
    background: rgba(239, 68, 68, 0.1);
    color: var(--danger);
  }

  /* Empty State */
  .empty-state {
    text-align: center;
    padding: 48px 32px;
  }

  .empty-icon {
    font-size: 3rem;
    margin-bottom: 16px;
  }

  .empty-title {
    font-size: 1.125rem;
    font-weight: 700;
    margin-bottom: 8px;
  }

  .empty-text {
    color: var(--text-secondary);
    margin-bottom: 20px;
    font-size: 0.875rem;
  }

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
    overflow-y: auto;
    animation: slideUp 0.3s ease;
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
  }

  .modal-header h2 {
    font-size: 1rem;
    font-weight: 700;
  }

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

  .search-box svg {
    color: var(--text-secondary);
    flex-shrink: 0;
  }

  .category-tabs {
    display: flex;
    gap: 8px;
    overflow-x: auto;
    padding-bottom: 12px;
    margin-bottom: 8px;
    -webkit-overflow-scrolling: touch;
  }

  .category-tabs::-webkit-scrollbar {
    display: none;
  }

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

  .cat-tab.active {
    background: var(--accent);
    color: white;
  }

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

  .template-item:active {
    transform: scale(0.97);
  }

  .template-item.custom {
    border: 2px dashed var(--border);
  }

  .template-icon {
    width: 40px;
    height: 40px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
  }

  .template-item span {
    font-size: 0.6875rem;
    font-weight: 600;
    text-align: center;
    line-height: 1.2;
  }

  /* Subscription Form */
  .subscription-form {
    padding: 16px;
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

  .preview-info h3 {
    font-size: 1.125rem;
    font-weight: 700;
  }

  .preview-info p {
    color: var(--text-secondary);
    font-size: 0.875rem;
  }

  .form-section {
    margin-bottom: 16px;
  }

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
  .form-section select:focus {
    border-color: var(--accent);
  }

  .form-row {
    display: flex;
    gap: 12px;
  }

  .flex-1 {
    flex: 1;
  }

  .currency-selector {
    display: flex;
    gap: 8px;
  }

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

  .currency-btn.active {
    border-color: var(--accent);
    background: rgba(99, 102, 241, 0.1);
  }

  .cycle-selector {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }

  .cycle-btn {
    padding: 12px 8px;
    border: 2px solid var(--border);
    background: var(--bg-secondary);
    border-radius: 10px;
    font-size: 0.8125rem;
    font-weight: 600;
    color: var(--text-primary);
    cursor: pointer;
  }

  .cycle-btn.active {
    border-color: var(--accent);
    background: rgba(99, 102, 241, 0.1);
  }

  .emoji-selector {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }

  .emoji-btn {
    width: 40px;
    height: 40px;
    border: 2px solid var(--border);
    background: var(--bg-secondary);
    border-radius: 10px;
    font-size: 1.125rem;
    cursor: pointer;
  }

  .emoji-btn.active {
    border-color: var(--accent);
    background: rgba(99, 102, 241, 0.1);
  }

  .color-picker {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .color-picker input[type="color"] {
    width: 48px;
    height: 48px;
    padding: 4px;
    border-radius: 10px;
    cursor: pointer;
  }

  .color-picker span {
    font-family: monospace;
    color: var(--text-secondary);
    font-size: 0.875rem;
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

  .save-btn:disabled {
    opacity: 0.6;
  }

  /* Calendar */
  .calendar-view {
    padding-bottom: 16px;
  }

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

  .calendar-title {
    text-align: center;
  }

  .calendar-title h3 {
    font-size: 1rem;
    font-weight: 700;
    text-transform: capitalize;
  }

  .month-total {
    font-size: 0.8125rem;
    color: var(--accent);
    font-weight: 600;
  }

  .calendar-weekdays {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 4px;
    margin-bottom: 8px;
  }

  .weekday {
    text-align: center;
    font-size: 0.6875rem;
    font-weight: 600;
    color: var(--text-secondary);
    padding: 6px 0;
  }

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
    cursor: default;
  }

  .calendar-day.empty {
    background: transparent;
  }

  .calendar-day.today {
    border: 2px solid var(--accent);
  }

  .calendar-day.has-subs {
    background: var(--bg-tertiary);
    cursor: pointer;
  }

  .calendar-day.has-subs:active {
    transform: scale(0.95);
  }

  .calendar-day.selected {
    background: var(--accent);
    color: white;
  }

  .day-number {
    font-size: 0.8125rem;
    font-weight: 600;
  }

  .day-subs {
    display: flex;
    gap: 2px;
    margin-top: 2px;
  }

  .day-sub-dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
  }

  /* Day Details */
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

  .day-details-header h4 {
    font-size: 0.9375rem;
    font-weight: 700;
    text-transform: capitalize;
  }

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

  .day-details-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .day-detail-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    background: var(--bg-tertiary);
    border-radius: 10px;
  }

  .detail-info {
    flex: 1;
    min-width: 0;
  }

  .detail-name {
    display: block;
    font-weight: 600;
    font-size: 0.875rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .detail-category {
    font-size: 0.6875rem;
    color: var(--text-secondary);
  }

  .detail-amount {
    font-weight: 700;
    font-size: 0.875rem;
    flex-shrink: 0;
  }
`;
