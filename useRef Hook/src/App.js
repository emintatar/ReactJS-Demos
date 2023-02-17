import React, { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("Default color");

  const changeColorRef = useRef();

  const changeBackgroundColor = () => {
    document.body.style.backgroundColor = changeColorRef.current.value;
    setColor(changeColorRef.current.value);
    console.log(changeColorRef.current.className);
  };

  return (
    <div className="App">
      <h1>ENTER A COLOR:</h1>
      <input
        className="sample-class"
        onChange={changeBackgroundColor}
        type="text"
        ref={changeColorRef}
      />
      <h2>{`Color: ${color}`}</h2>
    </div>
  );
}

export default App;
