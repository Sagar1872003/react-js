import React, { Component } from "react";
import "./CounterApp.css";

class CounterApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  decrement = () => {
    this.setState((prevState) => ({
      count: prevState.count > 0 ? prevState.count - 1 : 0,
    }));
  };

  reset = () => {
    this.setState({
      count: 0,
    });
  };

  render() {
    return (
      <div className="counter-container">
        <h1>Counter App</h1>
        <div className="counter-controls">
          <button onClick={this.increment}>+</button>
          <span className="count-display">{this.state.count}</span>
          <button onClick={this.decrement}>-</button>
        </div>
        <button className="reset-button" onClick={this.reset}>
          Reset
        </button>
      </div>
    );
  }
}

export default CounterApp;