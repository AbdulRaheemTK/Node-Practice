import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();
const app = express();

// Middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

//Error Middleware
app.use((error, req, res, next) => {
  res.json({
    errorMessage: error.message,
    statusCode: res.statusCode,
  });
});

// Server Connection
const { PORT } = process.env;
app.listen(PORT || 5000, () => {
  connectDB();
  console.log(`Server Started Listening at PORT:${PORT}`);
});
