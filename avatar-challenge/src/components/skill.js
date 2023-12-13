import React from "react";

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.name}</span>
    </div>
  );
}

export default Skill;
