# Architecture

## Tech Stack

Frontend
- Next.js
- React
- TypeScript
- Tailwind CSS

Backend
- Next.js Server Actions

Database
- PostgreSQL

ORM
- Prisma

Deployment
- Vercel
- Neon PostgreSQL

---

## Request Flow

Browser

↓

React Components

↓

Server Action

↓

Service Layer

↓

Prisma Client

↓

PostgreSQL

---

## Responsibilities

### React

Responsible for UI.

- Rendering
- Forms
- User interaction

React never communicates directly with PostgreSQL.

---

### Server Actions

Responsible for business logic.

Examples

- Registration
- Login
- Checkout
- Validation
- Authorization

Server Actions coordinate multiple services.

---

### Services

Responsible for database operations only.

Examples

- createUser()
- updateProduct()
- getOrders()

Services contain almost no business logic.

---

### Prisma

Acts as the bridge between TypeScript and PostgreSQL.

Instead of writing SQL manually,

```sql
SELECT * FROM users;
```

we write

```ts
prisma.user.findMany()
```

Prisma converts it into SQL automatically.

---

### PostgreSQL

Stores all persistent application data.