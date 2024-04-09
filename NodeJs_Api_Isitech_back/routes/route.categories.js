import express from "express";

const router = express.Router();

import categoriesController from "../controllers/controller.categories.js";

router.get("/", categoriesController.getCategories);

export default router;
