import React from "react";
import HeroSection from "../components/HeroSection";
import MoreCategoriesSection from "../components/MoreCategoriesSection";
import InstantDelivery from "../components/InstantDelivery";
import SubscriptionCategories from "../components/SubscriptionCategories";
import DealOfTheDay from "../components/DealOfTheDay";
import SnacksAndMunchees from "../components/SnacksAndMunchees";

const Home = () => {
  return (
    <>
      <HeroSection />
      <MoreCategoriesSection />
      <div className="px-4 sm:px-10 md:px-20 grid grid-cols-1 sm:grid-cols-2 gap-5 py-10">
        <div className="bg-[url(/promotions/prom1.png)] h-[20rem] bg-cover bg-center flex justify-end items-end rounded-2xl">
          <button className="bg-[#4B2C10] text-white text-xl p-2 px-6 mr-10 mb-10 rounded-xl hover:cursor-pointer">
            Shop Now
          </button>
        </div>
        <div className="bg-[url(/promotions/prom2.png)] h-[20rem] bg-cover bg-center flex justify-end items-end rounded-2xl">
          <button className="bg-[#4B2C10] text-white text-xl p-2 px-6 mr-10 mb-10 rounded-xl hover:cursor-pointer">
            Shop Now
          </button>
        </div>
      </div>
      <InstantDelivery />
      <SubscriptionCategories />
      {/* banner start here */}
      <div className="px-4 sm:px-10 md:px-20 py-10">
        <div className="h-[25rem] w-[100%]">
          <img
            src="/banner/banner10.png"
            alt=" "
            className="h-full w-full rounded-2xl shadow-sm shadow-gray-500"
          />
        </div>
      </div>
      {/* banner end here */}
      <DealOfTheDay />
      <SnacksAndMunchees />

      {/* trusworthy section start here */}
      <div className="flex sm:flex-row flex-col justify-center gap-2 items-center px-4 sm:px-10 md:px-20 py-10">
        <div className="flex flex-col gap-2 p-5 w-[100%] pl-10 sm:pl-20">
          <h2 className="text-3xl font-semibold">Best Quality Healthy And </h2>
          <h2 className="text-3xl font-semibold text-[#39B54A]">
            Fresh Grocery
          </h2>
          <p className="text-sm text-gray-900">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
            est?
          </p>
          <div className="flex gap-3 justify-start items-center text-gray-700">
            <i className="ri-truck-line p-1 px-2 rounded-full bg-black text-white"></i>
            <span className="text-sm font-semibold">
              Delivery at Your Doorsteps
            </span>
          </div>
          <div className="flex gap-3 justify-start items-center text-gray-700">
            <i className="ri-map-pin-2-line p-1 px-2 rounded-full bg-black text-white"></i>
            <span className="text-sm font-semibold">
              Track And Manage Orders
            </span>
          </div>
          <div className="flex gap-3 justify-start items-center text-gray-700">
            <i className="ri-customer-service-line p-1 px-2 rounded-full bg-black text-white"></i>
            <span className="text-sm font-semibold">Customer Support</span>
          </div>
          <div className="flex gap-3 justify-start items-center text-gray-700">
            <i className="ri-price-tag-3-line p-1 px-2 rounded-full bg-black text-white"></i>
            <span className="text-sm font-semibold">Best Prices</span>
          </div>
        </div>
        <div className="w-[100%] p-5 flex justify-center items-center">
          <div className="bg-[#DBD5CF] rounded-full relative">
            <div
              className="hover:scale-110 transition duration-300 ease-linear hover:cursor-pointer hover:drop-shadow-[0_4px_4px_rgba(5,5,0,0.50)]"
            >
              <img src="trust.png" alt=" " className="h-[20rem]" />
            </div>
            <div className="absolute top-12 bg-white p-2 rounded-md shadow-md shadow-gray-300 hover:scale-110 transition duration-300 ease-linear hover:cursor-pointer">
              <img src="broccoli.png" alt=" " className="h-6" />
            </div>
            <div className="absolute bg-white p-2 rounded-md top-12 right-2 shadow-md shadow-gray-300 hover:scale-110 transition duration-300 ease-linear hover:cursor-pointer">
              <img src="tomato.png" alt=" " className="h-6" />
            </div>
            <div className="absolute bg-white p-2 rounded-md bottom-14 right-1 shadow-md shadow-gray-300 hover:scale-110 transition duration-300 ease-linear hover:cursor-pointer">
              <img src="mango.png" alt=" " className="h-6" />
            </div>
          </div>
        </div>
      </div>
      {/* trustwoprthy section end here */}
    </>
  );
};

export default Home;
