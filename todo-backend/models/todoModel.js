
import mongoose,{Schema} from "mongoose";

const todoSchema=new mongoose.Schema({
    task:{
        type:String,
        required:true
    }
})

export const TodoModel=mongoose.model('todos',todoSchema)