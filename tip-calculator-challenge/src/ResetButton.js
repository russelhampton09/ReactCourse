import React from "react";

export function ResetButton({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}
