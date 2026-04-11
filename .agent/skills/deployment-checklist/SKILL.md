---
name: deployment-checklist
description: "Production deployment checklist and release management skill. Use when: deploying an application to production, planning a release, checking pre-deployment readiness, configuring CI/CD pipelines, setting up monitoring, going live for the first time, or any production launch task."
argument-hint: "Describe the application type, current deployment stage, and target platform"
---

# Deployment Checklist Skill

## When to Use This Skill

- First time deploying an application to production
- Deploying a major feature update
- Migrating to a new hosting platform
- Setting up CI/CD pipelines
- Establishing monitoring and alerting
- Planning a scheduled maintenance window
- Post-deployment verification

---

## Pre-Deployment Checklist

### 🔴 Critical  Block deployment if any fail

```markdown
#### Security
[ ] No secrets, API keys, or passwords in source code (use .env, secrets manager)
[ ] HTTPS enforced for all endpoints
[ ] Authentication implemented on all protected routes
[ ] CORS configured to allow only expected origins
[ ] Dependencies updated (check: npm audit / pip check / OWASP Dependency Check)
[ ] No debug/admin routes exposed in production

#### Code Quality
[ ] All tests passing (unit, integration, E2E)
[ ] Build succeeds without TypeScript errors
[ ] No critical lint errors
[ ] Database migrations tested on staging

#### Configuration
[ ] Environment variables set correctly for production
[ ] Database connection strings pointing to production (not dev/staging)
[ ] API base URLs set to production endpoints
[ ] Error logging configured (Sentry / Datadog / CloudWatch)
[ ] Feature flags configured correctly
```

### 🟠 Important  Fix before or immediately after deployment

```markdown
#### Performance
[ ] Database indexes on all foreign keys and heavily queried columns
[ ] Static assets optimized (images compressed, JS/CSS minified)
[ ] CDN configured for static assets
[ ] Caching strategies defined (Redis, HTTP caching headers)
[ ] Rate limiting configured on API endpoints
[ ] Response times measured on staging (target: < 200ms p95)

#### Reliability
[ ] Health check endpoint exists (/health or /ping)
[ ] Graceful shutdown handled (SIGTERM → drain connections)
[ ] Database connection pooling configured
[ ] Retry logic for external API calls
[ ] Timeout values set (don't rely on defaults)

#### Monitoring
[ ] Uptime monitoring configured (Better Uptime / PagerDuty / etc.)
[ ] Error rate alerts set up (e.g., alert if > 1% 5xx errors)
[ ] Response time alerts set up
[ ] Log aggregation configured
[ ] Database performance monitoring enabled
```

### 🟡 Standard  Complete within first week of launch

```markdown
[ ] Analytics tracking verified (GA4, Mixpanel, etc.)
[ ] SEO sitemap and robots.txt in place
[ ] 404 and 500 error pages styled correctly
[ ] Cookie consent (if collecting user data  GDPR/CCPA compliance)
[ ] Backup strategy tested (can restore from backup?)
[ ] Documentation updated (README, API docs)
[ ] Team notified of deployment and release notes shared
```

---

## Platform-Specific Guides

### Vercel (Next.js)

```bash
# 1. Install Vercel CLI
npm i -g vercel

# 2. Deploy to preview
vercel

# 3. Deploy to production
vercel --prod

# 4. Set environment variables
vercel env add NEXTAUTH_SECRET production
vercel env add DATABASE_URL production

# 5. Check deployment
vercel ls --environment production
vercel logs [deployment-url]
```

**vercel.json configuration:**
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs",
  "rewrites": [
    { "source": "/api/(.*)", "destination": "/api/$1" }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-XSS-Protection", "value": "1; mode=block" }
      ]
    }
  ]
}
```

### Docker + Any Cloud

```dockerfile
# Dockerfile (multi-stage  production optimized)
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Create non-root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000
CMD ["npm", "start"]
```

```yaml
# docker-compose.yml (production)
version: '3.8'
services:
  app:
    build: .
    ports: ["3000:3000"]
    environment:
      - NODE_ENV=production
      - DATABASE_URL=${DATABASE_URL}
      - NEXTAUTH_SECRET=${NEXTAUTH_SECRET}
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:3000/api/health"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 40s

  db:
    image: postgres:16-alpine
    volumes:
      - postgres_data:/var/lib/postgresql/data
    environment:
      - POSTGRES_PASSWORD=${POSTGRES_PASSWORD}
    restart: unless-stopped

volumes:
  postgres_data:
```

### GitHub Actions CI/CD

```yaml
# .github/workflows/deploy.yml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run lint
      - run: npm test
      - run: npm run build

  deploy:
    needs: test
    runs-on: ubuntu-latest
    environment: production
    steps:
      - uses: actions/checkout@v4
      - name: Deploy to Vercel
        env:
          VERCEL_TOKEN: ${{ secrets.VERCEL_TOKEN }}
        run: |
          npm i -g vercel
          vercel --prod --token $VERCEL_TOKEN

  notify:
    needs: [test, deploy]
    if: always()
    runs-on: ubuntu-latest
    steps:
      - name: Notify Slack
        uses: slackapi/slack-github-action@v1
        with:
          payload: |
            {
              "text": "Deployment ${{ job.status }}: ${{ github.ref_name }}"
            }
        env:
          SLACK_WEBHOOK_URL: ${{ secrets.SLACK_WEBHOOK }}
```

---

## Health Check Endpoint

Every production app must have this:

```typescript
// src/app/api/health/route.ts
import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET() {
  const status = {
    status: 'healthy',
    timestamp: new Date().toISOString(),
    version: process.env.npm_package_version || '1.0.0',
    checks: {} as Record<string, 'ok' | 'error'>
  }

  // Database check
  try {
    await db.$queryRaw`SELECT 1`
    status.checks.database = 'ok'
  } catch {
    status.status = 'degraded'
    status.checks.database = 'error'
  }

  const httpStatus = status.status === 'healthy' ? 200 : 503
  return NextResponse.json(status, { status: httpStatus })
}
```

---

## Post-Deployment Verification

After every deployment, verify within the first 30 minutes:

```markdown
### Smoke Tests (Manual)
[ ] Application loads at production URL
[ ] Login/signup flow works
[ ] Core feature works end-to-end
[ ] Payment flow (if applicable) works in test mode
[ ] Email sending works (send test email)

### Monitor for 30 minutes
[ ] Error rate < 0.5%
[ ] Response time p95 < 300ms
[ ] No database connection errors
[ ] Memory usage stable (no leaks)
[ ] CPU usage normal

### If Issues Found
1. Assess severity  is this blocking users?
2. Rollback if blocking: `vercel rollback` or `git revert + redeploy`
3. Hotfix + redeploy if minor
4. Document the incident
```

---

## Rollback Procedures

### Vercel
```bash
vercel rollback [deployment-url]
# Or via dashboard: Deployments → Select previous → Promote
```

### Docker
```bash
docker tag myapp:latest myapp:backup
docker pull myapp:v1.2.3  # Previous tag
docker service update --image myapp:v1.2.3 myapp-service
```

### Database Migrations
```bash
# Prisma
npx prisma migrate resolve --rolled-back [migration-name]

# Flyway
flyway undo

# ALWAYS test rollback on staging before going to production
```

---

## Release Communication Template

```markdown
## Release Notes  v[X.Y.Z]  [Date]

### What's New
- [Feature 1]: [Brief description]
- [Feature 2]: [Brief description]

### Bug Fixes
- Fixed [bug description]

### Performance Improvements
- [Specific measurement if applicable]

### Breaking Changes
- [None / List any API or behavior changes]

### Deployment Notes
- Database migration: [Yes/No  describe if yes]
- Env variables added: [List any new variables]
- Downtime: [Expected/None]

**Deployed by**: [Name]
**Deployment time**: [Time]
**Rollback plan**: [How to rollback if needed]
```
