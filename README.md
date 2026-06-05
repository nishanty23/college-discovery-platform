<<<<<<< HEAD
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
AI Software Engineer Internship Project
=======
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
>>>>>>> 18f6139828434cdb2d5ee255a3404750cf4f2e88
