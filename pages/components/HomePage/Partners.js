import React from "react";
import partners from "../JSON/partners.json";

function Partners() {
     return (
          <div className="min-h-screen flex flex-col items-center justify-center max-w-7xl mx-auto" id="service">
               <p className="mt-20 lg:text-4xl text-2xl font-medium pb-8 text-gray-200">Parteneri</p>
               <div className="lg:py-16 lg:px-28 flex flex-col items-center justify-center rounded bg-slate-300">
                    <div className="flex flex-wrap">
                         {partners.map((partner, index) => (
                              <div key={index} className="lg:w-[20%] w-1/3 rounded shadow-lg shadow-sky-700/70 p-3 h-28 m-6 flex items-center justify-center bg-white transform transition-all">
                                   <a href={partner.partnerLink} target="_blank" rel="noreferrer">
                                        <img src={`/images/partnerLogo/${partner.partnerName}.png`} className="transform  hover:scale-105 transition-all duration-500 hover:saturate-150" />
                                   </a>
                              </div>
                         ))}
                    </div>
               </div>
          </div>
     );
}

export default Partners;
