import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

// Middleware
import isAuth from "./Middlewares/auth.js";
// Express configuration

dotenv.config();
const app = express();

const corsOptions = {
  origin: process.env.CLIENT_URL,
};

app.use(cors(corsOptions));
app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Database connection
import "./config/mongodb.js";

// Routes

import booksRoutes from "./routes/route.books.js";
import categoriesRoutes from "./routes/route.categories.js";
import authRoutes from "./routes/route.auth.js";

app.use("/books", booksRoutes);
app.use("/categories", isAuth, categoriesRoutes);
app.use("/auth", authRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
