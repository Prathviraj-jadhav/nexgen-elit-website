---
name: coding-agent
slug: code
version: 2.0.0
description: "Universal coding workflow with planning, multi-language implementation, verification, debugging, and testing. Use when: building features, fixing bugs, writing scripts, refactoring code, creating APIs, code review, explaining code, writing tests, any software development task."
argument-hint: "Describe the coding task, bug to fix, or feature to build"
---

# Coding Agent  Universal Development Skill

## When to Use This Skill

Activate when the user says or implies:
- "Build / Create / Implement / Write / Code / Add / Fix / Debug / Refactor"
- "Explain this code / How does X work / Why is this broken"
- "Write tests / Add error handling / Optimize this"
- Any task producing source code files or modifications

Supported languages: **JavaScript, TypeScript, Python, Rust, Go, Java, C#, PHP, Ruby, Swift, Kotlin, Bash, SQL, HTML/CSS**  and any other language on request.

---

## Core Principles (NEVER Skip)

1. **Read Memory First**  If `~/code/memory.md` exists, read it before anything else
2. **Plan Before Code**  For tasks with >2 files or complex logic, create a step plan
3. **Verify Before Delivering**  Always confirm the code works; never deliver untested output
4. **User Controls Pace**  Present plan → get approval → execute → verify → repeat

---

## Memory System

Store user preferences in `~/code/memory.md` (create if needed):

```
~/code/
  memory.md    # User explicitly asked preferences only
```

Only add entries when user says "remember X" or "always do Y" or "never do Z".

### memory.md format
```markdown
# Coding Preferences

## Always
- Use TypeScript strict mode
- Add JSDoc comments to all functions

## Never
- Use var (always const/let)
- Skip error handling

## Stack Preferences
- Frontend: Next.js + Tailwind
- Backend: Node.js + Prisma
- Testing: Vitest + Testing Library
```

---

## Workflow

```
Request → Clarify (if needed) → Plan → Approve → Execute → Verify → Deliver
```

### Step 1: Triage the Request

Before doing anything, classify the request:

| Type | Action |
|------|--------|
| Simple (1 function, 1 file) | Code directly, no plan needed |
| Medium (2-5 files, clear spec) | Brief plan (3-5 steps), get approval |
| Complex (6+ files, unclear spec) | Full plan with dependency graph |
| Debug/Fix | Diagnose first, then fix |
| Explain | Read code → structured explanation |

### Step 2: Plan (when needed)

Each step must have:
```
Step N: [Action verb] [specific output]
  - Creates/Modifies: [file paths]
  - Depends on: [step N-1 completed]
  - Verify: [how to confirm it works]
```

**Good step:** `Step 2: Create /api/auth/login endpoint returning JWT token. Verify: curl POST returns 200 with token field.`

**Bad step:** `Step 2: Implement authentication.` (vague, untestable)

### Step 3: Execute

For each file/function:
1. Write focused, clean code
2. Add error handling
3. Add types/type hints
4. Add comments for non-obvious logic only
5. Follow existing project conventions (read existing files first)

### Step 4: Verify

After every implementation:
```
Verification Checklist:
[ ] Code runs without errors
[ ] Edge cases handled (null, empty, large input)
[ ] Error messages are user-friendly
[ ] No hardcoded secrets or paths
[ ] Matches user's existing code style
[ ] Performance acceptable for expected load
```

---

## Debugging Framework

When the user reports a bug:

```
1. UNDERSTAND: What is the expected behavior? What actually happens?
2. REPRODUCE: What's the minimal code that shows the bug?
3. ISOLATE: Binary search  comment out half, find the failing section
4. ROOT CAUSE: Why does it fail? (logic error, type mismatch, async issue, etc.)
5. FIX: Apply minimal change that resolves root cause
6. VERIFY: Confirm fix works, doesn't break other things
7. PREVENT: Suggest test to catch this regression
```

Common bug patterns to check first:
- **Async/await**: Missing await, unhandled promise rejection
- **Null/undefined**: Accessing property of null, optional chaining needed
- **Type mismatch**: String vs number, object vs array
- **Scope**: Variable accessed outside its scope, closure issues
- **Off-by-one**: Loop bounds, array indexing
- **Race conditions**: Shared state, concurrent modifications

---

## Code Quality Standards

### Security (Always Apply)
- Never hardcode credentials, API keys, or URLs
- Validate and sanitize all user input
- Use parameterized queries for SQL (never string concatenation)
- Set appropriate HTTP headers (CORS, CSP)
- Hash passwords with bcrypt/argon2 (never MD5/SHA1)

### Error Handling Patterns
```javascript
// Node.js / TypeScript
try {
  const result = await riskyOperation();
  return { success: true, data: result };
} catch (error) {
  console.error('[service:operation]', error);
  throw new ServiceError('Human-readable message', { cause: error });
}
```

```python
# Python
try:
    result = risky_operation()
    return {"success": True, "data": result}
except SpecificError as e:
    logger.error(f"[service:operation] {e}")
    raise ServiceError(f"Human-readable message") from e
```

### Performance
- Avoid N+1 queries (batch or join instead)
- Use pagination for large datasets
- Cache expensive computations
- Prefer async/non-blocking for I/O
- Profile before optimizing

---

## Language-Specific Guidelines

### TypeScript / JavaScript
- Use `const` by default, `let` only when reassigning
- Always define return types for public functions
- Use `unknown` over `any`; use type guards to narrow
- Prefer `async/await` over `.then()` chains
- Use optional chaining `?.` and nullish coalescing `??`

### Python
- Use type hints (`def foo(x: int) -> str`)
- Prefer `pathlib` over `os.path`
- Use `dataclasses` or `pydantic` for structured data
- Write docstrings for public functions
- Use f-strings for formatting

### General Patterns
- Keep functions short (< 30 lines is a good target)
- Single responsibility principle
- Name variables for what they contain, not their type
- Extract magic numbers to named constants

---

## Testing Guidelines

Write tests alongside code when the task warrants it:

```javascript
// Vitest / Jest example
describe('calculateTotal', () => {
  it('returns sum of item prices', () => {
    expect(calculateTotal([10, 20, 30])).toBe(60);
  });
  it('returns 0 for empty array', () => {
    expect(calculateTotal([])).toBe(0);
  });
  it('throws for negative prices', () => {
    expect(() => calculateTotal([-1])).toThrow('Price cannot be negative');
  });
});
```

Test priorities:
1. Happy path (normal usage)
2. Edge cases (empty, null, boundary values)
3. Error paths (invalid input, service failures)

---

## Verification Outputs

### For UI Changes
- Describe what to look for visually
- List specific elements that should appear
- Note any interactions to test

### For API Endpoints
Show actual expected behavior:
```
POST /api/login
Body: { "email": "test@example.com", "password": "correct" }
Expected: 200 { "token": "eyJ..." }

POST /api/login
Body: { "email": "test@example.com", "password": "wrong" }
Expected: 401 { "error": "Invalid credentials" }
```

### For Scripts/Functions
Show example input → output:
```
Input:  formatDate("2024-01-15")
Output: "January 15, 2024"

Input:  formatDate(null)
Output: "" (empty string, no crash)
```

---

## Scope Boundaries

This skill ONLY:
- Writes, explains, debugs, tests, and reviews code
- Reads user preferences from `~/code/memory.md`
- Provides guidance for the user's specific project

This skill NEVER:
- Executes code automatically without user awareness
- Makes network requests or database changes without explicit instruction
- Accesses files outside the user's project directory
- Modifies its own SKILL.md file
- Stores preferences unless explicitly requested

---

## Common Traps to Avoid

| Trap | Correct Approach |
|------|-----------------|
| Delivering untested code | Always verify with expected input/output |
| Huge, monolithic change | Break into small, reviewable chunks |
| Ignoring existing code style | Read existing files first, match conventions |
| Fixing symptoms not root cause | Diagnose fully before fixing |
| Skipping error handling | Every external call needs try/catch |
| Over-engineering | Start simple, add complexity only when needed |
| Assuming requirements | Ask one clarifying question rather than guess wrong |
