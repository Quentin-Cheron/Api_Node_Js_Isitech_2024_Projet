import express from "express";
import { body } from "express-validator";

const router = express.Router();

import authController from "../controllers/controller.auth.js";

router.post(
  "/signin",
  body("email").isEmail().withMessage("Invalid email"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    ),
  authController.signin
);
router.post("/signup", authController.signup);

export default router;
