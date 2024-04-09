// Import the mongoose module
import mongoose from "mongoose";
import dotenv from "dotenv";

const db = mongoose.connection;

// Get the default connection

dotenv.config();
mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("Connected to MongoDB");
});

//Bind connection to error event (to get notification of connection errors)
// eslint-disable-next-line no-console
db.on("error", console.error.bind(console, "MongoDB connection error:"));
