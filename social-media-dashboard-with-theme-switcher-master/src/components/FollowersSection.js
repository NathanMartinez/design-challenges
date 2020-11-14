import React from "react";
import FollowerSectionCard from "./FollowerSectionCard";

function FollowersSection({ darkMode, setDarkMode }) {
  return (
    <div
      className={darkMode ? "follwers-section dark-mode" : "followers-section"}
    >
      <FollowerSectionCard darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}

export default FollowersSection;
