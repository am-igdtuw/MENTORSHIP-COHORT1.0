import mongoose from "mongoose";

const MONGODB_URL="mongodb+srv://root:root@cluster0.bo5wyqz.mongodb.net/TodoApp?retryWrites=true&w=majority"

export async function connectDB(){
    try{
        await mongoose.connect(MONGODB_URL);
        console.log("connected to MongoDB");
    }
    catch(err){
        console.log(err);
    }
}