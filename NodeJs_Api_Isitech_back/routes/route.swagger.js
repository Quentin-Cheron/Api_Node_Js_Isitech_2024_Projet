import express from "express";
import todo from "../todo.js";

const router = express.Router();

router.get("/", todo.getAll);
router.post("/", todo.create);
router.get("/:id", todo.getById);
router.put("/:id", todo.update);
router.delete("/:id", todo.delete);

export default router;
