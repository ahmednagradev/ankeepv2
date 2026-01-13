import express from "express";
import notesRoutes from "./routes/notes.routes";

/**
 * const app = express();
 * Creates an express application instance
 * This "app" is core of our backend
 */
const app = express();

/**
 * app.use(express.json());
 * Every incoming request passes through this middleware
 * If request has JSON body → parsed into req.body
 */
app.use(express.json());

// Mount routes
app.use("/notes", notesRoutes);

export default app;