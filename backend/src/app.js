import express from "express";
import noteRoutes from "./routes/notes.route.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

//routes
app.use("/api/notes", noteRoutes);

export default app;
