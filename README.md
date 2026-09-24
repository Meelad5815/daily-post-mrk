# MRK Daily Post Auto-Pilot

Professional Next.js foundation for MRK OFFICIAL DIGITAL 786's automated content and supported social publishing.

## Included
- MRK brand personalization
- AI content generation through an OpenAI-compatible Chat Completions endpoint
- Fallback content when no AI key is configured
- Facebook Page publishing
- Instagram Professional publishing
- WhatsApp Business Cloud API text messaging
- Protected daily cron endpoint
- Vercel Cron configuration
- Health/configuration endpoint
- Responsive dashboard
- Environment-variable secrets

## Local setup
```bash
npm install
cp .env.example .env.local
npm run dev
```

## Required environment variables
Configure the variables in `.env.local` locally or your deployment provider's secret settings. Never commit real tokens.

## Production flow
1. AI generates the daily post from MRK's brand profile.
2. The scheduler calls `/api/cron/daily`.
3. The current production flow publishes to the configured Facebook Page.
4. Instagram and WhatsApp Business endpoints are available for provider-specific workflows.
5. Add database persistence before enabling large-scale queues, analytics and multi-user administration.

## Important API requirements
Meta publishing requires the correct Meta app, permissions, account types and access tokens. WhatsApp Business Cloud API is for supported business messaging; it is not an official API for ordinary WhatsApp Status or arbitrary WhatsApp Group posting.

## Security
Use a strong CRON_SECRET. Keep all API keys server-side. Do not expose secrets in client components, GitHub, screenshots or public repositories.

## Next production modules
- PostgreSQL + Prisma
- Admin authentication
- Content calendar and scheduled drafts
- Approval vs auto-publish modes
- Image generation/storage
- Instagram media workflow UI
- WhatsApp templates/contact management
- Analytics and retry queue
