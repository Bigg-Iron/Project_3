import React from "react";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

 const Display = ({launchData, readData, favoriteData}) => {
  const mission = launchData.missions[0];
  let image = launchData.rocket.imageURL

  if (image === "Array"){
    image = "https://s3.amazonaws.com/launchlibrary/RocketImages/placeholder_1920.png"
  }

  return(
    <div className="col-sm-4" onClick ={ () => readData(launchData)}>
    <div>
      <div>ID: {launchData.id}</div> 
      <div>NAME: {launchData.name}</div>
      <div>DATE: {launchData.windowstart}</div>
      <div>DESCRIPTION: {mission ? mission.description : "Description is unavailable."}</div>
      <div>LAUNCHPAD: {launchData.location.pads[0].name}</div>
      <div>latitude: {launchData.location.pads[0].latitude}</div>
      <div>longitude: {launchData.location.pads[0].longitude}</div>
      <img src = {image} width = "366" height = "243"/>
      <FavoriteButton launch={launchData} favorites={favoriteData} />
    </div>
  </div>
  )
 }

export default Display;