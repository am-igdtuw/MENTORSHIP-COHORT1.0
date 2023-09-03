import React from 'react';
import './App.css';
import CounterFunctional from './CounterFunctional';
import CounterClass from './CounterClass';

function App() {
  return (
    <div className="App">
      <CounterFunctional />
      <CounterClass />
    </div>
  );
}

export default App;
