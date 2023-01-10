import React, { useState, useEffect } from "react";
import "./AppXY.css";

export default function AppXY() {
  const [mousePointer, setMousePointer] = useState({ left: 0, top: 0 });

  return (
    <div
      className="container"
      onPointerMove={(e) => {
        setMousePointer({ left: e.clientX, top: e.clientY });
      }}
    >
      <div
        className="pointer"
        style={{
          transform: `translate(${mousePointer.left}px, ${mousePointer.top}px)`,
        }}
      />
    </div>
  );
}
