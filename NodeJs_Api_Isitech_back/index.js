import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();

// Database connection

import "./config/mongodb.js";

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
