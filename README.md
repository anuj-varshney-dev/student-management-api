# 🎓 Student Management API

A RESTful Student Management API built using **Node.js**, **Express.js**, and **MongoDB**. This project demonstrates CRUD operations, user authentication using JWT, password hashing with bcrypt, and role-based authorization.

---

## 🚀 Features

- User Registration
- User Login
- Password Hashing using bcrypt
- JWT Authentication
- Role-Based Authorization (Admin & Student)
- CRUD Operations for Students
- MongoDB Database Integration
- Express Middleware
- Protected Routes

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (jsonwebtoken)
- bcrypt
- dotenv

---

## 📁 Project Structure

```
student-management-api/
│
├── config/
│   └── db.js
│
├── controllers/
│   ├── studentController.js
│   └── userController.js
│
├── middleware/
│   ├── authMiddleware.js
│   └── adminMiddleware.js
│
├── models/
│   ├── studentModel.js
│   └── userModel.js
│
├── routes/
│   ├── studentRoutes.js
│   └── userRoutes.js
│
├── app.js
├── server.js
├── package.json
└── .gitignore
```

---

## 📌 API Endpoints

### User Routes

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /users/register | Register a new user |
| POST | /users/login | Login and receive JWT token |

### Student Routes

| Method | Endpoint | Description | Access |
|---------|----------|-------------|--------|
| GET | /students | Get all students | Public |
| GET | /students/:id | Get student by ID | Public |
| POST | /students | Create student | Admin Only |
| PUT | /students/:id | Update student | Admin Only |
| DELETE | /students/:id | Delete student | Admin Only |

---

## 🔐 Authentication

Protected routes require a JWT token.

Example:

```
Authorization: Bearer YOUR_JWT_TOKEN
```

---

## ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/anuj-varshney-dev/student-management-api.git
```

Go to the project directory

```bash
cd student-management-api
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Run the server

```bash
node server.js
```

---

## 📚 Concepts Learned

- Express Routing
- MVC Architecture
- REST API Design
- MongoDB & Mongoose
- JWT Authentication
- Password Hashing with bcrypt
- Middleware
- Authorization
- Environment Variables
- Git & GitHub

---

## 👨‍💻 Author

**Anuj Varshney**

GitHub: https://github.com/anuj-varshney-dev