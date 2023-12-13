import React from "react";

function PhotoContainer(props) {
  return (
    <div className="avatar">
      <img src={props.photoPath} alt={props.name}></img>
    </div>
  );
}

export default PhotoContainer;
