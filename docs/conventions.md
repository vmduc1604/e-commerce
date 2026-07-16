# Coding Conventions

## Naming

Models

User

Product

Order

Singular names.

---

Functions

Use verbs.

Examples

createUser()

updateProduct()

deleteOrder()

---

Services

Only interact with the database.

Avoid business logic.

---

Server Actions

Coordinate multiple services.

Perform

- validation
- authorization
- business rules

---

Prisma

Only one Prisma Client instance exists.

Always import

lib/prisma.ts

Never create

new PrismaClient()

inside services.

---

Database

Use Enums whenever values are fixed.

Examples

ProductStatus

OrderStatus

PaymentStatus

UserRole
