import React from "react";
import "./Display.css";
// import Modal from "../../components/Modal";
import { Button } from 'react-bootstrap';

// import styles from './imagecard.less';
// import { Row, Col, Card, Icon } from 'antd';

 const Display = ({launchData, readData, openModal, closeModal}) => {
  const mission = launchData.missions[0];
  let image = launchData.rocket.imageURL

  if (image === "Array"){
    image = "https://s3.amazonaws.com/launchlibrary/RocketImages/placeholder_1920.png"
  }
  return(
      <div className="col-sm-4">
      <div className ="display-card">
        <div className = "display-image">
          <img src = {image} width = "366" height = "243" alt = "launch"/>
        </div>
        <div className = "display-content">
          <div className = "display-id">{launchData.id}</div> 
          <div className = "display-name">{launchData.name}</div>
          <div className = "display-date">{launchData.windowstart}</div>
          {/* <div>DESCRIPTION: {mission ? mission.description : "Description is unavailable."}</div> */}
          <div className = "display-pad">{launchData.location.pads[0].name}</div>
          {/* <div>latitude: {launchData.location.pads[0].latitude}</div>
          <div>longitude: {launchData.location.pads[0].longitude}</div> */}
        </div>
        {/* <Modal> */}
          <button onClick ={ () => readData(launchData)}>More Info
          </button>
        {/* </Modal> */}

    </div>
  </div>
  )
 }

export default Display;