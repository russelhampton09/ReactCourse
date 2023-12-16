import { getMouseEventOptions } from "@testing-library/user-event/dist/utils";
import React from "react";

function GetEmoji(level) {
  switch (level) {
    case "beginner":
      return "👶";
    case "intermediate":
      return "👍";
    case "advanced":
      return "💪";
    default:
      return "";
  }
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>
        {props.name} {GetEmoji(props.level)}
      </span>
    </div>
  );
}

export default Skill;
