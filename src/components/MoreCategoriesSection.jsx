import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import categoriesData from "../dataCenter/moreCategory.json";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Grid, Pagination, Navigation, Autoplay } from "swiper/modules";

const MoreCategoriesSection = () => {
  return (
    <div className="px-4 sm:px-10 md:px-20">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-5">
        Explore by <span className="text-[#39B54A]">Categories</span>
      </h2>
      <div className="p-5">
        <Swiper
          loop={true}
          slidesPerView={1}
          spaceBetween={10}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          navigation={true}
          modules={[Grid, Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          {categoriesData.length > 0 &&
            categoriesData.map((cat, ind) => (
              <SwiperSlide key={ind}>
                <div
                  className={`p-4 flex flex-col items-center justify-center bg-[#F9F6D7] rounded-xl hover:cursor-pointer group`}
                >
                  <img
                    src={`/category/logo/${cat.image}`}
                    alt={cat.title}
                    className="h-20 mb-3"
                  />
                  <h3 className="text-lg font-semibold text-gray-800 gap-2">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-gray-700 break-words">
                    {cat.products}
                  </p>
                  <Link className="bg-[#39B54A] p-3 px-4 rounded-full opacity-0 group-hover:opacity-100 duration-300 transition absolute bottom-4 right-4">
                    <i className="ri-arrow-right-line text-2xl text-white font-semibold"></i>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MoreCategoriesSection;
