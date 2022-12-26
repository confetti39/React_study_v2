import React, { useState } from "react";

export default function Counter({ onClick, total }) {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((prev) => prev + 1);
    onClick();
  };

  return (
    <div className="counter">
      <p className="number">
        {count} <span className="total">/{total}</span>
      </p>
      <button className="button" onClick={handleClick}>
        Add +
      </button>
    </div>
  );
}
