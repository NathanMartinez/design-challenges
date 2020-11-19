import React from "react";

export default function ProgressBar({ min, max, value, setValue }) {
  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
  };
  return (
    <div className="ProgressBar-div">
      <input
        className="ProgressBar"
        type="range"
        name="progess"
        min={min}
        max={max}
        step="1"
        value={value}
        onChange={handleChange}
      />
      <div className="amount-container">
        <p>{min} GB</p>
        <p>{max} GB</p>
      </div>
    </div>
  );
}
