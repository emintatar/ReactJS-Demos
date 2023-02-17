import React, { useState } from "react";
import "./App.css";
import Container from "./components/Container";

function App() {
  const [title, setTitle] = useState("Default Title");
  const number = 38;

  const changeTitle = (event) => {
    event.preventDefault();
    setTitle("Title");
  }

  return (
    <div className="App">
      <Container titleProp={title} numberProp={number} changeTitleProp={changeTitle} />
      <button onClick={changeTitle} >Change</button>
    </div>
  );
}

export default App;
