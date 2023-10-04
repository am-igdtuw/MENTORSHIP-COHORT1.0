import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    task:{
        type: String,
        required: true,
    },
});

export const TodoModel = mongoose.model("Todo", todoSchema);

// export default TodoModel;