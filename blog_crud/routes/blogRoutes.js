import express from "express";

import {
  getAllBlogs,
  replaceBlog,
  updateBlog,
  addBlog,
} from "../controllers/blogController.js";

const router = express.Router();

router.get("/blogs", getAllBlogs);
router.post("/blogs", addBlog);
router.put("/blogs/:id", updateBlog);

router.patch("/blogs/:id", replaceBlog);

export default router;
