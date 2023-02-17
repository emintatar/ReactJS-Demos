import React, { useReducer } from "react";
import "./App.css";

const initialState = { number: 0 };

const reducerFunction = (previousState, action) => {
  switch (action.type) {
    case "increase":
      return { number: previousState.number + action.payload };
    case "decrease":
      return { number: previousState.number - action.payload };
    default:
      return { number: previousState.number };
  }
};

function App() {
  const [state, dispatch] = useReducer(reducerFunction, initialState);

  return (
    <div className="App">
      <button onClick={() => dispatch({ type: "increase", payload: 4 })}>
        Arttır
      </button>
      <button onClick={() => dispatch({ type: "decrease", payload: 4 })}>
        Azalt
      </button>
      <p>Sayı:{state.number}</p>
    </div>
  );
}

export default App;
