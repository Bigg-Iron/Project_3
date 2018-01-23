import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import API from "./utils/API";
import { Container, Row, Col } from "./components/Grid";
import Display from "./components/Display/Display";
import axios from 'axios';
import FavoriteDisplay from "./components/FavoriteDisplay/FavoriteDisplay";

import Auth from './Auth/Auth.js';
import { Share } from 'react-twitter-widgets'

class App extends Component {
  state = {launches: [] , favorites: []};

  getLaunches(){
    axios.get('https://launchlibrary.net/1.3/launch/2018-01-27?next=30')
    .then(res => {
      console.log(res.data.launches);
      this.setState({ launches: res.data.launches});
    });
  }

  // get all favorites for this user, we'll compare to the launch id
  // to determine if the button should show as a favorite
  getFavorites(){
    // example: http://localhost:3001/api/favorite/newperson@email.com
    let userId = "newperson@email.com"; // should be populated by auth0
    axios.get('http://localhost:3001/api/favorite/' + userId)
    .then(res => {
      this.setState({ favorites: res.data});
    });
}

  componentWillMount(){
    this.getLaunches();
    this.getFavorites();
  }

  componentDidMount(){
  }

  logIn = () => {
    const auth = new Auth();
    auth.login();
    
  } 

  readData = (data) =>{
    this.setState({ currentLaunch: data});
  }
  render(){
    const { launches } = this.state;
    console.log('favs:', this.state.favorites );
    return(
      <div>
        <Nav />
        <Jumbotron />
        <div
          onClick={() => {
            this.logIn();
          }}
        >CLICK ME</div>
        <div>
          {this.state.currentLaunch ? <div>ID: {this.state.currentLaunch.id} </div> : ""}
          {this.state.currentLaunch ? <div>ID: {this.state.currentLaunch.name} </div> : ""}
          {this.state.currentLaunch ? <div>ID: {this.state.currentLaunch.windowstart} </div> : ""}
        </div>

        <div className = "col-sm-12">
        {launches.map((data,index) =>(
          <Display launchData = {data} key = {index} readData = {this.readData} favoriteData = {this.state.favorites}/>
        ))}
        </div>
      </div>
    )}
}

export default App;
