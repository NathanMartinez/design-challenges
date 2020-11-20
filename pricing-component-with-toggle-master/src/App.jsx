import React, { useState } from "react";
import Toggle from "./components/Toggle";
import { Monthly, Annually } from "./priceData";

const { default: Card } = require("./components/Card");

function App() {
  const [monthly, setMonthly] = useState(false);
  return (
    <div className="App">
      <h1>Our Pricing</h1>
      <Toggle monthly={monthly} setMonthly={setMonthly} />
      {monthly ? Monthly.map((cardData, i) => <Card key={i} packageType={cardData.packageType}
  price={cardData.price}
  storageAmt={cardData.storageAmt}
  userCount={cardData.userCount}
  sendAmt={cardData.sendAmt}
  accent={cardData.accent}/>) : Annually.map((cardData, i) => <Card key={i} packageType={cardData.packageType}
  price={cardData.price}
  storageAmt={cardData.storageAmt}
  userCount={cardData.userCount}
  sendAmt={cardData.sendAmt}
  accent={cardData.accent}/>)}
    </div>
  );
}

export default App;
