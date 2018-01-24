import React from "react";
import "./Nav.css";

const Nav = () => (
  <nav className="navbar navbar-inverse navbar-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <a href="/" className="navbar-brand">
          LAUNCHBOX test
          <span role="img" aria-label="Spaceship">🚀</span>
        </a>
      </div>
    </div>
  </nav>
);

export default Nav;
