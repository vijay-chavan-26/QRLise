import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import CategoryImg1 from "../../assets/CategoryImg1.png";
import CategoryImg2 from "../../assets/CategoryImg2.png";
import CategoryImg3 from "../../assets/CategoryImg3.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {Pagination, Autoplay } from "swiper/modules";
const HomeCategorySwiper = () => {
  return (
    <div className="mt-5">
      <Swiper
      // className="pb-8"
        spaceBetween={20}
        slidesPerView={3}
        pagination={{clickable:true}}
        // modules={[Pagination]}
        scrollbar={{ draggable: true }}
        // autoplay={{
        //   delay: 2000,
        //   disableOnInteraction: false,
        // }}
        loop={false}
      >
        <SwiperSlide>
          <div className="h-20 rounded-lg bg-[#E5EBB2] overflow-hidden">
            <h3 className="text-xs mt-2 text-center">Today's Special</h3>
            <img src={CategoryImg1} alt="CategoryImg1" className="w-20 translate-x-11 translate-y-2
            " />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-20 rounded-lg bg-[#D3EBCD] overflow-hidden">
            <h3 className="text-xs mt-2 text-center">Recommended</h3>
            <img src={CategoryImg2} alt="CategoryImg1" className="w-20 translate-x-11 translate-y-2
            " />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-20 rounded-lg bg-[#DAEAF1] overflow-hidden">
            <h3 className="text-xs mt-2 text-center">Chef Special</h3>
            <img src={CategoryImg3} alt="CategoryImg1" className="w-20 translate-x-11 translate-y-2
            " />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-20 rounded-lg bg-[#E5EBB2] overflow-hidden">
            <h3 className="text-xs mt-2 text-center">Most Ordered</h3>
            <img src={CategoryImg1} alt="CategoryImg1" className="w-20 translate-x-11 translate-y-2
            " />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-20 rounded-lg bg-[#D3EBCD] overflow-hidden">
            <h3 className="text-xs mt-2 text-center">Highly Rated</h3>
            <img src={CategoryImg2} alt="CategoryImg1" className="w-20 translate-x-11 translate-y-2
            " />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeCategorySwiper;
