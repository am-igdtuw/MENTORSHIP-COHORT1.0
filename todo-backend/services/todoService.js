import {TodoModel} from "../models/todoModel.js";

export async function getTodo(req,res,next){
    try{
        const todos=await TodoModel.find();

        return res.status(200).json(todos);
    }
    catch(err){
        console.log(err);
        return res.status(201).json({message: "error occured"});
    }
}

export async function saveTodo(req,res,next){
    try{
        const {task}=req.body;

        const todo=await TodoModel.create({task});

        return res.status(200).json({message:"saved successfully"})
    }
    catch(err){
        console.log(err);
        return res.status(201).json({message: "error occured"});
    }
}

export async function updateTodo(req,res,next){
    try{
        const {_id,task}=req.body;
        
        const updatedTodo=await TodoModel.findByIdAndUpdate(_id,{task});

        return res.status(200).json({message: "updated successfully"});
    }
    catch(err){
        console.log(err);
        return res.status(201).json({message: "error occured"});
    }
}

export async function deleteTodo(req,res,next){
    try{
        const id=req.body;

        const deletedTodo=await TodoModel.findByIdAndDelete(id);

        console.log(deletedTodo);
        return res.status(200).json({message: "deleted successfully"});
    }
    catch(err){
        console.log(err);
        return res.status(201).json({message: "error occured"});
    }
}

export const todoService={
    getTodo,
    deleteTodo,
    updateTodo,
    saveTodo
}



// export const getTodo=async(req,res,next)=>{
//     const todo=await TodoModel.find();
//     res.send(todo);
// }

// export const saveTodo=async(req,res,next)=>{

//     const {text}=req.body;
//     TodoModel.create({text}).then((data)=>{
//         console.log("added successfully");
//         console.log(data);
//         res.send(data);
//     })
// }

// export const updateTodo=async(req,res,next)=>{
//     const {_id,text}=req.body;
//     TodoModel.findByIdAndUpdate(_id,{text}).then(()=> res.send("updated sucessfully")).catch((err)=>console.log(err))
// }

// export const deleteTodo=async(req,res,next)=>{
//     const {_id}=req.body;
//     TodoModel.findByIdAndDelete(_id).then(()=> res.send("deleted succesfully")).catch((err)=>console.lgo(err))

// }