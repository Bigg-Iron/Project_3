import React, { Component } from "react";
import axios from 'axios';
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Display from "./components/Display/Display";
import FavoriteDisplay from "./components/FavoriteDisplay/FavoriteDisplay";
import Auth from './Auth/Auth.js';
import NoAuth from "./components/NoAuth/NoAuth.js";
import { Share } from 'react-twitter-widgets'


class App extends Component {

  state = {
    launches: [],
    favorites: [],
    auth: null
  };

  getLaunches(){
    axios.get('https://launchlibrary.net/1.3/launch/2018-01-27?next=30')
    .then(res => {
      // console.log(res.data.launches);
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
      if (this.isUserAuthenticated()) {
        // do this
      } else {
        // do that
      }
      this.getLaunches();
      this.getFavorites();
  }

  componentDidMount(){
  }

  logIn = () => {
    const auth = new Auth();
    auth.login();
    this.setState({
      auth
    });
  } 

  goTo = (route) => {
    this.props.history.replace(`/${route}`);
  }

  isUserAuthenticated = () => {
    if (this.state.auth && this.state.auth.isAuthenticated) {
      return true;
    } else {
      return false;
    }
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

        {!this.isAuthenticated ? <NoAuth auth={this.state.auth} logIn={this.logIn}/> : null } 

        <div className = "col-sm-12">
        {launches.map((data,index) =>(
          <Display launchData = {data} key = {index} readData = {this.readData} favoriteData = {this.state.favorites}/>
        ))}
        </div>

        <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  {this.state.currentLaunch ? <div>{this.state.currentLaunch.id}   {this.state.currentLaunch.name}</div>:""}
                </h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
              <div>

              {this.state.currentLaunch && this.state.currentLaunch[0] ? <div>DESCRIPTION: {this.state.currentLaunch.missions[0].description} </div> : <div>DESCRIPTION: Unavailable for this launch.</div>}

              {this.state.currentLaunch ? <div>ROCKET NAME: {this.state.currentLaunch.rocket.name} </div> : ""}

              {this.state.currentLaunch ? <div>LONGITUDE: {this.state.currentLaunch.location.pads[0].longitude} </div> : ""}
              {this.state.currentLaunch ? <div>LATITUDE: {this.state.currentLaunch.location.pads[0].latitude} </div> : ""}

            </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div> 
  </div>
    )}
}

export default App;
