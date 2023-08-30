import { Modal } from "antd";
import React, { useEffect } from "react";
import { FoodItemsDataType } from "../../data/ItemsTableData";
import Item from "antd/es/list/Item";

const HomeViewFoodItem = ({
  food,
  open,
  setOpen,
}: {
  food: FoodItemsDataType;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Modal
      title="Add Menu Category"
      open={open}
      onOk={() => {}}
      onCancel={() => {
        setOpen(false);
      }}
      footer={null}
    >
      <div className="w-full h-[80vh] overflow-y-scroll">
        <img
          src={food.itemImage}
          alt="food item img"
          className="h-40 object-center object-cover w-full"
        />

        <div className="my-5 px-5">
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

          <div className="flex items-center gap-x-2 mt-3">
          <div className="mt-1">
          {food.dietary === "Veg" ? (
              <div className="border-green-500 bg-white border inline-block rounded-sm p-0">
                <div className="bg-green-500 m-1 rounded-full p-[4px]"></div>
              </div>
            ) : (
              <div className="border-red-500 bg-white border inline-block rounded-sm p-0">
                <div className="bg-red-500 m-1 rounded-full p-[4px]"></div>
              </div>
            )}
          </div>
            <h3 className="font-semibold text-lg ">{food.itemName}</h3>
          </div>

          <p className="text-xs text-gray-500">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit
            exercitationem quas debitis tenetur quidem cupiditate, facere quos
            ad dolorum unde!
          </p>

          <h1 className="text-xl font-semibold mt-3">₹ {food.price}</h1>

          {/* variants */}

          <div className="mt-3">
            <h1 className="text-lg font-medium text-theme mb-2">Quantity</h1>

            <div className="">
              <div className="flex items-center justify-between gap-x-3 mb-1">
                <div className="flex items-center gap-x-3 mb-1">
                  <input type="radio" name="quantity" id="half" />
                  <label htmlFor="half">Half</label>
                </div>
                <p>₹200</p>
              </div>
              <div className="flex items-center justify-between gap-x-3 mb-1">
                <div className="flex items-center gap-x-3 mb-1">
                  <input type="radio" name="quantity" id="medium" />
                  <label htmlFor="medium">Medium</label>
                </div>
                <p>₹100</p>
              </div>
              <div className="flex items-center justify-between gap-x-3 mb-1">
                <div className="flex items-center gap-x-3 mb-1">
                  <input type="radio" name="quantity" id="full" />
                  <label htmlFor="full">Full</label>
                </div>
                <p>₹100</p>
              </div>
              <div className="flex items-center justify-between gap-x-3 mb-1">
                <div className="flex items-center gap-x-3 mb-1">
                  <input type="radio" name="quantity" id="Large" />
                  <label htmlFor="Large">Large</label>
                </div>
                <p>₹100</p>
              </div>
              <div className="flex items-center justify-between gap-x-3 mb-1">
                <div className="flex items-center gap-x-3 mb-1">
                  <input type="radio" name="quantity" id="small" />
                  <label htmlFor="small">Small</label>
                </div>
                <p>₹100</p>
              </div>
            </div>
          </div>

          {/* variants */}
          <div className="mt-3">
            <h1 className="text-lg font-medium text-theme mb-2">Spice</h1>

            <div className="flex items-center gap-x-3 mb-1">
              <input type="radio" name="spice" id="spicy" />
              <label htmlFor="spicy">Spicy</label>
            </div>
            <div className="flex items-center gap-x-3 mb-1">
              <input type="radio" name="spice" id="mediumSpicy" />
              <label htmlFor="mediumSpicy">Medium Spicy</label>
            </div>
          </div>

          {/* add Ons */}
          <div className="mt-3">
            <h1 className="text-lg font-medium text-theme mb-2">
              Customize your order <span className="text-sm">( Optional )</span>
            </h1>

            <div className="">
              <div className="flex items-center justify-between gap-x-3 mb-1">
                <div className="flex items-center gap-x-3 mb-1">
                  <input type="checkbox" name="addOns" id="extraCheese" />
                  <label htmlFor="extraCheese">Extra Cheese</label>
                </div>
                <p>₹50</p>
              </div>
              <div className="flex items-center justify-between gap-x-3 mb-1">
                <div className="flex items-center gap-x-3 mb-1">
                  <input type="checkbox" name="addOns" id="cheeseDip" />
                  <label htmlFor="cheeseDip">Cheese Dip</label>
                </div>
                <p>₹100</p>
              </div>
              <div className="flex items-center justify-between gap-x-3 mb-1">
                <div className="flex items-center gap-x-3 mb-1">
                  <input type="checkbox" name="addOns" id="chipotleCheeseDip" />
                  <label htmlFor="chipotleCheeseDip">Chipotle Cheese Dip</label>
                </div>
                <p>₹60</p>
              </div>
            </div>
          </div>

          {/* time for preparation */}
          <div className="mt-3">
            <h1 className="text-lg font-medium text-theme mb-2">
              Time for preparation
            </h1>

            <div className="bg-green-200 inline-block px-4 py-2 rounded-lg">
              Approx. 20 mins
            </div>
          </div>

          {/* available time  */}
          <div className="mt-3">
            <h1 className="text-lg font-medium text-theme mb-2">
              Available Time
            </h1>

            <div className="flex items-center gap-x-3">
              <div className="bg-blue-200 inline-block px-2 py-2 text-center rounded-lg">
                <p>Morning</p>
                <p>8.00am - 11.00am</p>
              </div>
              <div className="bg-blue-200 inline-block px-2 py-2 text-center rounded-lg">
                <p>Afternoon</p>
                <p>12.00pm - 3.00pm</p>
              </div>
            </div>
          </div>

          {/* add items */}
          <div className="mt-7 flex items-center justify-between sticky bottom-0 bg-white py-2">
            <div className="inline-flex items-center gap-x-3 border rounded-lg px-2 py-1">
              <button className="text-4xl px-2">-</button>
              <span>1</span>
              <button className="text-2xl px-2">+</button>
            </div>
            <button className="bg-[#1CA672] text-white rounded-lg px-4 py-2 text-[15px]">
              Add Items | ₹120
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default HomeViewFoodItem;
