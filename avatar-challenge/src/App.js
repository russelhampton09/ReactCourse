import "./App.css";
import PhotoContainer from "./components/photocontainer";
import ProfileDescription from "./components/profiledescription";
import SkillList from "./components/skill_list";

//simulate json payload
const skillJson = JSON.stringify([
  {
    skill: "C#",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "Kafka",
    level: "advanced",
    color: "#EFDB1D",
  },
  {
    skill: "Azure",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "beginner",
    color: "#FFB00B",
  },
  {
    skill: "Software Architecture",
    level: "intermediate",
    color: "#60DAFB",
  },
]);

function App() {
  return (
    <div className="card">
      <PhotoContainer
        photoPath="profilepic.png"
        name="test profile"
      ></PhotoContainer>
      <div className="data">
        <ProfileDescription
          name="Russel Hampton"
          body="Full stack developer who is taking a React course because React is really cool."
        ></ProfileDescription>
        <SkillList skillsJson={skillJson}></SkillList>
      </div>
    </div>
  );
}

export default App;
