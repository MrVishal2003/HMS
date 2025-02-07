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

// ✅ Secure MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("✅ MongoDB connected"))
  .catch((error) => console.error("❌ MongoDB connection error:", error));

// ✅ User Signup Route
app.post("/signup", async (req, res) => {
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

// ✅ Book Event Route
app.post("/event", async (req, res) => {
  try {
    const { day, eventType, adults, children, selectedValue } = req.body;

    const eventCount = await BKevent.countDocuments();
    const eventId = eventCount === 0 ? 1 : (await BKevent.findOne({}, { eventId: 1 }).sort({ eventId: -1 })).eventId + 1;

    const newEvent = new BKevent({ eventId, day, eventType, adults, children, selectedValue });
    await newEvent.save();

    res.status(201).json({ message: "Event booked successfully", eventId });

  } catch (error) {
    console.error("Error booking event:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// ✅ Book Order Route
app.post("/order", async (req, res) => {
  try {
    const { orderType, colddrink, desert } = req.body;

    const orderCount = await BKorder.countDocuments();
    const orderId = orderCount === 0 ? 1 : (await BKorder.findOne({}, { orderId: 1 }).sort({ orderId: -1 })).orderId + 1;

    const newOrder = new BKorder({ orderId, orderType, colddrink, desert });
    await newOrder.save();

    res.status(201).json({ message: "Order booked successfully", orderId });

  } catch (error) {
    console.error("Error booking order:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// ✅ Get All Users Route
app.get("/admin/users", async (req, res) => {
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
  try {
    await UserModel.findOneAndDelete({ email: req.params.email });
    res.json({ message: "User deleted successfully" });

  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// ✅ Delete Room Route
app.delete("/bkrooms/:roomId", async (req, res) => {
  try {
    await BKroom.findOneAndDelete({ roomId: Number(req.params.roomId) });
    res.json({ message: "Room deleted successfully" });

  } catch (error) {
    console.error("Error deleting room:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// ✅ Delete Event Route
app.delete("/bkevent/:eventId", async (req, res) => {
  try {
    await BKevent.findOneAndDelete({ eventId: Number(req.params.eventId) });
    res.json({ message: "Event deleted successfully" });

  } catch (error) {
    console.error("Error deleting event:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// ✅ Delete Order Route
app.delete("/bkorder/:orderId", async (req, res) => {
  try {
    await BKorder.findOneAndDelete({ orderId: Number(req.params.orderId) });
    res.json({ message: "Order deleted successfully" });

  } catch (error) {
    console.error("Error deleting order:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// ✅ Start Server
app.listen(3000, () => console.log("🚀 Server started on port 3000"));
