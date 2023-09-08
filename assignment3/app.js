// Create a counter using ReactJS, the counter app should able to increase and decrease count, creat this application using class component.
import React, { Component } from 'react';

class Counter extends Component {
  constructor() {
    super();
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
      <div className='container my-5'>
        <div className='card text-center my-5'>
          <div className='card-body'>
          <h1> Counter App</h1>
        <h1>Class Counter</h1>
        <p>Count: {this.state.count}</p>
        <button className='btn btn-success mx-3' onClick={this.increaseCount}>Increase</button>
        <button className='btn btn-danger mx-3'onClick={this.decreaseCount}>Decrease</button>
      </div>
      </div>
      </div>
    );
  }
}

export default Counter;
