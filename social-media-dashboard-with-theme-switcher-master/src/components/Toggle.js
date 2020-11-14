import React, { useState } from "react";
import "../styles/Toggle.css";

function Toggle({ darkMode, setDarkMode }) {
  return (
    <div
      className={darkMode ? "toggle dark-mode" : "toggle"}
      onClick={(e) => setDarkMode(!darkMode)}
    >
      <p className="toggle-text">{darkMode ? "Dark Mode" : "Light Mode"}</p>
      <div className="toggle-icon">
        <div className="toggle-dot"></div>
      </div>
    </div>
  );
}

export default Toggle;
