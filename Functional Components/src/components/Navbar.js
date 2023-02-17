import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
      <a href="#">References</a>
    </div>
  );
};

export const AltNavbar = () => {
  return <div className="alt_navbar"></div>;
};

export default Navbar;
