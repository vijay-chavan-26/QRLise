import React, { useState } from "react";
import { FoodItemsDataType } from "../../data/ItemsTableData";
import HomeViewFoodItem from "./HomeViewFoodItem";

const ListCard = ({ food }: { food: FoodItemsDataType }) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
    <div
      className="w-full rounded-lg overflow-hidden bg-white relative flex p-2 h-32 cursor-pointer"
      key={food.id}
      onClick={()=>{
        setOpen(true)
      }}
    >
      <div className="w-40 h-full">
        <img
          src={food.itemImage}
          alt="food items"
          loading="lazy"
          className="object-cover h-full w-full object-center rounded-lg"
        />
      </div>

      <div className="pl-4 py-2 w-full">
          <h3 className="">{food.itemName}</h3>
        <div className="flex gap-x-2">
          {/* <p className="px-2 py-1 rounded-lg text-[10px] bg-[#E5EBB2]">tag1</p>
          <p className="px-2 py-1 rounded-lg text-[10px] bg-[#DAEAF1]">tag2</p>
          <p className="px-2 py-1 rounded-lg text-[10px] bg-[#EFDAD7]">tag3</p> */}
          <p className="text-[10px] text-gray-500 leading-3">Lorem ipsum dolor sit, amet consectetur adipisicing e.</p>
        </div>

<span className="text-gray-500 text-[10px] text-right block mb-0">Customizable</span>
        <div className="flex justify-between items-center w-full">
          <h2 className="font-medium mt-2 text-lg"> ₹ {food.price}</h2>
          <button
            type="button"
            className="bg-theme px-3 py-1 rounded-lg text-white"
          >
            ADD
          </button>
        </div>
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
    </div>

    <HomeViewFoodItem food={food} open={open} setOpen={setOpen} />
    </>
  );
};

export default ListCard;
