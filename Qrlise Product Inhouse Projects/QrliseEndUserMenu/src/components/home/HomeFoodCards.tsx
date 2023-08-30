import React, { useState } from "react";
import { FoodItemsData } from "../../data/ItemsTableData";
import { BiSolidGridAlt } from "react-icons/bi";
import { FaListUl } from "react-icons/fa";
import GridCard from "./GridCard";
import ListCard from "./ListCard";

const HomeFoodCards = () => {
  const [view, setview] = useState<"grid" | "list">("grid");
  const [loading, setLoading] = useState<boolean>(true);
  return (
    <div className="mt-5 relative">

      <div className=" flex gap-x-3 my-3 justify-end">
        <button
          type="button"
          className={`inline-flex items-center flex-col px-2 py-2 rounded-xl ${
            view === "grid" ? "bg-theme text-white" : "bg-white text-theme"
          }`}
        >
          <BiSolidGridAlt
            size={20}
            onClick={() => {
              setview("grid");
              setLoading(true);
            }}
          />
        </button>
        <button
          type="button"
          className={`inline-flex items-center flex-col px-2 py-2 rounded-xl ${
            view === "list" ? "bg-theme text-white" : "bg-white text-theme"
          }`}
        >
          <FaListUl
            size={20}
            onClick={() => {
              setview("list");
              setLoading(true);
            }}
          />
        </button>
      </div>
      <h1 className="text-black text-xl font-medium">Appetizers</h1>


      {view === "grid" ? (
        <div className="flex justify-between gap-y-6 mt-3 flex-wrap">
          {FoodItemsData.map((food) => {
            return <GridCard food={food} />;
          })}
        </div>
      ) : (
        <div className="flex justify-between gap-y-4 mt-3 flex-wrap">
          {FoodItemsData.map((food) => {
            return <ListCard food={food} />;
          })}
        </div>
      )}
      
    </div>
  );
};

export default HomeFoodCards;
