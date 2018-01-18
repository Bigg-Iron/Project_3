import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
// Unused imports: 
// import API from "./utils/API";
// import { Container, Row, Col } from "./components/Grid";
import axios from 'axios';

class App extends Component {

  state = {launches: [] };

  getLaunches(){
    axios.get('https://launchlibrary.net/1.3/launch/2018-01-27?next=30')
    .then(res => {
      console.log(res.data.launches);
      this.setState({ launches: res.data.launches});
    });
  }

  componentDidMount(){
    this.getLaunches();
  }

  render(){
    const { launches } = this.state;
    return(
      <div>
        <Nav />
        <Jumbotron />
        <h2>Launches!</h2>

        <div className ="col-sm-12">
          {launches.map((data, index) =>(
              <div className="col-sm-4" key={index}>
              <div className="embed-responsive embed-responsive-4by3">
                
                <div>ID: {data.id}</div> 
                <div>NAME: {data.name}</div>
                <div>DATE: {data.windowstart}</div>
                <div>DESCRIPTION: {data.missions.description}</div>
                <div>latitude: {data.location.pads[0].latitude}</div>
                <div>longitude: {data.location.pads[0].longitude}</div>
                <img src = {data.rocket.imageURL || "https://s3.amazonaws.com/launchlibrary/RocketImages/placeholder_1920.png"} width = "320" alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    )}
}

export default App;
