import { TodoModel } from "../models/todoModel.js";

export async function getTodo(req,res) {
    try {
        const todos = await TodoModel.find();
        return res.status(200).json(todos);
    } catch (err) {
        console.error(err);
        return res.status(500).json({message: "Error Occurred" });
    }
}

export async function saveTodo(req,res) {
    try {
        const task = req.body;
        const todos = await TodoModel.create({task});
        return res.status(201).json({ message: "Saved successfully" });
    } catch (err) {
        console.error(err);
        return res.status(500).json({message: "Error Occurred" });
    }
}

export async function updateTodo(req,res) {
    try {
        const {_id, task} = req.body;
        const updatedTodo = await TodoModel.findByIdAndUpdate(_id, {task});
        return res.status(200).json({ message: "Updated successfully" });
    } catch (err) {
        console.error(err);
        return res.status(500).json({message: "Error Occurred" });
    }
}

export async function deleteTodo(req,res) {
    try {
        const {_id} = req.body;
        const deletedTodo = await TodoModel.findByIdAndDelete(_id);
        console.log(deletedTodo);
        return res.status(201).json({ message: "Deleted successfully" });
    } catch (err) {
        console.error(err);
        return res.status(500).json({message: "Error Occurred" });
    }
}