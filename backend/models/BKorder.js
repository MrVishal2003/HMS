import mongoose from "mongoose";

const BKorderSchema = new mongoose.Schema({
  orderId:{
    type: Number,
    required: true,
  },
 
  orderType: {
    type: String,
    required: true,
  },
  
  colddrink: {
    type: String,
    required: true,
  },
  desert: {
    type: String,
    required: true,
  },
  
});

const BKorder = mongoose.model("BKorder", BKorderSchema);

export default BKorder;
