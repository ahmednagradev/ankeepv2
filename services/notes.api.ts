import { Note } from "@/store/notesSlice";
import api from "./api";

export const fetchNotesAPI = async (): Promise<Note[]> => {
    const res = await api.get("/notes");
    return res.data;
}

export const createNoteAPI = async (data: { title: string, text: string }): Promise<Note> => {
    const res = await api.post("/notes", data);
    return res.data;
}

export const editNoteAPI = async (id: string, data: { title: string, text: string }): Promise<Note> => {
    const res = await api.patch(`/notes/${id}`, data);
    return res.data;
}

export const deleteNoteAPI = async (id: string): Promise<void> => {
    await api.delete(`/notes/${id}`);
}