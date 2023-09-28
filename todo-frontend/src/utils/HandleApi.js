import axios from "axios"

const baseUrl="http://localhost:5000"

const fetchTODOS=(setTodo)=>{
    axios.get(`${baseUrl}/`).then(({data})=>{
        console.log('data.......',data);
        setTodo(data)
    })
}

const addTODOS=(text, setText, setTodo)=>{
    axios
    .post(`${baseUrl}/save`, {text})
    .then((data)=> {
        console.log(data);
        setText("")
        fetchTODOS(setTodo)
    })
    .catch((err)=>console.log(err))
}

const updateTODOS=(todoId, text, setTodo, setText, setIsUpdating)=>{
    axios
    .post(`${baseUrl}/update`, {_id:todoId,text})
    .then((data)=> {
        
        setText("")
        setIsUpdating(false)
        fetchTODOS(setTodo)
    })
    .catch((err)=>console.log(err))
}

const deleteTODOS=(_id, setTodo)=>{
    axios
    .post(`${baseUrl}/delete`, {_id})
    .then((data)=> {
        
        fetchTODOS(setTodo)
    })
    .catch((err)=>console.log(err))
}



export {fetchTODOS, deleteTODOS, updateTODOS, addTODOS}
