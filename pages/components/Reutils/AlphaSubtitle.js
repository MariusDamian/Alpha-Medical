import React from "react";

function AlphaSubtitle(props) {
  return <div className={`text-${props.color} text-[20px] leading-[25px]`}>{props.title}</div>;
}

export default AlphaSubtitle;
