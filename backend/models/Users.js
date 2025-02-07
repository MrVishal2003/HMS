import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  userId: { type: Number, unique: true },
  firstname: String,
  lastname: String,
  email: { type: String, unique: true },
  phone: String,
  password: String,
});

const UserModel = mongoose.model("User", UserSchema);
export default UserModel;
