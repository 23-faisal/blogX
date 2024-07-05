import mongoose from "mongoose";
import "dotenv/config";

const url = process.env.MONGO_URL;

export const connectDB = async () => {
  try {
    await mongoose.connect(url);
    console.log("MongoDB connected successfully!!!");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
  }
};
