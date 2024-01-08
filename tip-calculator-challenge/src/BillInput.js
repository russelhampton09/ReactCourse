import React from "react";

export function BillInput({ total, onSelect }) {
  return (
    <div>
      How much was the bill?{" "}
      <input
        value={total}
        type="text"
        onChange={(e) => onSelect(e.target.value)}
      ></input>
    </div>
  );
}
