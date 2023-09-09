import React, {Component} from 'react'

class App2 extends Component{

    constructor(){
      super();
      this.state={counter2:0}
    }
    inccounter(){
      this.setState({counter2:this.state.counter2+1})
    }
    deccounter(){
      this.setState({counter2:this.state.counter2-1})
    }
    render(){
      return(
        <div className="App">
          <h1>Counter using class component:</h1>
          <p>Note:When you will click the buttons the counter will increase or decrease respectively!</p>
          <h3>{this.state.counter2}</h3>
          <button onClick={()=>this.inccounter()} className="button1">Increase</button>
          <button onClick={()=>this.deccounter()} className="button2">Decrease</button>
  
  
        </div>
      )
    }
  }
  export default App2;