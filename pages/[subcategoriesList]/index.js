import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import categories from '../components/JSON/categories.json';
import subcategories from '../components/JSON/subcategories.json';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Head from 'next/head';
import ProductsHeader from '../../Util/ProductsHeader';

function SubcategoriesSelect() {
  const router = useRouter();
  const { subcategoriesList } = router.query;
  let currentCategory = categories.filter((category) => category.catName.replace(/ /g, '-').toLocaleLowerCase() === subcategoriesList);

  return (
    <>
      <Head>
        <title>{currentCategory[0]?.catName} | Alpha Medical</title>
        <meta name='description' content='Aparatura si echipamente medicale' />
      </Head>
      <Navbar />
      <div className='h-20 pb-20 w-full'></div>
      <div className="pb-40 bg-[url('/images/svgbg.svg')]">
        <ProductsHeader backText='Categorii' backLink='/#produse' h1Title={`Subcategorii ${currentCategory[0]?.catName}`} pSubtitle={currentCategory[0]?.catDescription} />
        <div className='bg-fixed min-h-screen bg-cover pt-52'>
          <div className='max-w-7xl flex flex-row mx-auto flex-wrap'>
            {subcategories
              .filter((subCat) => subCat.subCatPar.replace(/ /g, '-').toLocaleLowerCase() === subcategoriesList)
              .map((subCat, index) => (
                <div key={index} className='lg:w-1/4 w-1/2 p-3 lg:mt-10 group hover:-translate-y-1 transform transition-all duration-500'>
                  <Link href={`${subcategoriesList}/${subCat.subCatName.replace(/ /g, '-').toLocaleLowerCase()}`}>
                    <a href=''>
                      <div className='overflow-hidden rounded'>
                        <img className='hover:scale-105 transform transition-all duration-500 rounded' src={`./images/categoryImage/${subCat.subCatImage}`} alt='' />
                      </div>
                      <p className='text-xl pt-2 group-hover:text-blue-500 transform transition-all duration-300'>{subCat.subCatName}</p>
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
