# MERN Hotel Management System

## Introduction
The MERN Hotel Management System is a full-stack web application that allows hotel administrators to manage room bookings, customers, payments, and staff. Built using the MERN (MongoDB, Express.js, React.js, Node.js) stack, this system provides an intuitive interface for both hotel managers and customers.

## Features
### Admin Features
- Book orders
- Book rooms
- Manage user logins
- Book events

### User Features
- Book rooms online
- Book events
- Login system

### General Features
- Authentication and Authorization (JWT-based login system)
- Secure API endpoints

## Tech Stack
- **Frontend:** React.js, Redux, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas, Mongoose
- **Authentication:** JSON Web Tokens (JWT)
- **Hosting:** Vercel (Frontend), Render/Heroku (Backend)

## Installation
### Prerequisites
- Node.js (v16 or later)
- MongoDB Atlas account
- Git

### Steps to Run the Project
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/mern-hotel-management.git
   cd mern-hotel-management
   ```
2. Install dependencies for backend and frontend:
   ```sh
   cd backend
   npm install
   cd ../frontend
   npm install
   ```
3. Configure environment variables:
   - Create a `.env` file in the `backend` directory with:
     ```
     MONGO_URI=your_mongodb_atlas_connection_string
     JWT_SECRET=your_secret_key
     ```
   - Create a `.env` file in the `frontend` directory with:
     ```
     REACT_APP_API_URL=http://localhost:5000
     ```
4. Start the backend server:
   ```sh
   cd backend
   npm start
   ```
5. Start the frontend:
   ```sh
   cd frontend
   npm run dev
   ```
6. Open the application in your browser:
   ```
   http://localhost:3000
   ```

## API Endpoints
| Method | Endpoint              | Description |
|--------|-----------------------|-------------|
| POST   | /api/bookings         | Book a room |
| POST   | /api/events           | Book an event |
| POST   | /api/users/login      | User login |

## Contributing
1. Fork the repository
2. Create a new branch (`feature/new-feature`)
3. Commit your changes
4. Push to the branch and submit a PR

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Contact
For any queries, feel free to reach out:
- **Email:** hadiyal123vvv@gmail.com
- **LinkedIn:** [Vishal Hadiyal](https://www.linkedin.com/in/vishal-hadiyal/)
