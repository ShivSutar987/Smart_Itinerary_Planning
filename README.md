# Smart Itinerary Planning & Tour Booking System (`smart_itinerary_planning`)

> **Avant-Garde Journeys** — A Full-Stack Tour and Travel Portal featuring AI-driven dynamic itinerary generation, geospatial mapping, automated pricing calculation, and complete tour reservation management.

---

## 🌟 Key Features

- **Dynamic Package Catalog & Advanced Filters**: Real-time filtering by budget, duration, trip category (Beach, Adventure, Heritage, Nature), and travel group type (Solo, Couple, Family, Friends).
- **AI-Powered Itinerary Planner & Geospatial Mapping**: Generates structured day-wise plans and renders interactive route checkpoints via **Leaflet.js** and OpenStreetMap Nominatim geocoding.
- **6-Step Interactive Booking Wizard**:
  1. Primary Traveler Contact Details
  2. Dynamic Companion Members (Adults & Children)
  3. Travel Dates & Room Preferences
  4. Automatic Pricing Engine (Adult/Child multiplier, GST, promo discount code)
  5. Payment Gateway Simulation (UPI, Credit/Debit Card, Net Banking)
  6. Instant Confirmation & Printable Receipt (`BKG-XXXXXX` / `TXN-XXXXXX`)
- **Interactive User Dashboard**: Centralized management for active bookings, AI itineraries, user reviews, customer inquiries, and profile details.
- **Secure Authentication & Authorization**:
  - Salting and one-way password hashing using `bcrypt` (10 rounds).
  - Stateless authentication via JSON Web Tokens (`JWT`) with expiration.
  - Profile and password management with database synchronization.
- **Feedback & Testimonials Carousel**: Touch-friendly carousel powered by `Swiper.js` with full CRUD review management.
- **Built-in Telemetry**: Automatically records user visits, clicks, and actions into MySQL activity logs.

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend** | HTML5, Modern CSS3 (Dark Glassmorphic Luxury Theme), Vanilla JavaScript ES6+ |
| **UI Libraries** | Swiper.js v11, FontAwesome 6, Google Fonts (Outfit & Nunito) |
| **Maps & Geo** | Leaflet.js v1.9.4, OpenStreetMap, Nominatim API |
| **Backend** | Node.js, Express.js (`^5.2.1`) |
| **Database** | MySQL 8.0 via `mysql2` connection pool (`^3.22.3`) |
| **Security** | `jsonwebtoken`, `bcrypt`, `cors`, `dotenv` |

---

## 🚀 Quick Start Guide

### 1. Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher)
- [MySQL Server](https://dev.mysql.com/downloads/mysql/) (v8.0+ running on port 3306)

### 2. Database Configuration
1. Open MySQL command line or Workbench:
   ```sql
   CREATE DATABASE IF NOT EXISTS travel_db;
   ```
2. In `backend/.env`, verify your MySQL credentials:
   ```env
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=your_mysql_password
   DB_NAME=travel_db
   PORT=5000
   JWT_SECRET=your_jwt_secret
   ```
   *(All tables and sample seed reviews/users are auto-generated on server startup!)*

### 3. Install & Start Backend
```bash
cd backend
npm install
npm start
```

### 4. Open Application
Navigate to [http://localhost:5000](http://localhost:5000) in your web browser.

**Default Test Account:**
- **Email:** `demo@example.com`
- **Password:** `password123`

---

## 📁 Repository Structure
```
smart_itinerary_planning/
├── backend/
│   ├── config/
│   │   ├── db.js             # MySQL Connection Pool & Auto Schema Seeding
│   │   └── schema.sql        # Database Table Definitions
│   ├── controllers/          # Business logic handlers
│   │   ├── activityController.js
│   │   ├── bookingController.js
│   │   ├── contactController.js
│   │   ├── itineraryController.js
│   │   ├── packageController.js
│   │   ├── reviewController.js
│   │   └── userController.js
│   ├── middleware/           # authMiddleware & validationMiddleware
│   ├── routes/               # Express REST API endpoints
│   ├── .env.example          # Environment variables template
│   ├── package.json          # Node dependencies and scripts
│   └── server.js             # Express application entry point
├── frontend/
│   ├── JS/                   # Modular client-side scripts
│   │   ├── activity.js       # AI Chatbot & Telemetry
│   │   ├── auth.js           # Authentication & Profile management
│   │   ├── booking.js        # 6-Step Booking Wizard & Dashboard
│   │   ├── contact.js        # Contact message submission
│   │   ├── itinerary.js      # AI Planner & Leaflet Map
│   │   ├── navbar.js         # Mobile drawer & search bar
│   │   ├── review.js         # Reviews CRUD & slider
│   │   └── slider.js         # Swiper video & brand sliders
│   ├── Mini-Images/          # Optimized images and background videos (<30MB)
│   ├── Mini_CSS.css          # Glassmorphic dark styling (~70KB)
│   └── Mini_HTML.html        # Single-page application markup
├── .gitignore                # GitHub ignore rules (no files >50MB)
└── README.md                 # Project documentation
```
