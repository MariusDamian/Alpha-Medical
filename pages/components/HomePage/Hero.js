import React from "react";
import AlphaTitle from "../Reutils/AlphaTitle";
import AlphaSubtitle from "../Reutils/AlphaSubtitle";
import { useEffect, useState } from "react/cjs/react.development";
import carousel from "../JSON/carousel.json";
import { Fade } from "react-reveal";

function Hero() {
  const [crsNumber, setCrsNumber] = useState(0);

  useEffect(() => {
    setTimeout(function () {
      crsNumber < carousel.length - 1 ? setCrsNumber(crsNumber + 1) : setCrsNumber(0);
      console.log(crsNumber);
    }, 6000);
  }, [crsNumber]);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     if (crsNumber === carousel.length - 1) {
  //       setCrsNumber(0);
  //     } else {
  //       setCrsNumber(crsNumber + 1);
  //     }
  //   }, 5000);

  //   return () => clearInterval(intervalId);
  // }, []);

  return (
    <div className='bg-alpha-bg h-screen'>
      <div className='h-full pt-36 flex flex-row'>
        <div className='w-1/2 flex flex-col items-center justify-center h-full'>
          <div className='flex flex-col items-start justify-center max-w-[600px] w-full'>
            <div className='w-full'>
              <AlphaTitle title={carousel[crsNumber]?.crsTitle} />
            </div>
            <div className='max-w-xs my-11'>
              <AlphaSubtitle title={carousel[crsNumber]?.crsDesc} />
            </div>
            <button className='css-button-sliding-to-left--green'>DESCOPERA</button>
          </div>
        </div>
        <Fade>
          {/* <div className='w-1/2 bg-[url("/images/crsImage/carusel-3.webp")] bg-cover transition-all duration-700'></div> */}
          <div className={`w-1/2 bg-[url("/images/crsImage/${carousel[crsNumber]?.crsImg}")] bg-cover transition-all duration-700`}></div>
        </Fade>
      </div>
    </div>
  );
}

export default Hero;
