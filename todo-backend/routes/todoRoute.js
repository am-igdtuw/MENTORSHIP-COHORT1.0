import express from "express";

import { todoService } from "../services/todoService.js";

const router=express.Router();

router.get('/',(req,res,next)=>{
    return todoService.getTodo(req,res,next);
    // return res.status(200).json({message: "welcome to todos api..."})
});
router.post('/save',(req,res,next)=>{
    return todoService.saveTodo(req,res,next);
});
router.post('/delete',(req,res,next)=>{
    return todoService.deleteTodo(req,res,next);
});
router.post('/update',(req,res,next)=>{
    return todoService.updateTodo(req,res,next);
});

export default router;