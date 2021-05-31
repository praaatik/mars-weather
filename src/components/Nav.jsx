import React from "react";
import Mars from "../images/mars.svg";
import "../stylesheets/Nav.scss";

function Nav() {
  return (
    <nav>
      <h1>Mars Weather</h1>
      <img src={Mars} alt="mars icon" width="30px" height="30px"></img>
    </nav>
  );
}

export default Nav;
