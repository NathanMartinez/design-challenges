import React from "react";

const Card = ({data: {
  packageType,
  price,
  storageAmt,
  userCount,
  sendAmt,
  accent,}
}) => {
  return (
    <div className={accent ? "Card accent" : "Card"}>
      <h4>{packageType}</h4>
      <div className="price-container">
        <small>$</small>
        <h1>{price}</h1>
      </div>
      <div className="info-container">
        <div className="info-section">
          <p>{storageAmt} Storage</p>
        </div>
        <div className="info-section">
          <p>{userCount} Users Allowed</p>
        </div>
        <div className="info-section">
          <p>Send up to {sendAmt} GB</p>
        </div>
      </div>
      <button type="button">learn more</button>
    </div>
  );
};

export default Card;
