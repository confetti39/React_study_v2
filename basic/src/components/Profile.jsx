import React from "react";

export default function Profile({ image, name, title }) {
  return (
    <div className="profile">
      <img className="photo" src={image} alt="avatar" />
      <h1>{name}</h1>
      <p>{title}</p>
    </div>
  );
}
