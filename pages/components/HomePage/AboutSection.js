import React from "react";
import Typed from "react-typed";
import Link from "next/dist/client/link";

function AboutSection() {
  return (
    <div className='min-h-screen w-full flex flex-col items-center justify-start text-gray-200 leading-8 max-w-7xl mx-auto pb-20' id='despre'>
      <div className='py-24 flex flex-col items-center justify-center text-center space-y-3'>
        <h1 className='lg:text-5xl text-2xl'>Alpha Medical</h1>
        <h2 className='lg:text-2xl text-2xl'>
          <Typed strings={["Distribuitori Exclusivi.", "Service Autorizat.", "Echipamente Medicale.", "Certificare ISO 9001 si ISO 13485"]} typeSpeed={120} backSpeed={15} backDelay={1000} loop />
        </h2>
      </div>
      <div className='flex flex-row space-x-5 py-10'>
        <Link href='ati/acces-vascular'>
          <div className='transform transition-all duration-700 hover:scale-105 h-[600px] cursor-pointer'>
            <img src='./images/1.webp' alt='' className='mt-2' />
          </div>
        </Link>
        <Link href='ati/managementul-cailor-respiratorii'>
          <div className='transform transition-all duration-700 hover:scale-105 h-[600px] cursor-pointer'>
            <img src='./images/2.webp' alt='' className='mt-6' />
          </div>
        </Link>
        <Link href='ati/ventilatie-mecanica'>
          <div className='transform transition-all duration-700 hover:scale-105 h-[600px] cursor-pointer'>
            <img src='./images/3.webp' alt='' className='mt-2' />
          </div>
        </Link>
        <Link href='protectie-impotriva-infectiilor/pansamente-chg'>
          <div className='transform transition-all duration-700 hover:scale-105 h-[600px] cursor-pointer'>
            <img src='./images/4.webp' alt='' className='mt-6' />
          </div>
        </Link>
        <Link href='ati/monitorizare-functii-vitale'>
          <div className='transform transition-all duration-700 hover:scale-105 h-[600px] cursor-pointer'>
            <img src='./images/5.webp' alt='' className='mt-2' />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default AboutSection;
