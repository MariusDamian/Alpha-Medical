import { React, useState, useEffect, useContext } from "react";
import { dataContext } from "../../../Util/ContextData";
import SearchBar from "./SearchBar";
import { Fade } from "react-reveal";
import Link from "next/link";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { menu, setMenu } = useContext(dataContext);
  const { dark, setDark } = useContext(dataContext);

  const changeBackground = () => {
    if (window.scrollY >= 1) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    <div className={scrolled ? "fixed w-full lg:flex items-center justify-center z-20 h-36 backdrop-blur-lg border-b-2 bg-white/80 dark:bg-alpha-bg-dark/70 border-[#DEDEDE]" : "fixed w-full lg:flex items-center justify-center z-20 h-36 transform backdrop-blur-none border-b-2 border-[#DEDEDE]"}>
      <div className='max-w-[1440px] mx-auto h-full w-full bg-opacity-30 flex flex-row px-10'>
        <div className='hidden items-center flex-row h-full w-1/2 md:flex cursor-pointer'>
          <Link href={"/"}>{dark ? <img src='../../images/logoDark.png' alt='logo' /> : <img src='../../images/logo.png' alt='logo' />}</Link>
        </div>
        <div className='flex items-center flex-row h-full w-1/2 md:hidden ml-5'>
          <Link href={"/"}>{dark ? <img src='../../images/mobileLogoDark.png' alt='logo' className='cursor-pointer' /> : <img src='../../images/mobileLogo.png' alt='logo' className='cursor-pointer' />}</Link>
        </div>
        <div className='flex items-center justify-end flex-row h-full absolute right-0 mr-10'>
          <div className='mr-16 md:flex hidden'>
            <SearchBar />
          </div>
          <div className='h-10 w-10 flex items-center justify-center'>
            <button onClick={() => setMenu(!menu)}>
              {menu ? (
                <Fade big>
                  {" "}
                  <img src='../../images/closeMenu.svg' alt='menu' />
                </Fade>
              ) : (
                <Fade big>
                  <img src='../../images/menu.svg' alt='menu' />
                </Fade>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
