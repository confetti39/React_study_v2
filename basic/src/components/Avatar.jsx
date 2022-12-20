import React from "react";

export default function Avatar({ image, isNew }) {
  return (
    <div className="avatar">
      {isNew && <span className="new">new</span>}
      <img className="photo" src={image} alt="avatar" />
    </div>
  );
}
