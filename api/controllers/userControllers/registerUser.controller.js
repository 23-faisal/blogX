import { User } from "../../models/User.model.js";
import bcrypt from "bcryptjs";

export const registerUserController = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      res.status(404).json({
        success: false,
        message: "Email already existed!",
      });
    }

    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
      res.status(404).json({
        success: false,
        message: "Username already existed!",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      username: username,
      email: email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();

    res.status(201).json({
      success: true,
      message: `${username} was created successfully!`,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      Error: err.message,
    });
  }
};
