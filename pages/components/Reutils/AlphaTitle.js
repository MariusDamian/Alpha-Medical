import React from "react";

function AlphaTitle(props) {
  return <div className={`${props.color} text-[70px] leading-[60px]`}>{props.title}</div>;
}

export default AlphaTitle;
