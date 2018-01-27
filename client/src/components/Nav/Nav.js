import React from "react";
import "./Nav.css";

const Nav = ({ logIn, logout, isAuthenticated }) => {
  console.log(isAuthenticated);
  
  return (

  <nav className="navbar navbar-inverse navbar-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <a href="/" className="navbar-brand">
          LAUNCHBOX
          <span role="img" aria-label="Spaceship">🚀</span>
        </a>
      <div className = "collapse navbar-collapse">
        <ul className="nav navbar-nav navbar-right">
          {!isAuthenticated() && <button className="btn log" ><li
            onClick={() => {
              logIn();
            }}
            >LOGIN / CREATE AN ACCOUNT</li></button>}
          {isAuthenticated() && <button className="btn log" ><li
            onClick={() => {
              logout();
            }}
          >LOGOUT</li></button>}
        </ul>
        </div>
      </div>
    </div>
  </nav>
)};

export default Nav;
