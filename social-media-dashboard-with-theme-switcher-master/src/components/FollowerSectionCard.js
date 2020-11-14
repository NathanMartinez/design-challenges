import React from "react";
import "../styles/FollowerSectionCard.css";

function FollowerSectionCard({
  darkMode,
  setDarkMode,
  platform,
  username,
  followers,
  updateDirection,
  updateCount,
}) {
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
        <img src={`./images/icon-${updateDirection}.svg`} alt="up" />
        <p>{updateCount} Today</p>
      </div>
    </div>
  );
}

export default FollowerSectionCard;
