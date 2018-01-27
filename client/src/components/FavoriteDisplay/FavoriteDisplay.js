import React, { Component } from "react";
import "./FavoriteDisplay.css";
import axios from 'axios';

class FavoriteDisplay extends Component {

getFavorites(userId){
  // exmaple: http://localhost:3001/api/favorite/newperson@email.com
  axios.get('http://localhost:3001/api/favorite/' + userId)
  .then(res => {
    this.setState({ favorites: res.data});
  });
}

state = {favorites: [] };

componentWillMount(){
  this.getFavorites("newperson@email.com"); // example, need to pull this from auth0 (probaby localstorage)
}

render() {

  const { favorites }  = this.state;

  return (
    <div className="container">
      <h1>Favorites!</h1>
      { favorites.map((data, index) => (
        <div className="row" key={index}>
          ID: {data.launchId}
        </div>
      ))}
    </div>
    );
  }
}

export default FavoriteDisplay;

