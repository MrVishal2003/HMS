import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema({
  roomId: { type: Number, unique: true },
  day: String,
  roomType: String,
  roomQuantity: Number,
  adults: Number,
  children: Number,
  selectedValue: String,
});

const BKroom = mongoose.model("BKroom", RoomSchema);
export default BKroom;
