import React, { Component } from 'react';

class NoAuth extends Component {
  login() {
    this.props.auth.login();
  }
  render() {
    return (
      <div className="container">
      asdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdf
        <div 
          onClick={() =>{
              this.props.logIn();
          }}
        >
      </div>
      </div>
    );
  }
}

export default NoAuth;