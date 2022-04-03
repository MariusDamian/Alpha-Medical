import React from "react";
import partners from "../JSON/partners.json";
import Link from "next/dist/client/link";

function Partners() {
  return (
    <div className="bg-[url('/images/svgbg2.svg')]">
      <div className='min-h-screen flex flex-col items-center justify-center max-w-7xl mx-auto' id='service'>
        <Link href={"/parteneri"}>
          <h1 className='mt-20 pt-10 lg:text-4xl text-2xl font-medium text-gray-200'>Parteneri</h1>
        </Link>
        <p className='pb-20 pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className='lg:py-16 lg:px-28 flex flex-col items-center justify-center'>
          <div className='flex flex-wrap'>
            {partners.map((partner, index) => (
              <a href={partner.partnerLink} target='_blank' rel='noreferrer' key={index} className='lg:w-[17%] w-1/3 rounded shadow-lg p-2 h-28 m-3 flex items-center justify-center bg-gray-100 transform transition-all group'>
                <img src={`/images/partnerLogo/${partner.partnerName}.svg`} className='transform scale-75 group-hover:scale-90 transition-all duration-700 hover:saturate-150' />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partners;
