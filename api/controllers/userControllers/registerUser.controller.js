import { User } from "../../models/User.model.js";
import bcrypt from "bcryptjs";

export const registerUserController = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const existingUserName = await User.findOne({ username });
    if (existingUserName) {
      res.status(404).json({
        success: false,
        message: "Username already existed!",
      });
    }
    const existingEmail = await User.findOne({ email });
    if (existingUserName) {
      res.status(404).json({
        success: false,
        message: "Email already existed!",
      });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);
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
      Error: err,
    });
  }
};
