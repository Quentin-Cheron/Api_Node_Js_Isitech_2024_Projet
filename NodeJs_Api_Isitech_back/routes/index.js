import { Router } from "express";

import authRouter from "./route.auth.js";
import booksRouter from "./route.books.js";
import categorieRouter from "./route.categories.js";

import isAuth from "../middlewares/auth.js";

const router = Router();

router.use("/auth", isAuth, authRouter);

router.use("/books", isAuth, booksRouter);

router.use("/categories", categorieRouter);

export default router;
