<div align="center">

# 🧳 Velora

**Find a quiet place to land.**

*A small, characterful stay-booking app for hillside cottages, backwater houseboats, and desert havelis — built with Express, EJS, and a soft spot for vintage travel tickets.*

![Home page](screenshots/home.png)

</div>

---

## What this is

Velora is a boutique booking site for the kind of stays you don't find by scrolling an algorithm — a coffee-plantation retreat in Coorg, a houseboat drifting through Alleppey's backwaters, a haveli room facing the Jaisalmer fort. Six curated stays, a full login/booking flow, and a design language borrowed from boarding passes and dashed ticket stubs.

No ads, no infinite scroll, no "12 people are looking at this right now." Just stays worth going quiet for.

## Take the tour

| Browse | Book | Confirm |
|---|---|---|
| ![Listings](screenshots/listings.png) | ![Booking](screenshots/booking.png) | Ticket-style confirmation with your dates, guests, and total |

## Features

- 🏡 Home page with featured stays + a full listings page
- 🎫 Listing detail pages with a live booking form
- 🔐 Real auth — signup, login, logout, hashed passwords, sessions
- ↩️ Try to book without logging in and you're sent to log in, then dropped right back where you were headed
- 🧾 Boarding-pass-style booking confirmation
- 📱 Responsive, down to a collapsing mobile nav
- 🪧 A custom 404 for anyone who wanders off the map

## Getting started

```bash
npm install
cp .env.example .env   # then edit .env if you want
npm start
```

Open **http://localhost:3000** and start exploring.

For auto-reload while you tinker:

```bash
npm run dev
```

## Environment variables

See `.env.example`. Set `SESSION_SECRET` to a long random string before deploying anywhere real — the fallback baked into the code is for local development only, not for production.

## How the data works

Stays and users live **in memory** (`data/hotels.js`, `data/users.js`), so the app runs with zero setup — no database to install, no connection string to fight with. The tradeoff: everything resets when the server restarts.

Ready to make it permanent? Swap those two files for a real database (MongoDB with Mongoose is a natural fit) and keep the same exported function shapes — nothing in `routes/` or `views/` needs to change.

## Project structure

```
Velora/
├── app.js                 # app setup, middleware, routes mounted here
├── routes/
│   ├── index.js            # home, /stays
│   ├── auth.js              # /login, /signup, /logout
│   └── booking.js           # listing detail, /stays/:id/book, confirmation
├── middleware/
│   └── auth.js              # attachUser, requireLogin
├── data/
│   ├── hotels.js             # in-memory stays + bookings
│   └── users.js               # in-memory users
├── views/
│   ├── partials/               # navbar, footer
│   └── *.ejs                    # pages
├── public/
│   ├── css/style.css            # navy / parchment / brass design system
│   ├── images/                   # branded SVG placeholders per stay
│   └── js/main.js
└── .env.example
```

## Roadmap ideas

Some natural next stops if you want to keep building:

- Swap in-memory data for MongoDB or Postgres
- Add real photography per stay
- Search and filter by location, price, or rating
- Guest reviews
- Email confirmation on booking

## License

For personal and learning use.
