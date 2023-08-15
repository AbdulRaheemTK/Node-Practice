import pkg from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import throwError from "../config/throwError.js";

const { verify } = pkg;

const protect = asyncHandler(async (req, res, next) => {
  let token;

  try {
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ");
      let decoded = verify(token[1], process.env.JWT_SECRET);

      req.user = await User.findById(decoded._id).select("-password");

      next();
    }
  } catch (error) {
    res.status(401);
    throwError("Token authorization Failed!");
  }

  if (!token) {
    res.status(401);
    throwError("Token authorization Failed!: Token not found");
  }
});

export default protect;
