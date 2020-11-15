import React, { useState } from "react";

export default function EmailInput() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  function handleChange(e) {
    const { value } = e.target;
    setEmail(value);
  }

  function validateEmail(params) {
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(
      email
    )
      ? setError(false)
      : setError(true);
  }

  return (
    <div className={`email-input ${error ? "error" : ""}`}>
      <input type="email" placeholder="Email Address" onChange={handleChange} />
      <button type="button" onClick={validateEmail}>
        <img src="./images/icon-arrow.svg" alt="arrow" />
      </button>
      <img id="error-icon" src="./images/icon-error.svg" alt="error" />
      <p id="error-text">Please provide a valid email</p>
    </div>
  );
}
