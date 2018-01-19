import React from "react";

 const Display = ({launchData, readData}) => {
  const mission = launchData.missions[0];

  return(
    <div className="col-sm-4" onClick ={ () => readData(launchData)}>
    <div className="embed-responsive embed-responsive-4by3">
      <div>ID: {launchData.id}</div> 
      <div>NAME: {launchData.name}</div>
      <div>DATE: {launchData.windowstart}</div>
      <div>DESCRIPTION: {mission ? mission.description : "Description is unavailable."}</div>
      <div>latitude: {launchData.location.pads[0].latitude}</div>
      <div>longitude: {launchData.location.pads[0].longitude}</div>
      <img src = {launchData.rocket.imageURL || "https://s3.amazonaws.com/launchlibrary/RocketImages/placeholder_1920.png"} width = "320"/>
    </div>
  </div>
  )
 }

export default Display;