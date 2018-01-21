import React, { Component } from "react";
import axios from 'axios';
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Display from "./components/Display/Display";
// import Modal from "./components/Modal/Modal";
import { Button } from 'react-bootstrap';


import Auth from './Auth/Auth.js';
// import { Share } from 'react-twitter-widgets'


class App extends Component {

  state = {
    launches: [],
    showModal: false 
  };

  getLaunches(){
    axios.get('https://launchlibrary.net/1.3/launch/2018-01-27?next=30')
    .then(res => {
      // console.log(res.data.launches);
      this.setState({ launches: res.data.launches});
    });
  }

  componentWillMount(){
    this.getLaunches();
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


  openModal(){
    this.setState({showModal: true})
  }

  closeModal(){
    this.setState({showModal: false})
  }


  render(){
    const { launches } = this.state;
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
          {this.state.currentLaunch ? <div>NAME: {this.state.currentLaunch.name} </div> : ""}
          {this.state.currentLaunch ? <div>DATE: {this.state.currentLaunch.windowstart} </div> : ""}
        </div>

        <div className = "col-sm-12">
        {launches.map((data,index) =>(
          <Display launchData = {data} key = {index} readData = {this.readData} openModal = {this.openModal} closeModal = {this.closeModal} />
        ))}
        </div>

    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
      Click for Modal
    </button>

    <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            Hello this is the modal body
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
    )}
}

export default App;
