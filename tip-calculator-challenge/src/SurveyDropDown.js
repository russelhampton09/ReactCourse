import React from "react";

export function SurveyDropDown({ val, onSelect, children }) {
  function handleSelect(e) {
    onSelect(e.target.selectedIndex);
  }

  console.log(val);
  return (
    <div>
      {children}{" "}
      <select value={val} onChange={handleSelect}>
        <option value={0}>Bad (0%)</option>
        <option value={1}>Not bad (5%)</option>
        <option value={2}>Great (15%)</option>
        <option value={3}>Amazing!(25%)</option>
      </select>
    </div>
  );
}
