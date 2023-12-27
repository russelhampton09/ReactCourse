import React, { useState } from "react";
import { Button } from "primereact/button";
import DateDisplay from "./DateDisplay";

function DateCounters() {
  const [dateDiff, setDateDiff] = useState(1);
  const [countBy, setCountBy] = useState(1);
  var currentDate = new Date();

  function handleClick() {
    setDateDiff(1);
    setCountBy(1);
  }

  Date.prototype.addDays = function (days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  };

  return (
    <div>
      <div>
        <div>
          <input
            type="range"
            min="1"
            max="10"
            value={countBy}
            className="slider"
            onChange={(e) => setCountBy(e.target.value)}
          ></input>
          {countBy}
        </div>
      </div>
      <div>
        <Button
          label="-"
          onClick={() =>
            setDateDiff((count) => Number(count) - Number(countBy))
          }
        ></Button>
        {`Skip date by ${dateDiff} days`}
        <Button
          label="+"
          onClick={() =>
            setDateDiff((count) => Number(count) + Number(countBy))
          }
        ></Button>
      </div>
      <DateDisplay
        skipCount={dateDiff}
        dateToDisplay={new Date().addDays(dateDiff)}
      ></DateDisplay>
      <button onClick={handleClick}>Reset</button>
    </div>
  );
}

export default DateCounters;
