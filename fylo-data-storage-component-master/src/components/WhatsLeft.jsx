import React from "react";

export default function WhatsLeft({ value, max }) {
  return (
    <div className="WhatsLeft">
      <h1>{max - value}</h1>
      <span>gb left</span>
    </div>
  );
}
