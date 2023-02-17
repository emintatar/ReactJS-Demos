import React from "react";
import "./App.css";
import transformers from "./Data";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <div className="cards">
        {transformers.map((transformer) => (
          <Card key={transformer.id} transformer={transformer} />
        ))}
      </div>
    </div>
  );
}

export default App;
