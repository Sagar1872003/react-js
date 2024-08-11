import React, { useState } from "react";
import "./CounterApp.css";

function CounterApp() {
  const [count, setCount] = useState(10);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count > 0 ? count - 1 : 0);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter-container">
      <h1>Counter App</h1>
      <div className="count-display">{count}</div>
      <div className="counter-controls">
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>0</button>
      </div>
    </div>
  );
}

export default CounterApp;
