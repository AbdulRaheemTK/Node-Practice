import { Schema, model } from "mongoose";
import pkg from "bcryptjs";
const { hash, compare } = pkg;

const scheduledEmailJobSchema = new Schema({
  job: { type: Schema.Types.Mixed },
  scheduledAt: { type: Date },
  emailSent: { type: Boolean, default: false },
});

const userModel = new Schema({
  username: {
    type: String,
    required: [true, "Username is required."],
  },
  email: {
    type: String,
    required: [true, "Email is required."],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required."],
  },
  scheduledEmailJobs: [scheduledEmailJobSchema],
});

userModel.pre("save", async function (next) {
  const user = this;
  const hashedPassword = await hash(this.password, 10);

  this.password = hashedPassword;
  next();
});

userModel.methods.isValidPassword = async function (password) {
  const user = this;
  const validated = await compare(password, user.password);
  return validated;
};

const User = model("User", userModel);

export default User;
