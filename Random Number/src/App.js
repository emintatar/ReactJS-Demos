import React, { useState } from "react";
import "./App.css";

function App() {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);
  const [randomNumber, setRandomNumber] = useState(0);

  const updateMin = (e) => {
    setMin(e.target.value);
  };

  const updateMax = (e) => {
    setMax(e.target.value);
  };

  const createRandomNumber = () => {
    const minNumber = parseInt(min);
    const maxNumber = parseInt(max);
    const randomNumber =
      Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
    setRandomNumber(randomNumber);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="randomNumber">
          <p>
            Random Number: <span>{randomNumber}</span>
          </p>
        </div>

        <div className="numberContainer">
          <div className="inputGroup">
            <p>Min</p>
            <input value={min} onChange={updateMin} type="number" />
          </div>

          <div className="inputGroup">
            <p>Max</p>
            <input value={max} onChange={updateMax} type="number" />
          </div>
        </div>

        <div className="btn">
          <button onClick={createRandomNumber}>Create Random Number</button>
        </div>
      </div>
    </div>
  );
}

export default App;
