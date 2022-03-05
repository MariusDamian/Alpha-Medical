import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import categories from "../components/JSON/categories.json";
import subcategories from "../components/JSON/subcategories.json";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Head from "next/head";
import { useContext } from "react";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { dataContext } from "../../Util/ContextData";

function SubcategoriesSelect() {
  const { scrolled } = useContext(dataContext);
  const router = useRouter();
  const { subcategoriesList } = router.query;
  let currentCategory = categories.filter((category) => category.catName.replace(/ /g, "-").toLocaleLowerCase() === subcategoriesList);

  return (
    <>
      <Head>
        <title>{currentCategory[0]?.catName} | Alpha Medical</title>
        <meta name='description' content='Aparatura si echipamente medicale' />
      </Head>
      <Navbar />
      <div className='h-20 pb-20 w-full'></div>
      <div className="pb-40 bg-[url('/images/svgbg.svg')]">
        <div className={scrolled ? "w-full  backdrop-blur-md h-16 z-50 flex flex-row items-center justify-center fixed   bg-[#00001a]/80" : "w-full h-40 absolute flex flex-row items-center justify-center  bg-[url('/images/svgbg.svg')]"}>
          <div className='flex flex-row items-center justify-center text-2xl max-w-7xl w-full mx-auto relative'>
            <div className='absolute left-0 hover:text-blue-400 w-full'>
              <Link href={"/#produse"}>
                <button className='text-base'>
                  <BsFillArrowLeftSquareFill className='inline-block mr-3' />
                  Categorii
                </button>
              </Link>
            </div>
            <div>
              <h1 className='lg:text-3xl text-2xl text-center text-gray-200 font-medium max-w-lg'>{`Subcategorii ${currentCategory[0]?.catName}`}</h1>
              {!scrolled ? <h2 className='lg:text-lg text-center text-gray-200 max-w-xl mt-2'>{currentCategory[0]?.catDescription}</h2> : null}
            </div>
          </div>
        </div>
        <div className='bg-fixed min-h-screen bg-cover pt-52'>
          <div className='max-w-7xl flex flex-row mx-auto flex-wrap'>
            {subcategories
              .filter((subCat) => subCat.subCatPar.replace(/ /g, "-").toLocaleLowerCase() === subcategoriesList)
              .map((subCat, index) => (
                <div key={index} className='lg:w-1/4 w-1/2 p-3 lg:mt-10 group hover:-translate-y-1 transform transition-all duration-500'>
                  <Link href={`${subcategoriesList}/${subCat.subCatName.replace(/ /g, "-").toLocaleLowerCase()}`}>
                    <a href=''>
                      <div className='overflow-hidden rounded'>
                        <img className='hover:scale-105 transform transition-all duration-500 rounded' src={`./images/categoryImage/${subCat.subCatImage}`} alt='' />
                      </div>
                      <p className='text-xl pt-2 group-hover:text-blue-500 transform transition-all duration-300'>{subCat.subCatName}</p>
                      <p className='text-sm text-gray-400'>{subCat.subCatDescription}</p>
                    </a>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SubcategoriesSelect;
