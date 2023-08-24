import React from 'react';

class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }

    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 });
    };
    
    handleReset = () => {
        this.setState({ count: 0 });
    };
  
    render() {
      return (
        <div>
        <h1>Counter Demo</h1>
        <p>Count is {this.state.count}</p>
        <button onClick={this.handleIncrement}>Increment Count</button>
        <button onClick={this.handleReset}>Reset Count</button>
      </div>
      );
    }
  }
  

export default Counter;
