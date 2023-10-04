import React, {useState} from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const increaseCount = () =>{
        setCount(count + 1);
    };

    return(
        <div>
        <h1>Counter App</h1>
        <p>Count : {count}</p>
        <button onClick={increaseCount}>Update Count</button>
        </div>
    );
};

export default Counter;