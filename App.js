import React from 'react';
import Counter from './Counter';
import ImageBox from './ImageBox';
import './App.css';


function App() {
  return (
    <>
    <div className="blank">
      <Counter />
    </div>

    <div className="imageBox">
      <ImageBox />
    </div>
    </>
  );
}

export default App;
