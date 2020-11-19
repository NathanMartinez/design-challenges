import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import WhatsLeft from "./WhatsLeft";

export default function StorageContainer() {
  const [value, setValue] = useState(815);
  return (
    <div className="StorageContainer">
      <p>
        You've used
        <span> {value} BG </span>
        of your storage
      </p>
      <ProgressBar min="0" max="1000" value={value} setValue={setValue} />
      <WhatsLeft value={value} max="1000" />
    </div>
  );
}
