---
name: fullstack-dev
description: "Universal fullstack web development skill. Use when: building web apps, creating UI components, setting up database schemas, implementing API routes, adding real-time features, fullstack project scaffolding, frontend development, backend development, Next.js, React, TypeScript, Node.js, database design, authentication, REST APIs, GraphQL."
argument-hint: "Describe the fullstack feature, page, or application to build"
---

# Fullstack Web Development Skill

## Framework Selection Guide

When the user doesn't specify a framework, ask or use this decision tree:

| Use Case | Recommended Stack |
|----------|------------------|
| Marketing site + blog | Next.js (App Router) + Tailwind |
| Complex SPA | Next.js or Vite + React |
| API-only backend | Node.js (Express/Fastify) or Python (FastAPI) |
| Full-stack with real-time | Next.js + Socket.io (mini-service) |
| E-commerce | Next.js + Prisma + Stripe |
| Dashboard / Admin | Next.js + shadcn/ui + Prisma |

---

## Standard Technology Stack

### Core (Non-Negotiable)
- **Framework**: Next.js 15+ with App Router
- **Language**: TypeScript 5 (strict mode)

### Recommended Additions
- **Styling**: Tailwind CSS 4 + shadcn/ui (New York style)
- **Database ORM**: Prisma (SQLite for dev, PostgreSQL for prod)
- **Auth**: NextAuth.js v5 / Clerk / Lucia
- **State**: Zustand (client), TanStack Query v5 (server state)
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **Animations**: Framer Motion

---

## Project Structure (App Router)

```
src/
├── app/
│   ├── (auth)/
│   │   ├── login/page.tsx
│   │   └── register/page.tsx
│   ├── (dashboard)/
│   │   └── dashboard/page.tsx
│   ├── api/
│   │   └── auth/[...nextauth]/route.ts
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/           # shadcn/ui components (auto-generated)
│   ├── forms/        # Form components
│   └── shared/       # Reusable components
├── lib/
│   ├── db.ts         # Prisma client singleton
│   ├── auth.ts       # Auth configuration
│   └── utils.ts      # Utility functions
├── hooks/            # Custom React hooks
├── store/            # Zustand stores
└── types/            # TypeScript type definitions

prisma/
└── schema.prisma

.env.local            # Environment variables (never commit)
```

---

## Development Environment Setup

### Starting a New Project

```bash
# Create Next.js project
npx create-next-app@latest my-app --typescript --tailwind --eslint --app --src-dir

cd my-app

# Install common dependencies
npm install prisma @prisma/client
npm install @tanstack/react-query zustand
npm install react-hook-form zod @hookform/resolvers
npm install lucide-react framer-motion
npm install -D @types/node

# Initialize Prisma
npx prisma init --datasource-provider sqlite

# Initialize shadcn/ui
npx shadcn@latest init
```

### Running Development Server

```bash
npm run dev        # Start Next.js dev server (auto-detects port)
npm run build      # Production build (check for errors)
npm run lint       # Run ESLint
npx prisma studio  # Database GUI
```

---

## Database with Prisma

### 1. Define Schema (`prisma/schema.prisma`)

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "sqlite"  // Change to "postgresql" for production
  url      = env("DATABASE_URL")
}

model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  posts     Post[]
}

model Post {
  id        String   @id @default(cuid())
  title     String
  content   String?
  published Boolean  @default(false)
  author    User     @relation(fields: [authorId], references: [id])
  authorId  String
  createdAt DateTime @default(now())
}
```

### 2. Push Schema & Generate Client

```bash
npx prisma db push      # Sync schema to database
npx prisma generate     # Regenerate Prisma Client
```

### 3. Database Client (`src/lib/db.ts`)

```typescript
import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const db = globalForPrisma.prisma ?? new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db
```

### 4. Using in Server Components

```typescript
import { db } from '@/lib/db'

// In a Server Component or Server Action
const posts = await db.post.findMany({
  where: { published: true },
  include: { author: { select: { name: true } } },
  orderBy: { createdAt: 'desc' },
})
```

---

## API Routes (App Router)

### REST API Pattern

```typescript
// src/app/api/posts/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { z } from 'zod'

const CreatePostSchema = z.object({
  title: z.string().min(1).max(255),
  content: z.string().optional(),
})

export async function GET(req: NextRequest) {
  try {
    const posts = await db.post.findMany({
      where: { published: true },
      orderBy: { createdAt: 'desc' },
    })
    return NextResponse.json({ posts })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const validated = CreatePostSchema.parse(body)

    const post = await db.post.create({ data: validated })
    return NextResponse.json({ post }, { status: 201 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 })
    }
    return NextResponse.json({ error: 'Failed to create post' }, { status: 500 })
  }
}
```

### Server Actions Pattern

```typescript
// src/app/actions/posts.ts
'use server'

import { db } from '@/lib/db'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'

const schema = z.object({
  title: z.string().min(1),
  content: z.string().optional(),
})

export async function createPost(formData: FormData) {
  const validated = schema.safeParse({
    title: formData.get('title'),
    content: formData.get('content'),
  })

  if (!validated.success) {
    return { error: validated.error.flatten() }
  }

  try {
    const post = await db.post.create({ data: validated.data })
    revalidatePath('/posts')
    return { success: true, post }
  } catch (error) {
    return { error: 'Failed to create post' }
  }
}
```

---

## UI / UX Rules

### Component Patterns

```typescript
// Prefer shadcn/ui components over custom implementations
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

// Loading States  always show skeleton/spinner
import { Skeleton } from '@/components/ui/skeleton'

function PostCardSkeleton() {
  return (
    <Card>
      <CardHeader>
        <Skeleton className="h-6 w-3/4" />
      </CardHeader>
      <CardContent>
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-2/3" />
      </CardContent>
    </Card>
  )
}
```

### Responsive Design (Mandatory)

```typescript
// Mobile-first with Tailwind breakpoints
<div className="
  grid grid-cols-1          // Mobile: 1 column
  md:grid-cols-2            // Tablet: 2 columns
  lg:grid-cols-3            // Desktop: 3 columns
  gap-4 md:gap-6
">
```

### Layout (Sticky Footer)

```typescript
// Root layout with sticky footer
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer className="mt-auto" />
      </body>
    </html>
  )
}
```

---

## Real-Time Features (WebSocket / Socket.io)

For real-time features, create a mini-service:

```
mini-services/
└── realtime-service/
    ├── package.json
    └── index.ts          # Socket.io server on a separate port
```

```typescript
// mini-services/realtime-service/index.ts
import { createServer } from 'http'
import { Server } from 'socket.io'

const httpServer = createServer()
const io = new Server(httpServer, {
  cors: { origin: '*' }
})

io.on('connection', (socket) => {
  console.log('Client connected:', socket.id)

  socket.on('message', (data) => {
    io.emit('message', data) // Broadcast to all
  })

  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id)
  })
})

httpServer.listen(3001, () => {
  console.log('Socket.io server running on port 3001')
})
```

```typescript
// Client-side connection (Next.js component)
'use client'
import { useEffect } from 'react'
import { io } from 'socket.io-client'

// NOTE: Use relative paths if behind a gateway
const socket = io('/?XTransformPort=3001')  // With gateway
// OR
const socket = io('http://localhost:3001')   // Direct connection
```

---

## Environment Variables

```bash
# .env.local (never commit this file)
DATABASE_URL="file:./dev.db"
NEXTAUTH_SECRET="generate-with: openssl rand -base64 32"
NEXTAUTH_URL="http://localhost:3000"

# For production PostgreSQL:
# DATABASE_URL="postgresql://user:password@host:5432/dbname"
```

---

## Accessibility (Mandatory)

```typescript
// ✅ Correct: Semantic HTML + ARIA
<nav aria-label="Main navigation">
  <ul>
    <li><a href="/about">About</a></li>
  </ul>
</nav>

<button
  aria-label="Close dialog"
  onClick={handleClose}
>
  <X className="h-4 w-4" aria-hidden="true" />
</button>

// Minimum 44px touch targets for interactive elements
<button className="min-h-[44px] min-w-[44px] p-2">...</button>
```

---

## Code Style Rules

- `'use client'`  only when using hooks, browser APIs, or event handlers
- `'use server'`  for Server Actions (form submissions, mutations)
- Never put client code in default Server Components
- Use named exports for components (`export function MyComponent`)
- Group imports: Next.js → React → Third-party → Internal (`@/`)
- No `any` types  use `unknown` and narrow with type guards

---

## Pre-Delivery Checklist

Before marking a task complete, verify:
- [ ] TypeScript compiles without errors (`npm run build`)
- [ ] ESLint passes (`npm run lint`)
- [ ] All interactive elements have loading and error states
- [ ] Mobile layout is tested (min 320px width)
- [ ] No console.log left in production code
- [ ] Environment variables documented in `.env.example`
- [ ] Prisma schema migrated and client regenerated
- [ ] All user inputs validated with Zod