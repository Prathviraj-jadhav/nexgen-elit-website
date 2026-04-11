---
name: api-design
description: "REST and GraphQL API design skill. Use when: designing new APIs, reviewing API contracts, defining endpoints, writing OpenAPI/Swagger specs, API versioning strategy, authentication design, error format standardization, or any backend API planning task."
argument-hint: "Describe the API you need to design and its primary use case"
---

# API Design Skill

## When to Use This Skill

- Designing REST API endpoints for a new service
- Creating GraphQL schemas
- Writing OpenAPI/Swagger specifications
- Defining error response formats
- Planning API versioning strategy
- Designing authentication and authorization flows
- Reviewing existing API design for improvements

---

## REST API Design Principles

### URL Design Rules

```
✅ GOOD                              ❌ BAD
GET    /users                        GET /getUsers
GET    /users/{id}                   GET /getUserById
POST   /users                        POST /createUser
PUT    /users/{id}                   PUT /updateUser
PATCH  /users/{id}                   PATCH /users/update
DELETE /users/{id}                   DELETE /deleteUser

GET    /users/{id}/posts             GET /getUserPosts?userId={id}
POST   /users/{id}/posts             POST /createPostForUser

GET    /orders?status=pending        GET /getPendingOrders
GET    /products?sort=price&dir=asc  No sorting
GET    /users?page=2&limit=20        GET /users?p=2
```

### HTTP Method Semantics

| Method | Purpose | Idempotent? | Body? |
|--------|---------|-------------|-------|
| GET | Read resource(s) | ✅ Yes | ❌ No |
| POST | Create resource | ❌ No | ✅ Yes |
| PUT | Replace full resource | ✅ Yes | ✅ Yes |
| PATCH | Partial update | ❌ No (usually) | ✅ Yes |
| DELETE | Remove resource | ✅ Yes | Optional |

### Standard HTTP Status Codes

```
200 OK               Successful GET, PUT, PATCH
201 Created          Successful POST (include Location header)
204 No Content       Successful DELETE
400 Bad Request      Invalid input / validation error
401 Unauthorized     Not authenticated
403 Forbidden        Authenticated but not authorized
404 Not Found        Resource doesn't exist
409 Conflict         State conflict (duplicate, version mismatch)
422 Unprocessable    Semantically invalid (use for validation errors sometimes)
429 Too Many Requests  Rate limit exceeded
500 Internal Server Error  Unexpected server error
503 Service Unavailable    Maintenance / overload
```

---

## Standardized Response Formats

### Success Response

```json
{
  "data": {
    "id": "usr_01abc",
    "email": "user@example.com",
    "name": "Jane Doe",
    "createdAt": "2024-01-15T10:30:00Z"
  },
  "meta": {
    "requestId": "req_xyz789"
  }
}
```

### Paginated List Response

```json
{
  "data": [
    { "id": "1", "name": "Item 1" },
    { "id": "2", "name": "Item 2" }
  ],
  "pagination": {
    "page": 2,
    "pageSize": 20,
    "totalItems": 542,
    "totalPages": 28,
    "hasNextPage": true,
    "hasPreviousPage": true,
    "nextPage": 3,
    "previousPage": 1
  }
}
```

### Error Response

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "The request contains invalid fields.",
    "details": [
      {
        "field": "email",
        "code": "INVALID_FORMAT",
        "message": "Must be a valid email address."
      },
      {
        "field": "age",
        "code": "TOO_SMALL",
        "message": "Must be at least 18."
      }
    ],
    "requestId": "req_xyz789",
    "timestamp": "2024-01-15T10:30:00Z"
  }
}
```

### Error Code Conventions

```
Format: SCREAMING_SNAKE_CASE
Prefix by category:

AUTH_*          INVALID_TOKEN, TOKEN_EXPIRED, INSUFFICIENT_PERMISSIONS
RESOURCE_*      RESOURCE_NOT_FOUND, RESOURCE_EXISTS, RESOURCE_LOCKED
VALIDATION_*    VALIDATION_ERROR, FIELD_REQUIRED, FIELD_TOO_LONG
RATE_LIMIT_*    RATE_LIMIT_EXCEEDED
SERVER_*        INTERNAL_ERROR, SERVICE_UNAVAILABLE
```

---

## OpenAPI Specification Template

```yaml
openapi: 3.1.0
info:
  title: [Service Name] API
  description: [One-line description of the API]
  version: 1.0.0
  contact:
    name: Engineering Team
    email: api@company.com

servers:
  - url: https://api.company.com/v1
    description: Production
  - url: https://api-staging.company.com/v1
    description: Staging

security:
  - BearerAuth: []

tags:
  - name: Users
    description: User account management
  - name: Posts
    description: Content management

paths:
  /users:
    get:
      summary: List users
      operationId: listUsers
      tags: [Users]
      parameters:
        - name: page
          in: query
          schema:
            type: integer
            minimum: 1
            default: 1
        - name: limit
          in: query
          schema:
            type: integer
            minimum: 1
            maximum: 100
            default: 20
        - name: q
          in: query
          description: Search query
          schema:
            type: string
      responses:
        '200':
          description: List of users
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/UserListResponse'
        '401':
          $ref: '#/components/responses/Unauthorized'

    post:
      summary: Create a user
      operationId: createUser
      tags: [Users]
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/CreateUserRequest'
      responses:
        '201':
          description: User created
          headers:
            Location:
              description: URL of the created resource
              schema:
                type: string
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/UserResponse'
        '400':
          $ref: '#/components/responses/ValidationError'
        '409':
          $ref: '#/components/responses/Conflict'

  /users/{userId}:
    parameters:
      - name: userId
        in: path
        required: true
        schema:
          type: string

    get:
      summary: Get user by ID
      operationId: getUser
      tags: [Users]
      responses:
        '200':
          description: User found
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/UserResponse'
        '404':
          $ref: '#/components/responses/NotFound'

components:
  securitySchemes:
    BearerAuth:
      type: http
      scheme: bearer
      bearerFormat: JWT

  schemas:
    User:
      type: object
      required: [id, email, createdAt]
      properties:
        id:
          type: string
          description: Unique identifier (CUID)
          example: usr_01abc123
        email:
          type: string
          format: email
          example: user@example.com
        name:
          type: string
          nullable: true
        createdAt:
          type: string
          format: date-time

    CreateUserRequest:
      type: object
      required: [email, password]
      properties:
        email:
          type: string
          format: email
        password:
          type: string
          minLength: 8
          description: Will be hashed  never returned in responses
        name:
          type: string
          maxLength: 255

    UserResponse:
      type: object
      properties:
        data:
          $ref: '#/components/schemas/User'

    UserListResponse:
      type: object
      properties:
        data:
          type: array
          items:
            $ref: '#/components/schemas/User'
        pagination:
          $ref: '#/components/schemas/Pagination'

    Pagination:
      type: object
      properties:
        page:        { type: integer }
        pageSize:    { type: integer }
        totalItems:  { type: integer }
        totalPages:  { type: integer }
        hasNextPage: { type: boolean }

    Error:
      type: object
      properties:
        error:
          type: object
          properties:
            code:      { type: string }
            message:   { type: string }
            requestId: { type: string }
            timestamp: { type: string, format: date-time }
            details:
              type: array
              items:
                type: object
                properties:
                  field:   { type: string }
                  code:    { type: string }
                  message: { type: string }

  responses:
    Unauthorized:
      description: Not authenticated
      content:
        application/json:
          schema:
            $ref: '#/components/schemas/Error'
    NotFound:
      description: Resource not found
      content:
        application/json:
          schema:
            $ref: '#/components/schemas/Error'
    ValidationError:
      description: Validation failed
      content:
        application/json:
          schema:
            $ref: '#/components/schemas/Error'
    Conflict:
      description: Resource conflict
      content:
        application/json:
          schema:
            $ref: '#/components/schemas/Error'
```

---

## Authentication Patterns

### JWT Bearer Token (Recommended for most APIs)

```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

Token payload:
```json
{
  "sub": "usr_01abc",         // Subject (user ID)
  "iat": 1705312200,          // Issued at
  "exp": 1705398600,          // Expires at (24h from iat)
  "jti": "tok_xyz789",        // JWT ID (for revocation)
  "scope": "read:users write:posts"
}
```

### API Key (For server-to-server)

```
X-Api-Key: sk_live_abc123def456
```

---

## API Versioning Strategy

```
Option A: URL versioning (recommended, most explicit)
  /v1/users
  /v2/users

Option B: Header versioning
  Accept: application/vnd.company.v2+json

Option C: Query parameter
  /users?version=2

Recommendation: Use URL versioning.
Never break backward compatibility within a version.
When deprecating, give at least 6 months notice.
```

---

## API Design Review Checklist

```
[ ] URLs use lowercase kebab-case, no verbs
[ ] HTTP methods used correctly
[ ] Status codes are semantically correct
[ ] Error responses follow standard format
[ ] All endpoints documented in OpenAPI spec
[ ] Authentication required where needed
[ ] Rate limiting considered
[ ] Pagination on list endpoints
[ ] Filtering and sorting on list endpoints
[ ] Consistent field naming (camelCase in JSON)
[ ] Dates in ISO 8601 format
[ ] IDs are non-sequential (UUIDs or CUIDs)
[ ] No sensitive data in URLs
[ ] HTTPS only for production
```
