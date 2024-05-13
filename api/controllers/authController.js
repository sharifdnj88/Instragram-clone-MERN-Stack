import User from "../models/User.js"
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";


// Login User
export const loginUser = async (req, res) => {
    try {
      const { email, password } = req.body;
      // Validation
      if (!email || !password) {
        return res.status(400).json({ message: "All fields are required" });
      }
      // find login user by email
      const loginUser = await User.findOne({ email });
      // User not found
      if (!loginUser) {
          return res.status(404).json({ message: "Email not found" });
        }
      // Password Check
      const passwordCheck = bcryptjs.compareSync(password, loginUser.password);
      // password not match
      if (!passwordCheck) {
        return res.status(404).json({ message: "Wrong password" });
      }
      // create access token
      const token = jwt.sign({ email: loginUser }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRED_IN
      });

      res.cookie("accessToken", token);
      res.status(200).json({
        token,
        user: loginUser
      });

    } catch (error) {
      console.log(error);
    }
}