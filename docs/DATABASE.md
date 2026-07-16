# Database Design

Database: PostgreSQL

ORM: Prisma

---

## Main Entities

User

Address

Category

Product

ProductVariant

Cart

CartItem

Order

OrderItem

Payment

---

## Relationships

User

1 → Many Addresses

1 → 1 Cart

1 → Many Orders

---

Category

Recursive relationship

Category

↓

Children Categories

---

Product

Many Products belong to one Category.

---

ProductVariant

One Product

↓

Many Variants

Each variant has

- SKU
- Size
- Color
- Stock
- Price

---

Cart

One Cart per User.

The cart is temporary.

It is NOT linked directly to Orders.

During checkout,

Cart Items

↓

Order Items

↓

Cart is cleared.

---

Order

Represents a historical snapshot.

Changing a product later must never change previous orders.

Therefore OrderItem stores

priceSnapshot

instead of referencing Product.price.

---

Payment

One Order

↓

One Payment
