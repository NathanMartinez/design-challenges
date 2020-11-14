import React, { useContext } from "react";
import "../styles/FollowerSection.css";
import FollowerSectionCard from "./FollowerSectionCard";
import { ThemeContext } from "../Context/ThemeProvider";

function FollowersSection() {
  const darkMode = useContext(ThemeContext);
  return (
    <div
      className={darkMode ? "followers-section dark-mode" : "followers-section"}
    >
      <FollowerSectionCard
        platform="facebook"
        username="@natem"
        followers="1987"
        updateDirection="up"
        updateCount="12"
      />
      <FollowerSectionCard
        platform="twitter"
        username="@natem"
        followers="1044"
        updateDirection="up"
        updateCount="99"
      />
      <FollowerSectionCard
        platform="instagram"
        username="@realnatem"
        followers="11k"
        updateDirection="up"
        updateCount="1099"
      />
      <FollowerSectionCard
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
