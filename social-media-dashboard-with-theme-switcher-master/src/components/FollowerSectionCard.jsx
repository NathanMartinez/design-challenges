import React, { useContext } from "react";
import "../styles/FollowerSectionCard.css";
import { ThemeContext } from "../Context/ThemeProvider";

function FollowerSectionCard({
  platform,
  username,
  followers,
  updateDirection,
  updateCount,
}) {
  const darkMode = useContext(ThemeContext);
  return (
    <div
      className={
        darkMode ? `follower-section-card dark-mode` : `follower-section-card`
      }
    >
      <div
        className={darkMode ? `heading ${platform}` : `heading ${platform}`}
      ></div>
      <div className="icon-username-container">
        <img src={`./images/icon-${platform}.svg`} alt="social-icon"></img>
        <p>{username}</p>
      </div>
      <div className="follower-count-container">
        <h1>{followers}</h1>
        <h4>{platform === "youtube" ? "subscribers" : "followers"}</h4>
      </div>
      <div
        className={
          updateDirection === "up" ? "update-info up" : "update-info down"
        }
      >
        <img src={`./images/icon-${updateDirection}.svg`} alt="arrow" />
        <p>{updateCount} Today</p>
      </div>
    </div>
  );
}

export default FollowerSectionCard;
