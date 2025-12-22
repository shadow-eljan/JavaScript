import express from "express";
import { getNotes , addNotes, updateNotes, deleteNotes} from "./Controller/NoteController.js";
import router from "./Routers/noteRoutes.js";
import logger from "./Logging/Logger.js";

const app = express();
app.use(express.json());

app.use(logger);
app.use("/api/notes", router)
 
app.listen(3000, ()=> console.log("Server is up and running."))