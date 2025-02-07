import mongoose from "mongoose";

const BKeventSchema = new mongoose.Schema({
  eventId:{
    type: Number,
    required: true,
  },
  day: {
    type: String,
    required: true,
  },
  eventType: {
    type: String,
    required: true,
  }, 
  adults: {
    type: String,
    required: true,
  },
  children: {
    type: String,
    required: true,
  },
  selectedValue:{
    type: String,
    required: true,
  }
});

const BKevent = mongoose.model("BKevent", BKeventSchema);

export default BKevent;
