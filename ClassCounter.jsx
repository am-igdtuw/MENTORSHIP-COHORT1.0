import React, { Component } from 'react';

class ClassCounter extends Component {
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
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div className='funtional'>
        <h1>Counter App (Class Component)</h1>
        <p>Count: {this.state.count}</p>
        <div className="button">
        <button onClick={this.increaseCount}>Increase</button>
        <button onClick={this.decreaseCount}>Decrease</button>
        </div>
      </div>
    );
  }
}

export default ClassCounter;
