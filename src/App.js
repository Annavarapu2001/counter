import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const incrementBy5 = () => setCount(prev => prev + 5);
  const reset = () => setCount(0);

  return (
    <div className="container">
      <div className="scorecard">{count}</div>

      <div className="controls">
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
        <button onClick={incrementBy5}>+5</button>
        <button onClick={reset}>Reset</button>
      </div>

      <div className="footer">
        <p>Made with ❤️ by Akash</p>
      </div>
    </div>
  );
}

export default App;
