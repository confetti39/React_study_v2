import React, { useState, useEffect } from "react";
import "./AppXY.css";

export default function AppXY() {
  const [mousePointer, setMousePointer] = useState({ left: 0, top: 0 });
  useEffect(() => {
    let pointer = document.querySelector(".pointer");
    document.addEventListener("mousemove", (event) => {
      setMousePointer({ left: event.clientX, top: event.clientY });
      pointer.style.left = mousePointer.left - 15 + "px";
      pointer.style.top = mousePointer.top - 15 + "px";
    });
  }, [mousePointer]);

  return (
    <div className="container">
      <div className="pointer" />
    </div>
  );
}
