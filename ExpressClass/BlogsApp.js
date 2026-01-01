import express from "express";
import route from "./Routers/blogRouter.js"
import blogLogger from "./Logging/BlogsLogger.js"
import mongoose from "mongoose";

const BlogApp = express();
mongoose.connect("mongodb://localhost:27017/Blogsdb")
.then((con)=> console.log("Connection successfull.", con.connection.host))
.catch((err) => console.log("Connection failed.". err.message))

BlogApp.use(express.json());

BlogApp.use(blogLogger);
BlogApp.use("/api/blogs", route);

BlogApp.listen(4000, ()=> console.log("Server is up."))