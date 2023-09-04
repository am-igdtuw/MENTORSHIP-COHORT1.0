import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Counter from './components/counter';
import Feed from './components/Feed';
import FunctionCounter  from './components/FunctionalCounter.js';
import ClassComponent from './components/ClassComponent.js';
import FormExample from './components/Form.js';

function App() {
  return (
    <div>
        {/* <Counter /> */}
        {/* <Feed /> */}
        {/* <FunctionCounter /> */}
        {/* <ClassComponent /> */}
        <FormExample />
    </div>
  );
}

export default App;

