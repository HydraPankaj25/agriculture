import React, { useState } from "react";
import PagesBanner from "../components/PagesBanner";
import { Link } from "react-router-dom";
import { Box, Slider } from "@mui/material";
import vegetableData from "../dataCenter/vegetableCategoryData.json";

const Store = () => {
  const [showCategoriesMobile, setShowCategoriesMobile] = useState(false);
  const [showTagsMobile, setShowTagsMobile] = useState(false);
  const [showBestSellingMobile, setShowBestSellingMobile] = useState(false);

  const toggleCategoriesMobile = () => {
    setShowCategoriesMobile(!showCategoriesMobile);
  };

  const toggleTagsMobile = () => {
    setShowTagsMobile(!showTagsMobile);
  };

  const toggleBestSellingMobile = () => {
    setShowBestSellingMobile(!showBestSellingMobile);
  };

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // Calculate total pages
  const totalPages = Math.ceil(vegetableData.length / itemsPerPage);

  // Get the current items for the current page
  const currentItems = vegetableData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle page change
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.location.href = "#itemsList"; 
    }
  };

  return (
    <>
      <PagesBanner title={"Grocery Store"} subtitle={"Vegetables"} />
      <div className="px-4 sm:px-10 md:px-20 py-10 mb-10">
        <div className="flex flex-col md:flex-row items-start md:items-start gap-8" id="itemsList">
          <div className="w-full md:w-[35%] border rounded-3xl border-gray-300">
            <div className="p-5 text-gray-700 flex flex-col gap-5">
              <h3 className="text-gray-900 text-lg font-semibold">
                Search now
              </h3>
              <form className="flex gap-1 items-center w-full">
                <input
                  type="text"
                  placeholder="Search.."
                  className="placeholder:text-gray-700 focus:outline-none border-2 border-gray-400 rounded-lg px-5 py-3 w-[80%]"
                />
                <button
                  type="submit"
                  className="bg-[#39B54A] text-white p-2.5 px-3 rounded-lg w-[20%] md:w-[12%]"
                >
                  <i className="ri-search-line text-xl"></i>
                </button>
              </form>

              {/* Categories Section */}
              <div className="flex w-full justify-between items-center pr-5">
                <h3 className="text-gray-900 text-lg font-semibold">
                  Categories
                </h3>
                <label
                  htmlFor="categories-toggle"
                  className="inline-flex items-center cursor-pointer md:hidden"
                >
                  <input
                    type="checkbox"
                    id="categories-toggle"
                    className="sr-only peer"
                    checked={showCategoriesMobile}
                    onChange={toggleCategoriesMobile} // Add onChange to toggle the state
                  />
                  <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
                </label>
              </div>

              <div
                className={`flex flex-col justify-center items-start gap-2 pr-5 ${
                  showCategoriesMobile ? "block" : "hidden md:flex"
                }`}
              >
                <Link
                  to="/categories/fruits"
                  className="flex justify-between items-center w-full border-b-2 border-gray-300 p-1 hover:bg-gray-500 hover:text-white"
                >
                  Fruits <span>35</span>
                </Link>
                <Link
                  to="/categories/vegetables"
                  className="flex justify-between items-center w-full border-b-2 border-gray-300 p-1 hover:bg-gray-500 hover:text-white"
                >
                  Vegetables <span>15</span>
                </Link>
                <Link
                  to="/categories/spices"
                  className="flex justify-between items-center w-full border-b-2 border-gray-300 p-1 hover:bg-gray-500 hover:text-white"
                >
                  Spices <span>6</span>
                </Link>
                <Link
                  to="/categories/beverages"
                  className="flex justify-between items-center w-full border-b-2 border-gray-300 p-1 hover:bg-gray-500 hover:text-white"
                >
                  Beverages <span>10</span>
                </Link>
                <Link
                  to="/categories/herbs"
                  className="flex justify-between items-center w-full border-b-2 border-gray-300 p-1 hover:bg-gray-500 hover:text-white"
                >
                  Herbs <span>30</span>
                </Link>
                <Link
                  to="/categories/fresh-nuts"
                  className="flex justify-between items-center w-full border-b-2 border-gray-300 p-1 hover:bg-gray-500 hover:text-white"
                >
                  Fresh Nuts <span>46</span>
                </Link>
              </div>

              {/* Filter by Price */}
              <div className="flex justify-center items-start flex-col gap-5">
                <h3 className="text-gray-900 text-lg font-semibold">
                  Filter By Price
                </h3>
                <div className="w-full">
                  <Box sx={{ width: "100%" }}>
                    <Slider
                      defaultValue={1000}
                      aria-label="Default"
                      valueLabelDisplay="auto"
                      min={10}
                      max={5000}
                    />
                  </Box>
                </div>
              </div>

              {/* Tags Section */}
              <div className="flex justify-center items-start flex-col gap-5">
                <div className="flex w-full justify-between items-center pr-5">
                  <h3 className="text-gray-900 text-lg font-semibold">Tags</h3>
                  <label
                    htmlFor="tags-toggle"
                    className="inline-flex items-center cursor-pointer md:hidden"
                  >
                    <input
                      type="checkbox"
                      id="tags-toggle"
                      className="sr-only peer"
                      checked={showTagsMobile}
                      onChange={toggleTagsMobile} // Add onChange to toggle the state
                    />
                    <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
                  </label>
                </div>
                <div
                  className={`w-full grid grid-cols-2 md:grid-cols-4 gap-3 ${
                    showTagsMobile ? "block" : "hidden md:grid"
                  }`}
                >
                  <span className="text-sm p-2 border rounded-full text-center hover:bg-gray-500 hover:text-white hover:cursor-pointer">
                    Organic
                  </span>
                  <span className="text-sm p-2 border rounded-full text-center hover:bg-gray-500 hover:text-white hover:cursor-pointer">
                    Fresh
                  </span>
                  <span className="text-sm p-2 border rounded-full text-center hover:bg-gray-500 hover:text-white hover:cursor-pointer">
                    Fruits
                  </span>
                  <span className="text-sm p-2 border rounded-full text-center hover:bg-gray-500 hover:text-white hover:cursor-pointer">
                    Pulses
                  </span>
                  <span className="text-sm p-2 border rounded-full text-center hover:bg-gray-500 hover:text-white hover:cursor-pointer">
                    Rice
                  </span>
                </div>
              </div>

              {/* Best Selling Section */}
              <div className="flex justify-center items-start flex-col gap-5">
                <div className="flex w-full justify-between items-center pr-5">
                  <h3 className="text-gray-900 text-lg font-semibold">
                    Best Selling
                  </h3>
                  <label
                    htmlFor="best-selling-toggle"
                    className="inline-flex items-center cursor-pointer md:hidden"
                  >
                    <input
                      type="checkbox"
                      id="best-selling-toggle"
                      className="sr-only peer"
                      checked={showBestSellingMobile}
                      onChange={toggleBestSellingMobile} // Add onChange to toggle the state
                    />
                    <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
                  </label>
                </div>
                <div
                  className={`flex flex-col justify-center items-start w-full gap-3 ${
                    showBestSellingMobile ? "block" : "hidden md:flex"
                  }`}
                >
                  <div className="flex justify-start items-start gap-2 w-full">
                    <img
                      src="category/vegetable/v6.png"
                      alt=" "
                      className="h-20 border border-gray-200 bg-[#E4F5E8] p-1"
                    />
                    <div className="flex flex-col gap-1 w-full">
                      <span className="font-semibold">Cucumber</span>
                      <span className="text-gray-400 text-sm">1 piece</span>
                      <div className="flex justify-between items-center md:w-[40%]">
                        <span className="font-semibold">Rs. 90</span>
                        <strike className="text-xs text-red-500">
                          Rs. 180
                        </strike>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-start items-start gap-2 w-full">
                    <img
                      src="category/vegetable/v6.png"
                      alt=" "
                      className="h-20 border border-gray-200 bg-[#E4F5E8] p-1"
                    />
                    <div className="flex flex-col gap-1 w-full">
                      <span className="font-semibold">Cucumber</span>
                      <span className="text-gray-400 text-sm">1 piece</span>
                      <div className="flex justify-between items-center md:w-[40%]">
                        <span className="font-semibold">Rs. 90</span>
                        <strike className="text-xs text-red-500">
                          Rs. 180
                        </strike>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-start items-start gap-2 w-full">
                    <img
                      src="category/vegetable/v6.png"
                      alt=" "
                      className="h-20 border border-gray-200 bg-[#E4F5E8] p-1"
                    />
                    <div className="flex flex-col gap-1 w-full">
                      <span className="font-semibold">Cucumber</span>
                      <span className="text-gray-400 text-sm">1 piece</span>
                      <div className="flex justify-between items-center md:w-[40%]">
                        <span className="font-semibold">Rs. 90</span>
                        <strike className="text-xs text-red-500">
                          Rs. 180
                        </strike>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[65%] flex flex-col justify-start gap-5">
            {/* Filter/Sort section */}
            <div className="p-5 border border-gray-300 rounded-lg flex justify-between items-center w-full">
              <div className="text-gray-600 text-sm md:text-lg">
                Showing {currentItems.length} of {vegetableData.length} results
              </div>
              <div className="flex items-center gap-3">
                <i className="ri-sort-alphabet-asc text-gray-700 md:text-2xl hover:cursor-pointer"></i>
                <select className="border p-2 rounded-md focus:outline-none selection:outline-none text-sm md:text-md">
                  <option value="asc">Sort Ascending</option>
                  <option value="desc">Sort Descending</option>
                </select>
                <i className="ri-layout-grid-fill text-[#39B54A] text-2xl hover:cursor-pointer"></i>
              </div>
            </div>

            {/* Product Grid */}
            <div className="rounded-lg grid gap-3 md:gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {currentItems.length > 0 &&
                currentItems.map((cat, ind) => (
                  <div
                    key={ind}
                    className="p-3 border-2 border-gray-300 rounded-lg"
                  >
                    <div className="h-auto flex-col flex justify-center items-center w-full">
                      <div className="top-0 flex justify-between items-center p-1 w-full">
                        <span className="bg-[#F6A65A] text-white p-0.5 px-1 text-[10px] rounded-sm">
                          {cat.discount}
                        </span>
                        <i className="ri-heart-line hover:ri-heart-fill hover:text-red-400 text-lg hover:cursor-pointer"></i>
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

            {/* Pagination */}
            <div className="flex justify-center items-center gap-5 mt-5">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="bg-[#39B54A] text-white px-4 py-2 rounded-md hover:bg-green-600 disabled:bg-gray-400"
              >
                Previous
              </button>
              <div className="text-gray-700">
                Page {currentPage} of {totalPages}
              </div>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="bg-[#39B54A] text-white px-4 py-2 rounded-md hover:bg-green-600 disabled:bg-gray-400"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Store;
