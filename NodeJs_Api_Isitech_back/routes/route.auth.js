import express from "express";
import { body } from "express-validator";

const router = express.Router();

import authController from "../controllers/controller.auth.js";

router.post("/signin", authController.signin);
router.post("/signup", authController.signup);

export default router;
