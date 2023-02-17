import React from "react";

function Header(props) {

    console.log(props.children);

  return (
    <div style={{
        width:"inherit",
        height:"100px",
        backgroundColor:"black",
        color:"white",
    }} >
      <h1>{props.titleProp}</h1>
      <h3>{props.children}</h3>
    </div>
  );
}

export default Header;
