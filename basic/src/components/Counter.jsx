import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="counter">
      <span className="number">{count}</span>
      <button className="button" onClick={handleClick}>
        Add +
      </button>
    </div>
  );
}
