import React from "react";

function AlphaSubtitle(props) {
  return <div className={`${props.color} 2xl:text-xl !leading-[25px] dark:text-white`}>{props.title}</div>;
}

export default AlphaSubtitle;
