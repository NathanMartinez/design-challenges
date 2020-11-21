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
      {monthly
        ? Monthly.map((cardData, i) => <Card key={i} data={cardData} />)
        : Annually.map((cardData, i) => <Card key={i} data={cardData} />)}
    </div>
  );
}

export default App;
