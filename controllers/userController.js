import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import throwError from "../config/throwError.js";
import nodemailer from "nodemailer";
import schedule from "node-schedule";

//@description     Get all users
//@route           Get /api/users/getUsers
//@access          Private
const getUsers = asyncHandler(async (req, res, next) => {
  try {
    const users = await User.find().select("-password");
    res.status(200).json(users);
  } catch (error) {
    res.status(500);
    throwError(error.message);
  }
});

//@description     Schedule's Email to be sent at later point in time
//@route           Get /api/users/scheduleEmailJobs
//@access          Private
const scheduleEmailJobs = asyncHandler(async (req, res, next) => {
  try {
    const { selectedUserIds, selectedTime } = req.body;
    const senderUserData = req.user;

    // Calculating time to delay the email
    const [selectedHours, selectedMinutes] = selectedTime.split(":");
    const selectedDate = new Date();
    selectedDate.setHours(selectedHours, selectedMinutes, 0, 0);
    const currentTime = new Date();
    const delayInMillis = selectedDate - currentTime;

    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAILID,
        pass: process.env.EMAILPASSKEY,
      },
    });

    // Schedule email jobs for selected users
    const scheduledEmailJobs = [...senderUserData.scheduledEmailJobs];
    const emailJobPromises = [];

    // Schedule email jobs for selected users
    const selectedUsers = await User.find({ _id: { $in: selectedUserIds } });

    for (const user of selectedUsers) {
      const emailJobPromise = new Promise(async (resolve, reject) => {
        try {
          const emailJob = schedule.scheduleJob(
            new Date(Date.now() + delayInMillis),
            async () => {
              try {
                await transporter.sendMail({
                  to: user.email,
                  subject: "Scheduled Email",
                  text: `This is a scheduled email by ${senderUserData.username}`,
                });

                const updatedJobIndex = scheduledEmailJobs.findIndex(
                  (job) => job.job === emailJob.name
                );

                if (updatedJobIndex !== -1) {
                  scheduledEmailJobs[updatedJobIndex].emailSent = true;
                  await User.findByIdAndUpdate(senderUserData._id, {
                    $set: { scheduledEmailJobs: scheduledEmailJobs },
                  });
                }
                resolve();
              } catch (error) {
                console.error("Error sending email:", error);
                reject(error);
              }
            }
          );

          // Update the job data in senderUserData's scheduledEmailJobs array
          scheduledEmailJobs.push({
            job: emailJob.name, // Save the job's name for reference
            scheduledAt: new Date(Date.now() + delayInMillis),
            emailSent: false,
          });

          resolve();
        } catch (error) {
          console.error("Error scheduling email job:", error);
          reject(error);
        }
      });
      emailJobPromises.push(emailJobPromise);
    }

    // Wait for all email job promises to complete
    await Promise.all(emailJobPromises);
    // Save senderUserData once after all jobs are scheduled
    await User.findByIdAndUpdate(senderUserData._id, {
      $set: { scheduledEmailJobs: scheduledEmailJobs },
    });

    res.status(200).json({ message: "Emails scheduled successfully." });
  } catch (error) {
    console.error("Error scheduling emails:", error);
    res.status(500).json({ error: "Error scheduling emails." });
  }
});

export { getUsers, scheduleEmailJobs };
