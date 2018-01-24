import React, { Component } from "react";
import "./FavoriteButton.css";
import axios from 'axios';
import { Share } from 'react-twitter-widgets';

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
      launchTweet: "https://twitter.com/intent/tweet?text=" + encodeURIComponent("Upcoming launch! " + this.props.launch.name) + "%0a" + encodeURIComponent("Where to watch live: <a href='www.google.com'>Google</a>")
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
      <button type="button" className="btn btn-success ml-1" onClick={this.handleClick}>
        {this.state.isFavorite ? 'Remove Favorite' : 'Add to Favorites'}
      </button>

      <a className="twitter-share-button"
        href={this.state.launchTweet}>
      Tweet</a>
    
      <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
    </div>
  );
}
}

export default FavoriteButton;