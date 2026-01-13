import { Router } from "express";
import { createNote, getAllNotes } from "../controllers/notes.controller";

const router = Router();

router.get("/", getAllNotes);
router.post("/", createNote);

export default router;