import React from "react";
import Rating from "./Rating";
import { Ratings } from "../PageData/ratings";

export default function RatingSection() {
  return (
    <div className="rating-section">
      {Ratings.map((rating) => (
        <Rating
          key={rating.id}
          starCount={rating.starCount}
          company={rating.company}
        />
      ))}
    </div>
  );
}
