import React from "react";

function AlphaSubtitle(props) {
  return <div className={`${props.color} 2xl:text-xl 2xl:!leading-[25px] dark:text-white text-sm`}>{props.title}</div>;
}

export default AlphaSubtitle;
