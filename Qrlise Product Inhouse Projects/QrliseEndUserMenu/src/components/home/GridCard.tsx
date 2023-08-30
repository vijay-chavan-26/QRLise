import React, { useState } from "react";
import { FoodItemsDataType } from "../../data/ItemsTableData";
import { Modal } from "antd";
import HomeViewFoodItem from "./HomeViewFoodItem";

const GridCard = ({ food }: { food: FoodItemsDataType }) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <div
        className="w-[47%] rounded-lg overflow-hidden bg-white relative cursor-pointer"
        key={food.id}
        onClick={() => {
          setOpen(true);
        }}
      >
        <img
          src={food.itemImage}
          alt="food items"
          loading="lazy"
          className="w-full object-cover h-24 "
        />

        <div className="px-2 py-2">
          <div className="flex gap-x-2">
            <p className="px-2 py-1 rounded-lg text-[10px] bg-[#E5EBB2]">
              tag1
            </p>
            <p className="px-2 py-1 rounded-lg text-[10px] bg-[#DAEAF1]">
              tag2
            </p>
            <p className="px-2 py-1 rounded-lg text-[10px] bg-[#EFDAD7]">
              tag3
            </p>
          </div>
          <div className="absolute top-2 right-2">
            {food.dietary === "Veg" ? (
              <div className="border-green-500 bg-white border inline-block rounded-sm p-0">
                <div className="bg-green-500 m-1 rounded-full p-[6px]"></div>
              </div>
            ) : (
              <div className="border-red-500 bg-white border inline-block rounded-sm p-0">
                <div className="bg-red-500 m-1 rounded-full p-[6px]"></div>
              </div>
            )}
          </div>
          <h3 className="mt-3">{food.itemName}</h3>
          <div className="flex justify-between items-center mt-2">
            <h2 className="font-medium text-lg"> ₹ {food.price}</h2>
            <button
              type="button"
              className="bg-theme px-3 py-1 rounded-lg text-white"
            >
              ADD
            </button>
          </div>
        </div>
      </div>

      <HomeViewFoodItem food={food} open={open} setOpen={setOpen} />
    </>
  );
};

export default GridCard;
