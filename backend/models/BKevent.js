import mongoose from "mongoose";

const EventSchema = new mongoose.Schema({
  eventId: { type: Number, unique: true },
  day: String,
  eventType: String,
  adults: Number,
  children: Number,
  selectedValue: String,
});

const BKevent = mongoose.model("BKevent", EventSchema);
export default BKevent;
