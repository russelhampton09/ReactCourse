import React from "react";

export function TotalDisplay({ bill, tip1, tip2 }) {
  function getTotal() {
    let tipAverage = (tip1 + tip2) / 2;
    console.log(tipAverage);
    return Number(tipAverage) * 0.01 * Number(bill) + Number(bill);
  }

  return (
    <div>
      Your bill was {bill}, with tip is {getTotal()}
    </div>
  );
}
