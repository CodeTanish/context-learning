import React from "react";

export default function Counter() {
  const [value, setValue] = React.useState(5);

  function increame() {
    setValue((prev) => (prev += 10));
  }
  function decrement() {
    setValue((prev) => (prev -= 10));
  }
  return (
    <>
      <button onClick={increame}>+</button>
      <span>{value}</span>
      <button onClick={decrement}>-</button>
    </>
  );
}
