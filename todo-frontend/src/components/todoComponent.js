import React from 'react';
import {BiEdit} from "react-icons/bi"; 
import {AiFillDelete} from "react-icons/ai"; 

const Todo=({text, updateMode, deleteMode})=>{
    return(
    <div className="todo">
        <div className="text">{text}</div>
        <div className="icons">
            <BiEdit className='icon' onClick={updateMode} />
            <AiFillDelete className="icon" onClick={deleteMode} />
        </div>
    </div>
    )
}

export default Todo;