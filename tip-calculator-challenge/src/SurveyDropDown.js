import React from "react";

export function SurveyDropDown({ onSelect, children }) {
  function handleSelect(e) {
    onSelect(e.target.selectedIndex);
  }

  return (
    <div>
      {children}{" "}
      <select onChange={handleSelect}>
        <option>Bad (0%)</option>
        <option>Not bad (5%)</option>
        <option>Great (15%)</option>
        <option>Amazing!(25%)</option>
      </select>
    </div>
  );
}
