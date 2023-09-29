import express from "express";
import { getTodo, saveTodo, updateTodo, deleteTodo} from "../services/todoService.js";

const router = express.Router();

router.get("/", getTodo);
router.post("/save", saveTodo);
router.put("/update", updateTodo);
router.delete("/delete", deleteTodo);

export default router;