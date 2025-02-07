import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  orderId: { type: Number, unique: true },
  orderType: String,
  colddrink: String,
  desert: String,
});

const BKorder = mongoose.model("BKorder", OrderSchema);
export default BKorder;
