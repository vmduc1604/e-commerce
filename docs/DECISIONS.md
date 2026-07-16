# Architectural Decisions

---

## AD-001

One User owns one Cart.

Reason

A shopping cart represents temporary shopping state.

---

## AD-002

Orders are NOT linked to Cart.

Reason

A cart changes continuously.

Orders are immutable historical records.

Checkout copies CartItems into OrderItems.

---

## AD-003

Business logic lives inside Server Actions.

Reason

Keeps services reusable and focused on database operations.

---

## AD-004

Services only communicate with Prisma.

Reason

Single Responsibility Principle.

---

## AD-005

Use Prisma ORM.

Reason

- Type Safety
- Autocomplete
- Easier maintenance
- Less SQL boilerplate

---

## AD-006

Use PostgreSQL.

Reason

Reliable relational database suitable for production.

---

## AD-007

One Prisma Client instance.

Reason

Avoid unnecessary database connections.

Improve scalability.
