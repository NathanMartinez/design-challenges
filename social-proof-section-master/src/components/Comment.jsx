import React from "react";

export default function Comment({ imageName, name, quote }) {
  return (
    <div className="comment">
      <img src={`./images/image-${imageName}.jpg`} alt="profile" />
      <div className="buyer-info">
        <h5>{name}</h5>
        <h4>Verified Buyer</h4>
      </div>
      <blockquote>"{quote}"</blockquote>
    </div>
  );
}
