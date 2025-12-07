# Vehicle Rental System – Backend API

A simple and secure backend API for managing a complete vehicle rental system. This project is designed with **role-based authentication** to allow administrators and customers to manage vehicles, users, and bookings efficiently.

---

## Features

- **User Authentication:** Secure authentication using JSON Web Tokens (JWT).
- **Role-Based Access:** Distinct access levels for **Admin** and **Customer** roles.
- **Vehicle Management:** Full CRUD operations (Add, Update, Delete, View) for vehicles.
- **User Management:** Admin controls for all users, plus self-profile updates for all users.
- **Comprehensive Booking System:**
  - Availability checks before booking.
  - Automatic price calculation.
  - Automatic status updates (Booked / Returned / Cancelled).

---

## Technologies Used

| Technology           | Purpose                  |
| :------------------- | :----------------------- |
| **Node.js**          | Runtime Environment      |
| **TypeScript**       | Language for type safety |
| **Express.js**       | Web Framework            |
| **PostgreSQL**       | Database                 |
| `bcryptjs`           | Password Hashing         |
| `jsonwebtoken` (JWT) | Authentication           |
| `dotenv`             | Environment Variables    |

---

## Project Structure

The project follows a modular, feature-based structure:

src/├─ modules/│ ├─ auth/│ ├─ users/│ ├─ vehicles/│ └─ bookings/├─ middlewares/├─ configs/└─ server.ts
Each module (`auth`, `users`, etc.) is cleanly separated into:

- `routes`
- `controllers`
- `services`

---

## Installation Guide

Follow these steps to set up and run the project locally.

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd vehicle-rental
2. Install dependenciesBash npm install
3. Create .env fileCreate a file named .env in the root folder and add your configuration details:Code snippetPORT=5000
CONNECTION_SRT=postgresql://your connection credentials
JWT_SECRET=your_jwt_secret
4. Run the projectBashnpm run dev
The server will start on: http://localhost:5000🔑 AuthenticationUser EndpointsRegister: POST /api/v1/auth/signupLogin: POST /api/v1/auth/signinProtected RoutesFor all protected endpoints, an authorization header is required:Authorization: Bearer <your_token>
📌 API Base URL & EndpointsThe base URL for all API requests is /api/v1.ModuleBase EndpointAuthentication/authUsers/usersVehicles/vehiclesBookings/bookingsAll endpoints strictly adhere to the provided API specification.✅ How to UseRegister a user.Login to receive a JWT token.Use the token in the Authorization header to access protected routes.Admin users can manage vehicles and all users.Customer users can create and manage their own bookings.
```
