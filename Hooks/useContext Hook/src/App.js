import "./App.css";
import React, { useState } from "react";
import Content from "./components/Content";

const theme = {
  dark: {
    color: "white",
    background: "black",
  },
  light: {
    color: "black",
    background: "white",
  },
};

export const ThemeData = React.createContext(theme.dark);

function App() {
  const [themeValue, setThemeValue] = useState("");

  const change = () => {
    if (themeValue === theme.dark) {
      setThemeValue(theme.light);
      console.log(themeValue);
    } else {
      setThemeValue(theme.dark);
      console.log(themeValue);
    }
  };

  return (
    <div className="App">
      <button onClick={change}>{themeValue === theme.dark ? "Change to Light" : "Change to Dark"}</button>
      <ThemeData.Provider value={themeValue}>
        <Content />
      </ThemeData.Provider>
    </div>
  );
}

export default App;
