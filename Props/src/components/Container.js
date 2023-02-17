import React from "react";
import Header from "./Header";

function Container(props) {
  return (
    <div
      style={{
        width: "400px",
        height: "400px",
        border: "2px solid black",
        margin: "0px auto",
      }}
    >
      <Header titleProp={props.titleProp}>
        I am a child of Container
      </Header>
    </div>
  );
}

export default Container;
