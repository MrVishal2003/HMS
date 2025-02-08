MERN Hotel Management System

Introduction

The MERN Hotel Management System is a full-stack web application that allows hotel administrators to manage room bookings, customers, payments, and staff. Built using the MERN (MongoDB, Express.js, React.js, Node.js) stack, this system provides an intuitive interface for both hotel managers and customers.

Features

Admin Features

Book orders

Book rooms

Manage user logins

Book events

User Features

Book rooms online

Book events

Login system

General Features

Authentication and Authorization (JWT-based login system)

Secure API endpoints

Tech Stack

Frontend: React.js, Redux, Tailwind CSS

Backend: Node.js, Express.js

Database: MongoDB, Mongoose

Authentication: JSON Web Tokens (JWT)

Hosting: Vercel (Frontend), Render/Heroku (Backend)

Installation

Prerequisites

Node.js (v16 or later)

MongoDB (local or Atlas)

Git

Steps to Run the Project

Clone the repository:

git clone https://github.com/yourusername/mern-hotel-management.git
cd mern-hotel-management

Install dependencies for backend and frontend:

cd backend
npm install
cd ../frontend
npm install

Configure environment variables:

Create a .env file in the backend directory with:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

Create a .env file in the frontend directory with:

REACT_APP_API_URL=http://localhost:5000

Start the backend server:

cd backend
npm start

Start the frontend:

cd frontend
npm run dev

Open the application in your browser:

http://localhost:3000

API Endpoints

Method

Endpoint

Description

POST

/api/bookings

Book a room

POST

/api/events

Book an event

POST

/api/users/login

User login

Contributing

Fork the repository

Create a new branch (feature/new-feature)

Commit your changes

Push to the branch and submit a PR

License

This project is licensed under the MIT License - see the LICENSE file for details.

Contact

For any queries, feel free to reach out:

Email: hadiyal123vvv@gmail.com

LinkedIn: Vishal Hadiyal

