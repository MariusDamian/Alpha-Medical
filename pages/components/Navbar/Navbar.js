import { React, useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import Link from "next/link";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    <div className={scrolled ? "fixed w-full lg:flex items-center justify-center z-20 h-36 backdrop-blur-2xl border-b-2 border-[#DEDEDE]" : "fixed w-full lg:flex items-center justify-center z-20 h-36 hover:backdrop-blur-2xl transform backdrop-blur-none border-b-2  border-[#DEDEDE]"}>
      <div className='max-w-[1440px] mx-auto h-full w-full bg-opacity-30 flex flex-row'>
        <div className='flex items-center flex-row h-full w-1/2'>
          <a href='https://alphamedical.netlify.app/'>
            <img src='./images/logo.png' alt='logo' />
          </a>
        </div>
        <div className='flex items-center justify-end flex-row h-full w-1/2'>
          <div className="mr-16">
            <SearchBar />
          </div>
          <a href='https://alphamedical.netlify.app/'>
            <img src='./images/menu.svg' alt='menu' />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
