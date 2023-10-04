// db.js
import mongoose from "mongoose";

export async function connectDB() {
  try {
    await mongoose.connect('mongodb://localhost:27017/todo', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    

    console.log("Connected to the database");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
}
