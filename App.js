import {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react'
import App1 from './functioncounter.jsx';
import App2 from './classcounter.jsx';


function App(){
  return(
    <div>
    <App1/>
    
    <App2/>
    <p className="para"><b>Conclusion:</b>Both looks the same but the code is different!</p>
    </div>

  )
}

export default App;
