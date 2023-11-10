import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import todoRoute from "./routes/todoRoute.js";
import { connectDB } from "./db/db.js";

const app=express()
const PORT=process.env.port || 5000

app.use(express.json());
app.use(cors());



connectDB();

app.use(todoRoute);

app.listen(PORT,()=>console.log(`listening on port ${PORT}`))



