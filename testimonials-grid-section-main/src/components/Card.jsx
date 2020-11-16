import React from "react";

export default function Card({ imageName, name, title, quote }) {
  return (
    <div className="card">
      <div className="header">
        <img src={`./images/image-${imageName}.jpg`} alt="" />
        <div className="user-info">
          <p>{name}</p>
          <small>Verified Graduate</small>
        </div>
      </div>
      <h5>{title}</h5>
      <p>{quote}</p>
    </div>
  );
}
