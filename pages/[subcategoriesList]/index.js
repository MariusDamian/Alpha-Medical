import React from "react";
import Link from "next/link";
import { FcUndo } from "react-icons/fc";
import { useRouter } from "next/router";
import categories from "../components/JSON/categories.json";
import subcategories from "../components/JSON/subcategories.json";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function SubcategoriesSelect() {
     const router = useRouter();
     const { subcategoriesList } = router.query;
     let currentCategory = categories.filter((category) => category.catName.replace(/ /g, "-").toLocaleLowerCase() === subcategoriesList);

     return (
          <>
               <Navbar />
               <div className="bg-fixed min-h-screen bg-cover pt-5 lg:pt-28">
                    <div className="flex flex-row items-center justify-center text-2xl max-w-7xl mx-auto relative">
                         <div className="absolute left-0">
                              <Link href={"/#produse"}>
                                   <button className="text-xl">
                                        <FcUndo className="inline-block mr-3" />
                                        Inapoi la <em className="text-[#3B82F6] not-italic">categorii</em>
                                   </button>
                              </Link>
                         </div>
                         <h1 className="lg:text-3xl text-2xl text-center font-medium text-gray-200">Subcategorii {currentCategory[0]?.catName}</h1>
                    </div>
                    <div className="max-w-7xl flex flex-row mx-auto flex-wrap">
                         {subcategories
                              .filter((subCat) => subCat.subCatPar.replace(/ /g, "-").toLocaleLowerCase() === subcategoriesList)
                              .map((subCat, index) => (
                                   <div key={index} className="lg:w-1/4 w-1/2 p-3 lg:mt-10 group hover:-translate-y-1 transform transition-all duration-500">
                                        <Link href={`${subcategoriesList}/${subCat.subCatName.replace(/ /g, "-").toLocaleLowerCase()}`}>
                                             <a href="">
                                                  <div className="overflow-hidden rounded-lg">
                                                       <img className="hover:scale-105 transform transition-all duration-500 rounded-lg" src={`./images/categoryImage/${subCat.subCatImage}`} alt="" />
                                                  </div>
                                                  <p className="text-xl pt-2 group-hover:text-blue-500 transform transition-all duration-300">{subCat.subCatName}</p>
                                             </a>
                                        </Link>
                                   </div>
                              ))}
                    </div>
               </div>
               <Footer />
          </>
     );
}

export default SubcategoriesSelect;
