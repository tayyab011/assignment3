import express from "express";
const router = express.Router();
import * as blogController from "../app/controllers/blogController.js";

// Create Route
router.post("/create-blog", blogController.createTask);

// Read Route
router.get("/read-blog", blogController.readTask);

// Update Route
router.put("/update-blog", blogController.updateTask);

// Delete Route
router.delete("/delete-blog", blogController.deleteTask);

export default router;
