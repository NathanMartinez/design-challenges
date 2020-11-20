import React from "react";

export default function Toggle({ monthly, setMonthly }) {
  const handleClick = () => {
    setMonthly((prev) => !prev);
  };
  return (
    <div className="toggle-container">
      <p>Annually</p>
      <div className={monthly ? "toggle monthly" : "toggle"}>
        <div className="toggle-dot" onClick={handleClick}></div>
      </div>
      <p>Monthly</p>
    </div>
  );
}
