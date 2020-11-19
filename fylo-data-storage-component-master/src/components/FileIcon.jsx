import React from "react";

export default function FileIcon({name}) {
  return <div className="FileIcon">
    <img src={`./images/icon-${name}.svg`} alt="" />
  </div>;
}
