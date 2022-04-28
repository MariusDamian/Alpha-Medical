import React from "react";
import AlphaTitle from "../Reutils/AlphaTitle";
import AlphaSubtitle from "../Reutils/AlphaSubtitle";

function Hero() {
  return (
    <div className='bg-alpha-bg h-screen'>
      <div className='h-full pt-36 flex flex-row'>
        <div className='w-1/2 flex flex-col items-center justify-center h-full'>
          <div className='flex flex-col items-start justify-center'>
            <AlphaTitle title='HAMILTON-C6' />
            <div className='max-w-xs my-11'>
              <AlphaSubtitle title='Generatia noua de ventilatoare performante' color='alpha-blue' />
            </div>
            <button className='css-button-sliding-to-left--green'>DESCOPERA</button>
          </div>
        </div>
        <div className='w-1/2 bg-[url("/images/home-1.png")] bg-cover'></div>
      </div>
    </div>
  );
}

export default Hero;
