import React from "react";
import PagesBanner from "../components/PagesBanner";
import vegetableData from "../dataCenter/vegetableCategoryData.json";

const Made2Order = () => {
  return (
    <>
      <PagesBanner
        title={"Made 2 Order"}
        subtitle={"Products for you that are Made 2 Order"}
      />
      <div className="px-4 sm:px-10 md:px-20 py-10 mb-10">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-5">
            Made 2 Order -{" "}
            <span className="text-[#39B54A]">Instant Delivery</span>
          </h2>
          <div className="flex justify-center items-center gap-3">
            <button className="text-white bg-[#39B54A] px-2 p-1 hover:cursor-pointer">
              <i className="ri-arrow-left-line"></i>
            </button>
            <button className="text-white bg-[#39B54A] px-2 p-1 hover:cursor-pointer">
              <i className="ri-arrow-right-line"></i>
            </button>
          </div>
        </div>
        <div className="p-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
          {vegetableData.length > 0 &&
            vegetableData.map((cat, ind) => (
              <div key={ind} className={`p-3 border-2 border-gray-300`}>
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
            ))}
        </div>
      </div>
    </>
  );
};

export default Made2Order;
