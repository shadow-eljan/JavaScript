import express from "express";
import {getBlogs, addBlogs, updateBlogs, deleteBlogs} from "../Controller/BlogController.js"

const route = express.Router();

route.get("/", getBlogs);
route.post("/", addBlogs);
route.put("/:id", updateBlogs);
route.delete("/:id", deleteBlogs);

export default route;