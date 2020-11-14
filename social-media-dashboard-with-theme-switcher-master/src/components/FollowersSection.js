import React from "react";
import FollowerSectionCard from "./FollowerSectionCard";

function FollowersSection({ darkMode, setDarkMode }) {
  return (
    <div
      className={darkMode ? "follwers-section dark-mode" : "followers-section"}
    >
      <FollowerSectionCard
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        platform="facebook"
        username="Nate Martinez"
        followers="1294"
        updateDirection="up"
        updateCount="1653"
      />
      <FollowerSectionCard
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        platform="twitter"
        username="@NateMtz"
        followers="2394"
        updateDirection="up"
        updateCount="1243"
      />
      <FollowerSectionCard
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        platform="instagram"
        username="NateMtz"
        followers="1294"
        updateDirection="up"
        updateCount="23"
      />
      <FollowerSectionCard
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        platform="youtube"
        username="Nate M."
        followers="2894"
        updateDirection="down"
        updateCount="12"
      />
    </div>
  );
}

export default FollowersSection;
