import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { userRouter } from "./routes/User.route.js";
import cookieParser from "cookie-parser";

export const app = express();

app.use(cors({ credentials: true, origin: "http://localhost:4000/" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Test OK!!!",
  });
});

app.use("/", userRouter);

app.use("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: "Page Not Found",
  });
});
