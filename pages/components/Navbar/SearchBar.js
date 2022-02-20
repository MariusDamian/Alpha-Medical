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
               return value.name.toLowerCase().includes(searchWord.toLowerCase());
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
          <div className=" h-full">
               <div className="relative">
                    <input type="text" className="rounded-2xl h-8 bg-gray-200 px-5 text-black font-normal w-60 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent shadow-2xl" placeholder="Caută produs..." onChange={handleFilter} value={wordEntered} />
                    <div className="absolute inset-y-0 right-0 text-2xl mr-2 mt-1 text-blue-600">{wordEntered.length === 0 ? <FcSearch /> : <AiFillCloseCircle onClick={clearInput} className="cursor-pointer" />}</div>
               </div>
               {filteredData.length != 0 && (
                    <div className="overflow-hidden h-56 overflow-y-auto absolute w-60 scrollbar-hidden bg-gray-200 p-2 rounded-2xl text-black mt-2">
                         {filteredData.map((produs, index) => (
                              <Link key={index} to={`/${produs.category}/${produs.subcategory}/${produs.name}`.replaceAll(" ", "-").toLocaleLowerCase()} onClick={clearInput}>
                                   <div className="flex flex-row items-center mb-3">
                                        <img src={`/images/productImage/thumbnail/${produs.Thumbnail}`} alt="" className="w-20 mr-3 rounded-xl bg-[#00001a]" />
                                        <p>{produs.name}</p>
                                   </div>
                              </Link>
                         ))}
                    </div>
               )}
          </div>
     );
}

export default SearchBar;
