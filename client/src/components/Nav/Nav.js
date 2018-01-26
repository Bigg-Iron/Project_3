import React from "react";
import "./Nav.css";

const Nav = () => (
  <nav className="navbar navbar-inverse navbar-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <a href="/" className="navbar-brand">
          LAUNCHBOX
          <span role="img" aria-label="Spaceship">🚀</span>
        </a>
      <div className = "collapse navbar-collapse">
        <ul className="nav navbar-nav navbar-right">
          <li><a href="#">Log In</a></li>
        </ul>
        </div>
      </div>
    </div>
  </nav>
);

export default Nav;
