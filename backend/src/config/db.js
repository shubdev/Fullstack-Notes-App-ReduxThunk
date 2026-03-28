import express from "express";
import mongoose from "mongoose";

const app = express();

app.use(express.json());

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/noteapp", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

connectDB();

export default app;

/* 



*/