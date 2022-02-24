import React from "react";
import Link from "next/link";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import products from "../../components/JSON/products.json";
import subcategories from "../../components/JSON/subcategories.json";
import categories from "../../components/JSON/categories.json";
import { useRouter } from "next/router";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Head from "next/head";

function ProductList() {
     const router = useRouter();
     const { subcategoriesList, productList } = router.query;
     console.log(subcategoriesList);
     let currentCategory = categories.filter((category) => category.catName.replace(/ /g, "-").toLocaleLowerCase() === subcategoriesList);
     let currentSubCategory = subcategories.filter((subCategory) => subCategory.subCatName.replace(/ /g, "-").toLocaleLowerCase() === productList);
     return (
          <>
               <Head>
                    <title>
                         Produse {currentSubCategory[0]?.subCatName} | {currentCategory[0]?.catName} | Alpha Medical
                    </title>
                    <meta name="description" content="Aparatura si echipamente medicale" />
               </Head>
               <Navbar />
               <div className="w-full h-40 mt-20 absolute flex flex-row items-center justify-center" style={{ backgroundImage: "url('/images/svgbg.svg')" }}>
                    <div className="flex flex-row items-center justify-center text-2xl max-w-7xl w-full mx-auto relative">
                         <div className="absolute left-0 hover:text-blue-400">
                              <Link href={`/${subcategoriesList}`}>
                                   <button className="text-base">
                                        <BsFillArrowLeftSquareFill className="inline-block mr-3" />
                                        Subcategorii {currentCategory[0]?.catName}
                                   </button>
                              </Link>
                         </div>
                         <div>
                              <h1 className="lg:text-3xl text-2xl text-center font-medium text-gray-200">
                                   Produse {currentCategory[0]?.catName} | {currentSubCategory[0]?.subCatName}
                              </h1>
                              <h2 className="lg:text-lg text-center text-gray-200 max-w-xl mt-2">{currentSubCategory[0]?.subCatDescription}</h2>
                         </div>
                    </div>
               </div>
               <div className="bg-fixed min-h-screen bg-cover pt-52">
                    <div className="max-w-7xl flex flex-row mx-auto flex-wrap lg:mt-10">
                         {products
                              .filter((produs) => produs.category.replace(/ /g, "-").toLocaleLowerCase() === subcategoriesList)
                              .filter((produs) => produs.subcategory.replace(/ /g, "-").toLocaleLowerCase() === productList)
                              .map((produs, index) => (
                                   <div key={index} className="lg:w-1/4 flex items-start justify-center my-4">
                                        <Link href={`/${subcategoriesList}/${productList}/${produs.name.replace(/ /g, "-").toLocaleLowerCase()}`}>
                                             <a href="">
                                                  <div className="group hover:-translate-y-1 transform transition-all duration-500 text-center">
                                                       <div className="lg:h-64 overflow-hidden rounded-lg">
                                                            <img src={`../images/productImage/thumbnail/${produs.Thumbnail}`} alt="" className="hover:scale-110 transform transition-all duration-700 rounded-lg scale-75 lg:scale-100" />
                                                       </div>
                                                       <p className="text-2xl group-hover:text-blue-500 transform transition-all duration-300 font-medium text-gray-200">{produs.name}</p>
                                                       <p className="text-base text-gray-400 px-6 font-medium">{produs.smallDescription}</p>
                                                  </div>
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

export default ProductList;
