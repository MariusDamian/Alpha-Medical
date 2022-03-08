import { React } from "react";
import products from "../../../components/JSON/products.json";
import subcategories from "../../../components/JSON/subcategories.json";
import categories from "../../../components/JSON/categories.json";
import { useRouter } from "next/router";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import Head from "next/head";
import { useContext } from "react";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { dataContext } from "../../../../Util/ContextData";
import Link from "next/link";

// Product Page

function ProductPage() {
  const { scrolled } = useContext(dataContext);
  const router = useRouter();
  const { subcategoriesList, productList, productPage } = router.query;
  let currentCategory = categories.filter((category) => category.catName.replace(/ /g, "-").toLocaleLowerCase() === subcategoriesList);
  let currentSubCategory = subcategories.filter((subCategory) => subCategory.subCatName.replace(/ /g, "-").toLocaleLowerCase() === productList);
  let currentProduct = products.filter((produs) => produs.name.replace(/ /g, "-").toLowerCase() === productPage);

  return (
    <>
      <Head>
        <title>{currentProduct[0]?.name} | Alpha Medical</title>
        <meta name='description' content='Aparatura si echipamente medicale' />
      </Head>
      <Navbar />
      <div className='h-20 pb-20 w-full'></div>
      <div className='pb-40'>
        <div className={scrolled ? "w-full  backdrop-blur-md h-16 z-50 flex flex-row items-center justify-center fixed   bg-[#00001a]/80" : "w-full h-40 absolute flex flex-row items-center justify-center  "}>
          <div className='flex flex-row items-center justify-center text-2xl max-w-7xl w-full mx-auto relative'>
            <div className='absolute left-0 hover:text-blue-400 w-full'>
              <Link href={`/${subcategoriesList}/${productList}`}>
                <button className='text-base'>
                  <BsFillArrowLeftSquareFill className='inline-block mr-3' />
                  {currentSubCategory[0]?.subCatName}
                </button>
              </Link>
            </div>
            <div className='text-center flex flex-col items-center justify-center'>
              <h1 className='lg:text-3xl text-2xl text-center text-gray-200 font-medium max-w-lg'>{currentProduct[0]?.name}</h1>
              {!scrolled ? <h2 className='lg:text-lg text-center text-gray-200 max-w-xl mt-2'>{currentProduct[0]?.smallDescription}</h2> : null}
            </div>
          </div>
        </div>
        <div className='bg-fixed min-h-screen bg-cover pt-40'>
          <div className='h-auto flex flex-col items-center justify-center'>
            <div className='flex flex-col lg:flex-row items-center justify-center'>
              {products
                .filter((produs) => produs.name.replace(/ /g, "-").toLowerCase() === productPage)
                .map((produs, index) => (
                  <div key={index} className='flex flex-col items-center justify-center'>
                    <img src={`/images/productImage/heroPic/${produs.heroPic}`} alt='' className='' />
                    <div className='max-w-7xl h-auto flex flex-col lg:flex-row items-center justify-center'>
                      <img src={`/images/productImage/logoPic/${produs.logoPic}`} alt='' className='lg:w-[50%] px-10' />
                      <div className='lg:w-[50%] px-2 lg:px-10 h-[600px] overflow-hidden overflow-y-auto'>
                        <p style={{ whiteSpace: "pre-line" }} className='text-justify tracking-tight leading-8 text-base text-gray-200'>
                          {produs.fullDescription}
                        </p>
                        <br />
                        <div className='w-56'>
                          <a href={produs.extLink} target='_blank' rel='noreferrer'>
                            <img src={`/images/partnerLogo/${produs.Producator}.svg`} className='w-56' alt='' />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductPage;
