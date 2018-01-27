import React, { Component } from "react";
import axios from 'axios';
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Display from "./components/Display/Display";
import FavoriteDisplay from "./components/FavoriteDisplay/FavoriteDisplay";
import NoAuth from "./components/NoAuth/NoAuth.js";
import { Share } from 'react-twitter-widgets';
import "./App.css";

class App extends Component {

  state = {
    launches: [],
    favorites: [],
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
      this.getLaunches();
      this.getFavorites();
  }

  componentDidMount(){
    if (window.location.pathname === '/callback') {
      this.props.auth.handleAuthentication();
    }
  }

  logIn = () => {
    this.props.auth.login()
  } 

  logout = () => {
    this.props.auth.logout();
  }

  goTo = (route) => {
    this.props.history.replace(`/${route}`);
  }

  readData = (data) =>{
    this.setState({ currentLaunch: data});
  }
  injectLaunchesView = () => {
    const { launches } = this.state;
    return (
      <div>
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

              {this.state.currentLaunch && this.state.currentLaunch.missions[0] ? <div className = "m-title">DESCRIPTION: {this.state.currentLaunch.missions[0].description} </div> : <div>DESCRIPTION: Unavailable for this launch.</div>}

              {this.state.currentLaunch ? <div className = "m-title">ROCKET NAME: {this.state.currentLaunch.rocket.name} </div> : ""}

              {this.state.currentLaunch ? <div className = "m-title">LONGITUDE: {this.state.currentLaunch.location.pads[0].longitude} </div> : ""}
              {this.state.currentLaunch ? <div className = "m-title">LATITUDE: {this.state.currentLaunch.location.pads[0].latitude} </div> : ""}

            </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div> 
      </div>
    )
  }

  render(){
    //console.log('APP RENDER', this.props.auth.isAuthenticated());
    return(
      <div>
        <Nav logIn={this.logIn} logout={this.logout} isAuthenticated={this.props.auth.isAuthenticated}/>
        <Jumbotron />
        {this.props.auth.isAuthenticated() ? this.injectLaunchesView() : null}

  </div>
    )}
}

export default App;
