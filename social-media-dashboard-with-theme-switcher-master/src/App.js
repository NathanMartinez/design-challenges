import React, { useState } from "react";
import "./styles/App.css";
import Header from "./components/Header";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "App dark-mode" : "App"}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}

export default App;
