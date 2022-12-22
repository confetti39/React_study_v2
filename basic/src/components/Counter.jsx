import React, { useState } from "react";

export default function Counter({ handleTotalCount }) {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((prev) => prev + 1);
    handleTotalCount();
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
