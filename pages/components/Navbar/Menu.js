import { React, useState, useEffect, useContext } from "react";
import { dataContext } from "../../../Util/ContextData";
import { BsPlus, BsFacebook } from "react-icons/bs";
import { Fade, ScaleFade, Slide, SlideFade } from "@chakra-ui/react";
import Link from "next/link";

function Menu() {
  const { eng, setEng } = useContext(dataContext);
  const { menu, setMenu } = useContext(dataContext);
  const { dark, setDark } = useContext(dataContext);
  function toggleDark() {
    document.body.classList.toggle("dark");
    setDark(!dark);
  }
  return (
    <Slide direction='right' in={menu} style={{ zIndex: 10 }} transition={{ exit: { duration: 1 } }}>
      <div className='lg:w-[550px] w-screen bg-black/80 h-full fixed top-0 right-0 z-20 flex flex-col items-start justify-center space-y-5 text-white px-10 backdrop-blur-xl'>
        <div className='text-2xl lg:space-y-4 space-y-1 flex flex-col items-start lg:mt-10 mt-16'>
          <Link href={"/"}>
            <button onClick={() => setMenu(false)} className='hover:text-alpha-green font-semibold transition-all duration-300'>
              <BsPlus className='inline-block mb-1 text-3xl' />
              {eng ? "Acasa" : "Home"}
            </button>
          </Link>
          <Link href={"/produse"}>
            <button onClick={() => setMenu(false)} className='hover:text-alpha-green font-semibold transition-all duration-300'>
              <BsPlus className='inline-block mb-1 text-3xl' />
              {eng ? "Produse" : "Products"}
            </button>
          </Link>
          <Link href={"/parteneri"}>
            <button onClick={() => setMenu(false)} className='hover:text-alpha-green font-semibold transition-all duration-300'>
              <BsPlus className='inline-block mb-1 text-3xl' />
              {eng ? "Parteneri" : "Partners"}
            </button>
          </Link>
          <Link href={"/contact"}>
            <button onClick={() => setMenu(false)} className='hover:text-alpha-green font-semibold transition-all duration-300'>
              <BsPlus className='inline-block mb-1 text-3xl' />
              Contact
            </button>
          </Link>
        </div>
        <div className='border-t-2 border-b-2 border-alpha-green flex flex-col'>
          <button onClick={toggleDark} className='py-4 w-32'>
            {dark ? <img src='../../images/darkBtn.png' alt='' /> : <img src='../../images/lightBtn.png' alt='' />}
          </button>
          <div className='flex flex-row space-x-5 mb-4'>
            <button onClick={() => setEng(true)} className={`bg-alpha-green px-5 rounded-lg ${!eng ? "bg-alpha-green/50 opacity-50" : ""}`}>
              RO
            </button>
            <button onClick={() => setEng(false)} className={`bg-alpha-green px-5 rounded-lg ${eng ? "bg-alpha-green/50 opacity-50" : ""}`}>
              ENG
            </button>
          </div>
        </div>
        <div className='max-w-[300px] text-sm'>
          <h1 className='lg:text-2xl'>{eng ? "Adresa" : "Adress"}</h1>
          <p className='my-3'>Str. Sandu-Aldea Constantin nr.22, Sector 1, Bucureşti Romania</p>
          <p>Phone: +40 21 323 14 23 </p>
          <p>Mail: office@alphamedical.ro</p>
        </div>
      </div>
    </Slide>
  );
}

export default Menu;
