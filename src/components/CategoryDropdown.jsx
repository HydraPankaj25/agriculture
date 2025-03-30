import React, { useState, useRef, useEffect } from "react";

const CategoryDropdown = ({ isOpen, onClose }) => {
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={dropdownRef}
      className="absolute top-full left-0 bg-white shadow-md rounded-md p-4 mt-2 w-full sm:w-[40%] md:w-[50%] lg:w-[60%] z-50" // Adjusted widths here
    >
      <div className="flex flex-col gap-3">
        {/* Example categories - replace with your actual data */}
        <div className="flex items-center gap-4 hover:bg-gray-300 p-2 rounded-md hover:cursor-pointer hover:text-white">
          <img
            src="category/logo/logo4.png"
            alt="sweets"
            className="h-10 w-10 object-contain"
          />
          <span>Sweets</span>
        </div>
        <div className="flex items-center gap-4 hover:bg-gray-300 p-2 rounded-md hover:cursor-pointer hover:text-white">
          <img
            src="category/logo/logo5.png"
            alt="nuts"
            className="h-10 w-10 object-contain"
          />
          <span>Nuts</span>
        </div>
        <div className="flex items-center gap-4 hover:bg-gray-300 p-2 rounded-md hover:cursor-pointer hover:text-white">
          <img
            src="category/logo/logo10.png"
            alt="vegetables"
            className="h-10 w-10 object-contain"
          />
          <span>Vegetables</span>
        </div>
        {/* Add more categories here */}
      </div>
    </div>
  );
};

export default CategoryDropdown;
