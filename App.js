import React from 'react';
import './App.css';
import Counter from './pages/Counter';
import ClassCounter from './pages/ClassCounter';
import Form from './pages/Form';

function App() {
  return (
    <>
    <div className="App">
      <Counter />
      <ClassCounter/>
    </div>
    <div className="formdata">
      <Form/>
    </div>
    </>
  );
}

export default App;
