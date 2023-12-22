import React, { useState } from "react";
import { Button } from "primereact/button";
import DateDisplay from "./DateDisplay";

function DateCounters() {
  const [skipCount, setSkipCount] = useState(1);
  const [countBy, setCountBy] = useState(1);
  var currentDate = new Date();

  Date.prototype.addDays = function (days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  };

  return (
    <div>
      <div>
        <Button
          label="-"
          onClick={() => setSkipCount((skip) => skip - countBy)}
        ></Button>
        {`Skip by ${skipCount} days`}
        <Button
          label="+"
          onClick={() => setSkipCount((skip) => skip + countBy)}
        ></Button>
      </div>
      <div>
        <Button
          label="-"
          onClick={() => setCountBy((count) => count - 1)}
        ></Button>
        {`Count by ${countBy} days`}
        <Button
          label="+"
          onClick={() => setCountBy((count) => count + 1)}
        ></Button>
      </div>
      <DateDisplay
        skipCount={skipCount}
        dateToDisplay={new Date().addDays(skipCount)}
      ></DateDisplay>
    </div>
  );
}

export default DateCounters;
