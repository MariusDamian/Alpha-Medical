import React from "react";
import Typed from "react-typed";

function AboutSection() {
  return (
    <div className='min-h-screen w-full flex flex-row text-gray-200 leading-8' id='despre'>
      <div className='w-1/2'>
        <img src='./images/about3.webp' alt='' className='' />
      </div>
      <div className='w-1/2 min-h-screen flex items-center'>
        <div className='bg-[#00001a] w-full min-h-[80%] -ml-52 rounded-3xl flex flex-col py-28 pl-24 space-y-8'>
          <h1 className='lg:text-4xl text-2xl font-medium pb-6'>
            <Typed strings={["Distribuitori Exclusivi.", "Service Autorizat.", "Echipamente Medicale.", "Certificare ISO 9001 si ISO 13485"]} typeSpeed={120} backSpeed={15} backDelay={1000} loop />
          </h1>
          <div className='flex flex-row items-center space-x-10 mt-20'>
            <img src='./images/international.png' alt='' className='' />
            <p>Avem o abordare holistica asupra specialitatilor medicale, asigurand solutii complete prin colaborarea cu numeroase companii de prestigiu din Europa, Statele Unite si Asia, pentru a oferi sistemului medical romanesc o gama variata de produse, la cele mai inalte standarde.</p>
          </div>
          <div className='flex flex-row items-center space-x-10'>
            <img src='./images/serv.png' alt='' className='' />
            <p>Dispunem de un service complet autorizat de catre Ministerul Sanatatii, cu tehnicieni si inginerii instruiti periodic si cu o vasta experienta in domeniul echipamentelor medicale.</p>
          </div>
          <div className='flex flex-row items-center space-x-10'>
            <img src='./images/award.png' alt='' className='' />
            <p>Detinem certiﬁcare ISO 9001 si ISO 13485, demonstrand abilitatea de a mentine constant standarde ridicate in activitatile de import, distributie, depozitare si mentenanta dispozitive medicale.</p>
          </div>
          <div className='flex flex-row items-center space-x-10'>
            <img src='./images/distr.png' alt='' className='' />
            <p>Suntem distribuitori exclusivi ai urmatorilor producatori: 3M (selectie de produse), Steris Corporation (Sterilizare), Teleflex Medical, Hamilton Medical, Fujifilm SonoSite etc.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
