import { useEffect, useState } from "react";
import Todo from "./components/todoComponent.js";
import { addTODOS, deleteTODOS, fetchTODOS, updateTODOS } from "./utils/HandleApi.js";


function App() {
  const [todo, setTodo] = useState([]);
  const [task, setTask] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [todoId, setTodoId] = useState("");

  useEffect(() => {
    fetchTODOS(setTodo);
  }, []);

  console.log(todo);

  const updateMode=(_id,task)=>{
    setIsUpdating(true);
    setTask(task);
    setTodoId(_id);
  }

  return (
    <div className="App">
      <div className="container">
        <h1>ToDo App</h1>
        <div className="top">
          <input
            type="text"
            placeholder="Add Todos"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <div
            className="add"
            onClick={
              isUpdating
                ? () =>
                    updateTODOS(todoId, task, setTodo, setTask, setIsUpdating)
                : () => addTODOS(task, setTask, setTodo)
            }
          >
            {isUpdating ? "Update" : "Add"}
          </div>
        </div>
        <div className="list">
          {todo.map((item) => 
            <Todo key={item._id} text={item.task} updateMode={()=>updateMode(item._id,item.task)} deleteMode={()=>deleteTODOS(item._id, setTodo)} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;



// 