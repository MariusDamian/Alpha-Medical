import AlphaTitle from "../Reutils/AlphaTitle";
import AlphaSubtitle from "../Reutils/AlphaSubtitle";
import { React, useState, useEffect, useContext } from "react";
import carousel from "../JSON/carousel.json";

function Hero() {
  const [crsNumber, setCrsNumber] = useState(0);
  useEffect(() => {
    setTimeout(function () {
      crsNumber < carousel.length - 1 ? setCrsNumber(crsNumber + 1) : setCrsNumber(0);
    }, 6000);
  }, [crsNumber]);

  return (
    <div className='bg-alpha-bg h-screen'>
      <div className='h-full pt-36 flex flex-row'>
        <div className='w-1/2 flex flex-col items-center justify-center h-full'>
          <div className='flex flex-col items-start justify-center'>
            <AlphaTitle title={carousel[crsNumber].crsTitle} />
            <div className='max-w-xs my-11'>
              <AlphaSubtitle title={carousel[crsNumber].crsDesc} />
            </div>
            <button className='css-button-sliding-to-left--green'>DESCOPERA</button>
          </div>
        </div>
        <div className={`w-1/2 bg-[url("/images/${carousel[crsNumber].crsImg}")] bg-cover`}></div>
      </div>
    </div>
  );
}

export default Hero;
