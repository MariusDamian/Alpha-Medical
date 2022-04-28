import React from "react";
import partners from "../JSON/partners.json";
import AlphaTitle from "../Reutils/AlphaTitle";

function Partners() {
  return (
    <div className='bg-[#f0f0f0]'>
      <div className='min-h-screen flex flex-col items-center justify-center max-w-[1440px] mx-auto'>
        <div className='flex flex-row'>
          <AlphaTitle title='Parteneri' />
          <img src='./images/smallGrayTile.svg' alt='' className='ml-16' />
        </div>
        <div className='lg:py-24 flex flex-col items-center justify-center'>
          <div className='flex flex-wrap'>
            {partners.map((partner, index) => (
              <a href={partner.partnerLink} target='_blank' rel='noreferrer' key={index} className='w-[152px] p-2 h-[152px] m-1 flex items-center justify-center bg-[#E3E3E3] transform transition-all group'>
                <img src={`/images/partnerLogo/${partner.partnerName}.svg`} className='transform scale-[85%] group-hover:scale-90 transition-all duration-500' />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partners;
