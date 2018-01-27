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
          {/* <img src={ require('../../../public/SpaceshipIcon.png') } /> */}
        </a>
      <div className = "collapse navbar-collapse">
        <ul className="nav navbar-nav navbar-right">
          {!isAuthenticated() && <li
            style={{color: 'white'}}
            onClick={() => {
              logIn();
            }}
            >Log In</li>}
          {isAuthenticated() && <li
            style={{color: 'white'}}
            onClick={() => {
              logout();
            }}
          >Logout</li>}
        </ul>
        </div>
      </div>
    </div>
  </nav>
)};

export default Nav;
