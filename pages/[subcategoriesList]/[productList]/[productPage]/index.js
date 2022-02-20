import React from "react";
import Link from "next/link";
import { FcUndo } from "react-icons/fc";
import products from "../../../components/JSON/products.json";
import subcategories from "../../../components/JSON/subcategories.json";
import categories from "../../../components/JSON/categories.json";
import { useRouter } from "next/router";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import Head from "next/head";

function ProductPage() {
     const router = useRouter();
     const { subcategoriesList, productList, productPage } = router.query;
     let currentCategory = categories.filter((category) => category.catName.replace(/ /g, "-").toLocaleLowerCase() === subcategoriesList);
     let currentSubCategory = subcategories.filter((subCategory) => subCategory.subCatName.replace(/ /g, "-").toLocaleLowerCase() === productList);
     let currentProduct = products.filter((produs) => produs.name.replace(/ /g, "-").toLowerCase() === productPage);
     return (
          <>
               <Head>
                    <title>
                          {currentProduct[0]?.name} | Alpha Medical
                    </title>
                    <meta name="description" content="Aparatura si echipamente medicale" />
               </Head>
               <Navbar />
               <div className="bg-fixed min-h-screen bg-cover pt-5 lg:pt-28">
                    <div className="flex flex-row items-start justify-start text-2xl max-w-7xl mx-auto relative mb-10">
                         <div className="">
                              <Link href={`/${subcategoriesList}/${productList}`}>
                                   <button className="text-xl">
                                        <FcUndo className="inline-block mr-3" />
                                        Inapoi la produse <em className="text-[#3B82F6] not-italic">{currentCategory[0]?.catName}</em>
                                   </button>
                              </Link>
                         </div>
                         {/* <h1 className="lg:text-3xl text-2xl text-center font-medium text-gray-200 pb-10">{currentProduct[0].name}</h1> */}
                    </div>
                    <div className="h-auto flex flex-col items-center justify-center">
                         <div className="flex flex-col lg:flex-row items-center justify-center">
                              {products
                                   .filter((produs) => produs.name.replace(/ /g, "-").toLowerCase() === productPage)
                                   .map((produs, index) => (
                                        <div key={index} className="flex flex-col items-center justify-center">
                                             <img src={`/images/productImage/heroPic/${produs.heroPic}`} alt="" className="" />
                                             <div className="max-w-7xl h-auto flex flex-col lg:flex-row items-center justify-center">
                                                  <img src={`/images/productImage/logoPic/${produs.logoPic}`} alt="" className="lg:w-[50%] px-10" />
                                                  <div className="lg:w-[50%]  px-2 lg:px-0">
                                                       <p className="text-3xl mb-5 font-bold">{produs.name}</p>
                                                       <p style={{ whiteSpace: "pre-line" }} className="text-xl leading-8 text-gray-200">
                                                            {produs.fullDescription}
                                                       </p>
                                                       <br />
                                                       <div className="w-56">
                                                            <a href={produs.extLink} target="_blank" rel="noreferrer">
                                                                 <img src={`/images/partnerLogo/${produs.Producator}.png`} className="w-56" alt="" />
                                                            </a>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   ))}
                         </div>
                    </div>
               </div>
               <Footer />
          </>
     );
}

export default ProductPage;
