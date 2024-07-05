import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      min: 3,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      min: 3,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 8,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("user", userSchema);
