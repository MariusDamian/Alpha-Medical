import React from 'react';
import { dataContext } from './ContextData';
import { useContext } from 'react';
import Link from 'next/link';
import { BsFillArrowLeftSquareFill } from 'react-icons/bs';

function ProductsHeader(props) {
  const { scrolled } = useContext(dataContext);
  return (
    <div className={scrolled ? 'w-full  backdrop-blur-md h-12 z-50 flex flex-row items-center justify-center fixed   bg-[#00001a]/80' : "w-full h-40 absolute flex flex-row items-center justify-center   bg-[url('/images/svgbg.svg')]"}>
      <div className='flex flex-row items-center justify-center text-2xl max-w-7xl w-full mx-auto relative bg-red-500'>
        <div className='absolute left-0 hover:text-blue-400 w-full'>
          <Link href={`${props.backLink}`}>
            <button className='text-base'>
              <BsFillArrowLeftSquareFill className='inline-block mr-3' />
              {props.backText}
            </button>
          </Link>
        </div>
        <div>
          <h1 className='lg:text-3xl text-2xl text-center font-medium text-gray-200'>{props.h1Title}</h1>
          {!scrolled ? <h2 className='lg:text-lg text-center text-gray-200 max-w-xl mt-2'>{props.pSubtitle}</h2> : null}
        </div>
      </div>
    </div>
  );
}

export default ProductsHeader;
