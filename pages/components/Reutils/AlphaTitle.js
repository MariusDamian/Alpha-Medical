import React from "react";

function AlphaTitle(props) {
  return <div className={`${props.color} xl:text-[70px] lg:text-[60px] md:text-[40px] text-[30px] leading-[60px] max-w-[200px] lg:max-w-none dark:text-white`}>{props.title}</div>;
}

export default AlphaTitle;
