import { NextFunction, Request, Response } from "express";
import NoteModel from "../models/Note.model";

export const getNotes = async (req: Request, res: Response) => {
    const notes = await NoteModel.find().sort({ createdAt: -1 });
    res.json(notes);
}

export const createNote = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { title, text } = req.body;
        if (!title.trim() || !text.trim) {
            return res.status(400).json({
                message: "Invalid input data",
            })
        }

        const note = await NoteModel.create({
            title: title.trim(),
            text: text.trim(),
            status: "active",
            createdAt: Date.now(),
        });

        return res.status(201).json(note);
    } catch (error) {
        next(error);
    }
}

export const updateNote = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { title, text, status } = req.body;

        const note = await NoteModel.findById(id);

        if (!note) {
            return res.status(404).json({
                message: "Note not found",
            })
        }

        if (title !== undefined) note.title = title.trim();
        if (text !== undefined) note.text = text.trim();

        const allowedStatuses = ["active", "pinned", "archived", "deleted"];

        if (status !== undefined) {
            if (!allowedStatuses.includes(status)) {
                return res.status(400).json({
                    message: "Invalid status value",
                })
            }
            note.status = status;

            if (status === "pinned") note.pinnedAt = Date.now();
            if (status === "archived") note.archivedAt = Date.now();
            if (status === "deleted") note.deletedAt = Date.now();
            if (status === "active") {
                note.pinnedAt = undefined;
                note.archivedAt = undefined;
                note.deletedAt = undefined;
            }
        }

        note.editedAt = Date.now();

        await note.save();
        return res.json(note);
    } catch (error) {

        return res.status(500).json({
            message: "Failed to update note",
        });
    }
}

export const deleteNote = (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const note = NoteModel.findByIdAndDelete(id);

        if (!note) {
            return res.status(404).json({
                message: "Note not found"
            })
        }

        return res.json({
            message: "Note permanently deleted"
        });
    } catch (error) {
        return res.status(500).json({
            message: "Failed to delete note"
        })
    }
}