import React, { Component } from 'react'

export class countcomp extends Component {
    constructor(){
        super();
        this.state={
            count:0
        }
    }
    inc=()=>{
        this.setState({count: this.state.count + 1})
    }
    dec=()=>{
        this.setState({count: this.state.count - 1})
    }
  render() {
    return (
      <div>
        <h1>Counter(Classcomponenet)</h1>
        <button onClick={inc}>Increment</button>
        <button onClick={dec}>Decrement</button>
      </div>
    )
  }
}

export default countcomp