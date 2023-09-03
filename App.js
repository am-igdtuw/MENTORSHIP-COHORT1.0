import React from 'react';
import Counter from './Counter';
import ImageBox from './ImageBox';
import Form from './form';
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

    <div className="form">
      <Form />
    </div>
    </>
  );
}

export default App;
