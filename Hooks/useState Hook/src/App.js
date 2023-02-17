import "./App.css";
import React, { useState } from "react";

function App() {
  const [value, setValue] = useState(0);

  const increaseValue = (event) => {
    event.preventDefault();
    setValue(value + 1);
  };

  const decreaseValue = (event) => {
    event.preventDefault();
    setValue(value - 1);
  };

  return (
    <div className="App">
      <p>
        <button onClick={increaseValue}>+</button>
      </p>
      <p>{value}</p>
      <p>
        <button onClick={decreaseValue}>-</button>
      </p>
    </div>
  );
}

export default App;
