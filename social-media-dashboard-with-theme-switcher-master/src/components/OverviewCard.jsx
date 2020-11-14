import React, { useContext } from "react";
import "../styles/OverviewCard.css";
import { ThemeContext } from "../Context/ThemeProvider";

function OverviewCard({ text, count, percentage, updateDirection, platform }) {
  const darkMode = useContext(ThemeContext);
  return (
    <div className={darkMode ? "overview-card dark-mode" : "overview-card"}>
      <div className="stats">
        <p>{text}</p>
        <h1>{count}</h1>
      </div>
      <div className="icon-percentage">
        <img
          id="platform-icon"
          src={`./images/icon-${platform}.svg`}
          alt="platform"
        />
        <div
          className={
            updateDirection === "up" ? "update-info up" : "update-info down"
          }
        >
          <img src={`./images/icon-${updateDirection}.svg`} alt="arrow" />
          <p>{percentage}%</p>
        </div>
      </div>
    </div>
  );
}

export default OverviewCard;
