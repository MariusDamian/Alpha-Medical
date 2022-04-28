import React from "react";
import AlphaTitle from "../Reutils/AlphaTitle";
import AlphaSubtitle from "../Reutils/AlphaSubtitle";

function AboutSection() {
  return (
    <>
      <div className='h-[600px] bg-[#0F0E0E]'>
        <div className='max-w-[1440px] flex flex-col items-start justify-center h-full mx-auto'>
          <div className='flex flex-row'>
            <AlphaTitle title='Servicii Alpha Medical' color='text-alpha-green' />
            <img src='./images/greenTile.svg' alt='' className='ml-40' />
          </div>
          <div className='max-w-3xl text-justify my-12'>
            <AlphaSubtitle
              title='Distribuitor autorizat de aparatură și echipamente medicale.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sollicitudin sed tellus non eleifend. Donec vulputate, urna non sodales imperdiet, turpis tortor volutpat neque, a congue arcu velit in tellus. Vestibulum egestas scelerisque dictum. Suspendisse in mollis ante. Integer molestie sit amet tortor sed fringilla.'
              color='text-white'
            />
          </div>
          <button className='css-button-sliding-to-left--black'>DESCARCA BROSURA</button>
        </div>
      </div>
      <div className='h-[600px]'>
        <div className='max-w-[1440px] flex flex-col items-start justify-center h-full mx-auto'>
          <AlphaTitle title='Produsele Noastre' />
          <div className='flex flex-row items-end'>
            <div className='max-w-3xl text-justify mt-12'>
              <AlphaSubtitle
                title='Distribuitor autorizat de aparatură și echipamente medicale.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sollicitudin sed tellus non eleifend. Donec vulputate, urna non sodales imperdiet, turpis tortor volutpat neque, a congue arcu velit in tellus. Vestibulum egestas scelerisque dictum. Suspendisse in mollis ante. Integer molestie sit amet tortor sed fringilla.'
              />
            </div>
            <img src='./images/grayTile.svg' alt='' className='ml-20' />
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutSection;
