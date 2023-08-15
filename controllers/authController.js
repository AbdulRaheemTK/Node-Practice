import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../config/generateToken.js";
import throwError from "../config/throwError.js";

//@description     Signup
//@route           POST /api/auth/signup
//@access          Public
const signup = asyncHandler(async (req, res, next) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.status(400);
    throwError("Please provide all required fields");
  }

  try {
    const user = await User.create({
      username,
      email: email.toLowerCase(),
      password,
    });

    res.status(201).json({
      _id: user._id,
      username: user.username,
      email: user.email,
    });
  } catch (error) {
    if (error.code === 11000 && error.keyPattern.username === 1) {
      res.status(409);
      throwError(
        "Username already exists. Please choose a different username."
      );
    } else if (error.code === 11000 && error.keyPattern.email === 1) {
      throwError("Email already exists. Please choose a different email.");
    } else {
      res.status(500);
      throwError("User creation failed");
    }
  }
});

//@description     Signup
//@route           POST /api/auth/login
//@access          Public
const login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throwError("Please provide all required fields");
  }

  const user = await User.findOne({ email: email.toLowerCase() });

  if (!user) {
    res.status(401);
    throwError("User with this email address doesn't exists!");
  }

  const isValidPassword = await user.isValidPassword(password);
  if (!isValidPassword) {
    res.status(401);
    throwError("Invalid User Password!");
  } else {
    const userData = {
      _id: user._id,
      username: user.username,
      email: user.email,
      token: generateToken(user._id),
    };
    res.status(200).json(userData);
  }
});

export { login, signup };
