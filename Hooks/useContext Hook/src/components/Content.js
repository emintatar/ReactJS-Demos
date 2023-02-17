import React, { useContext } from "react";
import { ThemeData } from "../App";

const Content = () => {
  return (
    <div style={useContext(ThemeData)}>
      <h1>React</h1>
      <h2>useContext Hook</h2>
      <p>This is a test app to demonstrate the use of the useContext hook.</p>
      <p>This is a test app to demonstrate the use of the useContext hook.</p>
      <p>This is a test app to demonstrate the use of the useContext hook.</p>
      <p>This is a test app to demonstrate the use of the useContext hook.</p>
    </div>
  );
};

export default Content;
