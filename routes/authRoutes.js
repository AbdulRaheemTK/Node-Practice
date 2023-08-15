import { Router } from "express";
import { login, signup } from "../controllers/authController.js";

const router = Router();

//@description     Signup
//@route           POST /api/auth/signup
//@access          Public
router.post("/signup", signup);

//@description     Login
//@route           POST /api/auth/login
//@access          Public
router.post("/login", login);

export default router;
