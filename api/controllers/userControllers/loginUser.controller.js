import { User } from "../../models/User.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";

const secretKey = process.env.JWT_SECRET;

export const loginUserController = async (req, res) => {
  try {
    const { username, password } = req.body;
    const userExisted = await User.findOne({ username });
    if (!userExisted) {
      return res.status(404).json({
        success: false,
        message: "Username doesn't exist!",
      });
    }
    const validPassword = bcrypt.compareSync(password, userExisted.password);
    if (!validPassword) {
      return res.status(404).json({
        success: false,
        message: "Invalid Password!!!",
      });
    }

    const token = jwt.sign(
      { username: userExisted.username, id: userExisted._id },
      secretKey,
      { expiresIn: "1h" }
    );
    return res.cookie("token", token).status(200).json({
      success: true,
      message: "User logged in successfully",
      token: token,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      error: err,
    });
  }
};
