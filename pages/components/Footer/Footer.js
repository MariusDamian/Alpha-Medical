import { React, useState, useEffect, useContext } from "react";
import Link from "next/link";
import categories from "../JSON/categories.json";
import { dataContext } from "../../../Util/ContextData";

function Footer() {
  let currentYear = new Date().getFullYear();
  const { eng, setEng } = useContext(dataContext);

  return (
    <div className='w-full flex-col items-center justify-center z-10 lg:h-96 h-72 bg-black bottom-0 text-gray-200'>
      <div className='h-4/5 max-w-[1440px] mx-auto flex flex-row items-center py-16 px-10'>
        <div className='lg:w-1/4 w-full flex flex-col items-start justify-start h-full'>
          <p className='text-xl mb-3 underline-offset-4 underline decoration-1'>Contact</p>
          <p className='max-w-[200px]'>Str. Sandu-Aldea Constantin nr.22, Sector 1, Bucureşti Romania</p>
          <p className='mt-5'>Phone: +40 21 323 14 23 </p>
          <p> Mail: office@alphamedical.ro</p>
        </div>
        <div className='w-1/4 lg:flex flex-col items-start justify-start h-full hidden'>
          <p className='text-xl mb-3 underline-offset-4 underline decoration-1'>{eng ? "Categorii" : "Categories"}</p>
          {categories.map((categorie, key) => (
            <Link key={key} href='/produse'>
              <button className='hover:text-alpha-green transform transition-all duration-300'>{eng ? categorie.catName : categorie.enCatName}</button>
            </Link>
          ))}
        </div>
        <div className='w-1/4 lg:flex flex-col items-start justify-start h-full hidden'>
          <p className='text-xl mb-3 underline-offset-4 underline decoration-1'>{eng ? "Linkuri utile" : "Shortcuts"}</p>
          <Link href='/'>
            <button className='hover:text-alpha-green transform transition-all duration-300'>Home</button>
          </Link>
          <Link href='/produse'>
            <button className='hover:text-alpha-green transform transition-all duration-300'>{eng ? "Produse" : "Products"}</button>
          </Link>
          <Link href='/contact'>
            <button className='hover:text-alpha-green transform transition-all duration-300'>Contact</button>
          </Link>
        </div>
      </div>
      <div className='h-1/5 max-w-[1440px] mx-auto border-t border-gray-800/70 lg:flex hidden items-center px-10'>
        <p>Alpha Medical © {currentYear}</p>
      </div>
    </div>
  );
}

export default Footer;
