import React from "react";

export function BillInput({ onSelect }) {
  return (
    <div>
      How much was the bill?{" "}
      <input type="text" onChange={(e) => onSelect(e.target.value)}></input>
    </div>
  );
}
