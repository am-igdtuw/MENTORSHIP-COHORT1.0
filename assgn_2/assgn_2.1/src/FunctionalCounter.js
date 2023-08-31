import React, { useState } from 'react';
import './App.css'; 

function FunctionalCounter() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="counter-container">
        <div className='counter'>
      <h2>Functional Counter</h2>
      <p>Count: {count}</p>
      <div className='btn-container'>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
      </div>
      </div>
    </div>
  );
}

export default FunctionalCounter;
