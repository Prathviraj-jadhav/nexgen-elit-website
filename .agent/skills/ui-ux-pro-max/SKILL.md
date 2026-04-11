---
name: ui-ux-pro-max
description: "Advanced UI/UX design intelligence and implementation. Use when: designing interfaces, creating design systems, building component libraries, improving existing UI, writing design tokens, planning user flows, accessibility auditing, responsive layouts, micro-animations, Figma handoffs, HTML/CSS/JS, React, Next.js, Vue, Svelte, Tailwind, any frontend framework."
argument-hint: "Describe the UI component, page, or design system to create/improve"
---

# UI/UX Pro Max  Advanced Design Intelligence

## 1. Triage (Ask First, Code Second)

Before producing any deliverable, confirm:
- **Platform**: Web / iOS / Android / Desktop / Multi-platform?
- **Stack**: React/Next/Vue/Svelte + CSS/Tailwind + component library?
- **Goal**: Conversion, engagement, accessibility (WCAG AA/AAA), brand alignment
- **What you have**: Screenshot, Figma file, existing code, URL, user journey map
- **Deliverable**: UI mockup / UX flow / design tokens / code / all four?

---

## 2. Design System Foundation

### Color Tokens (Generate these first)

```css
/* Design tokens  paste into globals.css or tokens.css */
:root {
  /* Brand colors  HSL for easy manipulation */
  --brand-primary: 220 90% 56%;
  --brand-secondary: 264 84% 62%;
  --brand-accent: 38 95% 56%;

  /* Semantic colors */
  --color-success: 152 72% 40%;
  --color-warning: 38 95% 56%;
  --color-error: 4 84% 56%;
  --color-info: 205 90% 52%;

  /* Neutral scale */
  --gray-50:  210 20% 98%;
  --gray-100: 220 16% 96%;
  --gray-200: 220 14% 91%;
  --gray-300: 215 12% 84%;
  --gray-400: 218 11% 65%;
  --gray-500: 220 9%  46%;
  --gray-600: 215 14% 34%;
  --gray-700: 217 19% 27%;
  --gray-800: 215 28% 17%;
  --gray-900: 220 40% 10%;
  --gray-950: 224 71% 4%;

  /* Backgrounds */
  --bg-primary:   hsl(var(--gray-50));
  --bg-secondary: hsl(var(--gray-100));
  --bg-inverse:   hsl(var(--gray-900));

  /* Text */
  --text-primary:   hsl(var(--gray-900));
  --text-secondary: hsl(var(--gray-600));
  --text-muted:     hsl(var(--gray-400));
  --text-inverse:   hsl(var(--gray-50));

  /* Spacing scale */
  --space-1:  4px;
  --space-2:  8px;
  --space-3:  12px;
  --space-4:  16px;
  --space-5:  20px;
  --space-6:  24px;
  --space-8:  32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;

  /* Typography scale */
  --text-xs:   0.75rem;    /* 12px */
  --text-sm:   0.875rem;   /* 14px */
  --text-base: 1rem;       /* 16px */
  --text-lg:   1.125rem;   /* 18px */
  --text-xl:   1.25rem;    /* 20px */
  --text-2xl:  1.5rem;     /* 24px */
  --text-3xl:  1.875rem;   /* 30px */
  --text-4xl:  2.25rem;    /* 36px */
  --text-5xl:  3rem;       /* 48px */
  --text-6xl:  3.75rem;    /* 60px */

  /* Border radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-2xl: 24px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0,0,0,.05);
  --shadow-md: 0 4px 6px -1px rgba(0,0,0,.1), 0 2px 4px -1px rgba(0,0,0,.06);
  --shadow-lg: 0 10px 15px -3px rgba(0,0,0,.1), 0 4px 6px -2px rgba(0,0,0,.05);
  --shadow-xl: 0 20px 25px -5px rgba(0,0,0,.1), 0 10px 10px -5px rgba(0,0,0,.04);

  /* Transitions */
  --transition-fast:   150ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-base:   250ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-slow:   400ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-spring: 500ms cubic-bezier(0.34, 1.56, 0.64, 1);
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
  :root {
    --bg-primary:   hsl(var(--gray-950));
    --bg-secondary: hsl(var(--gray-900));
    --text-primary:   hsl(var(--gray-50));
    --text-secondary: hsl(var(--gray-300));
    --text-muted:     hsl(var(--gray-500));
  }
}
```

### Typography System

```css
/* Font pairing options  pick one */

/* Option 1: Modern + Clean (default recommendation) */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

/* Option 2: Premium + Editorial */
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Fira+Code:wght@400;500&display=swap');

/* Option 3: Bold + High-Impact */
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

:root {
  --font-sans: 'Inter', system-ui, -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', monospace;
}
```

---

## 3. Component Design Patterns

### Button System (All States)

```html
<!-- Primary button  all states handled -->
<button class="btn btn-primary" id="submit-btn">
  <span class="btn-text">Submit</span>
  <span class="btn-loader" aria-hidden="true" hidden>
    <svg class="spinner" viewBox="0 0 24 24">...</svg>
  </span>
</button>
```

```css
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  min-height: 44px;             /* Accessibility: 44px touch target */
  padding: var(--space-2) var(--space-5);
  border-radius: var(--radius-md);
  font-weight: 500;
  font-size: var(--text-sm);
  transition: all var(--transition-fast);
  cursor: pointer;
  border: none;
}

.btn-primary {
  background: hsl(var(--brand-primary));
  color: white;
}

.btn-primary:hover { filter: brightness(1.1); transform: translateY(-1px); }
.btn-primary:active { transform: translateY(0); filter: brightness(0.95); }
.btn-primary:focus-visible {
  outline: 2px solid hsl(var(--brand-primary));
  outline-offset: 3px;
}
.btn-primary:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
}
```

### Card Component

```html
<article class="card" id="feature-card-001">
  <header class="card-header">
    <h3 class="card-title">Card Title</h3>
    <p class="card-subtitle">Supporting description text</p>
  </header>
  <div class="card-body">
    <!-- Content -->
  </div>
  <footer class="card-footer">
    <button class="btn btn-primary btn-sm">Action</button>
  </footer>
</article>
```

```css
.card {
  background: var(--bg-primary);
  border: 1px solid hsl(var(--gray-200));
  border-radius: var(--radius-xl);
  overflow: hidden;
  transition: box-shadow var(--transition-base), transform var(--transition-base);
}

.card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}

.card-header { padding: var(--space-6) var(--space-6) var(--space-4); }
.card-body   { padding: 0 var(--space-6) var(--space-4); }
.card-footer {
  padding: var(--space-4) var(--space-6);
  border-top: 1px solid hsl(var(--gray-100));
  background: hsl(var(--gray-50));
}
```

### Form Inputs (All States)

```css
.form-field {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.form-label {
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--text-primary);
}

.form-input {
  width: 100%;
  min-height: 44px;
  padding: var(--space-3) var(--space-4);
  border: 1.5px solid hsl(var(--gray-300));
  border-radius: var(--radius-md);
  font-size: var(--text-base);
  color: var(--text-primary);
  background: var(--bg-primary);
  transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
}

.form-input:focus {
  outline: none;
  border-color: hsl(var(--brand-primary));
  box-shadow: 0 0 0 3px hsl(var(--brand-primary) / 0.15);
}

.form-input:invalid,
.form-input[aria-invalid="true"] {
  border-color: hsl(var(--color-error));
}

.form-error {
  font-size: var(--text-sm);
  color: hsl(var(--color-error));
  display: flex;
  align-items: center;
  gap: var(--space-1);
}
```

---

## 4. Layout Systems

### Responsive Grid

```css
/* Container with responsive padding */
.container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--space-4);

  @media (min-width: 640px)  { padding: 0 var(--space-6); }
  @media (min-width: 1024px) { padding: 0 var(--space-8); }
}

/* Auto-responsive grid */
.grid-auto {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 280px), 1fr));
  gap: var(--space-6);
}

/* Named breakpoints */
/* sm:  640px  | md: 768px | lg: 1024px | xl: 1280px | 2xl: 1536px */
```

### Sticky Footer Pattern

```css
body {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main { flex: 1; }

footer { margin-top: auto; }
```

---

## 5. Micro-Animations & Interactions

### Entrance Animations

```css
/* Fade up  use for content sections */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}

.animate-fade-up {
  animation: fadeUp 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

/* Staggered children */
.card-grid > *:nth-child(1) { animation-delay: 0ms; }
.card-grid > *:nth-child(2) { animation-delay: 60ms; }
.card-grid > *:nth-child(3) { animation-delay: 120ms; }
.card-grid > *:nth-child(4) { animation-delay: 180ms; }
```

### Hover Lift Effect

```css
.hover-lift {
  transition: transform var(--transition-base), box-shadow var(--transition-base);
}
.hover-lift:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
}
```

### Framer Motion (React)

```tsx
import { motion } from 'framer-motion'

// Fade-up card with stagger
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } }
}

const itemVariants = {
  hidden:  { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
}

function CardGrid({ items }) {
  return (
    <motion.div
      className="grid-auto"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {items.map(item => (
        <motion.div key={item.id} variants={itemVariants}>
          <Card {...item} />
        </motion.div>
      ))}
    </motion.div>
  )
}
```

---

## 6. Accessibility Standards (WCAG AA)

### Mandatory Checks

```
[ ] Colour contrast: 4.5:1 for body text, 3:1 for large text (18px+)
[ ] All images have descriptive alt text (or alt="" if decorative)
[ ] Focus ring visible on all interactive elements
[ ] Keyboard navigation works without mouse
[ ] Form fields have associated <label> elements
[ ] Error messages programmatically associated with inputs (aria-describedby)
[ ] Landmark regions: <header>, <main>, <nav>, <footer>
[ ] Page has a single <h1>; heading hierarchy is logical (no skipped levels)
[ ] Interactive elements minimum 44×44px touch target
[ ] No content flashes > 3 times per second
```

### Focus Management

```css
/* Never remove focus ring  enhance it instead */
:focus-visible {
  outline: 2px solid hsl(var(--brand-primary));
  outline-offset: 3px;
  border-radius: var(--radius-sm);
}
```

### Screen Reader Support

```html
<!-- Visually hidden but screen-reader accessible -->
<span class="sr-only">Loading, please wait</span>

<!-- Live regions for dynamic content -->
<div aria-live="polite" aria-atomic="true" id="status-message"></div>

<!-- Icon-only buttons need text -->
<button aria-label="Close dialog">
  <svg aria-hidden="true">...</svg>
</button>
```

---

## 7. UX Flow Design

When mapping user journeys, always cover:
1. **Happy path**  Ideal scenario, all data present
2. **Empty state**  First visit, no data yet
3. **Loading state**  Data fetching in progress
4. **Error state**  API failure, validation errors
5. **Edge cases**  Very long content, special characters, mobile

### State Coverage Example

```
User visits dashboard:
├── Loading → Skeleton placeholders (not spinners alone)
├── Empty → Friendly illustration + CTA to create first item
├── Error → Retry button + helpful error description
├── Success → Content + actions visible
└── Partial → Some data loaded, others pending
```

---

## 8. Design Review Checklist

### Visual Design
- [ ] Consistent spacing (uses design token scale, not arbitrary values)
- [ ] Color usage matches brand guidelines
- [ ] Max 2-3 font sizes per section
- [ ] Visual hierarchy clear (most important is most prominent)
- [ ] Sufficient whitespace  content breathes without feeling sparse

### Interaction Design
- [ ] Every interactive state covered (hover, focus, active, disabled)
- [ ] Error messages show what went wrong AND how to fix it
- [ ] Loading states never leave user wondering
- [ ] Destructive actions have confirmation step
- [ ] Success actions provide clear feedback

### Responsive Design
- [ ] Tested at 320px (smallest phone)
- [ ] Tested at 768px (tablet)
- [ ] Tested at 1280px (standard desktop)
- [ ] No horizontal scroll at any breakpoint
- [ ] Touch targets ≥ 44px on mobile
- [ ] Font sizes readable at each breakpoint (min 16px body)

---

## 9. Output Format

Always deliver UI work in this order:
1. **Design rationale**  Why these choices
2. **Token/system definitions**  Colors, typography, spacing
3. **Component code**  HTML/CSS or React/Tailwind
4. **States covered**  Loading, empty, error, success
5. **Accessibility notes**  ARIA, keyboard, contrast
6. **Implementation note**  Anything dev needs to know
