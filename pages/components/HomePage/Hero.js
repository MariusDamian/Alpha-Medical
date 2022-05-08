import AlphaTitle from "../Reutils/AlphaTitle";
import AlphaSubtitle from "../Reutils/AlphaSubtitle";
import { React, useState, useEffect, useContext } from "react";
import carousel from "../JSON/carousel.json";
import Subhero from "../HomePage/Subhero";
import Link from "next/link";

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
      <div className='flex flex-col h-full'>
        <div className='pt-36 flex lg:flex-row flex-col-reverse max-left h-full'>
          <div className='lg:w-[45%] flex flex-col items-start justify-center lg:h-full h-auto relative'>
            <div className='space-x-2 absolute right-0 top-0 p-2 lg:block hidden'>
              <button onClick={() => (crsNumber === 0 ? setCrsNumber(carousel.length - 1) : setCrsNumber(crsNumber - 1))}>
                <img src='./images/left-arrow.svg' alt='' className='hover:scale-90 transform transition-all duration-500' />
              </button>
              <button onClick={() => (crsNumber < carousel.length - 1 ? setCrsNumber(crsNumber + 1) : setCrsNumber(0))}>
                <img src='./images/right-arrow.svg' alt='' className='hover:scale-90 transform transition-all duration-500' />
              </button>
            </div>
            <div className='flex flex-col items-start justify-center w-full max-w-2xl py-5 px-3 lg:px-0'>
              <AlphaTitle title={carousel[crsNumber].crsTitle} />
              <div className='max-w-xs lg:my-11'>
                <AlphaSubtitle title={carousel[crsNumber].crsDesc} />
              </div>
              <Link href={carousel[crsNumber].crsLink}>
                <button className='css-button-sliding-to-left--green scale-75 lg:scale-100'>DESCOPERA</button>
              </Link>
            </div>
          </div>
          <div className='lg:w-[55%] h-2/3 lg:h-auto bg-cover transition-all duration-300' style={{ backgroundImage: `url(/images/crsImage/${carousel[crsNumber].crsImg})` }}></div>
        </div>
        <div>
          <Subhero />
        </div>
      </div>
    </div>
  );
}

export default Hero;
