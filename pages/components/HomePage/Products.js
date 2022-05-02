import categories from "../JSON/categories.json";
import subcategories from "../JSON/subcategories.json";
import { useState, useEffect } from "react";

function Products() {
  const [currentCategory, setCurrentCategory] = useState(0);

  let currentSub = subcategories?.filter((subcat) => subcat.subCatPar.replace(/ /g, "-").toLowerCase() === categories[currentCategory].catName.replace(/ /g, "-").toLowerCase());
  console.log(currentSub);

  return (
    <div className='flex flex-col items-end max-left mb-10'>
      <div className='flex flex-row w-full'>
        <div className='w-1/3 aspect-square'>
          <img src={`../../images/categoryImage/${categories[currentCategory].catImage}`} className='w-full' alt='' />
        </div>
        <div className='w-1/3 aspect-square bg-black flex flex-col text-white px-20 pt-[15%] space-y-5 relative'>
          <div className='flex flex-row space-x-2 p-2 absolute top-0 right-0'>
            <button onClick={() => (currentCategory === 0 ? setCurrentCategory(categories.length - 1) : setCurrentCategory(currentCategory - 1))}>
              <img src='../../images/left-arrow.svg' alt='' />
            </button>
            <button onClick={() => (currentCategory < categories.length - 1 ? setCurrentCategory(currentCategory + 1) : setCurrentCategory(0))}>
              <img src='../../images/right-arrow.svg' alt='' />
            </button>
          </div>
          <h1 className='text-5xl font-semibold'>{categories[currentCategory].catName}</h1>
          <h1 className='text-xl'>{categories[currentCategory].catDescription}</h1>
          {/* <button className='css-button-sliding-to-left--black'>DESCARCA BROSURA</button> */}
        </div>
        <div className={`w-1/3 aspect-square ${currentCategory % 2 == 0 ? "bg-[#A2DBFA]" : "bg-[#B3AAFF]"} flex flex-col p-20 py-28`}>
          <h1 className='text-4xl font-semibold'>Categorii</h1>
          <ul className='list-disc mt-10 space-y-2'>
            {currentSub.map((cat, key) => (
              <li key={key}>{cat.subCatName}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className='h-20 w-full bg-alpha-green flex flex-row items-center text-white'>
        {categories.map((categorie, key) => (
          <button className='px-8 h-full w-fit flex items-center border-t border-r text-left' key={key}>
            {categorie.catName}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Products;
