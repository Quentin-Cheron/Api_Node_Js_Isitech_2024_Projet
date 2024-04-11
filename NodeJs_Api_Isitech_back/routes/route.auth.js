import express from "express";
import { body } from "express-validator";

const router = express.Router();

import authController from "../controllers/controller.auth.js";

router.post(
  "/signin",
  body("email").isEmail().withMessage("Email is not valid"),
  body("password")
    .isLength({ min: 6 })
    .withMessage(
      "Password must contain at least 8 characters, including letters and numbers and special characters"
    )
    .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/),
  authController.signin
);
router.post(
  "/signup",
  body("email").isEmail().withMessage("Email is not valid"),
  body("password")
    .isLength({ min: 6 })
    .withMessage(
      "Password must contain at least 8 characters, including letters and numbers and special characters"
    )
    .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/),
  authController.signup
);

export default router;
