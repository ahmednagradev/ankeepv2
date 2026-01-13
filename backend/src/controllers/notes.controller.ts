import { Request, Response } from "express";

export const getAllNotes = (req: Request, res: Response) => {
    res.status(200).json({
        success: true,
        message: "Notes are ready",
        data: [],
    })
}

export const createNote = (req: Request, res: Response) => {
    const { title, text } = req.body;
    if (!title?.trim() || !text?.trim()) {
        return res.status(400).json({
            success: false,
            message: "Invalid input data",
        })
    }
    return res.status(201).json({
        success: true,
        message: "Note created successfully",
        data: {
            title,
            text,
        }
    })
}