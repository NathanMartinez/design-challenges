import React from "react";

export default function EmailInput() {
  return (
    <div className="email-input">
      <input type="email" placeholder="Email Address" />
      <button type="button">
        <img src="./images/icon-arrow.svg" alt="arrow" />
      </button>
      <img id="error-icon" src="./images/icon-error.svg" alt="error" />
      <p id="error-text">Please provide a valid email</p>
    </div>
  );
}
