import AlphaTitle from "../Reutils/AlphaTitle";
import AlphaSubtitle from "../Reutils/AlphaSubtitle";
import { React, useState, useEffect, useContext } from "react";
import carousel from "../JSON/carousel.json";

function Hero() {
  const [crsNumber, setCrsNumber] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (crsNumber === carousel.length - 1) {
        setCrsNumber(0);
      } else {
        setCrsNumber(crsNumber + 1);
      }
    }, 6000);

    return () => clearInterval(intervalId);
  }, [crsNumber]);

  return (
    <div className='bg-alpha-bg h-screen'>
      <div className='h-full pt-36 flex flex-row'>
        <div className='w-1/2 flex flex-col items-center justify-center h-full relative'>
          <div className='space-x-2 absolute right-0 top-0 p-2'>
            <button onClick={() => (crsNumber === 0 ? setCrsNumber(carousel.length - 1) : setCrsNumber(crsNumber - 1))}>
              <img src='./images/left-arrow.svg' alt='' />
            </button>
            <button onClick={() => (crsNumber < carousel.length - 1 ? setCrsNumber(crsNumber + 1) : setCrsNumber(0))}>
              <img src='./images/right-arrow.svg' alt='' />
            </button>
          </div>
          <div className='flex flex-col items-start justify-center w-full max-w-2xl'>
            <AlphaTitle title={carousel[crsNumber].crsTitle} />
            <div className='max-w-xs my-11'>
              <AlphaSubtitle title={carousel[crsNumber].crsDesc} />
            </div>
            <button className='css-button-sliding-to-left--green'>DESCOPERA</button>
          </div>
        </div>
        <img src={`/images/crsImage/${carousel[crsNumber].crsImg}`} className='w-1/2' alt='' />
      </div>
    </div>
  );
}

export default Hero;
