import React, { Component } from 'react';
import './App.css'; 

class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decreaseCount = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  render() {
    return (
      <div className="counter-container">
        <div className='counter'>
        <h2>Class Counter</h2>
        <p>Count: {this.state.count}</p>
        <div className='btn-container'>
        <button onClick={this.increaseCount}>Increase</button>
        <button onClick={this.decreaseCount}>Decrease</button>
        </div>
        </div>
      </div>
    );
  }
}

export default ClassCounter;
