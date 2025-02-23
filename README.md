# Hotel-Management-System

[![Deploy on Vercel](https://img.shields.io/badge/Live%20Demo-Vercel-blue)]([https://todo-app-gamma-blue-99.vercel.app/](https://hms-seven-silk.vercel.app/))

The **Hotel Management System** is a web application built using the **MERN stack** (MongoDB, Express.js, React.js, and Node.js) to streamline hotel operations such as room booking, guest management, and event management.

## Features

- **User Authentication**: Secure user authentication system with role-based access control (admin, guest).
- **Room Booking**: Allows guests to browse available rooms, book rooms for specific dates, and view booking history.
- **Room Management**: Admin can add, update, and delete room details including room type, availability, and pricing.
- **Guest Management**: Admin can manage guest profiles and track booking history.
- **Event Booking**: Guests can book events hosted at the hotel.
- **Inquiry Message**: Users can send inquiries via email using EmailJS.
- **Login System**: Secure and efficient login system for guests.

## Technologies Used

- **MongoDB**: NoSQL database for storing hotel data.
- **Express.js**: Backend framework for building APIs.
- **React.js**: Frontend library for building a dynamic user interface.
- **Node.js**: Server-side JavaScript runtime.
- **Redux**: State management for handling complex UI states.
- **Bootstrap/TailwindCSS**: Frontend frameworks for responsive UI.
- **RESTful APIs**: Used for data communication between frontend and backend.
- **EmailJS**: Service for sending email inquiries.

## Installation & Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/hotel-management-system.git
   cd hotel-management-system
   ```

2. Install dependencies for the backend:
   ```sh
   cd backend
   npm install
   ```

3. Install dependencies for the frontend:
   ```sh
   cd ../frontend
   npm install
   ```

4. Configure environment variables in a `.env` file for backend:
   ```sh
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   ```

5. Start the backend server:
   ```sh
   npm start
   ```

6. Start the frontend:
   ```sh
   cd frontend
   npm start
   ```

7. Open the application in your browser at `http://localhost:3000`

## Contributor

Hadiyal Vishal (@Hadiyal Vishal)

## Acknowledgements

Thanks to the **MERN stack** for providing a powerful ecosystem for full-stack development.
Special thanks to the open-source community for their contributions and support.
