import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { FcSearch } from "react-icons/fc";
import products from "../JSON/products.json";
import Link from "next/link";

function SearchBar() {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = products.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase()) || value.fullDescription.toLowerCase().includes(searchWord.toLowerCase()) || value.smallDescription.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };
  return (
    <div className=' h-full'>
      <div className='relative'>
        <input type='text' className={`rounded-2xl h-8 bg-gray-200 px-5 text-black font-normal w-44 focus:w-96 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent shadow-2xl ${wordEntered.length != 0 ? "w-96" : ""}`} placeholder='Caută produs...' onChange={handleFilter} value={wordEntered} />
        <div className='absolute inset-y-0 right-0 text-2xl mr-2 mt-1 text-blue-600'>{wordEntered.length === 0 ? <FcSearch /> : <AiFillCloseCircle onClick={clearInput} className='cursor-pointer' />}</div>
      </div>
      {filteredData.length != 0 && (
        <div className='overflow-hidden h-96 overflow-y-auto absolute w-96 scrollbar-hidden bg-gray-200 p-2 rounded-l-2xl text-black mt-2'>
          {filteredData.map((produs, index) => (
            <Link key={index} href={`/${produs.category}/${produs.subcategory}/${produs.name}`.replaceAll(" ", "-").toLocaleLowerCase()}>
              <a href='' onClick={clearInput}>
                <div className='flex flex-row items-center mb-3'>
                  <img src={`/images/productImage/thumbnail/${produs.Thumbnail}`} alt='' className='w-20 p-1 mr-3 rounded-xl bg-[#00001a]' />
                  <div className='flex flex-col hover:text-blue-900'>
                    <p>{produs.name}</p>
                    <p className='text-xs text-gray-800 hover:text-blue-900'>{produs.smallDescription}</p>
                    <p className='text-[10px] mt-1'>{`${produs.category} > ${produs.subcategory}`}</p>
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
