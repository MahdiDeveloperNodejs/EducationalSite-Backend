const { Schema, default: mongoose, model } = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    password: { type: String, required: true },
    role: {
      type: String,
      required: true,
      enum: ["ADMIN", "USER"],
      default: "USER",
    },
  },
  { timestamps: true },
);

const UserModel = model("User", userSchema);
module.exports = UserModel;
