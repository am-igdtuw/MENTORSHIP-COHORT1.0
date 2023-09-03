import './Form.js'
import React from 'react';
import './App.css'; // Import your CSS file or add styles here if needed
import Form from './Form'; // Import your Form component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Student Information Form</h1>
      </header>
      <main>
        <Form />
      </main>
    </div>
  );
}

export default App;
