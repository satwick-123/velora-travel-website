# Velora

Velora is a full-stack travel-stay booking platform inspired by boutique vacation rental sites, built to demonstrate a complete booking experience end to end. Users can browse curated stays, sign up and log in securely, book a stay through a validated date-based form, and receive a ticket-style booking confirmation. The application follows a clean MVC-style structure and emphasizes readable backend design, a distinctive UI, and real booking logic (auth-gated checkout, redirect-back-after-login, date validation).

## Project Highlights

- Secure Authentication (hashed passwords, sessions)
- Auth-Gated Booking Flow with Redirect-Back-After-Login
- Date Validation (check-out must be after check-in)
- Ticket-Style Booking Confirmation
- Fully Custom, Distinctive UI (navy / parchment / brass "travel ticket" design system)
- Responsive Navigation with Mobile Menu
- Custom 404 Page
- Clean Route / Middleware / Data Separation

## Features

### Authentication & Authorization
- User Signup, Login and Logout
- Secure Password Hashing using bcryptjs
- Session-Based Login using express-session
- Booking Routes Protected by a `requireLogin` Middleware
- Redirects Back to the Listing You Wanted After Logging In

### Listings
- Home Page with Featured Stays
- Full Stays Listing Page
- Listing Detail Page with Description, Rating and Location
- Real Photography for Every Stay

### Booking System
- Interactive Booking Form (check-in, check-out, guest count)
- Check-Out-After-Check-In Date Validation
- Per-Night Price Calculation on Confirmation
- Ticket-Style Booking Confirmation Page
- Bookings Scoped to the Logged-In User's Email

### User Experience
- Responsive Design Down to Mobile
- Collapsing Mobile Navigation
- Consistent Design System (custom color tokens, serif display type, monospace accents)
- Inline Form Error Messages
- Custom 404 Page

## Tech Stack

### Frontend
- HTML5
- CSS3 (hand-written design system, no framework)
- JavaScript (ES6)
- EJS

### Backend
- Node.js
- Express.js

### Authentication
- bcryptjs
- express-session

### Data Layer
- In-memory data modules (`data/hotels.js`, `data/users.js`) — swappable for MongoDB/Mongoose or any other database without touching routes or views

### Other Tools
- dotenv
- nodemon (dev only)

## Screenshots

### Home Page
![Home Page](screenshots/home.png)

### Stays Listing
![Stays Listing](screenshots/listings.png)

### Listing & Booking
![Listing and Booking](screenshots/booking.png)

## Project Structure

Velora/
│
├── routes/
│ ├── index.js # home, /stays
│ ├── auth.js # /login, /signup, /logout
│ └── booking.js # listing detail, /stays/:id/book, confirmation
│
├── middleware/
│ └── auth.js # attachUser, requireLogin
│
├── data/
│ ├── hotels.js # in-memory stays + bookings
│ └── users.js # in-memory users
│
├── views/
│ ├── partials/
│ │ ├── navbar.ejs
│ │ └── footer.ejs
│ │
│ ├── home.ejs
│ ├── listings.ejs
│ ├── listing-detail.ejs
│ ├── booking-confirm.ejs
│ ├── login.ejs
│ ├── signup.ejs
│ └── 404.ejs
│
├── public/
│ ├── css/
│ │ └── style.css
│ ├── images/ # branded SVG placeholders per stay
│ └── js/
│ └── main.js
│
├── screenshots/
│ ├── home.png
│ ├── listings.png
│ └── booking.png
│
├── app.js
├── package.json
├── package-lock.json
├── .env.example
├── .gitignore
└── README.md


## Architecture

The application follows an MVC-inspired structure:

- **Data layer** (`data/`) manages stays, users, and bookings, and can be swapped for a real database without changing any route or view.
- **Views** (`views/`) render dynamic UI using EJS templates and shared partials.
- **Routes** (`routes/`) define application endpoints and contain the request-handling logic.
- **Middleware** (`middleware/`) handles session-based authentication and access control on protected routes.

## Installation

Clone the repository:

```bash
git clone https://github.com/satwick-123/velora-travel-website.git
cd velora-travel-website
```

Install dependencies:

```bash
npm install
```

Start the application:

```bash
npm start
```

Open your browser and navigate to `http://localhost:3000` to access the application.

For auto-reload during development:

```bash
npm run dev
```

## Environment Variables

Create a `.env` file in the root directory (or copy `.env.example`) and set:PORT=3000
SESSION_SECRET=your_long_random_secret

`SESSION_SECRET` should be a long, random string in any real deployment — the fallback in the code is for local development only.

## Future Improvements

- Persist data with MongoDB/Mongoose instead of in-memory storage
- Real photography per listing (Cloudinary or similar)
- Search and filter by location, price, or rating
- Guest reviews and ratings
- Email confirmation on booking
- Booking cancellation and a "My Bookings" dashboard

## License

For personal and learning use.
