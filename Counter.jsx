import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  return (
    <div className='funtional'>
      <h1>Counter App (Functional Component)</h1>
      <p>Count: {count}</p>
      <div className="button">
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
      </div>
    </div>
  );
}

export default Counter;
