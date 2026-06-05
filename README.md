# 🎓 College Discovery Platform

A full-stack web application that helps users explore colleges, view detailed information, search using filters, and save preferred institutions. Built with a modern Next.js architecture and a PostgreSQL-backed API system.

---

## 🚀 Live Demo

> Add your Vercel link here after deployment  
Example: https://college-discovery-platform.vercel.app

---

## 📌 Project Overview

This platform allows users to:

- Browse a curated list of colleges
- Search colleges by name and location
- View detailed college profiles
- Save colleges for future reference
- Authenticate securely using JWT-based login system

The system is designed with scalability and clean separation between frontend, backend, and database layers.

---

## ⚙️ Tech Stack

### Frontend
- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS

### Backend
- Next.js API Routes
- Node.js
- JWT Authentication

### Database
- PostgreSQL
- Prisma ORM

### Deployment
- Vercel
- Neon Database

---

## 🧠 Key Features

### 1. Authentication System
- User signup and login
- Password hashing using bcrypt
- JWT-based session handling

### 2. College Search System
- Search colleges by name
- Filter by location
- Backend-driven query handling

### 3. College Detail Page
- Overview of college
- Courses offered
- Placement details
- Ratings and fees

### 4. Bookmark System
- Save preferred colleges
- View saved colleges separately
- Remove saved items

---

## 🏗️ System Architecture

- Frontend handles UI rendering and user interactions
- Backend APIs manage authentication and data operations
- Prisma acts as ORM between application and database
- PostgreSQL stores all persistent data
- JWT ensures secure user sessions

---

## 🗄️ Database Schema

### User
- id
- name
- email (unique)
- password

### College
- id
- name
- location
- fees
- rating
- overview
- courses
- placements

### Bookmark
- id
- userId
- collegeId
- createdAt

---

## 🔌 API Endpoints

### Authentication
- POST `/api/auth/signup`
- POST `/api/auth/login`

### Colleges
- GET `/api/colleges`
- GET `/api/colleges/[id]`

### Bookmarks
- POST `/api/bookmark`
- GET `/api/bookmark`
- DELETE `/api/bookmark`

---

## 🧩 Setup Instructions

### 1. Clone repository
```bash
git clone https://github.com/your-username/college-discovery-platform.git
