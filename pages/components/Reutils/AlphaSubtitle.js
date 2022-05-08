import React from "react";

function AlphaSubtitle(props) {
  return <div className={`${props.color} 2xl:text-xl !leading-[25px] px-3 lg:px-0`}>{props.title}</div>;
}

export default AlphaSubtitle;
