import React, { useState, useEffect } from "react";
import "./AppXY.css";

export default function AppXY() {
  const [mousePointer, setMousePointer] = useState({ left: 0, top: 0 });

  return (
    <div
      className="container"
      onPointerMove={(e) => {
        // setMousePointer({ left: e.clientX, top: e.clientY });
        // 만약 수평으로만 이동이 가능하다면?
        setMousePointer((prev) => ({ ...prev, left: e.clientX }));
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
