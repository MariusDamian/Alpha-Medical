import { React, useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import Link from "next/link";

function Navbar() {
     const [navbar, setNavbar] = useState(false);

     const changeBackground = () => {
          if (window.scrollY >= 100) {
               setNavbar(true);
          } else {
               setNavbar(false);
          }
     };

     useEffect(() => {
          window.addEventListener("scroll", changeBackground);
     }, []);

     return (
          <div className={navbar ? "hidden fixed w-full lg:flex items-center justify-center z-10 h-20  bg-[#00001a]/80 transition-all duration-500 backdrop-blur-md" : "hidden transition-all duration-700 fixed w-full lg:flex items-center justify-center z-10 h-20  border-gray-500/0 hover:bg-[#00001a]/80 hover:backdrop-blur-md transform backdrop-blur-none"}>
               <div className="max-w-7xl mx-auto h-full w-full bg-opacity-30 flex flex-row">
                    <div className="flex items-center flex-row h-full w-1/2">
                         <a href="https://alphamedical.netlify.app/">
                              <img src="https://i.ibb.co/tLfBCLx/logo.png" alt="" className="w-52" />
                         </a>
                         <div className="ml-10">
                              <SearchBar />
                         </div>
                    </div>
                    <div className="flex items-center justify-end flex-row h-full w-1/2 space-x-10 text-lg text-gray-300">
                         <Link href="/#home">
                              <button className="hover:text-blue-600 transform transition-all duration-300">Home</button>
                         </Link>
                         <Link href="/#despre">
                              <button className="hover:text-blue-600 transform transition-all duration-300">Despre</button>
                         </Link>
                         <Link href="/#produse">
                              <button className="hover:text-blue-600 transform transition-all duration-300">Produse</button>
                         </Link>
                         <Link href="/#service">
                              <button className="hover:text-blue-600 transform transition-all duration-300">Parteneri</button>
                         </Link>
                         <Link href="/#contact">
                              <button className="bg-blue-600 p-1 px-3 rounded text-white transform hover:bg-blue-800">Contact</button>
                         </Link>
                    </div>
               </div>
          </div>
     );
}

export default Navbar;
