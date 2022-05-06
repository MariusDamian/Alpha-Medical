import React from "react";
import Menu from "../components/Navbar/Menu";
import Navbar from "../components/Navbar/Navbar";
import products from "../components/JSON/products.json";
import categories from "../components/JSON/categories.json";
import subcategories from "../components/JSON/subcategories.json";
import { useState, useEffect } from "react";

function Produse() {
  const [currentCategory, setCurrentCategory] = useState(0);

  let currentSub = subcategories?.filter((subcat) => subcat.subCatPar.replace(/ /g, "-").toLowerCase() === categories[currentCategory].catName.replace(/ /g, "-").toLowerCase());

  return (
    <div>
      <Menu />
      <Navbar />
      <div className='bg-alpha-bg pb-20'>
        <div className='h-full pt-36 flex flex-col max-w-[1440px] mx-auto'>
          <h1 className='mt-10 mb-20 text-4xl'>Produsele noastre</h1>
          <div className='w-full h-64 flex flex-row text-white'>
            <div className='bg-[#334257] w-[20%] border flex items-center justify-center text-center text-3xl px-3'>{categories[currentCategory].catName}</div>
            <div className='bg-[#398AB9] w-[30%] border flex items-center justify-center text-center text-lg px-5'>{categories[currentCategory].catDescription}</div>
            <div className='w-[50%] grid grid-cols-4'>
              {categories.map((cat, key) => (
                <div onClick={() => setCurrentCategory(key)} key={key} className={`flex items-center cursor-pointer justify-center border text-center ${cat.catName === categories[currentCategory].catName ? "bg-[#398AB9]" : "bg-[#476072]"}`}>
                  <p>{cat.catName}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Produse;
