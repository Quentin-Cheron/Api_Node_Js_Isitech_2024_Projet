import express from "express";

const router = express.Router();

import booksController from "../controllers/controller.books.js";

router.get("/", booksController.getBooks);

router.post("/", booksController.createBook);

router.delete("/:id", booksController.deleteBook);

router.put("/:id", booksController.updateBook);

export default router;
