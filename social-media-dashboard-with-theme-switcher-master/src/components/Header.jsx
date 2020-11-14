import React, { useContext } from "react";
import "../styles/Header.css";
import HeaderText from "./HeaderText";
import Toggle from "./Toggle";
import { ThemeContext } from "../Context/ThemeProvider";

function Header() {
  const darkMode = useContext(ThemeContext);
  return (
    <div className={darkMode ? "Header dark-mode" : "Header"}>
      <HeaderText />
      <Toggle />
    </div>
  );
}

export default Header;
