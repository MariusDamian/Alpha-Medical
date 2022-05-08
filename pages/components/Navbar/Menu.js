import { React, useState, useEffect, useContext } from "react";
import { dataContext } from "../../../Util/ContextData";
import { BsPlus, BsFacebook } from "react-icons/bs";
import { Fade, ScaleFade, Slide, SlideFade } from "@chakra-ui/react";
import Link from "next/link";

function Menu() {
  const { menu, setMenu } = useContext(dataContext);
  const { dark, setDark } = useContext(dataContext);
  function toggleDark() {
    document.body.classList.toggle("dark");
    setDark(!dark);
  }
  return (
    <Slide direction='right' in={menu} style={{ zIndex: 10 }} transition={{ exit: { duration: 1 } }}>
      <div className='lg:w-[550px] w-screen bg-black/80 h-full fixed top-0 right-0 z-20 flex flex-col items-start justify-center space-y-5 text-white px-10 backdrop-blur-xl'>
        <div className='text-2xl space-y-4 flex flex-col items-start mt-10'>
          <Link href={"/"}>
            <button onClick={() => setMenu(false)} className='hover:text-alpha-green font-semibold transition-all duration-300'>
              <BsPlus className='inline-block mb-1 text-3xl' />
              Acasa
            </button>
          </Link>
          <Link href={"/produse"}>
            <button onClick={() => setMenu(false)} className='hover:text-alpha-green font-semibold transition-all duration-300'>
              <BsPlus className='inline-block mb-1 text-3xl' />
              Produse
            </button>
          </Link>
          <Link href={"/parteneri"}>
            <button onClick={() => setMenu(false)} className='hover:text-alpha-green font-semibold transition-all duration-300'>
              <BsPlus className='inline-block mb-1 text-3xl' />
              Parteneri
            </button>
          </Link>
          <Link href={"/contact"}>
            <button onClick={() => setMenu(false)} className='hover:text-alpha-green font-semibold transition-all duration-300'>
              <BsPlus className='inline-block mb-1 text-3xl' />
              Contact
            </button>
          </Link>
        </div>
        <div className='border-t-2 border-b-2 border-alpha-green'>
          <button onClick={toggleDark} className='py-4 w-32'>
            {dark ? <img src='../images/darkbtn.svg' alt='' /> : <img src='../images/lightbtn.svg' alt='' />}
          </button>
        </div>
        <div className='max-w-[300px]'>
          <h1 className='text-2xl'>Adresa</h1>
          <p className='my-3'>Adresa Str. Sandu-Aldea Constantin nr.22, Sector 1, Bucureşti Romania</p>
          <p>Phone: +40 21 323 14 23 </p>
          <p>Mail: office@alphamedical.ro</p>
        </div>
      </div>
    </Slide>
  );
}

export default Menu;
