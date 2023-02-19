import React, { useState } from "react";
import "./App.css";
import Accordion from "./components/Accordion";

function App() {
  const [activeQuestion, setActiveQuestion] = useState("Question 1");

  return (
    <div className="App">
      <h1>FAQ App</h1>
      <Accordion
        title="Question 1"
        activeQuestion={activeQuestion}
        setActiveQuestion={setActiveQuestion}
      />
      <Accordion
        title="Question 2"
        activeQuestion={activeQuestion}
        setActiveQuestion={setActiveQuestion}
      />
      <Accordion
        title="Question 3"
        activeQuestion={activeQuestion}
        setActiveQuestion={setActiveQuestion}
      />
      <Accordion
        title="Question 4"
        activeQuestion={activeQuestion}
        setActiveQuestion={setActiveQuestion}
      />
      <Accordion
        title="Question 5"
        activeQuestion={activeQuestion}
        setActiveQuestion={setActiveQuestion}
      />
    </div>
  );
}

export default App;
