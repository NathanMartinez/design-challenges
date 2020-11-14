import React, { useContext } from "react";
import "../styles/Toggle.css";
import { ThemeContext, ThemeContextUpdate } from "../Context/ThemeProvider";

function Toggle() {
  const darkMode = useContext(ThemeContext);
  const setDarkMode = useContext(ThemeContextUpdate);
  return (
    <div
      className={darkMode ? "toggle dark-mode" : "toggle"}
      onClick={() => setDarkMode((prev) => !prev)}
    >
      <p className="toggle-text">{darkMode ? "Dark Mode" : "Light Mode"}</p>
      <div className="toggle-icon">
        <div className="toggle-dot"></div>
      </div>
    </div>
  );
}

export default Toggle;
