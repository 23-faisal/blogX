import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { userRouter } from "./routes/User.route.js";
import cookieParser from "cookie-parser";
import { profileRouter } from "./routes/profile.route.js";

export const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Test OK!!!",
  });
});

app.use("/auth", userRouter);

app.use("/", profileRouter);

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Test OK!",
  });
});

app.use("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: "Page Not Found",
  });
});
