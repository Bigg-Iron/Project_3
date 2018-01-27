import React, { Component } from "react";
import "./FavoriteButton.css";
import axios from 'axios';
import { Share } from 'react-twitter-widgets';
import "./FavoriteButton.css";

class FavoriteButton extends Component {

handleClick() {
  this.setState(prevState => ({
    isFavorite: !prevState.isFavorite
  }));

  if(this.state.isFavorite){
    this.removeFavorites();
  } else {
    this.addToFavorites();
  }
}

addToFavorites(){
  let favorite = {
    launchId: this.props.launch.id,
    userId: this.state.userId
  }
  axios.post('http://localhost:3001/api/favorite/', favorite)
  .then(res => {
  });
}

removeFavorites(){
  let favorite = {
    launchId: this.props.launch.id,
    userId: this.state.userId
  }
  axios.delete('http://localhost:3001/api/favorite/', {params: {launchId: favorite.launchId, userId: favorite.userId}})
  .then(res => {

  });
}

setFavorite(){
  var launchId = this.props.launch.id;
  var found = this.props.favorites.find(function(element) {
    return element.launchId == launchId;
  });

  this.setState({isFavorite: found != undefined});
}

constructor(props){
  super(props);
  this.state = {
      launch: props.launch,
      userId: "newperson@email.com",
      isFavorite:false, 
      favorites: props.favorites,
      launchTweet: "https://twitter.com/intent/tweet?text=" + encodeURIComponent("Come watch this launch with me! " + this.props.launch.name + " is happening on " + this.props.launch.windowstart + ".") + "%0a" + encodeURIComponent("Sponsored by LAUNCHBOX.")
  };
  
  this.handleClick = this.handleClick.bind(this);
}

componentWillMount(){
  this.setFavorite();
}

render(){
  console.log('this.state.launch', this.state.launch);
  
  return(
    <div className="favButton">

      <a className="twitter-share-button"
        href={this.state.launchTweet}>
      <img src = "http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c53e.png" width = "40px"/></a>
    
      <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>

      
      <a onClick={this.handleClick}>
        {this.state.isFavorite ? <img src = "http://www.freeiconspng.com/uploads/rocket-icon-png-21.png" width = "45px"/> : <img src = "https://www.shareicon.net/data/512x512/2015/12/13/687056_rocket_512x512.png" width = "35px"/>}
      </a>
    </div>
  );
}}

export default FavoriteButton;