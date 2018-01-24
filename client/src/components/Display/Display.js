import React from "react";
import "./Display.css";

 const Display = ({launchData, readData}) => {
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
          <div className = "display-pad">{launchData.location.pads[0].name}</div>
        </div>
          <button className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick ={ () => readData(launchData)}> ⓘ
          </button>
    </div>
  </div>
  )
 }

export default Display;