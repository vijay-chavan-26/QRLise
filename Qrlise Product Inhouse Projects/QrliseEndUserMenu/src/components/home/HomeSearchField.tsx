import React from "react";
import { MdFilterList } from "react-icons/md";
import { BiSearch } from "react-icons/bi";

const HomeSearchField = () => {
  return (
    <div className="bg-white mt-5 text-theme px-4 py-2 flex items-center rounded-lg gap-x-3 shadow-sm">
      <MdFilterList size={30} />
      <input type="text" className=" bg-white w-full outline-none text-black text-md placeholder:text-center" placeholder="Search Dish" id="searchFood" />
      <label htmlFor="searchFood"><BiSearch size={25} /></label>
    </div>
  );
};

export default HomeSearchField;
