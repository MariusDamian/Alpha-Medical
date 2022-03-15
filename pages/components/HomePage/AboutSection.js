import React from "react";
import Typed from "react-typed";

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
        <div className='transform transition-all duration-700 hover:scale-105 h-[600px]'>
          <img src='./images/1.png' alt='' className="mt-2"/>
        </div>
        <div className='transform transition-all duration-700 hover:scale-105 h-[600px]'>
          <img src='./images/2.png' alt='' className="mt-6"/>
        </div>
        <div className='transform transition-all duration-700 hover:scale-105 h-[600px]'>
          <img src='./images/3.png' alt='' className="mt-2"/>
        </div>
        <div className='transform transition-all duration-700 hover:scale-105 h-[600px]'>
          <img src='./images/4.png' alt='' className="mt-6"/>
        </div>
        <div className='transform transition-all duration-700 hover:scale-105 h-[600px]'>
          <img src='./images/5.png' alt='' className="mt-2"/>
        </div>
      </div>
      <h1 className='my-3 text-left w-full text-3xl'>Lorem ipsum dolor sit </h1>
      <h2 className='text-base font-light w-full text-left'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br></br> Alias et repellat blanditiis beatae quod quia eligendi, veritatis, necessitatibus itaque ut ex nulla, aliquam illum. <br></br> Magnam modi ut maxime officiis laboriosam!
      </h2>
    </div>
  );
}

export default AboutSection;
