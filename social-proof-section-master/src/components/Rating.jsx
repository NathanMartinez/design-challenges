import React from "react";

export default function Rating({ starCount, company }) {
  const stars = new Array(starCount).fill();
  return (
    <div className="rating">
      <div className="star-container">
        {stars.map((_, index) => (
          <img
            className="star"
            key={index}
            src="./images/icon-star.svg"
            alt="star"
          />
        ))}
      </div>
      <h4>Rated 5 Stars in {company}</h4>
    </div>
  );
}
