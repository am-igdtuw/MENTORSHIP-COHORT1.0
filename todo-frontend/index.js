import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import todoRoute from "./routes/todoRoute.js";

const app=express()
const PORT=process.env.port || 3000

app.use(express.json());
app.use(cors());

const MONGODB_URL="mongodb+srv://root:root@cluster0.bo5wyqz.mongodb.net/TodoApp?retryWrites=true&w=majority"

mongoose.connect(MONGODB_URL).then(()=>console.log(`connected to MongoDB`)).catch((err)=>console.log(err))

app.use(todoRoute);

app.listen(PORT,()=>console.log(`listening on port ${PORT}`))



