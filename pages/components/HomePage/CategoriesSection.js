import React from 'react';
import Fade from 'react-reveal/Fade';
import Link from 'next/link';
import categories from '../JSON/categories.json';

function CategoriesSection() {
  return (
    <div className='py-40 w-full mx-auto min-h-screen' id='produse'>
      <Fade>
        <h1 className='lg:text-4xl text-2xl text-center font-medium text-gray-200'>Categorii Produse</h1>
        <p className='pb-20 pt-2 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className='max-w-7xl flex flex-row mx-auto flex-wrap'>
          {categories.map((categorie, index) => (
            <div key={index} className='lg:w-1/4 w-1/2 lg:p-3 p-1 mt-10 group hover:-translate-y-1 transform transition-all duration-500'>
              <Link href={`/${categorie.catName.replace(/ /g, '-').toLocaleLowerCase()}`}>
                <a href=''>
                  <div className='overflow-hidden rounded'>
                    <img className='hover:scale-105 transform transition-all duration-500 rounded' src={`./images/categoryImage/${categorie.catImage}`} alt='' />
                  </div>
                  <p className='text-xl pt-2 group-hover:text-blue-500 transform transition-all duration-300'>{categorie.catName}</p>
                  <p className='text-base text-gray-400'>{categorie.catDescription}</p>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </Fade>
    </div>
  );
}

export default CategoriesSection;
