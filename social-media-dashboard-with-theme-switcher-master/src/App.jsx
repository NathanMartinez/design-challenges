import React, { useContext } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import FollowersSection from "./components/FollowersSection";
import OverviewContainer from "./components/OverviewContainer";
import { ThemeContext } from "./Context/ThemeProvider";

function App() {
  const darkMode = useContext(ThemeContext);
  return (
    <div className={darkMode ? "App dark-mode" : "App"}>
      <Header />
      <FollowersSection />
      <OverviewContainer />
    </div>
  );
}

export default App;
