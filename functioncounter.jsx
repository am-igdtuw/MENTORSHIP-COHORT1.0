import {useState} from 'react'
function App1(){
    const [counter1,setcounter]=useState(0) //state is defined here,name of state is counter1 
  
  
    function updatecounter(){   //counter1 code using functional component
      setcounter(counter1+1)
    }
    function decreasecounter(){
      setcounter(counter1-1)
      
    }
  
    return (
      <div className="App">
        <h1>Counter using functional component:</h1>
        <p>Note:When you will click the buttons the counter will increase or decrease respectively!</p>
        <h3>{counter1}</h3>
        <button onClick={updatecounter} className="button1">Increase</button>
        <button onClick={decreasecounter} className="button2">Decrease</button>
        
      </div>
     
    );

}
export default App1;