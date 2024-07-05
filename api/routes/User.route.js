import { Router } from "express";

import { registerUserController } from "../controllers/userControllers/registerUser.controller.js";
import { loginUserController } from "../controllers/userControllers/loginUser.controller.js";

export const userRouter = Router();

// Register User
userRouter.post("/register", registerUserController);

// Login User
userRouter.post("/login", loginUserController);

// profile

userRouter.get("/profile", (req, res) => {
  const cookie = req.cookies;
  res.status(200).json({
    success: true,
    message: "Welcome to the profile route",
    cookies: cookie,
  });
});
