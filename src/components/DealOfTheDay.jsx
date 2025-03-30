import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import dealOfTheDayData from "../dataCenter/dealOfTheDayData.json";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Grid, Pagination, Navigation, Autoplay } from "swiper/modules";

const DealOfTheDay = () => {
  return (
    <>
      <div className="px-4 sm:px-10 md:px-20 py-10">
        <h2 className="sm:hidden text-2xl sm:text-3xl font-semibold mb-5">
          <span className="text-[#39B54A]">Deal </span>Of The Day
        </h2>
        <div className="p-5 bg-linear-to-t from-[#B5CEE1] to-white w-[100%] flex justify-evenly items-center gap-2">
          <div className="bg-[#277F63] hidden sm:flex w-[40%] md:w-[25%] flex-col justify-center items-center py-16 gap-10 rounded-r-xl">
            <h2 className="text-lg md:text-2xl font-semibold text-white">
              Deal Of The Day
            </h2>
            <div className="flex justify-evenly items-center gap-5 text-white">
              <div className="flex flex-col justify-center items-center gap-1">
                <span className="text-black font-mono font-semibold bg-white p-2 rounded-md px-3">
                  09
                </span>
                <span className="text-xs">Hours</span>
              </div>
              <div className="flex flex-col justify-center items-center gap-1">
                <span className="text-black font-mono font-semibold bg-white p-2 rounded-md px-3">
                  45
                </span>
                <span className="text-xs">Minutes</span>
              </div>
              <div className="flex flex-col justify-center items-center gap-1">
                <span className="text-black font-mono font-semibold bg-white p-2 rounded-md px-3">
                  43
                </span>
                <span className="text-xs">Seconds</span>
              </div>
            </div>
          </div>

          {/* ------------------------------------------- */}

          <Swiper
            className="mySwiper sm:w-[60%] md:w-[75%]"
            loop={true}
            slidesPerView={1}
            spaceBetween={10}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            navigation={false}
            modules={[Grid, Pagination, Navigation, Autoplay]}
          >
            {dealOfTheDayData.length > 0 &&
              dealOfTheDayData.map((cat, ind) => (
                <SwiperSlide key={ind}>
                  <div className={`p-3 bg-white`}>
                    <div className="h-auto flex-col flex justify-center items-center w-full">
                      <div className="top-0 flex justify-between items-center p-1 w-[100%]">
                        <span className="bg-[#F6A65A] text-white p-0.5 px-1 text-[10px] rounded-sm">
                          {cat.discount}
                        </span>
                        <i className="ri-heart-line hover:ri-heart-fill hover:text-red-400 top-0 right-0 text-lg hover:cursor-pointer"></i>
                      </div>
                      <img
                        src={cat.imageSrc}
                        alt={cat.imageAlt}
                        className="h-20 hover:scale-105 duration-300 hover:drop-shadow-lg transition ease-linear hover:cursor-pointer"
                      />
                    </div>
                    <div className="flex flex-col justify-start items-start gap-5 mt-2">
                      <h3 className="text-lg sm:text-md font-medium text-gray-800">
                        {cat.title}
                      </h3>
                      <span className="text-[10px] text-gray-500 font-semibold">
                        {cat.quantity}
                      </span>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <div className="flex flex-col">
                        <span className="text-gray-800 font-semibold text-sm">
                          {cat.price}
                        </span>
                        <strike className="text-red-400 text-[10px] font-semibold">
                          {cat.originalPrice}
                        </strike>
                      </div>
                      <button className="text-white bg-black p-1 py-0 rounded-sm hover:cursor-pointer hover:bg-gray-800">
                        <i className="ri-add-line"></i>
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default DealOfTheDay;
