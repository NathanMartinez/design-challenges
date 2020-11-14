import React from "react";
import "../styles/FollowerSectionCard.css";

function FollowerSectionCard({ darkMode, setDarkMode }) {
  return (
    <div
      className={
        darkMode ? "follower-section-card dark-mode" : "follower-section-card"
      }
    >
      <div className="icon-username-container">
        <img src="./images/icon-facebook.svg" alt="social-icon"></img>
        <p>NathanMartinez</p>
      </div>
      <div className="follower-count-container">
        <h1>3000</h1>
        <h4>followers</h4>
      </div>
      <div className="update-info">
        <img src="./images/icon-up.svg" alt="up" />
        <p>99 Today</p>
      </div>
    </div>
  );
}

export default FollowerSectionCard;
