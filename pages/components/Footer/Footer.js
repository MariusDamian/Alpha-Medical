import { React } from "react";
import Link from "next/link";

function Footer() {
     let currentYear = new Date().getFullYear();
     return (
          <div className="w-full flex-col items-center justify-center z-10 h-96 bg-black/70 bottom-0 text-gray-200 mt-60">
               <div className="h-4/5 max-w-7xl mx-auto flex flex-row items-center py-16">
                    <div className="w-1/4 flex flex-col items-start justify-start h-full space-y-2">
                         <p className="text-xl mb-3 underline-offset-4 underline decoration-1">Despre</p>
                         <p>Alpha Medical SRL</p>
                         <p>CUI: 13878004</p>
                         <p>Reg. Com.: J40/4727/2001</p>
                    </div>
                    <div className="w-1/4 flex flex-col items-start justify-start h-full space-y-2">
                         <p className="text-xl mb-3 underline-offset-4 underline decoration-1">Contact</p>
                         <p>
                              Str. Sandu-Aldea Constantin <br /> nr.22, Sector 1 <br />
                              Bucureşti
                         </p>
                         <p>+40 21 323 14 23</p>
                         <p>office@alphamedical.ro</p>
                    </div>
                    <div className="w-1/4 flex flex-col items-start justify-start h-full space-y-2">
                         <p className="text-xl mb-3 underline-offset-4 underline decoration-1">Links</p>
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
                    </div>
                    <div className="w-1/4 flex flex-col items-start justify-start h-full space-y-2">
                         <p className="text-xl mb-3 underline-offset-4 underline decoration-1">AlphaMedical.ro</p>
                         <p>Aparate ventilatie mecanica Hamilton, produse Teleflex, acces vascular Arrow, sterilizare. Prevenirea infectiilor, Urologie, Produse ATI, Electrochirurgie, Instrumentar, Chirurgie.</p>
                    </div>
               </div>
               <div className="h-1/5 max-w-7xl mx-auto border-t border-gray-800/70 flex items-center">
                    <p>Alpha Medical © {currentYear}</p>
               </div>
          </div>
     );
}

export default Footer;
