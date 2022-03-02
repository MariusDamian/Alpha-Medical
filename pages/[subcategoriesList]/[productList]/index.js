import { React } from 'react';
import Link from 'next/link';
import products from '../../components/JSON/products.json';
import subcategories from '../../components/JSON/subcategories.json';
import categories from '../../components/JSON/categories.json';
import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Head from 'next/head';
import ProductsHeader from '../../../Util/ProductsHeader';

function ProductList() {
  const router = useRouter();
  const { subcategoriesList, productList } = router.query;
  console.log(subcategoriesList);
  let currentCategory = categories.filter((category) => category.catName.replace(/ /g, '-').toLocaleLowerCase() === subcategoriesList);
  let currentSubCategory = subcategories.filter((subCategory) => subCategory.subCatName.replace(/ /g, '-').toLocaleLowerCase() === productList);
  return (
    <>
      <Head>
        <title>
          Produse {currentSubCategory[0]?.subCatName} | {currentCategory[0]?.catName} | Alpha Medical
        </title>
        <meta name='description' content='Aparatura si echipamente medicale' />
      </Head>
      <Navbar />
      <div className='h-20 pb-20 w-full'></div>
      <div className="pb-40 bg-[url('/images/svgbg.svg')]">
        <ProductsHeader backText={`Subcategorii ${currentCategory[0]?.catName}`} backLink={`/${subcategoriesList}`} h1Title={`Produse ${currentCategory[0]?.catName} | ${currentSubCategory[0]?.subCatName}`} pSubtitle={currentSubCategory[0]?.subCatDescription} />
        <div className='bg-fixed min-h-screen bg-cover pt-52'>
          <div className='max-w-7xl flex flex-row mx-auto flex-wrap lg:mt-10'>
            {products
              .filter((produs) => produs.category.replace(/ /g, '-').toLocaleLowerCase() === subcategoriesList)
              .filter((produs) => produs.subcategory.replace(/ /g, '-').toLocaleLowerCase() === productList)
              .map((produs, index) => (
                <div key={index} className='lg:w-1/4 flex items-start justify-center my-4'>
                  <Link href={`/${subcategoriesList}/${productList}/${produs.name.replace(/ /g, '-').toLocaleLowerCase()}`}>
                    <a href=''>
                      <div className='group hover:-translate-y-1 transform transition-all duration-500 text-center'>
                        <div className='lg:h-64 overflow-hidden rounded-lg'>
                          <img src={`../images/productImage/thumbnail/${produs.Thumbnail}`} alt='' className='hover:scale-110 transform transition-all duration-700 rounded-lg scale-75 lg:scale-100' />
                        </div>
                        <p className='text-2xl group-hover:text-blue-500 transform transition-all duration-300 font-medium text-gray-200'>{produs.name}</p>
                        <p className='text-base text-gray-400 px-6 font-medium'>{produs.smallDescription}</p>
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
