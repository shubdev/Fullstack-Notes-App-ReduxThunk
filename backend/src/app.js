import express from "express";
import noteRoutes from "./routes/notes.route.js";

const app = express();

app.use(express.json());

//routes  
app.use("/api/notes", noteRoutes);

export default app;
