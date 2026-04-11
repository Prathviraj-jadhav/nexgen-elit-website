---
name: code-review
description: "Code review skill for quality, security, and performance analysis. Use when: reviewing code before merging, auditing code quality, checking for security vulnerabilities, identifying performance bottlenecks, ensuring coding standards compliance, or reviewing a PR/diff."
argument-hint: "Paste the code to review OR describe what to review and why"
---

# Code Review Skill

## When to Use This Skill

- Reviewing code before a PR merge
- Security auditing of critical components
- Performance analysis of slow code
- Architecture review of a new feature
- Checking adherence to team coding standards
- Onboarding review (explaining what existing code does and its quality)

---

## Review Framework

Conduct reviews in this priority order:

```
1. 🔴 Critical    Security vulnerabilities, data loss risk, crashes
2. 🟠 Major       Logic errors, performance problems, missing error handling
3. 🟡 Standard    Code quality, readability, test coverage
4. 🟢 Minor       Style, naming conventions, comments
5. 💡 Suggestions  Improvements that aren't required but would help
```

---

## Security Review Checklist

### Input Validation
```
[ ] All user inputs validated and sanitized
[ ] SQL queries use parameterized statements (never string concatenation)
[ ] File paths validated and restricted (no path traversal)
[ ] Email, URL, IP addresses validated with proper regex or library
[ ] Numbers have range checks
[ ] JSON inputs validated against expected schema
```

### Authentication & Authorization
```
[ ] Authentication required on all protected routes
[ ] Authorization checked (not just authentication)
[ ] Tokens/sessions have appropriate expiry
[ ] Passwords hashed with bcrypt/argon2 (never MD5/SHA1/plaintext)
[ ] Secure cookie flags: HttpOnly, Secure, SameSite
[ ] CSRF protection on state-changing endpoints
```

### Data Exposure
```
[ ] No secrets/API keys in source code
[ ] No PII logged to console/files
[ ] API responses don't expose sensitive fields
[ ] Error messages don't expose internal details to users
[ ] Proper CORS configuration
```

### Injection Vulnerabilities
```
[ ] No SQL injection paths
[ ] No XSS vulnerabilities (output properly escaped)
[ ] No command injection (shell commands use safe APIs)
[ ] No template injection
```

---

## Code Quality Checklist

### Logic & Correctness
```
[ ] Algorithm produces correct output for expected inputs
[ ] Edge cases handled: empty input, null, boundary values, large inputs
[ ] Error paths explicitly handled (not swallowed silently)
[ ] Async code correctly awaited
[ ] Race conditions considered in concurrent code
[ ] Off-by-one errors checked in loops/array access
```

### Readability
```
[ ] Functions have a single clear responsibility
[ ] Function names describe what they do (verbs for functions, nouns for vars)
[ ] No magic numbers (extract to named constants)
[ ] Comments explain WHY, not WHAT (code should be self-explanatory)
[ ] Complex algorithms have explanatory comments
[ ] Dead code and commented-out code removed
```

### Error Handling
```
[ ] All API calls wrapped in try/catch
[ ] Error messages are user-friendly and actionable
[ ] Errors are logged with enough context to debug
[ ] Failures don't leave system in inconsistent state
[ ] Retry logic for transient failures (network, database)
```

### Performance
```
[ ] No N+1 query problems (use joins or batch queries)
[ ] Expensive operations cached appropriately
[ ] Large datasets paginated (never unbounded queries)
[ ] Heavy operations async/non-blocking
[ ] Memory leaks: event listeners cleaned up, timers cleared
[ ] Unnecessary re-renders in React components
```

---

## Common Bug Patterns to Check

```typescript
// ❌ Off-by-one
for (let i = 0; i <= arr.length; i++) { arr[i].value }  // arr[arr.length] is undefined

// ❌ Silent null crash
const user = await db.user.findFirst({ where: { id } })
return user.email  // Crashes if user not found

// ❌ Missing await
async function saveUser(data) {
  db.user.create({ data })  // Missing await  error not caught
  return "saved"
}

// ❌ Race condition
let count = 0;
async function increment() {
  const current = count;
  await delay(10);
  count = current + 1;  // Concurrent calls will overwrite each other
}

// ❌ SQL injection
const user = await db.raw(`SELECT * FROM users WHERE name = '${name}'`)

// ❌ Credentials in code
const API_KEY = "sk-live-abc123def456"

// ❌ Swallowed error
try {
  await riskyOperation()
} catch (e) {
  // Nothing  error disappears silently
}
```

---

## Review Output Format

Always structure your review as:

```markdown
# Code Review: [Filename / Feature]

**Reviewed**: [Date]
**Lines reviewed**: [N]
**Overall**: ✅ Approved / ⚠️ Approved with suggestions / ❌ Needs changes

---

## 🔴 Critical Issues (Must fix before merge)

### 1. [Issue Title]  Line [N]
**Problem**: [What the issue is]
**Risk**: [What could go wrong]
**Fix**:
\`\`\`language
// Fixed code here
\`\`\`

---

## 🟠 Major Issues (Should fix)

### 1. [Issue Title]
**Problem**: [Description]
**Suggested Fix**: [Code or explanation]

---

## 🟡 Standard Issues (Consider fixing)

- Line [N]: [Short description]
- Line [N]: [Short description]

---

## 💡 Suggestions (Optional improvements)

- [Suggestion 1]
- [Suggestion 2]

---

## ✅ Positives

- [What was done well  always include something]

---

## Summary

[2-3 sentence wrap-up and next steps]
```

---

## Language-Specific Considerations

### TypeScript / JavaScript
- No `any` types  use `unknown` and narrow with type guards
- `const` by default; `let` only when reassigning
- No `==` comparisons  always `===`
- Async functions should handle rejection (either try/catch or `.catch()`)
- Check for React hook dependency arrays correctness

### Python
- Type hints on public functions
- Context managers (`with`) for files and connections
- `subprocess` is dangerous  scrutinize any use
- Flask/Django: check for CSRF exemptions flagged without justification

### SQL / Database
- No unbounded queries (always have `LIMIT`)
- Indexes on all foreign keys and frequently filtered columns
- Transactions for multi-step operations

### General
- Never re-implement what a well-tested library already does securely
- Check license compatibility of any new dependencies added
