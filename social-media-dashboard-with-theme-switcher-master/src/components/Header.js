import React from "react";
import "../styles/Header.css";
import HeaderText from "./HeaderText";
import Toggle from "./Toggle";

function Header({ darkMode, setDarkMode }) {
  return (
    <div className={darkMode ? "Header dark-mode" : "Header"}>
      <HeaderText darkMode={darkMode} setDarkMode={setDarkMode} />
      <Toggle darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}

export default Header;
