import React from "react";
import FollowerSectionCard from "./FollowerSectionCard";

function FollowersSection({ darkMode, setDarkMode }) {
  return (
    <div
      className={darkMode ? "follwers-section dark-mode" : "followers-section"}
    >
      <FollowerSectionCard
        darkMode={darkMode}
        platform="facebook"
        username="@natem"
        followers="1987"
        updateDirection="up"
        updateCount="12"
      />
      <FollowerSectionCard
        darkMode={darkMode}
        platform="twitter"
        username="@natem"
        followers="1044"
        updateDirection="up"
        updateCount="99"
      />
      <FollowerSectionCard
        darkMode={darkMode}
        platform="instagram"
        username="@realnatem"
        followers="11k"
        updateDirection="up"
        updateCount="1099"
      />
      <FollowerSectionCard
        darkMode={darkMode}
        platform="youtube"
        username="Nathan M."
        followers="8239"
        updateDirection="down"
        updateCount="144"
      />
    </div>
  );
}

export default FollowersSection;
