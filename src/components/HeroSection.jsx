import React from "react";

const HeroSection = () => {
  return (
    <>
      <div style={{backgroundImage:"url(banner/banner5.jpg)"}} className="bg-no-repeat bg-center bg-cover min-h-[60vh] sm:min-h-[80vh] p-4 sm:p-10 md:p-20 flex flex-col justify-center items-start gap-4 sm:gap-8 rounded-b-[3rem]">
        <div className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#ffffff] max-w-full sm:max-w-[80%] md:max-w-[60%] lg:max-w-[50%]">
          Live Long, Have Some Veggies
        </div>
        <div className="text-lg sm:text-xl font-semibold text-white max-w-full sm:max-w-[90%] md:max-w-[70%] lg:max-w-[60%]">
          The treasure of good life hidden in fruits and veggies
        </div>
        <div className="bg-white flex flex-col sm:flex-row justify-center sm:justify-between items-center p-3 sm:p-4 rounded-lg w-full sm:w-[90%] md:w-[70%] lg:w-[50%]">
          <div className="flex items-center gap-2 sm:gap-3 text-base sm:text-lg text-gray-900 w-full mb-4 sm:mb-0">
            <i className="ri-search-2-line text-xl font-semibold"></i>
            <input
              type="text"
              placeholder="What are you looking for?"
              className="focus:outline-none w-full"
            />
          </div>
          <button className="bg-[#39B54A] text-white font-semibold p-2 sm:p-3 rounded-lg hover:bg-[#2c7e37] px-4 sm:px-6 hover:cursor-pointer w-full sm:w-auto">
            Search
          </button>
        </div>
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 px-10 sm:px-10 md:px-20 py-7 sm:py-10">
        <div className="p-2 flex jsutify-center items-center gap-5">
          <div className="p-4 bg-[#EBFFF6] rounded-lg">
            <i className="ri-customer-service-2-fill text-4xl"></i>
          </div>
          <div className="p-2">
            <h3 className="font-semibold mb-2">Customer Support</h3>
            <p className="text-xs text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className="p-2 flex jsutify-center items-center gap-5">
          <div className="p-4 bg-[#EBFFF6] rounded-lg">
            <i className="ri-price-tag-3-line text-4xl"></i>
          </div>
          <div className="p-2">
            <h3 className="font-semibold mb-2">Best Price</h3>
            <p className="text-xs text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className="p-2 flex jsutify-center items-center gap-5">
          <div className="p-4 bg-[#EBFFF6] rounded-lg">
            <i className="ri-truck-line text-4xl"></i>
          </div>
          <div className="p-2">
            <h3 className="font-semibold mb-2">Fast Delivery</h3>
            <p className="text-xs text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className="p-2 flex jsutify-center items-center gap-5">
          <div className="p-4 bg-[#EBFFF6] rounded-lg">
            <i className="ri-wallet-3-line text-4xl"></i>
          </div>
          <div className="p-2">
            <h3 className="font-semibold mb-2">Easy Payments</h3>
            <p className="text-xs text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
