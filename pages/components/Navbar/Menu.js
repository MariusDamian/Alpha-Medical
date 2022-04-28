import { React, useState, useEffect, useContext } from "react";
import { dataContext } from "../../../Util/ContextData";
import { Fade } from "react-reveal";
import { BsPlus, BsFacebook } from "react-icons/bs";

function Menu() {
  const { menu, setMenu } = useContext(dataContext);
  return menu ? (
    <Fade right>
      <div className='w-[550px] bg-black/80 h-full fixed top-0 right-0 z-20 flex flex-col items-start justify-center space-y-5 text-white px-10 backdrop-blur-xl'>
        <div className='text-2xl space-y-4 flex flex-col items-start mt-10'>
          <button className='hover:text-alpha-green font-semibold transition-all duration-300'>
            <BsPlus className='inline-block mb-1 text-3xl' />
            Acasa
          </button>
          <button className='hover:text-alpha-green font-semibold transition-all duration-300'>
            <BsPlus className='inline-block mb-1 text-3xl' />
            Produse
          </button>
          <button className='hover:text-alpha-green font-semibold transition-all duration-300'>
            <BsPlus className='inline-block mb-1 text-3xl' />
            Parteneri
          </button>
          <button className='hover:text-alpha-green font-semibold transition-all duration-300'>
            <BsPlus className='inline-block mb-1 text-3xl' />
            Contact
          </button>
        </div>
        <div>Dark mode</div>
        <div className='max-w-[300px]'>
          <h1 className='text-2xl'>Adresa</h1>
          <p className='my-3'>Adresa Str. Sandu-Aldea Constantin nr.22, Sector 1, Bucureşti Romania</p>
          <p>Phone: +40 21 323 14 23 </p>
          <p>Mail: office@alphamedical.ro</p>
        </div>
      </div>
    </Fade>
  ) : (
    ""
  );
}

export default Menu;
