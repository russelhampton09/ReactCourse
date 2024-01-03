import React from "react";

export function Stats({ items }) {
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  console.log(numPacked);
  return (
    <footer>
      {numItems === numPacked ? (
        <em>All items packed </em>
      ) : (
        <em>
          💼 You have {numItems} items on your list, and you already packed{" "}
          {Math.round((numPacked / numItems) * 100)}%
        </em>
      )}
    </footer>
  );
}
