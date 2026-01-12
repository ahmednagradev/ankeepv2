import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Note = {
    id: string;
    title: string;
    text: string;
    imageUrl?: string;
    createdAt: number;
    editedAt?: number;
    pinnedAt?: number;
    archivedAt?: number;
    deletedAt?: number;
    status: "active" | "pinned" | "archived" | "deleted";
}

type NotesState = {
    notes: Note[];
}

const initialState: NotesState = {
    notes: []
}

const notesSlice = createSlice({
    name: "notes",
    initialState,
    reducers: {
        addNote: (state, action: PayloadAction<{ title: string, text: string }>) => {
            state.notes.push({
                ...action.payload,
                id: Date.now().toString(),
                createdAt: Date.now(),
                status: "active",
            })
        },

        editNote: (state, action: PayloadAction<{ id: string, title: string, text: string }>) => {
            const note = state.notes.find(n => n.id === action.payload.id)
            if (!note) return;
            note.title = action.payload.title;
            note.text = action.payload.text;
            note.editedAt = Date.now();
        },

        pinNote: (state, action: PayloadAction<{ id: string }>) => {
            const note = state.notes.find(n => n.id === action.payload.id)
            if (!note) return;
            note.status = "pinned";
            note.pinnedAt = Date.now();
        },

        archiveNote: (state, action: PayloadAction<{ id: string }>) => {
            const note = state.notes.find(n => n.id === action.payload.id)
            if (!note) return;
            note.status = "archived";
            note.archivedAt = Date.now();
        },

        deleteNote: (state, action: PayloadAction<{ id: string }>) => {
            const note = state.notes.find(n => n.id === action.payload.id)
            if (!note) return;
            note.status = "deleted";
            note.deletedAt = Date.now();
        },

        activateNote: (state, action: PayloadAction<{ id: string }>) => {
            const note = state.notes.find(n => n.id === action.payload.id)
            if (!note) return;
            note.status = "active";
            note.pinnedAt = 0;
            note.archivedAt = 0;
            note.deletedAt = 0;
        },

        deleteNotePermanently: (state, action: PayloadAction<{ id: string }>) => {
            state.notes = state.notes.filter(n => n.id !== action.payload.id)
        },
    }
})

export const { addNote, editNote, pinNote, archiveNote, deleteNote, activateNote, deleteNotePermanently } = notesSlice.actions;
export default notesSlice.reducer;