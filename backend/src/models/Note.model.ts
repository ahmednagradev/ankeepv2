import mongoose, { Schema, Document } from "mongoose";

export interface INote extends Document {
    title: string;
    text: string;
    status: "active" | "pinned" | "archived" | "deleted";
    pinnedAt?: number;
    archivedAt?: number;
    deletedAt?: number;
    editedAt?: number;
    createdAt: number;
}

const NoteSchema = new Schema<INote>({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    text: {
        type: String,
        required: true,
        trim: true,
    },
    status: {
        type: String,
        enum: ["active", "pinned", "archived", "deleted"],
        default: "active",
    },
    pinnedAt: {
        type: Number,
        default: 0,
    },
    archivedAt: {
        type: Number,
        default: 0,
    },
    deletedAt: {
        type: Number,
        default: 0,
    },
    editedAt: {
        type: Number,
    },
    createdAt: {
        type: Number,
        default: () => Date.now(),
    },
});

export default mongoose.model<INote>("Note", NoteSchema);
