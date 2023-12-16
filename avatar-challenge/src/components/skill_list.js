import React from "react";
import Skill from "./skill";

function SkillList({ skillsJson }) {
  const skills = JSON.parse(skillsJson);
  console.log(skills);
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill
          name={skill.skill}
          level={skill.level}
          color={skill.color}
        ></Skill>
      ))}
    </div>
  );
}

export default SkillList;
