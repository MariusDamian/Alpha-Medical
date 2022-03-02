import React from "react";
import { ImLocation } from "react-icons/im";
import { HiOutlineMail } from "react-icons/hi";
import { AiFillPhone } from "react-icons/ai";
import Fade from "react-reveal/Fade";
import Link from "next/link";

function Hero() {
     return (
          <div className="border-b border-gray-800" id="home">
               <div className="bg-fixed bg-cover" style={{ backgroundImage: "url('/images/bg.png')" }}>
                    <div className="h-screen  bg-gradient-to-r from-black/90 via-black/80 to-black/10">
                         <div className="w-full h-full items-center justify-start flex">
                              <Fade big>
                                   <div className="items-center justify-center flex flex-col lg:w-1/2 mt-16 rounded-2xl ml-16">
                                        <h4 className="font-medium text-5xl lg:text-8xl text-gray-200">Alpha Medical</h4>
                                        <h1 className="text-xl lg:text-3xl text-gray-300 text-center py-7">
                                             Distribuitor autorizat de
                                             <br /> aparatura si echipamente medicale
                                        </h1>
                                        <div className="lg:text-lg text-sm mt-8 lg:mt-0 text-gray-300 px-6 lg:px-0">
                                             <div className="w-max group">
                                                  <a href="https://goo.gl/maps/TLufRyuXxANzCSrV7" target="_blank" rel="noreferrer">
                                                       <p className="my-2 transform transition-all duration-500 hover:text-white">
                                                            <ImLocation className="inline-block text-xl font-bold text-blue-500 mr-3 transform group-hover:text-2xl transition-all duration-500" />
                                                            Str. Sandu-Aldea Constantin nr.22, Sector 1, Bucureşti
                                                       </p>
                                                  </a>
                                             </div>
                                             <div className="w-max group">
                                                  <a href="tel:+40213231423" className="w-min bg-blue-900">
                                                       <p className="my-2 transform transition-all duration-500 hover:text-white">
                                                            <AiFillPhone className="inline-block text-xl font-bold text-blue-500 mr-3 transform group-hover:text-2xl transition-all duration-500" />
                                                            +40 21 323 14 23
                                                       </p>
                                                  </a>
                                             </div>
                                             <div className="w-max group">
                                                  <a href="mailto:office@alphamedical.ro" target="_blank" rel="noreferrer">
                                                       <p className="transform  transition-all duration-500 hover:text-white">
                                                            <HiOutlineMail className="inline-block text-xl font-bold text-blue-500 mr-3 transform group-hover:text-2xl transition-all duration-500" />
                                                            office@alphamedical.ro
                                                       </p>
                                                  </a>
                                             </div>
                                        </div>
                                        <Link href="/#produse">
                                             <button className="bg-blue-600 text-xl p-2 px-5 rounded text-white transform hover:bg-blue-800 transition-all duration-300 mt-10">Produse</button>
                                        </Link>
                                   </div>
                              </Fade>
                         </div>
                    </div>
               </div>
          </div>
     );
}

export default Hero;
