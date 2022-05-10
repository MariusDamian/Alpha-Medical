import Menu from "../components/Navbar/Menu";
import Navbar from "../components/Navbar/Navbar";
import products from "../components/JSON/products.json";
import categories from "../components/JSON/categories.json";
import subcategories from "../components/JSON/subcategories.json";
import { React, useState, useEffect, useContext } from "react";
import { dataContext } from "../../Util/ContextData";
import Link from "next/link";
import Footer from "../components/Footer/Footer";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

function Produse() {
  const { currentCategory, setCurrentCategory } = useContext(dataContext);
  const { eng, setEng } = useContext(dataContext);
  const [currentSubCat, setCurrentSubCat] = useState(0);
  const [catTab, setCatTab] = useState(null);
  const [subCatTab, setSubCatTab] = useState(null);

  let currentSub = subcategories?.filter((subcat) => subcat.subCatPar.replace(/ /g, "-").toLowerCase() === categories[currentCategory].catName.replace(/ /g, "-").toLowerCase());

  let prodArray = products?.filter((prod) => prod.subcategory === currentSub[currentSubCat].subCatName);

  function changeCat(crr) {
    setCurrentCategory(crr);
    setCurrentSubCat(0);
  }

  function mobileCatSelect(catSel) {
    if (catSel === catTab) {
      setCatTab(null);
    } else {
      setCatTab(catSel);
      setCurrentCategory(catSel);
    }
  }

  function mobileSubbCatSelect(subCatSel) {
    if (subCatSel === subCatTab) {
      setSubCatTab(null);
    } else {
      setSubCatTab(subCatSel);
      setCurrentSubCat(subCatSel);
    }
  }

  return (
    <div>
      <Menu />
      <Navbar />
      <div className='bg-alpha-bg dark:bg-alpha-bg-dark pb-20'>
        <div className='h-full pt-36 lg:flex hidden flex-col max-w-[1440px] mx-auto'>
          <h1 className='mt-10 mb-20 text-4xl dark:text-white'>{eng ? "Produsele noastre" : "Our products"}</h1>

          <div className='w-full h-[250px] flex flex-row text-white'>
            <div className='bg-[#334257] w-[20%] border flex items-center justify-center text-center text-3xl px-3'>{eng ? categories[currentCategory]?.catName : categories[currentCategory]?.enCatName}</div>
            <div className='bg-[#398AB9] w-[30%] border flex items-center justify-center text-center text-lg px-5'>{eng ? categories[currentCategory]?.catDescription : categories[currentCategory]?.enCatDescription}</div>
            <div className='w-[50%] grid lg:grid-cols-4'>
              {categories.map((cat, key) => (
                <div onClick={() => changeCat(key)} key={key} className={`flex hover:bg-[#398AB9] items-center cursor-pointer justify-center border min-h-[125px] text-center ${cat?.catName === categories[currentCategory]?.catName ? "bg-[#398AB9]" : "bg-[#476072]"}`}>
                  {eng ? cat?.catName : cat?.enCatName}
                </div>
              ))}
            </div>
          </div>

          <div className='bg-[#D2E3E7] lg:flex flex-row h-12 hidden'>
            {currentSub.map((cat, key) => (
              <div onClick={() => setCurrentSubCat(key)} className={`flex items-center hover:bg-alpha-green hover:text-white justify-center text-center h-full cursor-pointer ${currentSubCat === key ? "bg-alpha-green text-white" : ""}`} key={key}>
                <p className='px-5 w-full'>{eng ? cat?.subCatName : cat?.enSubCatName}</p>
              </div>
            ))}
          </div>

          <div className='grid lg:grid-cols-4 grid-cols-1 gap-1'>
            {prodArray.map((product, key) => (
              <Link href={`/produse/${product?.name.replace(/ /g, "-").toLowerCase()}`} key={key}>
                <div className='bg-white cursor-pointer relative group'>
                  <img src={`images/productImage/logoPic/${product?.logoPic}`} alt='' className='scale-90' />
                  <div className='min-h-24 w-full bg-[#A2DBFA75]/50 backdrop-blur absolute bottom-0 group-hover:opacity-100 opacity-0 transition-all transform duration-500 p-4'>
                    <h1 className='text-2xl'>{product?.name}</h1>
                    <p className='text-lg'>{product?.smallDescription}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile version */}

        <div className='min-h-screen pt-36 flex lg:hidden'>
          <div className='w-full'>
            {categories.map((cat, key) => (
              <div key={key}>
                <div className='flex flex-row justify-between items-center' onClick={() => mobileCatSelect(key)}>
                  <p className='bg-[#476072] text-white px-5 py-2 border border-white text-sm w-full'>{cat.catName}</p>
                  {catTab === key ? <TiArrowSortedUp className='absolute right-0 text-white mr-2' /> : <TiArrowSortedDown className='absolute right-0 text-white mr-2' />}
                </div>
                {catTab === key
                  ? currentSub.map((subCat, key) => (
                      <div key={key}>
                        <div className='flex flex-row justify-between items-center' onClick={() => mobileSubbCatSelect(key)}>
                          <p className='bg-[#D2E2E7] border border-gray-200 w-full px-6 py-1'>{subCat.subCatName}</p>
                          {subCatTab === key ? <TiArrowSortedUp className='absolute right-0 text-[#476072] mr-2' /> : <TiArrowSortedDown className='absolute right-0 text-[#476072] mr-2' />}
                        </div>
                        {subCatTab === key ? (
                          <div className='grid lg:grid-cols-4 grid-cols-2 gap-1'>
                            {prodArray.map((product, key) => (
                              <Link href={`/produse/${product?.name.replace(/ /g, "-").toLowerCase()}`} key={key}>
                                <div className='bg-white cursor-pointer relative group'>
                                  <img src={`images/productImage/logoPic/${product?.logoPic}`} alt='' className='scale-90' />
                                  <div className='min-h-16 w-full bg-[#A2DBFA75]/50 backdrop-blur absolute bottom-0 transition-all transform duration-500 p-2'>
                                    <h1 className=''>{product?.name}</h1>
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    ))
                  : ""}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Produse;
