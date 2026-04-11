---
name: testing-strategy
description: "Software testing strategy and test writing skill. Use when: writing unit tests, integration tests, E2E tests, test planning, choosing testing frameworks, improving test coverage, writing for TDD/BDD, testing async code, mocking dependencies, or setting up a testing infrastructure."
argument-hint: "Describe the code, function, or system to test and what framework you're using"
---

# Testing Strategy Skill

## When to Use This Skill

- Writing unit tests for functions/components
- Integration testing for APIs and databases
- End-to-end (E2E) testing for UIs
- Defining a testing strategy for a project
- Setting up testing infrastructure
- Improving test coverage
- Writing tests as part of TDD workflow
- Debugging flaky or failing tests

---

## Testing Pyramid

```
         /\
        /E2E\       Few, high value
       /------\
      /  Int.  \    Some
     /----------\
    /    Unit    \  Many, fast, isolated
   /--------------\
```

| Level | Speed | Cost | Coverage | Examples |
|-------|-------|------|---------|---------|
| **Unit** | Milliseconds | Cheap | Individual functions | `calculateTotal()`, `formatDate()` |
| **Integration** | Seconds | Medium | Module interactions | API routes, DB queries |
| **E2E** | Minutes | Expensive | Full user flows | Login → checkout flow |

Rule of thumb: 70% unit, 20% integration, 10% E2E

---

## Framework Selection

### JavaScript / TypeScript

| Framework | Best For | Notes |
|-----------|----------|-------|
| **Vitest** | Unit + Integration | Fast, ESM-native, Vite projects |
| **Jest** | Unit + Integration | Most popular, huge ecosystem |
| **Testing Library** | React/Vue/Angular components | Focus on user behavior |
| **Playwright** | E2E browser tests | Cross-browser, modern |
| **Cypress** | E2E browser tests | Great DX, slower than Playwright |

### Python

| Framework | Best For | Notes |
|-----------|----------|-------|
| **pytest** | All levels | De facto standard |
| **unittest** | Unit tests | Built-in, verbose |
| **FastAPI TestClient** | API testing | Built on requests |
| **Selenium / Playwright** | E2E | Browser automation |

---

## Unit Test Patterns

### Vitest / Jest  TypeScript

```typescript
// src/utils/calculateTotal.test.ts
import { describe, it, expect, beforeEach } from 'vitest'
import { calculateTotal, applyDiscount } from './calculateTotal'

describe('calculateTotal', () => {
  // Happy path
  it('returns sum of item prices', () => {
    const items = [
      { price: 10, quantity: 2 },
      { price: 5,  quantity: 3 },
    ]
    expect(calculateTotal(items)).toBe(35)
  })

  // Edge cases
  it('returns 0 for empty array', () => {
    expect(calculateTotal([])).toBe(0)
  })

  it('handles single item with quantity 1', () => {
    expect(calculateTotal([{ price: 99.99, quantity: 1 }])).toBe(99.99)
  })

  // Error cases
  it('throws for negative price', () => {
    expect(() => calculateTotal([{ price: -1, quantity: 1 }]))
      .toThrow('Price cannot be negative')
  })

  it('throws for zero quantity', () => {
    expect(() => calculateTotal([{ price: 10, quantity: 0 }]))
      .toThrow('Quantity must be at least 1')
  })
})

describe('applyDiscount', () => {
  it('applies percentage discount correctly', () => {
    expect(applyDiscount(100, 20)).toBe(80)
  })

  it('returns 0 for 100% discount', () => {
    expect(applyDiscount(100, 100)).toBe(0)
  })

  it('throws for discount over 100%', () => {
    expect(() => applyDiscount(100, 101)).toThrow()
  })
})
```

### Test Naming Conventions

```typescript
// Pattern: it('verb  context  expected result')
it('returns null when user is not found')
it('throws ValidationError when email is invalid')
it('sends email confirmation after successful registration')
it('does not save to database when validation fails')
```

---

## Mocking Dependencies

```typescript
// Vitest mocking
import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest'

// Mock a module
vi.mock('@/lib/db', () => ({
  db: {
    user: {
      findUnique: vi.fn(),
      create: vi.fn(),
    }
  }
}))

// Mock a function
const mockSendEmail = vi.fn()
vi.mock('@/lib/email', () => ({ sendEmail: mockSendEmail }))

describe('UserService.createUser', () => {
  beforeEach(() => {
    vi.clearAllMocks()  // Reset mock state between tests
  })

  it('creates user and sends welcome email', async () => {
    // Arrange
    const { db } = await import('@/lib/db')
    vi.mocked(db.user.create).mockResolvedValue({
      id: 'usr_test',
      email: 'test@example.com',
      name: 'Test User',
      createdAt: new Date()
    })

    // Act
    const result = await createUser({ email: 'test@example.com', name: 'Test User' })

    // Assert
    expect(db.user.create).toHaveBeenCalledWith({
      data: { email: 'test@example.com', name: 'Test User' }
    })
    expect(mockSendEmail).toHaveBeenCalledWith({
      to: 'test@example.com',
      template: 'welcome'
    })
    expect(result.id).toBe('usr_test')
  })

  it('throws when email already exists', async () => {
    const { db } = await import('@/lib/db')
    vi.mocked(db.user.create).mockRejectedValue(
      new Error('Unique constraint failed on email')
    )

    await expect(createUser({ email: 'existing@example.com' }))
      .rejects.toThrow('Email already registered')
  })
})
```

---

## API Integration Tests

```typescript
// Next.js App Router API route testing
import { describe, it, expect, beforeAll, afterAll } from 'vitest'
import { createServer } from 'node:http'
import { apiResolver } from 'next/dist/server/api-utils/node'

// Or use supertest + your express app
import request from 'supertest'
import app from '../src/app'

describe('POST /api/users', () => {
  it('creates user with valid data', async () => {
    const response = await request(app)
      .post('/api/users')
      .send({
        email: 'new@example.com',
        password: 'SecurePass123!'
      })
      .expect(201)

    expect(response.body).toMatchObject({
      data: {
        email: 'new@example.com',
      }
    })
    expect(response.body.data).not.toHaveProperty('password')
    expect(response.headers.location).toMatch(/\/api\/users\//)
  })

  it('returns 400 for invalid email', async () => {
    const response = await request(app)
      .post('/api/users')
      .send({ email: 'not-an-email', password: 'pass' })
      .expect(400)

    expect(response.body.error.code).toBe('VALIDATION_ERROR')
    expect(response.body.error.details).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ field: 'email' })
      ])
    )
  })

  it('returns 409 when email already exists', async () => {
    // Pre-seed test user
    await db.user.create({ data: { email: 'existing@example.com' } })

    await request(app)
      .post('/api/users')
      .send({ email: 'existing@example.com', password: 'pass' })
      .expect(409)
  })
})
```

---

## E2E Tests with Playwright

```typescript
// tests/e2e/login.spec.ts
import { test, expect } from '@playwright/test'

test.describe('User Login', () => {
  test('successful login redirects to dashboard', async ({ page }) => {
    await page.goto('/login')

    await page.fill('#email', 'user@example.com')
    await page.fill('#password', 'correctpassword')
    await page.click('button[type="submit"]')

    await expect(page).toHaveURL('/dashboard')
    await expect(page.getByText('Welcome back')).toBeVisible()
  })

  test('shows error for wrong credentials', async ({ page }) => {
    await page.goto('/login')

    await page.fill('#email', 'user@example.com')
    await page.fill('#password', 'wrongpassword')
    await page.click('button[type="submit"]')

    await expect(page.getByRole('alert')).toContainText('Invalid credentials')
    await expect(page).toHaveURL('/login')  // Still on login page
  })

  test('login form is accessible', async ({ page }) => {
    await page.goto('/login')
    
    // Check labels are associated
    const emailInput = page.getByLabel('Email')
    await expect(emailInput).toBeVisible()
    
    // Tab navigation works
    await emailInput.focus()
    await page.keyboard.press('Tab')
    await expect(page.getByLabel('Password')).toBeFocused()
  })
})

// playwright.config.ts
export default {
  testDir: './tests/e2e',
  use: {
    baseURL: 'http://localhost:3000',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:3000',
    reuseExistingServer: true,
  },
}
```

---

## Python Tests with pytest

```python
# tests/test_user_service.py
import pytest
from unittest.mock import MagicMock, patch

from src.services.user_service import UserService
from src.models import User

@pytest.fixture
def mock_db():
    return MagicMock()

@pytest.fixture
def user_service(mock_db):
    return UserService(db=mock_db)

class TestUserService:
    def test_create_user_success(self, user_service, mock_db):
        """Creates user and returns user object."""
        mock_db.user.create.return_value = User(
            id="usr_test",
            email="test@example.com"
        )
        
        result = user_service.create_user(email="test@example.com", password="secure123")
        
        assert result.email == "test@example.com"
        mock_db.user.create.assert_called_once()
    
    def test_create_user_duplicate_email_raises(self, user_service, mock_db):
        """Raises ValueError for duplicate email."""
        mock_db.user.create.side_effect = Exception("Unique constraint violated")
        
        with pytest.raises(ValueError, match="Email already registered"):
            user_service.create_user(email="existing@example.com", password="pass")
    
    @pytest.mark.parametrize("email", [
        "",
        "not-an-email",
        "missing@tld",
        "@nodomain.com"
    ])
    def test_create_user_invalid_email(self, user_service, email):
        """Raises ValueError for invalid email formats."""
        with pytest.raises(ValueError, match="Invalid email"):
            user_service.create_user(email=email, password="secure123")
```

---

## Coverage Configuration

```json
// vitest.config.ts
{
  "coverage": {
    "reporter": ["text", "html", "lcov"],
    "thresholds": {
      "global": {
        "branches": 80,
        "functions": 80,
        "lines": 80,
        "statements": 80
      }
    },
    "exclude": [
      "**/*.test.ts",
      "**/node_modules/**",
      "**/dist/**",
      "**/*.config.*"
    ]
  }
}
```

---

## Test Quality Checklist

Before submitting tests:
- [ ] Tests are independent (can run in any order)
- [ ] Tests are deterministic (same result every run)
- [ ] Happy path covered
- [ ] Edge cases covered (null, empty, boundary)
- [ ] Error paths covered (throws, rejects)
- [ ] Mocks are verified (assert mock was called correctly)
- [ ] No `setTimeout` hacks or `sleep()` in tests
- [ ] No hardcoded dates/times (mock the clock)
- [ ] Test names read as documentation
- [ ] Tests don't test implementation details (test behavior, not code structure)
