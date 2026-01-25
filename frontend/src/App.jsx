import React, { useState, useEffect, useMemo } from 'react';
import { Plus, X, Calendar, ChevronRight, ChevronLeft, Sun, Moon, Search, Check, Trash2, Edit3, Bell, CreditCard } from 'lucide-react';

// Шаблоны с доменами для логотипов
const SUBSCRIPTION_TEMPLATES = [
  { id: 't1', name: 'Яндекс Плюс', price: 299, color: '#FFCC00', category: 'Экосистема', domain: 'plus.yandex.ru' },
  { id: 't2', name: 'СберПрайм', price: 399, color: '#21A038', category: 'Экосистема', domain: 'sberbank.ru' },
  { id: 't3', name: 'МТС Premium', price: 299, color: '#E30611', category: 'Экосистема', domain: 'mts.ru' },
  { id: 't4', name: 'Тинькофф Pro', price: 399, color: '#FFDD2D', category: 'Экосистема', domain: 'tinkoff.ru' },
  { id: 't5', name: 'Кинопоиск', price: 269, color: '#FF6600', category: 'Видео', domain: 'kinopoisk.ru' },
  { id: 't6', name: 'Okko', price: 399, color: '#6B4EFF', category: 'Видео', domain: 'okko.tv' },
  { id: 't7', name: 'ivi', price: 399, color: '#EA003D', category: 'Видео', domain: 'ivi.ru' },
  { id: 't8', name: 'Premier', price: 399, color: '#FF0066', category: 'Видео', domain: 'premier.one' },
  { id: 't9', name: 'Wink', price: 299, color: '#7B2BFC', category: 'Видео', domain: 'wink.ru' },
  { id: 't10', name: 'Яндекс Музыка', price: 249, color: '#FFCC00', category: 'Музыка', domain: 'music.yandex.ru' },
  { id: 't11', name: 'VK Музыка', price: 249, color: '#0077FF', category: 'Музыка', domain: 'vk.com' },
  { id: 't12', name: 'Apple Music', price: 169, color: '#FA2D48', category: 'Музыка', domain: 'apple.com' },
  { id: 't13', name: 'Spotify', price: 199, color: '#1DB954', category: 'Музыка', domain: 'spotify.com' },
  { id: 't14', name: 'Яндекс 360', price: 299, color: '#FFCC00', category: 'Облако', domain: '360.yandex.ru' },
  { id: 't15', name: 'iCloud+', price: 149, color: '#3693F3', category: 'Облако', domain: 'icloud.com' },
  { id: 't16', name: 'Google One', price: 139, color: '#4285F4', category: 'Облако', domain: 'one.google.com' },
  { id: 't17', name: 'Литрес', price: 399, color: '#FF6B00', category: 'Книги', domain: 'litres.ru' },
  { id: 't18', name: 'Bookmate', price: 299, color: '#FF5C35', category: 'Книги', domain: 'bookmate.com' },
  { id: 't19', name: 'Netflix', price: 699, color: '#E50914', category: 'Видео', domain: 'netflix.com' },
  { id: 't20', name: 'YouTube Premium', price: 299, color: '#FF0000', category: 'Видео', domain: 'youtube.com' },
  { id: 't21', name: 'Telegram Premium', price: 299, color: '#0088CC', category: 'Другое', domain: 'telegram.org' },
  { id: 't22', name: 'ChatGPT Plus', price: 1900, color: '#10A37F', category: 'Другое', domain: 'openai.com' },
  { id: 't23', name: 'Notion', price: 800, color: '#000000', category: 'Другое', domain: 'notion.so' },
  { id: 't24', name: 'Figma', price: 1200, color: '#F24E1E', category: 'Другое', domain: 'figma.com' },
];

const CATEGORIES = ['Все', 'Экосистема', 'Видео', 'Музыка', 'Облако', 'Книги', 'Фитнес', 'Другое'];
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

// Эмодзи для кастомных подписок
const EMOJI_OPTIONS = ['📦', '🎮', '💼', '🏋️', '🎨', '📱', '🖥️', '🎧', '📚', '🎬', '🎵', '☁️', '🔒', '💳', '🛒', '✈️'];

// Функция для расчёта следующей даты списания
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

// Форматирование даты
const formatDate = (date) => {
  return new Date(date).toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' });
};

const formatDateFull = (date) => {
  return new Date(date).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' });
};

// Компонент логотипа с fallback на эмодзи
const Logo = ({ domain, emoji, color, size = 32 }) => {
  const [hasError, setHasError] = useState(false);
  const [loaded, setLoaded] = useState(false);
  
  // Используем Clearbit для логотипов (бесплатно, качественно)
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
          fontSize: size * 0.5
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
        justifyContent: 'center'
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

// Компонент карточки подписки
const SubscriptionCard = ({ subscription, onEdit, onDelete, currencies }) => {
  const currency = currencies.find(c => c.code === subscription.currency) || currencies[0];
  const nextDate = calculateNextBillingDate(subscription.firstBillingDate, subscription.billingCycle);
  const daysUntil = Math.ceil((nextDate - new Date()) / (1000 * 60 * 60 * 24));
  const cycle = BILLING_CYCLES.find(c => c.value === subscription.billingCycle);
  
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
            <button className="icon-btn" onClick={() => onEdit(subscription)}>
              <Edit3 size={16} />
            </button>
            <button className="icon-btn delete" onClick={() => onDelete(subscription.id)}>
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

// Компонент формы добавления/редактирования
const SubscriptionForm = ({ onClose, onSave, editData, templates }) => {
  const [step, setStep] = useState(editData ? 2 : 1);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [formData, setFormData] = useState(editData || {
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
    onSave({
      ...formData,
      id: editData?.id || Date.now().toString(),
      amount: parseFloat(formData.amount),
    });
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <button className="back-btn" onClick={() => step === 1 ? onClose() : setStep(1)}>
            {step === 1 ? <X size={20} /> : <ChevronLeft size={20} />}
          </button>
          <h2>{editData ? 'Редактировать' : step === 1 ? 'Выберите сервис' : 'Настройка подписки'}</h2>
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
              {['Все', 'Экосистема', 'Видео', 'Музыка', 'Облако', 'Книги', 'Другое'].map(cat => (
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
                <span>Своя подписка</span>
              </button>
              {filteredTemplates.map(template => (
                <button key={template.id} className="template-item" onClick={() => selectTemplate(template)}>
                  <Logo domain={template.domain} color={template.color} size={44} />
                  <span>{template.name}</span>
                  <span className="template-price">{template.price} ₽</span>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="subscription-form">
            {/* Preview */}
            <div className="form-preview">
              <Logo 
                domain={formData.domain} 
                emoji={formData.icon} 
                color={formData.color}
                size={64}
              />
              <div className="preview-info">
                <h3>{formData.name || 'Название подписки'}</h3>
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
              <div className="cycle-selector">
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
                  <label>Категория</label>
                  <select 
                    value={formData.category}
                    onChange={e => setFormData({ ...formData, category: e.target.value })}
                  >
                    {CATEGORIES.filter(c => c !== 'Все').map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div className="form-row">
                  <div className="form-section flex-1">
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

            <button className="save-btn" onClick={handleSave}>
              <Check size={20} />
              {editData ? 'Сохранить изменения' : 'Добавить подписку'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// Компонент календаря с детализацией по дням
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
        const nextBilling = calculateNextBillingDate(sub.firstBillingDate, sub.billingCycle);
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

  // Подсчёт общей суммы за месяц
  const monthlyTotal = useMemo(() => {
    return subscriptions.reduce((total, sub) => {
      const nextBilling = calculateNextBillingDate(sub.firstBillingDate, sub.billingCycle);
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
      setSelectedDay(selectedDay?.date?.getTime() === day.date.getTime() ? null : day);
    }
  };

  const changeMonth = (delta) => {
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
          const dayTotal = day.subscriptions.reduce((sum, sub) => {
            const currency = currencies.find(c => c.code === sub.currency) || currencies[0];
            return sum + (sub.amount * currency.rate);
          }, 0);
          
          return (
            <div 
              key={i} 
              className={`calendar-day ${!day.date ? 'empty' : ''} ${day.subscriptions.length > 0 ? 'has-subs clickable' : ''} ${day.date?.toDateString() === new Date().toDateString() ? 'today' : ''} ${isSelected ? 'selected' : ''}`}
              onClick={() => handleDayClick(day)}
            >
              {day.date && (
                <>
                  <span className="day-number">{day.date.getDate()}</span>
                  {day.subscriptions.length > 0 && (
                    <>
                      <div className="day-subs">
                        {day.subscriptions.slice(0, 3).map(sub => (
                          <div 
                            key={sub.id} 
                            className="day-sub-dot" 
                            style={{ background: sub.color }}
                          />
                        ))}
                        {day.subscriptions.length > 3 && (
                          <span className="more-dots">+{day.subscriptions.length - 3}</span>
                        )}
                      </div>
                      <div className="day-total">{Math.round(dayTotal)} ₽</div>
                    </>
                  )}
                </>
              )}
            </div>
          );
        })}
      </div>

      {/* Popup с деталями выбранного дня */}
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
          <div className="day-details-total">
            <span>Всего:</span>
            <span>
              {selectedDay.subscriptions.reduce((sum, sub) => {
                const currency = currencies.find(c => c.code === sub.currency) || currencies[0];
                return sum + (sub.amount * currency.rate);
              }, 0).toLocaleString('ru-RU')} ₽
            </span>
          </div>
        </div>
      )}

      {/* Легенда списаний */}
      <div className="calendar-legend">
        <h4>Списания в этом месяце</h4>
        {subscriptions
          .filter(sub => {
            const nextBilling = calculateNextBillingDate(sub.firstBillingDate, sub.billingCycle);
            return nextBilling.getMonth() === currentMonth.getMonth() && 
                   nextBilling.getFullYear() === currentMonth.getFullYear();
          })
          .sort((a, b) => {
            const dateA = calculateNextBillingDate(a.firstBillingDate, a.billingCycle);
            const dateB = calculateNextBillingDate(b.firstBillingDate, b.billingCycle);
            return dateA - dateB;
          })
          .map(sub => {
            const currency = currencies.find(c => c.code === sub.currency) || currencies[0];
            const nextDate = calculateNextBillingDate(sub.firstBillingDate, sub.billingCycle);
            return (
              <div key={sub.id} className="legend-item">
                <Logo 
                  domain={sub.domain} 
                  emoji={sub.icon} 
                  color={sub.color}
                  size={36}
                />
                <span className="legend-name">{sub.name}</span>
                <span className="legend-date">{formatDate(nextDate)}</span>
                <span className="legend-amount">{sub.amount.toLocaleString('ru-RU')} {currency.symbol}</span>
              </div>
            );
          })}
        {subscriptions.filter(sub => {
          const nextBilling = calculateNextBillingDate(sub.firstBillingDate, sub.billingCycle);
          return nextBilling.getMonth() === currentMonth.getMonth() && 
                 nextBilling.getFullYear() === currentMonth.getFullYear();
        }).length === 0 && (
          <p className="no-billings">Нет списаний в этом месяце</p>
        )}
      </div>
    </div>
  );
};

// Главный компонент приложения
export default function SubFiApp() {
  const [theme, setTheme] = useState('dark');
  const [activeTab, setActiveTab] = useState('home');
  const [showForm, setShowForm] = useState(false);
  const [editingSubscription, setEditingSubscription] = useState(null);
  const [subscriptions, setSubscriptions] = useState([
    {
      id: '1',
      name: 'Яндекс Плюс',
      amount: 299,
      currency: 'RUB',
      billingCycle: 'monthly',
      firstBillingDate: '2024-01-15',
      category: 'Экосистема',
      color: '#FFCC00',
      icon: '🟡',
      domain: 'plus.yandex.ru',
    },
    {
      id: '2',
      name: 'Netflix',
      amount: 699,
      currency: 'RUB',
      billingCycle: 'monthly',
      firstBillingDate: '2024-01-20',
      category: 'Видео',
      color: '#E50914',
      icon: '🎞️',
      domain: 'netflix.com',
    },
    {
      id: '3',
      name: 'Spotify',
      amount: 199,
      currency: 'RUB',
      billingCycle: 'monthly',
      firstBillingDate: '2024-01-25',
      category: 'Музыка',
      color: '#1DB954',
      icon: '💚',
      domain: 'spotify.com',
    },
  ]);

  // Расчёт статистики
  const stats = useMemo(() => {
    let monthlyTotal = 0;
    
    subscriptions.forEach(sub => {
      const cycle = BILLING_CYCLES.find(c => c.value === sub.billingCycle);
      const currency = CURRENCIES.find(c => c.code === sub.currency);
      const amountInRub = sub.amount * currency.rate;
      monthlyTotal += amountInRub * cycle.multiplier;
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
        nextDate: calculateNextBillingDate(sub.firstBillingDate, sub.billingCycle),
      }))
      .sort((a, b) => a.nextDate - b.nextDate);
  }, [subscriptions]);

  const handleSaveSubscription = (data) => {
    if (editingSubscription) {
      setSubscriptions(subscriptions.map(s => s.id === data.id ? data : s));
    } else {
      setSubscriptions([...subscriptions, data]);
    }
    setEditingSubscription(null);
  };

  const handleDeleteSubscription = (id) => {
    setSubscriptions(subscriptions.filter(s => s.id !== id));
  };

  const handleEditSubscription = (subscription) => {
    setEditingSubscription(subscription);
    setShowForm(true);
  };

  return (
    <div className={`app ${theme}`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
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
          --success: #22c55e;
          
          font-family: 'Manrope', -apple-system, BlinkMacSystemFont, sans-serif;
          background: var(--bg-primary);
          color: var(--text-primary);
          min-height: 100vh;
          max-width: 430px;
          margin: 0 auto;
          padding: 0 16px 100px;
        }

        .app.light {
          --bg-primary: #ffffff;
          --bg-secondary: #f5f5f5;
          --bg-tertiary: #eeeeee;
          --text-primary: #0a0a0a;
          --text-secondary: #666666;
          --border: #e0e0e0;
        }

        /* Header */
        .app-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 0;
          position: sticky;
          top: 0;
          background: var(--bg-primary);
          z-index: 100;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: 800;
          background: linear-gradient(135deg, var(--accent), var(--accent-secondary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
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

        .icon-btn:hover {
          background: var(--bg-tertiary);
        }

        .icon-btn.primary {
          background: var(--accent);
          color: white;
        }

        .icon-btn.delete:hover {
          background: var(--danger);
          color: white;
        }

        /* Stats Card */
        .stats-card {
          background: linear-gradient(135deg, var(--accent), var(--accent-secondary));
          border-radius: 20px;
          padding: 24px;
          margin-bottom: 24px;
          color: white;
        }

        .stats-main {
          text-align: center;
          margin-bottom: 20px;
        }

        .stats-amount {
          font-size: 3rem;
          font-weight: 800;
          line-height: 1;
        }

        .stats-currency {
          font-size: 1.5rem;
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
          gap: 16px;
        }

        .stat-item {
          text-align: center;
          padding: 12px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 12px;
        }

        .stat-value {
          font-size: 1rem;
          font-weight: 700;
        }

        .stat-label {
          font-size: 0.75rem;
          opacity: 0.8;
        }

        /* View Tabs */
        .view-tabs {
          display: flex;
          gap: 8px;
          margin-bottom: 24px;
          background: var(--bg-secondary);
          padding: 4px;
          border-radius: 12px;
        }

        .view-tab {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px;
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

        /* Section Header */
        .section-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }

        .section-title {
          font-size: 1.125rem;
          font-weight: 700;
        }

        .section-count {
          font-size: 0.875rem;
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
          margin-bottom: 24px;
        }

        .upcoming-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px;
          background: var(--bg-secondary);
          border-radius: 12px;
        }

        .upcoming-icon {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
          overflow: hidden;
        }

        .upcoming-info {
          flex: 1;
        }

        .upcoming-name {
          font-weight: 600;
          font-size: 0.875rem;
        }

        .upcoming-date {
          font-size: 0.75rem;
          color: var(--text-secondary);
        }

        .upcoming-amount {
          font-weight: 700;
          font-size: 0.875rem;
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
        }

        .sub-card-content {
          flex: 1;
          padding: 16px;
        }

        .sub-card-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
        }

        .sub-icon {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
        }

        .sub-info {
          flex: 1;
        }

        .sub-name {
          font-size: 1rem;
          font-weight: 700;
          margin-bottom: 2px;
        }

        .sub-category {
          font-size: 0.75rem;
          color: var(--text-secondary);
        }

        .sub-actions {
          display: flex;
          gap: 4px;
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
          font-size: 1.25rem;
          font-weight: 800;
        }

        .price-currency {
          font-size: 1rem;
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
          gap: 6px;
          font-size: 0.75rem;
          color: var(--text-secondary);
          background: var(--bg-tertiary);
          padding: 6px 10px;
          border-radius: 20px;
        }

        .sub-next.soon {
          background: rgba(239, 68, 68, 0.1);
          color: var(--danger);
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
          padding: 16px;
        }

        .modal {
          background: var(--bg-primary);
          border-radius: 24px 24px 0 0;
          width: 100%;
          max-width: 430px;
          max-height: 90vh;
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
          padding: 20px;
          border-bottom: 1px solid var(--border);
          position: sticky;
          top: 0;
          background: var(--bg-primary);
          z-index: 10;
        }

        .modal-header h2 {
          font-size: 1.125rem;
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
          padding: 20px;
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
        }

        .category-tabs {
          display: flex;
          gap: 8px;
          overflow-x: auto;
          padding-bottom: 16px;
          margin-bottom: 8px;
          -webkit-overflow-scrolling: touch;
        }

        .category-tabs::-webkit-scrollbar {
          display: none;
        }

        .cat-tab {
          padding: 8px 16px;
          border: none;
          background: var(--bg-secondary);
          color: var(--text-secondary);
          border-radius: 20px;
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.2s;
        }

        .cat-tab.active {
          background: var(--accent);
          color: white;
        }

        .template-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }

        .template-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          padding: 16px 8px;
          background: var(--bg-secondary);
          border: 2px solid transparent;
          border-radius: 16px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .template-item:hover {
          border-color: var(--accent);
        }

        .template-item.custom {
          border: 2px dashed var(--border);
        }

        .template-icon {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
        }

        .template-item span {
          font-size: 0.75rem;
          font-weight: 600;
          text-align: center;
          line-height: 1.2;
        }

        .template-price {
          color: var(--text-secondary);
          font-weight: 500 !important;
        }

        /* Subscription Form */
        .subscription-form {
          padding: 20px;
        }

        .form-preview {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 20px;
          background: var(--bg-secondary);
          border-radius: 16px;
          margin-bottom: 24px;
        }

        .preview-info h3 {
          font-size: 1.25rem;
          font-weight: 700;
        }

        .preview-info p {
          color: var(--text-secondary);
          font-size: 0.875rem;
        }

        .form-section {
          margin-bottom: 20px;
        }

        .form-section label {
          display: block;
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--text-secondary);
          margin-bottom: 8px;
        }

        .form-section input,
        .form-section select {
          width: 100%;
          padding: 14px 16px;
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

        .form-row .form-section {
          flex: 1;
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
          padding: 14px;
          border: 2px solid var(--border);
          background: var(--bg-secondary);
          border-radius: 12px;
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-primary);
          cursor: pointer;
          transition: all 0.2s;
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
          padding: 12px;
          border: 2px solid var(--border);
          background: var(--bg-secondary);
          border-radius: 10px;
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--text-primary);
          cursor: pointer;
          transition: all 0.2s;
        }

        .cycle-btn.active {
          border-color: var(--accent);
          background: rgba(99, 102, 241, 0.1);
        }

        .emoji-selector {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .emoji-btn {
          width: 44px;
          height: 44px;
          border: 2px solid var(--border);
          background: var(--bg-secondary);
          border-radius: 10px;
          font-size: 1.25rem;
          cursor: pointer;
          transition: all 0.2s;
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
          width: 50px;
          height: 50px;
          padding: 4px;
          border-radius: 10px;
          cursor: pointer;
        }

        .color-picker span {
          font-family: monospace;
          color: var(--text-secondary);
        }

        .save-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 16px;
          background: var(--accent);
          color: white;
          border: none;
          border-radius: 12px;
          font-size: 1rem;
          font-weight: 700;
          cursor: pointer;
          margin-top: 24px;
          transition: opacity 0.2s;
        }

        .save-btn:hover {
          opacity: 0.9;
        }

        /* Calendar */
        .calendar-view {
          padding-bottom: 20px;
        }

        .calendar-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
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
          font-size: 1.125rem;
          font-weight: 700;
          text-transform: capitalize;
        }

        .month-total {
          font-size: 0.875rem;
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
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-secondary);
          padding: 8px 0;
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
          transition: all 0.2s;
        }

        .calendar-day.empty {
          background: transparent;
        }

        .calendar-day.today {
          border: 2px solid var(--accent);
        }

        .calendar-day.has-subs {
          background: var(--bg-tertiary);
        }

        .calendar-day.clickable {
          cursor: pointer;
        }

        .calendar-day.clickable:hover {
          transform: scale(1.05);
        }

        .calendar-day.selected {
          background: var(--accent);
          color: white;
        }

        .calendar-day.selected .day-total {
          color: rgba(255,255,255,0.8);
        }

        .day-number {
          font-size: 0.875rem;
          font-weight: 600;
        }

        .day-subs {
          display: flex;
          gap: 2px;
          margin-top: 2px;
          align-items: center;
        }

        .day-sub-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
        }

        .more-dots {
          font-size: 0.625rem;
          color: var(--text-secondary);
        }

        .day-total {
          font-size: 0.625rem;
          color: var(--text-secondary);
          margin-top: 2px;
        }

        /* Day Details Popup */
        .day-details {
          background: var(--bg-secondary);
          border-radius: 16px;
          padding: 16px;
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
          margin-bottom: 16px;
        }

        .day-details-header h4 {
          font-size: 1rem;
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
          gap: 12px;
        }

        .day-detail-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px;
          background: var(--bg-tertiary);
          border-radius: 12px;
        }

        .detail-info {
          flex: 1;
        }

        .detail-name {
          display: block;
          font-weight: 600;
          font-size: 0.9rem;
        }

        .detail-category {
          font-size: 0.75rem;
          color: var(--text-secondary);
        }

        .detail-amount {
          font-weight: 700;
        }

        .day-details-total {
          display: flex;
          justify-content: space-between;
          margin-top: 16px;
          padding-top: 16px;
          border-top: 1px solid var(--border);
          font-weight: 700;
        }

        /* Calendar Legend */
        .calendar-legend {
          margin-top: 24px;
        }

        .calendar-legend h4 {
          font-size: 1rem;
          font-weight: 700;
          margin-bottom: 16px;
        }

        .legend-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px;
          background: var(--bg-secondary);
          border-radius: 12px;
          margin-bottom: 8px;
        }

        .legend-name {
          flex: 1;
          font-weight: 600;
        }

        .legend-date {
          font-size: 0.875rem;
          color: var(--text-secondary);
        }

        .legend-amount {
          font-weight: 700;
        }

        .no-billings {
          text-align: center;
          color: var(--text-secondary);
          padding: 24px;
        }

        /* Empty State */
        .empty-state {
          text-align: center;
          padding: 60px 40px;
        }

        .empty-icon {
          font-size: 4rem;
          margin-bottom: 16px;
        }

        .empty-title {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 8px;
        }

        .empty-text {
          color: var(--text-secondary);
          margin-bottom: 24px;
        }

        .empty-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 24px;
          background: var(--accent);
          color: white;
          border: none;
          border-radius: 12px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
        }
      `}</style>

      <header className="app-header">
        <span className="logo">SubFi</span>
        <div className="header-actions">
          <button className="icon-btn" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className="icon-btn primary" onClick={() => { setEditingSubscription(null); setShowForm(true); }}>
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

      {/* View Tabs */}
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

      {activeTab === 'home' ? (
        <>
          {/* Upcoming Billings */}
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
                      <div className="upcoming-icon" style={{ background: sub.color }}>
                        <Logo domain={sub.domain} emoji={sub.icon} color={sub.color} size={36} />
                      </div>
                      <div className="upcoming-info">
                        <div className="upcoming-name">{sub.name}</div>
                        <div className="upcoming-date">
                          {daysUntil === 0 ? 'Сегодня' : daysUntil === 1 ? 'Завтра' : formatDate(sub.nextDate)}
                        </div>
                      </div>
                      <div className="upcoming-amount">{sub.amount} {currency.symbol}</div>
                    </div>
                  );
                })}
              </div>
            </>
          )}

          {/* All Subscriptions */}
          <div className="section-header">
            <h2 className="section-title">Все подписки</h2>
            <span className="section-count">{subscriptions.length}</span>
          </div>

          <div className="subscriptions-list">
            {subscriptions.length === 0 ? (
              <div className="empty-state">
                <div className="empty-icon">📦</div>
                <h3 className="empty-title">Нет подписок</h3>
                <p className="empty-text">Добавьте свою первую подписку, чтобы начать отслеживание</p>
                <button className="empty-btn" onClick={() => setShowForm(true)}>
                  <Plus size={20} />
                  Добавить подписку
                </button>
              </div>
            ) : (
              subscriptions.map(sub => (
                <SubscriptionCard
                  key={sub.id}
                  subscription={sub}
                  onEdit={handleEditSubscription}
                  onDelete={handleDeleteSubscription}
                  currencies={CURRENCIES}
                />
              ))
            )}
          </div>
        </>
      ) : (
        <CalendarView subscriptions={subscriptions} currencies={CURRENCIES} />
      )}

      {/* Add/Edit Modal */}
      {showForm && (
        <SubscriptionForm
          onClose={() => { setShowForm(false); setEditingSubscription(null); }}
          onSave={handleSaveSubscription}
          editData={editingSubscription}
          templates={SUBSCRIPTION_TEMPLATES}
        />
      )}
    </div>
  );
}
