import React from 'react'

function counterfunct() {
    [counter,setcounter]=usestate(0);
    const inc=()=>{
      setcounter(counter+1);
    }
    const dec=()=>{
        setcounter(counter-1);
    }
  return (
    <div>
        <h1 style="color:blue">COUNTER(using functional component)</h1>
        <button onClick={inc}>Increment</button>
        <button onClick={dec}>Decrement</button>
    </div>
  )
}

export default counterfunct