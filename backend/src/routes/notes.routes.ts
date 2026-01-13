import { Router } from "express";
import { updateNote, createNote, getNotes, deleteNote } from "../controllers/notes.controller";

const router = Router();

router.get("/", getNotes);
router.post("/", createNote); 
router.patch("/:id", updateNote); 
router.delete("/:id", deleteNote);

export default router;