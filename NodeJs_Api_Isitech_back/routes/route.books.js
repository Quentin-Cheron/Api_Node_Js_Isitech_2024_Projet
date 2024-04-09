import express from "express";

const router = express.Router();

import booksController from "../controllers/controller.books.js";

router.get("/", booksController.getBooks);

export default router;
