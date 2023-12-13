import "./App.css";
import PhotoContainer from "./components/photocontainer";
import ProfileDescription from "./components/profiledescription";
import SkillList from "./components/skill_list";

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
        <SkillList></SkillList>
      </div>
    </div>
  );
}

export default App;
