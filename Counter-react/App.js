import {useState} from "react";
import './App.css'; 

function Counter(){
  let [count,setCount]=useState(0);
  
  const handleDecrement= ()=>{
    setCount(count - 1)
  }
  const handleIncrement= ()=>{
    setCount(count + 1)
  }
  const handleReset= ()=>{
    setCount(count = 0)
  }
  
  return (
    <div className="counter-container">
      <h2 className="counter-title">Counter</h2>
      <div className="counter-box">
      <div className="count">{count}</div>
      <div className="button-container">
        <button className="decrement-button" onClick={handleDecrement}>
          Decrement
        </button>
        <button className="reset-button" onClick={handleReset}>
          Reset
        </button>
        <button className="increment-button" onClick={handleIncrement}>
          Increment
        </button>
      </div>
    </div>
    </div>
  )
  
}

export default Counter;
