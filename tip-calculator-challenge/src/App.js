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
  console.log(total);
  return (
    <div className="App">
      <BillInput onSelect={setTotal}></BillInput>
      <SurveyDropDown onSelect={setYourChoice}>
        How did you like the service?
      </SurveyDropDown>
      <SurveyDropDown onSelect={setFriendChoice}>
        How did your friend like the service?
      </SurveyDropDown>
      <TotalDisplay
        bill={total}
        tip1={tipOptions[yourChoice]}
        tip2={tipOptions[friendChoice]}
      ></TotalDisplay>
      <ResetButton> Reset </ResetButton>
    </div>
  );
}

export default App;
