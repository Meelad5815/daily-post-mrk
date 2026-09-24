# MRK Daily Post Auto-Pilot

Professional Next.js foundation for automated AI content creation and supported social publishing.

## Current capabilities
- MRK brand profile and platform-aware content engine abstraction
- Dashboard and daily post generation endpoint
- Facebook Page Graph API publisher
- Instagram Professional media publisher
- Secure environment-variable configuration
- Production-ready structure for cron, database, approvals, analytics and additional providers

## Run locally
```bash
npm install
cp .env.example .env.local
npm run dev
```

## Production
Deploy the Next.js app to Vercel or another Node-compatible host. Add environment variables in the host dashboard; never commit tokens.

## Important
Facebook/Instagram publishing requires the appropriate Meta app, permissions, account type and access token. WhatsApp Status and ordinary WhatsApp Group posting are not treated as official API publishing targets.

## Roadmap
1. AI provider integration
2. PostgreSQL/Prisma persistence
3. Vercel Cron + protected scheduler
4. Approval/auto-publish modes
5. Image generation/storage
6. WhatsApp Business messaging
7. Analytics, logs and retry queue
