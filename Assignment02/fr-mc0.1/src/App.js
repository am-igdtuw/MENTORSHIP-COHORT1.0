import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Counter from './components/counter';
import Feed from './components/Feed';

function App() {
  return (
    <div>
        {/* <Counter /> */}
        <Feed />
    </div>
  );
}

export default App;

