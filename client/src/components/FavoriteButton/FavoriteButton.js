import React, { Component } from "react";
import "./FavoriteButton.css";

class FavoriteButton extends Component {

getFavorites(userId){
  // exmaple: http://localhost:3001/api/favorite/newperson@email.com
  axios.post('http://localhost:3001/api/favorite/', )
  .then(res => {
    console.log(res.data);
    this.setState({ favorites: res.data});
  });
}

state = {favorites: [] };

componentDidMount(){
  this.getFavorites("newperson@email.com"); // example, need to pull this from auth0 (probaby localstorage)
}

render(){
  const { favorites } = this.state;
  return(
    <div>
      <h1>Favorites!</h1>
      loop through the favorites here
    </div>
  )
}

export default FavoriteButton;