import { Router } from "express";

import authRouter from "./route.auth.js";
import booksRouter from "./route.books.js";
import categorieRouter from "./route.categories.js";
import swaggerRouter from "./route.swagger.js";

import isAuth from "../Middlewares/auth.js";

const router = Router();

router.use("/auth", authRouter);

router.use("/books", isAuth, booksRouter);

router.use("/categories", isAuth, categorieRouter);

router.use("/swagger", swaggerRouter);

export default router;
