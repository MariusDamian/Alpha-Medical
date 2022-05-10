import { React, useState, useEffect, useContext } from "react";
import AlphaTitle from "../Reutils/AlphaTitle";
import AlphaSubtitle from "../Reutils/AlphaSubtitle";
import Link from "next/link";
import { dataContext } from "../../../Util/ContextData";

function AboutSection() {
  const { eng, setEng } = useContext(dataContext);
  return (
    <>
      <div className='h-[600px] bg-[#0F0E0E] dark:bg-[#244259]'>
        <div className='max-w-[1440px] flex flex-col items-start justify-center h-full mx-auto px-10'>
          <div className='flex flex-row justify-between w-full px-3'>
            <AlphaTitle title={eng ? "Serviciile noastre" : "Our services"} color='text-alpha-green' />
            <img src='./images/greenTile.svg' alt='' className='lg:ml-40 scale-75 lg:scale-100' />
          </div>
          <div className='max-w-3xl text-justify my-12 space-y-5'>
            <AlphaSubtitle title={"Activam in domeniul importului si distributiei de echipamente si dispozitive medicale si asiguram servicii si produse de inalta calitate, precum si suport calificat pentru intretinerea si service-ul lor."} color='text-white' />
            <AlphaSubtitle title={"Suntem adeptii satisfacerii celor mai exigente cerinte ale clientilor, drept pentru care colaboram cu numeroase companii de prestigiu Europa, Asia si Statele Unite, pentru a furniza pietei medicale din Romania o gama variata de produse la cele mai inalte standarde de calitate."} color='text-white' />
          </div>
          {/* <button className='css-button-sliding-to-left--black scale-75 lg:scale-100 dark:bg-transparent'>DESCARCA BROSURA</button> */}
        </div>
      </div>
      <div className='h-[600px] dark:bg-alpha-bg-dark'>
        <div className='max-w-[1440px] flex flex-col items-start justify-center h-full mx-auto px-10'>
          <AlphaTitle title='Produsele Noastre' />
          <div className='flex flex-row items-end mb-12'>
            <div className='max-w-3xl text-justify mt-12'>
              <AlphaSubtitle
                title='Distribuitor autorizat de aparatură și echipamente medicale.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sollicitudin sed tellus non eleifend. Donec vulputate, urna non sodales imperdiet, turpis tortor volutpat neque, a congue arcu velit in tellus. Vestibulum egestas scelerisque dictum. Suspendisse in mollis ante. Integer molestie sit amet tortor sed fringilla.'
              />
            </div>
            <img src='./images/grayTile.svg' alt='' className='ml-20 lg:block hidden' />
          </div>
          <Link href={"/produse"}>
            <button className='css-button-sliding-to-left--green scale-75 lg:scale-100 dark:text-white dark:border-white'>DESCOPERA</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default AboutSection;
