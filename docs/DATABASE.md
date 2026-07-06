// ========================================
// SIMP - E-Commerce Clothing Store
// ========================================

Table users {
id integer [pk, increment]
email varchar [unique, not null]
password_hash varchar [not null]

first_name varchar
last_name varchar
phone varchar

role varchar [default: 'customer']

created_at timestamp
updated_at timestamp
}

Table addresses {
id integer [pk, increment]

user_id integer [not null]

receiver_name varchar
phone varchar

province varchar
district varchar
ward varchar
street varchar

is_default boolean [default: false]

created_at timestamp
}

Table categories {
id integer [pk, increment]
parent_id integer [null]
name varchar [not null]
slug varchar [unique]
created_at timestamp
}

Table products {
id integer [pk, increment]

category_id integer [null]

name varchar [not null]
slug varchar [unique]

description text

brand varchar

status varchar [default: 'active']

created_at timestamp
updated_at timestamp
}

Table product_variants {
id integer [pk, increment]

product_id integer [not null]

sku varchar [unique]

size varchar
color varchar

price decimal

stock_quantity integer [default: 0]

image_url varchar

created_at timestamp
}

Table carts {
id integer [pk, increment]

user_id integer [unique, not null]

created_at timestamp
}

Table cart_items {
id integer [pk, increment]

cart_id integer [not null]
product_variant_id integer [not null]

quantity integer [default: 1]
}

Table orders {
id integer [pk, increment]

user_id integer [not null]
address_id integer [not null]

total_amount decimal

status varchar [default: 'PENDING']

created_at timestamp
updated_at timestamp
}

Table order_items {
id integer [pk, increment]

order_id integer [not null]
product_variant_id integer [not null]

quantity integer

price_snapshot decimal
}

Table payments {
id integer [pk, increment]

order_id integer [not null]

provider varchar
amount decimal

status varchar

paid_at timestamp

created_at timestamp
}

// ========================================
// RELATIONSHIPS
// ========================================

Ref: addresses.user_id > users.id

Ref: products.category_id > categories.id

Ref: product_variants.product_id > products.id

Ref: carts.user_id > users.id

Ref: cart_items.cart_id > carts.id
Ref: cart_items.product_variant_id > product_variants.id

Ref: orders.user_id > users.id
Ref: orders.address_id > addresses.id

Ref: order_items.order_id > orders.id
Ref: order_items.product_variant_id > product_variants.id

Ref: payments.order_id > orders.id
Ref: categories.parent_id > categories.id
