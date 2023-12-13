import React from "react";
import Skill from "./skill";

function SkillList() {
  return (
    <div className="skill-list">
      <Skill name="C#" color="Red"></Skill>
      <Skill name="Leadership" color="Blue"></Skill>
      <Skill name="Learning" color="Yellow"></Skill>
      <Skill name="Architecture" color="Green"></Skill>
    </div>
  );
}

export default SkillList;
