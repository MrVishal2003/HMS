import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import bcrypt from "bcrypt";

import UserModel from "./models/Users.js";
import BKroom from "./models/BKrooms.js";
import BKevent from "./models/BKevent.js";
import BKorder from "./models/BKorder.js";

dotenv.config(); // Load environment variables

const app = express();
app.use(express.json());
app.use(cors());

// ✅ MongoDB Connection (Ensures Reconnection for Vercel)
const connectDB = async () => {
  if (mongoose.connection.readyState === 1) return;
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

// ✅ User Signup Route
app.post("/signup", async (req, res) => {
  await connectDB(); // Ensure DB connection
  try {
    const { firstname, lastname, email, phone, password, confirmpassword } = req.body;

    if (password !== confirmpassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const userCount = await UserModel.countDocuments();
    const userId = userCount === 0 ? 1 : (await UserModel.findOne({}, { userId: 1 }).sort({ userId: -1 })).userId + 1;

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({ userId, firstname, lastname, email, phone, password: hashedPassword });

    await newUser.save();
    res.status(201).json({ message: "User created successfully", userId });

  } catch (error) {
    console.error("Error signing up user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// ✅ User Signin Route
app.post("/signin", async (req, res) => {
  await connectDB();
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });
    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return res.status(401).json({ message: "Invalid credentials" });

    res.status(200).json({ message: "Login successful", user });

  } catch (error) {
    console.error("Error logging in user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// ✅ Book Room Route
app.post("/book", async (req, res) => {
  await connectDB();
  try {
    const { day, roomType, roomQuantity, adults, children, selectedValue } = req.body;

    const roomCount = await BKroom.countDocuments();
    const roomId = roomCount === 0 ? 1 : (await BKroom.findOne({}, { roomId: 1 }).sort({ roomId: -1 })).roomId + 1;

    const newRoom = new BKroom({ roomId, day, roomType, roomQuantity, adults, children, selectedValue });
    await newRoom.save();

    res.status(201).json({ message: "Room booked successfully", roomId });

  } catch (error) {
    console.error("Error booking room:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// ✅ Admin: Get All Users
app.get("/admin/users", async (req, res) => {
  await connectDB();
  try {
    const users = await UserModel.find().lean();
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// ✅ Delete User Route
app.delete("/admin/users/:email", async (req, res) => {
  await connectDB();
  try {
    await UserModel.findOneAndDelete({ email: req.params.email });
    res.json({ message: "User deleted successfully" });

  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// ✅ Export for Vercel
export default app;
