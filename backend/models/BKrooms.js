import mongoose from "mongoose";

const BKroomSchema = new mongoose.Schema({
  roomId:{
    type:Number,
    required:true,
  },
  day: {
    type: String,
    required: true,
  },
  roomType: {
    type: String,
    required: true,
  },
  roomQuantity: {
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

const BKroom = mongoose.model("BKroom", BKroomSchema);

export default BKroom;
