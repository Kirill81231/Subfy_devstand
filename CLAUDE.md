# CLAUDE.md - AI Assistant Guide for SubFi

This document provides essential context for AI assistants working on the SubFi codebase.

## Project Overview

**SubFi** is a Telegram Mini App for subscription tracking. It helps users monitor all their subscriptions in one place and receive notifications about upcoming charges.

### Architecture

```
Telegram Mini App (React + TypeScript)
          │ HTTPS
          ▼
      Supabase (PostgreSQL + Edge Functions + JWT Auth)
          │
          ▼
   grammY Bot (Node.js + Express)
```

## Directory Structure

```
Subfy_devstand/
├── frontend/                    # React Telegram Mini App (Vite)
│   ├── src/
│   │   ├── App.jsx             # Main component (~3000 lines, all UI)
│   │   ├── main.jsx            # Entry point
│   │   └── hooks/
│   │       └── useSubfi.ts     # Main custom hook for subscription logic
│   ├── package.json
│   ├── vite.config.ts
│   ├── .env                    # Supabase credentials (VITE_ prefixed)
│   └── .env.example
│
├── backend/
│   ├── bot/                    # grammY Telegram Bot
│   │   ├── index.ts            # Bot implementation with webhook
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   ├── Dockerfile
│   │   └── .env.example
│   │
│   └── supabase/               # Database & Serverless Functions
│       ├── migrations/
│       │   └── 001_initial_schema.sql
│       └── functions/
│           ├── telegram-auth/      # User authentication
│           ├── get-subscriptions/  # Fetch user subscriptions
│           ├── save-subscription/  # Create/update subscriptions
│           ├── delete-subscription/# Soft delete subscriptions
│           ├── get-templates/      # Fetch subscription templates
│           └── send-notifications/ # Daily cron for notifications
│
└── supabase/                   # Local Supabase CLI config
```

## Tech Stack

### Frontend
- **React 18.2.0** - UI library
- **TypeScript 5.3.3** - Type safety
- **Vite 5.0.8** - Build tool
- **@supabase/supabase-js 2.39.0** - Database client
- **lucide-react 0.294.0** - Icons

### Backend (Bot)
- **Node.js 18+** - Runtime
- **TypeScript 5.3.0** - Type safety
- **grammY 1.21.1** - Telegram Bot framework
- **Express 4.18.2** - HTTP server for webhooks
- **@supabase/supabase-js 2.39.0** - Database client

### Database & Infrastructure
- **Supabase** - PostgreSQL + Auth + Edge Functions
- **Deno** - Runtime for Edge Functions
- **pg_cron** - PostgreSQL scheduler

## Development Commands

### Frontend (`frontend/`)
```bash
npm run dev      # Start Vite dev server (port 5173)
npm run build    # Build for production
npm run preview  # Preview production build
```

### Backend Bot (`backend/bot/`)
```bash
npm run dev      # Development with ts-node-dev (auto-reload)
npm run build    # Compile TypeScript to dist/
npm start        # Run compiled JavaScript
```

### Supabase Functions
```bash
supabase functions deploy <function-name>  # Deploy single function
supabase functions serve                    # Local development
```

## Database Schema

### Core Tables
1. **users** - Telegram users with notification preferences
2. **categories** - Subscription categories (7 predefined)
3. **subscription_templates** - Pre-defined subscriptions (24 templates)
4. **subscriptions** - User's actual subscriptions
5. **payment_history** - Historical payments
6. **notifications** - Sent notifications log

### Key Features
- **RLS (Row Level Security)** - Users can only access their own data
- **Soft deletes** - `is_active` flag instead of hard deletes
- **Automatic timestamps** - Triggers for `updated_at`

## Environment Variables

### Frontend (`frontend/.env`)
```
VITE_SUPABASE_URL=https://[project-id].supabase.co
VITE_SUPABASE_ANON_KEY=[public anon key]
VITE_AUTH_ENDPOINT=https://[project-id].supabase.co/functions/v1/telegram-auth
```

### Backend Bot (`backend/bot/.env`)
```
TELEGRAM_BOT_TOKEN=[from @BotFather]
SUPABASE_URL=https://[project-id].supabase.co
SUPABASE_SERVICE_ROLE_KEY=[service role key - private]
PUBLIC_URL=https://[bot-domain].railway.app
WEBAPP_URL=https://[miniapp].vercel.app
WEBHOOK_SECRET=[random secret]
PORT=3000
```

### Supabase Secrets (Dashboard)
```
TELEGRAM_BOT_TOKEN
SUPABASE_SERVICE_ROLE_KEY
CRON_SECRET
```

## Code Conventions

### Frontend Patterns
- **Single file UI**: `App.jsx` contains all components (monolithic for Mini App simplicity)
- **Custom hook**: `useSubfi.ts` encapsulates all subscription logic and API calls
- **Telegram WebApp API**: Uses `window.Telegram.WebApp` for theming, haptics, user data
- **Date handling**: Russian locale formatting throughout
- **Currency support**: RUB (₽), USD ($), EUR (€)

### Backend Patterns
- **Webhook-based**: Bot uses webhooks, not polling
- **Health endpoint**: `GET /health` for monitoring
- **Secret-based auth**: Webhook URL includes secret token

### Edge Functions
- **CORS headers**: All functions return proper CORS headers
- **Error handling**: Try-catch with appropriate HTTP status codes
- **Supabase client**: Initialize with service role key for admin access

## Key Files to Know

| File | Purpose |
|------|---------|
| `frontend/src/App.jsx` | Main UI component, all screens |
| `frontend/src/hooks/useSubfi.ts` | Subscription logic, API calls |
| `backend/bot/index.ts` | Telegram bot implementation |
| `backend/supabase/migrations/001_initial_schema.sql` | Complete DB schema |
| `backend/supabase/functions/telegram-auth/index.ts` | User authentication |
| `backend/supabase/functions/send-notifications/index.ts` | Daily notification sender |

## Testing Considerations

- No automated tests currently configured
- Test manually via Telegram Mini App
- Use Supabase Dashboard for database inspection
- Edge Functions can be tested locally with `supabase functions serve`

## Deployment Targets

| Component | Platform | Directory |
|-----------|----------|-----------|
| Frontend | Vercel | `frontend/` |
| Bot | Railway | `backend/bot/` |
| Database | Supabase | N/A (cloud) |
| Functions | Supabase | `backend/supabase/functions/` |

## Security Considerations

1. **Never commit** `.env` files with real credentials
2. **RLS policies** must be maintained for user data isolation
3. **Telegram initData** is validated server-side via HMAC-SHA256
4. **Service role keys** are only used server-side (Edge Functions, Bot)
5. **Webhook endpoint** is protected by secret token in URL

## Common Tasks

### Adding a New Subscription Template
1. Insert into `subscription_templates` table in migration
2. Include: name, domain, default_price, default_currency, color, category_id, logo_url

### Adding a New Edge Function
1. Create directory in `backend/supabase/functions/<name>/`
2. Add `index.ts` with Deno/Supabase handler
3. Deploy with `supabase functions deploy <name>`
4. Set required secrets in Supabase Dashboard

### Modifying Database Schema
1. Create new migration file in `backend/supabase/migrations/`
2. Use sequential numbering (e.g., `002_add_feature.sql`)
3. Apply via Supabase Dashboard SQL Editor

## Language Notes

- **UI language**: Russian (RU) - all user-facing text is in Russian
- **Code comments**: Mix of English and Russian
- **Variable names**: English

## Billing Cycles Supported

- weekly
- biweekly (every 2 weeks)
- monthly
- quarterly (every 3 months)
- semiannual (every 6 months)
- yearly
