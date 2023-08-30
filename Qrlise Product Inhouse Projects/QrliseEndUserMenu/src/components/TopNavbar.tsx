import React from "react";
import { FiMenu } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
import Logo from "../assets/Logo.png";

const TopNavbar = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="bg-white inline-block p-3 rounded-xl">
        <FiMenu size={25} className={"text-theme"} />
      </div>

      <img src={Logo} alt="logo" className="w-16" />
      <h1 className="font-medium text-md">Maria’s Italian Resto</h1>

      <div className="bg-white inline-flex items-center flex-col px-3 py-1 text-theme rounded-xl">
        <AiFillStar size={22} className={""} />
        <span className="-mt-[2px] text-sm">4.1</span>
      </div>
    </div>
  );
};

export default TopNavbar;
