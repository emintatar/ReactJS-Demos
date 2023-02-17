import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const api = "https://type.fit/api/quotes";
  const [quotes, setQuotes] = useState([]);

  async function getData() {
    try {
      const response = await axios.get(api);
      const randomNumber = Math.floor(Math.random() * response.data.length);
      setQuotes(response.data[randomNumber]);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <div className="container">
        <div className="quoteContainer">
          <p>{quotes.text}</p>
          <h5>{quotes.author}</h5>
        </div>
        <div className="btnContainer">
          <button onClick={getData}>New Quote</button>
        </div>
      </div>
    </div>
  );
}

export default App;
