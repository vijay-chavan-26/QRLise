import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import swiperImg1 from "../../assets/swiperImg1.jpg";
import swiperImg2 from "../../assets/swiperImg2.jpg";
import swiperImg3 from "../../assets/swiperImg3.jpg";
import swiperImg4 from "../../assets/swiperImg4.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {  Autoplay } from "swiper/modules";

const HomeBannerSwiper = () => {
  return (
    <div className="mt-5">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        modules={[Autoplay]}
        scrollbar={{ draggable: true }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        <SwiperSlide>
          <div
            className="bg-cover bg-center bg-no-repeat h-56 text-white rounded-lg"
            style={{
              backgroundImage: `url(${swiperImg1})`,
            }}
          >
            <div className="p-5 pb-8 flex items-end justify-between h-full">
              <h1 className="text-2xl font-semibold">
              Desert Best <br /> Deals
              </h1>
              <div className="bg-white border border-theme text-theme inline-block p-2 rounded-xl">
              upto 40% off
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="bg-cover bg-center bg-no-repeat h-56 text-white rounded-lg"
            style={{
              backgroundImage: `url(${swiperImg2})`,
            }}
          >
            <div className="p-5 pb-8 flex items-end justify-between h-full">
              <h1 className="text-2xl font-semibold">
              Desert Best <br /> Deals
              </h1>
              <div className="bg-white border border-theme text-theme inline-block p-2 rounded-xl">
              upto 40% off
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="bg-cover bg-center bg-no-repeat h-56 text-white rounded-lg"
            style={{
              backgroundImage: `url(${swiperImg3})`,
            }}
          >
            <div className="p-5 pb-8 flex items-end justify-between h-full">
              <h1 className="text-2xl font-semibold">
              Desert Best <br /> Deals
              </h1>
              <div className="bg-white border border-theme text-theme inline-block p-2 rounded-xl">
              upto 40% off
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="bg-cover bg-center bg-no-repeat h-56 text-white rounded-lg"
            style={{
              backgroundImage: `url(${swiperImg4})`,
            }}
          >
            <div className="p-5 pb-8 flex items-end justify-between h-full">
              <h1 className="text-2xl font-semibold">
              Desert Best <br /> Deals
              </h1>
              <div className="bg-white border border-theme text-theme inline-block p-2 rounded-xl">
              upto 40% off
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeBannerSwiper;
