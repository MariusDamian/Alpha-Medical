import partners from "../JSON/partners.json";
import AlphaTitle from "../Reutils/AlphaTitle";
import { React, useState, useEffect, useContext } from "react";
import { dataContext } from "../../../Util/ContextData";

function Partners() {
    const { eng, setEng } = useContext(dataContext);
  return (
    <div className='bg-[#f0f0f0] dark:bg-alpha-bg-dark pt-20'>
      <div className='min-h-screen flex flex-col items-center justify-center max-w-[1440px] mx-auto px-10'>
        <div className='flex flex-row'>
          <AlphaTitle title={eng ? 'Parteneri' : 'Partners'} />
          <img src='./images/smallGrayTile.svg' alt='' className='lg:ml-16 lg:scale-100 scale-50' />
        </div>
        <div className='lg:py-24 flex flex-col items-center justify-center'>
          <div className='flex flex-wrap justify-center lg:justify-start'>
            {partners.map((partner, index) => (
              <a href={partner.partnerLink} target='_blank' rel='noreferrer' key={index} className='xl:w-[152px] w-[100px] p-2 aspect-square m-1 flex items-center justify-center bg-[#E3E3E3] transform transition-all group'>
                <img src={`/images/partnerLogo/${partner.partnerName}.svg`} className='transform lg:scale-[85%] group-hover:scale-90 transition-all duration-500' />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partners;
