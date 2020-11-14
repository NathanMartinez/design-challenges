import React from "react";
import "../styles/OverviewContainer.css";
import OverviewCard from "./OverviewCard";

function OverviewContainer({ darkMode, setDarkMode }) {
  return (
    <div className="overview-container">
      <h1>Overview - Today</h1>
      <OverviewCard
        darkMode={darkMode}
        text="Page Views"
        count="87"
        percentage="3"
        updateDirection="up"
        platform="facebook"
      />
      <OverviewCard
        darkMode={darkMode}
        text="Likes"
        count="52"
        percentage="2"
        updateDirection="down"
        platform="facebook"
      />
      <OverviewCard
        darkMode={darkMode}
        text="Likes"
        count="5462"
        percentage="2257"
        updateDirection="up"
        platform="instagram"
      />
      <OverviewCard
        darkMode={darkMode}
        text="Profile Views"
        count="52k"
        percentage="1375"
        updateDirection="up"
        platform="instagram"
      />
      <OverviewCard
        darkMode={darkMode}
        text="Retweets"
        count="117"
        percentage="303"
        updateDirection="up"
        platform="twitter"
      />
      <OverviewCard
        darkMode={darkMode}
        text="Likes"
        count="507"
        percentage="553"
        updateDirection="up"
        platform="twitter"
      />
      <OverviewCard
        darkMode={darkMode}
        text="Likes"
        count="107"
        percentage="19"
        updateDirection="down"
        platform="youtube"
      />
      <OverviewCard
        darkMode={darkMode}
        text="Total Views"
        count="1407"
        percentage="12"
        updateDirection="down"
        platform="youtube"
      />
    </div>
  );
}

export default OverviewContainer;
