import React, { useState } from "react";
import "./App.css";
import { BillInput } from "./BillInput";
import { SurveyDropDown } from "./SurveyDropDown";
import { TotalDisplay } from "./TotalDisplay";
import { ResetButton } from "./ResetButton";

const tipOptions = { 0: 0, 1: 5, 2: 15, 3: 25 };

function App() {
  const [friendChoice, setFriendChoice] = useState(0);
  const [yourChoice, setYourChoice] = useState(0);
  const [total, setTotal] = useState(0);

  function handleClick() {
    setFriendChoice(0);
    setTotal(0);
    setYourChoice(0);
  }

  return (
    <div className="App">
      <BillInput total={total} onSelect={setTotal}></BillInput>
      <SurveyDropDown val={yourChoice} onSelect={setYourChoice}>
        How did you like the service?
      </SurveyDropDown>
      <SurveyDropDown val={friendChoice} onSelect={setFriendChoice}>
        How did your friend like the service?
      </SurveyDropDown>
      <TotalDisplay
        bill={total}
        tip1={tipOptions[yourChoice]}
        tip2={tipOptions[friendChoice]}
      ></TotalDisplay>
      <ResetButton onClick={handleClick}> Reset </ResetButton>
    </div>
  );
}

export default App;
