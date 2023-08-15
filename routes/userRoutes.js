import { Router } from "express";
import { getUsers, scheduleEmailJobs } from "../controllers/userController.js";
import protect from "../middlewares/authMiddleware.js";

const router = Router();

//@description     Get all users
//@route           Get /api/users/getUsers
//@access          Private
router.get("/getUsers", getUsers);

//@description     Schedule's Email to be sent at later point in time
//@route           Get /api/users/scheduleEmailJob
//@access          Private
router.post("/scheduleEmailJob", protect, scheduleEmailJobs);

export default router;
