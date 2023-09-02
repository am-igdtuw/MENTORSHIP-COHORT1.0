import "./App.css";
import { React, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <button
        onClick={() => {
          setCount((count) => count - 1);
          if (count <= 0) {
            setCount((count) => 0);
          }
        }}
      >
        -
      </button>
      <span>Count: {count}</span>
      <button
        onClick={() => {
          setCount((count) => count + 1);
          console.log(count);
        }}
      >
        +
      </button>
    </div>
  );
}

export default App;
