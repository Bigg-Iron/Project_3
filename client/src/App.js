import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import API from "./utils/API";
import { Container, Row, Col } from "./components/Grid";
import Display from "./components/Display/Display";
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

  componentWillMount(){
    this.getLaunches();
  }

  componentDidMount(){
    
  }

  readData = (data) =>{
    this.setState({ currentLaunch: data});
  }
  render(){
    const { launches } = this.state;
    return(
      <div>
        <Nav />
        <Jumbotron />

        <div>
          {this.state.currentLaunch ? <div>ID: {this.state.currentLaunch.id} </div> : ""}
          {this.state.currentLaunch ? <div>ID: {this.state.currentLaunch.name} </div> : ""}
          {this.state.currentLaunch ? <div>ID: {this.state.currentLaunch.windowstart} </div> : ""}
        </div>

        <div className = "col-sm-12">
        {launches.map((data,index) =>(
          <Display launchData = {data} key = {index} readData = {this.readData} />
        ))}
        </div>
      </div>
    )}
}

export default App;
