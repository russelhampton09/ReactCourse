import React from "react";

function DateDisplay({ dateToDisplay, skipCount }) {
  function getDayName(date, locale) {
    return date.toLocaleDateString(locale, {
      weekday: "long",
      month: "short",
      day: "2-digit",
      year: "numeric",
    });
  }

  return (
    <div>
      {skipCount === 0 ? `Today ` : `In ${skipCount} it will be `}
      {getDayName(dateToDisplay)}
    </div>
  );
}

export default DateDisplay;
