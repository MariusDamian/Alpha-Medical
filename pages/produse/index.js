import Menu from "../components/Navbar/Menu";
import Navbar from "../components/Navbar/Navbar";
import products from "../components/JSON/products.json";
import categories from "../components/JSON/categories.json";
import subcategories from "../components/JSON/subcategories.json";
import { React, useState, useEffect, useContext } from "react";
import { dataContext } from "../../Util/ContextData";

function Produse() {
  const { currentCategory, setCurrentCategory } = useContext(dataContext);
  const [currentSubCat, setCurrentSubCat] = useState(0);

  let currentSub = subcategories?.filter((subcat) => subcat.subCatPar.replace(/ /g, "-").toLowerCase() === categories[currentCategory].catName.replace(/ /g, "-").toLowerCase());

  console.log(currentSub[currentSubCat]);

  function changeCat(crr) {
    setCurrentCategory(crr);
    setCurrentSubCat(0);
  }

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
                <div onClick={() => changeCat(key)} key={key} className={`flex items-center cursor-pointer justify-center border text-center ${cat.catName === categories[currentCategory].catName ? "bg-[#398AB9]" : "bg-[#476072]"}`}>
                  <p>{cat.catName}</p>
                </div>
              ))}
            </div>
          </div>
          <div className='bg-[#E8F0F2] flex flex-row h-12'>
            {currentSub.map((cat, key) => (
              <div onClick={() => setCurrentSubCat(key)} className={`flex items-center justify-center text-center h-full cursor-pointer ${currentSubCat === key ? "bg-alpha-green text-white" : ""}`} key={key}>
                <p className='px-5 w-full'>{cat.subCatName}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Produse;
