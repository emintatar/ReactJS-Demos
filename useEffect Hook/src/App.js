import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [timer, setTimer] = useState(5);

  useEffect(() => {
    if (timer !== 0) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [timer]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
      className="App"
    >
      <div
        style={{
          height: "250px",
          width: "250px",
          backgroundColor: "red",
          borderRadius: "50%",
          color: "white",
          fontSize: "50px",
          lineHeight: "250px",
        }}
      >
        {timer}
      </div>
    </div>
  );
}

export default App;
