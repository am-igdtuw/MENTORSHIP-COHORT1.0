import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import todoRoute from "./routes/todoRoutes.js";
import { connectDB } from "./db.js";

const app = express();
const PORT = 3000;


app.use(express.json());
app.use(cors());

connectDB();

app.use("/todos", todoRoute);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
