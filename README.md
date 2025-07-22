# BrewBox

**Project**: Web Programming & Framework 2 - ITE-5425-0TA  
**Date**: July 2025

---

## 1. Project Overview

**BrewBox** is a subscription-based coffee delivery web application built with Next.js, TypeScript, and the App Router. Users can customize and subscribe to receive coffee pods or beans based on their machine type (e.g., Nespresso, Keurig) and taste preferences. The system simulates a mock payment flow, stores product and subscription data in Firebase, and provides an admin dashboard for managing coffee offerings and subscriber information.

---

## 2. Target Audience

- Coffee enthusiasts with home coffee machines  
- Busy professionals seeking automated recurring coffee deliveries  
- New home brewers desiring convenience and customization  

---

## 3. Objectives

1. Allow users to select coffee by machine type, format (pods/beans), roast level, and subscription frequency.  
2. Simulate a complete checkout flow with mock payment confirmation.  
3. Persist subscription and product data in Firebase (Auth & Firestore).  
4. Offer an admin panel for CRUD operations on products and subscriber management.  

---

## 4. Installation

1. **Clone the repository**  
   ```bash
   git clone https://github.com/2025-Summer-ITE-5425-OTA/project-phases-script-master
   cd project-phases-script-master
   ```
2. **Install dependencies**  
   ```bash
   npm install
   ```
3. **Configure environment variables**  
   Create a `.env.local` file in the root directory with:
   ```ini
   MONGODB_URI=<your_mongodb_connection_string>
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=<your_smtp_user>
   SMTP_PASS=<your_smtp_password>
   CONTACT_RECEIVER=<receiver_email>
   ```
4. **Run the development server**  
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 5. Technical Architecture

### Frontend
- Next.js App Router with TypeScript  
- Server-side rendering (SSR) & static site generation (SSG)  
- CSS Modules for scoped styles  
- React Context API for global cart state  
- Responsive design for desktop & mobile

### Backend
- Next.js API Routes under `src/app/api`  
- RESTful endpoints for users, products, cart, and orders  
- Business logic separated into controller modules

### Database
- MongoDB Atlas with Mongoose ORM  
- Schemas: Users, Coffee Items, Orders, Cart entries  
- Centralized connection utility in `lib/dbConnect.ts`

### State Management
- React Context for shopping cart across app

### Deployment
- Recommended: Vercel for seamless Next.js hosting  
- Environment variables for secure configuration

### Static Assets
- Stored in `public/` (images, SVGs, icons)

---

## 6. Features

### User-Facing
- **Home Page**: Overview & service highlights  
- **How It Works** section with step-by-step guide  
- **Menu Page**: Filter by machine type, format, roast  
- **Cart Page**: Add/remove/update items  
- **Checkout**: Mock payment & confirmation  
- **Contact Page**: SMTP-powered form submissions

### Admin
- Secure login via Firebase Auth  
- Protected dashboard at `/admin`  
- CRUD for coffee products (Firestore)  
- View & export subscriber list as CSV

---

## 7. Folder Structure

```
├── public
│   └── images, SVGs, icons
├── src
│   ├── app
│   │   ├── about/page.tsx
│   │   ├── api
│   │   │   ├── coffee/route.ts
│   │   │   ├── coffeeCart/route.ts
│   │   │   ├── orders/route.ts
│   │   │   └── users/{login,register}/route.ts
│   │   ├── cart/page.tsx
│   │   ├── login/page.tsx
│   │   ├── menu/page.tsx
│   │   └── signup/page.tsx
│   ├── component
│   │   ├── CartButton.tsx
│   │   ├── CoffeeCard.tsx
│   │   └── Header.tsx
│   ├── context/cartContext.tsx
│   ├── controllers/userController.ts
│   ├── lib/dbConnect.ts
│   ├── models/{Coffee,coffeeCart,orders,user}.ts
│   └── utils/db.ts
├── .env.local
├── next.config.js
├── package.json
└── README.md
```

---

## 8. Team Contributions

### 🔷 Avneet Virdi (N01584023)
- Initialized the Next.js + TypeScript project and App Router setup  
- Configured Git & GitHub workflows  
- Implemented React Context API for global cart  
- Developed cart logic (add/remove/update)  
- Created & tested Coffee API routes  
- **Lead**: Task delegation, deadline management, integration oversight

### 🔷 Gabriela Andrade Teixeira (N01664566)
- Designed & implemented Contact Page UI (responsive)  
- Integrated SMTP form submission via backend  
- Developed Cart Page UI with responsive styling  
- Built Checkout frontend and confirmation flow  
- Connected cart API routes for server-side operations

### 🔷 Ishika Bhatia (N01662147)
- Set up MongoDB Atlas & Mongoose models  
- Designed Homepage & About Us pages UI  
- Built Menu Page with filters & visuals  
- Created reusable homepage components  
- Ensured mobile responsiveness and brand consistency

### 🔷 Jaswinder Singh (N01661190)
- Built user authentication API (Next.js & MongoDB)  
- Developed Login & Signup UI with client-side validation  
- Implemented JWT-based auth and protected routes  
- Managed server-side credential storage & verification  
- Added role-based access scaffolding for admin vs. user

---

## 9. Documentation & Comments

- Inline comments explain critical logic and workflows  
- JSDoc annotations for function signatures in controllers & utilities  
- See individual modules for detailed implementation notes

---

**References**  
- Next.js Docs: https://nextjs.org/docs  
- Mongoose Docs: https://mongoosejs.com/docs/  
- Firebase Auth & Firestore Guides  
- Vercel Deployment Docs: https://vercel.com/docs  
