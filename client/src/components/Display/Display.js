import React from "react";

export const Display = props =>(
      <div className="col-sm-4" key={index}>
      <div className="embed-responsive embed-responsive-4by3">
        <div>ID: {props.id}</div> 
        <div>NAME: {props.name}</div>
        <div>DATE: {props.windowstart}</div>
        <div>DESCRIPTION: {props.missions[0].description}</div>
      </div>
    </div>

);