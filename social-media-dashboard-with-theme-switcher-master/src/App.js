import React, { useState } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import FollowersSection from "./components/FollowersSection";
import OverviewContainer from "./components/OverviewContainer";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "App dark-mode" : "App"}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <FollowersSection darkMode={darkMode} setDarkMode={setDarkMode} />
      <OverviewContainer darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}

export default App;
