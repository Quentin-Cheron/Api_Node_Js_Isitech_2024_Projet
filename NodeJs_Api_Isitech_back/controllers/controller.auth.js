import User from "../models/model.user.js";

import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

// function to sign in a user

const signin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User doesn't exist" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { email: user.email, id: user._id },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    return res.status(200).json({ result: token });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// function to sign up a user

const signup = async (req, res) => {
  try {
    const { email, password, name, phoneNumber } = req.body;

    const existingUser = await User.findOne({ email, password });

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = await new User({
      email,
      password: hashedPassword,
      name,
      phoneNumber,
    });

    const result = await newUser.save();

    return res.status(201).json({ result });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export default { signin, signup };
