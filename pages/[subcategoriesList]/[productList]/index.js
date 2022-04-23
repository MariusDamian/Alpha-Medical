import { React } from "react";
import Link from "next/link";
import products from "../../components/JSON/products.json";
import subcategories from "../../components/JSON/subcategories.json";
import categories from "../../components/JSON/categories.json";
import { useRouter } from "next/router";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Head from "next/head";
import { useContext } from "react";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { dataContext } from "../../../Util/ContextData";

// Product Selection Page

function ProductList({ subcategoriesProps, categoriesProps, productsProps }) {
  const { scrolled } = useContext(dataContext);
  const router = useRouter();
  const { subcategoriesList, productList } = router.query;
  let currentCategory = categoriesProps?.find((category) => category.catName.replace(/ /g, "-").toLocaleLowerCase() === subcategoriesList);
  let currentSubCategory = subcategoriesProps?.find((subCategory) => subCategory.subCatName.replace(/ /g, "-").toLocaleLowerCase() === productList);
  return (
    <>
      <Head>
        <title>
          Produse {currentSubCategory?.subCatName} | {currentCategory?.catName} | Alpha Medical
        </title>
        <meta name='description' content='Aparatura si echipamente medicale' />
      </Head>
      <Navbar />
      <div className='h-20 pb-20 w-full'></div>
      <div className='pb-40'>
        <div className={scrolled ? "w-full backdrop-blur-md h-16 flex flex-row z-10 items-center justify-center fixed bg-[#00001a]/80" : "w-full h-40 absolute flex flex-row items-center justify-center"}>
          <div className='flex flex-row items-center justify-center text-2xl max-w-7xl w-full mx-auto relative'>
            <div className='absolute left-0 text-left hover:text-blue-400 w-full'>
              <Link href={`/${subcategoriesList}`}>
                <button className='text-base max-w-xs flex items-center text-left justify-center'>
                  <BsFillArrowLeftSquareFill className='inline-block mr-3' />
                  {`Subcategorii ${currentCategory?.catName}`}
                </button>
              </Link>
            </div>
            <div className='text-center flex flex-col items-center justify-center'>
              <h1 className='lg:text-3xl text-2xl text-gray-200 font-medium max-w-lg'>{`Produse ${currentCategory?.catName} | ${currentSubCategory?.subCatName}`}</h1>
              {!scrolled ? <h2 className='lg:text-lg text-gray-200 max-w-xl mt-2'>{currentSubCategory?.subCatDescription}</h2> : null}
            </div>
          </div>
        </div>
        <div className='bg-fixed min-h-screen bg-cover pt-40'>
          <div className='max-w-7xl flex flex-row mx-auto flex-wrap lg:mt-10'>
            {productsProps
              ?.filter((produs) => produs.category.replace(/ /g, "-").toLocaleLowerCase() === subcategoriesList)
              .filter((produs) => produs.subcategory.replace(/ /g, "-").toLocaleLowerCase() === productList)
              .map((produs, index) => (
                <div key={index} className='lg:w-[23%] flex items-start justify-center m-3'>
                  <Link href={`/${subcategoriesList}/${productList}/${produs.name.replace(/ /g, "-").toLocaleLowerCase()}`}>
                    <a href=''>
                      <div className='group transform transition-all duration-500 text-center rounded-md bg-gradient-to-b from-[#00002b] to-black shadow-lg shadow-blue-900/30 border border-blue-900/50'>
                        <div className='lg:h-60 overflow-hidden rounded-lg '>
                          <img src={`../images/productImage/thumbnail/${produs.Thumbnail}`} alt='' className='hover:scale-110 transform transition-all duration-700 rounded-lg scale-75 lg:scale-100' />
                        </div>
                        <p className='text-xl group-hover:text-blue-500 transform transition-all duration-300 font-medium min-h-[80px] text-gray-200 px-2'>{produs.name}</p>
                        <p className='text-sm text-gray-400 px-4 font-medium h-[80px] group-hover:-translate-y-3 transition-all duration-700'>{produs.smallDescription}</p>
                      </div>
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

export default ProductList;

export async function getStaticPaths() {
  let data = subcategories;

  // Get the paths we want to pre-render based on posts
  const paths = data.map((link) => ({
    params: { subcategoriesList: link.subCatPar.replace(/ /g, "-").toLocaleLowerCase(), productList: link.subCatName.replace(/ /g, "-").toLocaleLowerCase() },
  }));

  // We'll pre-render only these paths at build time.
  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  return {
    props: { subcategoriesProps: subcategories, categoriesProps: categories, productsProps: products },
  };
}
