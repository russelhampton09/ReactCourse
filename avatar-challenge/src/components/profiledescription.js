import React from "react";

function ProfileDescription(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.body}</p>
    </div>
  );
}

export default ProfileDescription;
