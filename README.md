# Smart Store Platform

Professional full-stack web application for stores and companies to manage products, inventory, sales, and AI-powered product suggestions.

## Tech Stack

- Backend: Node.js, Express.js, MongoDB (Mongoose), JWT, express-session
- Frontend: React.js (Vite), React Router, Recharts, Axios

## Features Included

- Authentication: registration, login, logout, JWT + session, password hashing
- Role-based access control: Admin and User
- Admin panel: dashboard, products, users, AI chat logs, reports export, settings
- User panel: dashboard, products browse, AI chatbot, profile, notifications
- AI chatbot engine: buy/restock/promote suggestions based on stock and sales behavior
- Validation, error handling, modular architecture, responsive UI

## Project Structure

```
markiting/
  backend/
    src/
      config/ middleware/ models/ controllers/ routes/ services/ data/
  frontend/
    src/
      api/ context/ hooks/ layouts/ components/admin/ components/user/ pages/
```

## Local Setup

1. Create environment files:
   - Copy `backend/.env.example` to `backend/.env`
   - Copy `frontend/.env.example` to `frontend/.env`
2. Install all dependencies:
   - `npm run install:all`
3. (Optional) Seed sample data:
   - `npm run seed --prefix backend`
4. Run backend and frontend in two terminals:
   - `npm run dev:backend`
   - `npm run dev:frontend`
5. Open http://localhost:5173

## Demo Accounts (after seed)

- Admin: `admin@smartstore.com` / `Admin123!`
- User: `user@smartstore.com` / `User123!`

## Optional Payment Integration

Payment integration (Stripe/PayPal) can be added as a module under `backend/src/routes/paymentRoutes.js` and consumed in the frontend checkout flow when needed.
