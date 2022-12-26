import React, { useState } from "react";
import Counter from "./components/Counter";
import "./App.css";

export default function AppCounter() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div className="container">
      <div className="banner">
        Total Count: {count} {count > 10 ? "🔥" : "❄️"}
      </div>
      <div className="counters">
        <Counter onClick={handleClick} total={count} />
        <Counter onClick={handleClick} total={count} />
      </div>
    </div>
  );
}
