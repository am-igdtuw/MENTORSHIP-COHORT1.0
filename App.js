import React, { useState } from 'react';
function FunctionalCounter() {
  const [count, update] = useState(0);

  const increase = () => {
    update(count + 1);
  };

  const decrease = () => {
    update(count - 1);
  };

  const reset = () => {
    update(0);
  };

  return (
    <div>
      <h1>Task 1</h1>
      <h2>Counter using functional component</h2>
      <p><h3>Count: {count}</h3></p>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default FunctionalCounter;
