import React, { useState } from "react";
import Counter from "./components/Counter";
import "./App.css";

export default function AppCounter() {
  const [count, setCount] = useState(0);
  const handleTotalCount = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div className="container">
      <div className="banner">
        Total Count: {count} {count > 10 ? "🔥" : "❄️"}
      </div>
      <div className="counters">
        <Counter handleTotalCount={handleTotalCount} />
        <Counter handleTotalCount={handleTotalCount} />
      </div>
    </div>
  );
}
