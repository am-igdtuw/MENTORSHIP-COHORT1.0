import React, {useState} from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <>
        <div className="container">
            <h1>Let's count..</h1>
            <h3>Count: {count}</h3>
            <div className="btns">
                <button className='btn1' onClick={() => setCount(count+1)}>Update Count</button>
                <button className='btn1' onClick={() => setCount(0)}>Reset Counter</button>
            </div>
            
        </div>
        
        </>
    );
}

export default Counter;