# GramaMart

GramaMart is a mobile-first grocery ordering and pickup experience for village communities in India. It is designed around physical shop pickup rather than home delivery.

## Current application surfaces

- Customer onboarding: language, mobile/OTP flow, profile, village
- Nearby shops, map link, contact link, ratings, opening/pickup information
- Fourteen grocery categories and product search
- Cart, quantity changes, reorder, product images, product ratings
- Pickup date/time, Pay at Shop, order confirmation, QR/Order ID, tracking
- Notifications, help, voice search, multilingual voice instructions
- Shopkeeper order desk, status progression, inventory, sales, low-stock view
- Admin overview for customers, shops, products, villages, languages, and orders
- SQLite schema with relational foreign keys and indexed order/catalog lookups

## Run locally

```powershell
python -m http.server 4173
```

Open `http://localhost:4173/`.

## Data model

The SQLite schema is in [database/schema.sql](database/schema.sql). It contains users, shops, categories, products, orders, order items, notifications, and translations. Orders keep a `payment_method` and `payment_status`, but never store payment credentials.

## Production integration boundary

The current browser build uses local state so the user journey can be tested without a backend. For production, add an API service between this UI and the database:

1. Verify mobile OTP on the server through an SMS provider. Store only a salted user/session reference and OTP expiry metadata; never store raw OTPs.
2. Issue short-lived access tokens and refresh tokens using secure, HTTP-only cookies. Enforce role-based authorization on every customer, shopkeeper, and admin endpoint.
3. Scope customer queries by authenticated `customer_id`, shopkeeper queries by approved `shop_id`, and admin endpoints by an admin role.
4. Create orders in a database transaction that validates shop ownership, product availability, stock, pickup slot, total, and payment method.
5. Use a PCI-compliant payment gateway for online payment. Store only gateway IDs and webhook-derived payment status; never store card numbers, UPI PINs, passwords, or gateway secrets in the browser or application database.
6. Generate a signed, expiring pickup token or server-generated QR payload. Verify it server-side together with the order ID and shop ownership before marking an order picked up or completed.
7. Move notifications, translations, inventory changes, reports, and admin actions to server-backed APIs with audit logs and rate limits.
8. Replace the local catalog cache with versioned API responses and a service worker cache after the API contract is stable.

The static build intentionally does not claim to provide secure authentication or authorization by itself; those guarantees require the server layer described above.
