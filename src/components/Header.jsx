import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import CategoryDropdown from "./CategoryDropdown";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const location = useLocation(); // Get the current location

  // Function to toggle the menu
  const toggleMenu = () => setShowMenu((prev) => !prev);

  const toggleCategoryDropdown = () => {
    setShowCategoryDropdown(!showCategoryDropdown);
  };

  const MenuLink = ({ children, to }) => {
    const isActive = location.pathname === to; // Check if the link is active
    return (
      <Link
        className={`hover:text-[#39B54A] ${
          isActive ? "text-[#39B54A]" : "text-gray-800"
        }`}
        to={to}
      >
        {children}
      </Link>
    );
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 px-6 sm:px-10 gap-5 sm:gap-0">
        <div className="flex items-center justify-start gap-6">
          <div>
            <img src="/mainLogo.png" alt="Logo" className="h-20" />
          </div>
          <div>
            <i className="ri-map-pin-line"></i>
            <span>Delivery to Home 2 - Pitampura, New Delhi</span>
          </div>
        </div>
        <div className="flex items-center justify-start gap-10">
          <div>
            <i className="ri-shopping-cart-line text-[#39B54A] relative px-2 py-2 text-xl">
              <span className="text-[8px] font-semibold px-[4px] py-[1px] absolute bg-red-500 text-white rounded-full top-1 right-1">2</span>
            </i>
            <span>My Cart</span>
          </div>
          <div>
            <i className="ri-user-line text-[#39B54A] text-xl"></i>
            <span>
              <Link to="/login">Login</Link> / <Link to="/signup">Signup</Link>
            </span>
          </div>
        </div>
      </div>
      <div className="sticky top-0 z-40">
        <div
          className={`bg-[#E9F6F0] p-4 px-8 sm:px-12 flex ${
            showMenu ? "flex-col gap-5" : "flex-row"
          } items-center justify-between`}
        >
          <div className="w-[100%] sm:w-[30%] flex justify-between items-center relative">
            <div className="w-[50%] flex justify-center items-center">
              <button
                className="bg-[#39B54A] text-white font-semibold p-3 rounded-lg hover:bg-[#2c7e37] text-sm sm:text-normal"
                onClick={toggleCategoryDropdown}
              >
                Shop By Category{" "}
                <i
                  className={`ri-${
                    !showCategoryDropdown ? "arrow-down" : "arrow-up"
                  }-s-line`}
                ></i>
              </button>
              <CategoryDropdown
                isOpen={showCategoryDropdown}
                onClose={() => setShowCategoryDropdown(false)}
              />
            </div>
            <div className="w-[50%] sm:hidden flex items-center justify-end p-4 text-2xl font-bold">
              <i
                className={`ri-${
                  showMenu ? "close-large" : "menu"
                }-line hover:text-[#39B54A] hover:cursor-pointer p-2`}
                onClick={toggleMenu}
                aria-expanded={showMenu}
              ></i>
            </div>
          </div>
          <div
            className={`w-[100%] sm:w-[70%] ${
              showMenu ? "flex flex-col" : "hidden"
            } sm:flex justify-center gap-6 items-center font-semibold text-lg`}
          >
            <MenuLink to="/">Home</MenuLink>
            <MenuLink to="/store">Store</MenuLink>
            <MenuLink to="/about">About</MenuLink>
            <MenuLink to="/learn">Learn</MenuLink>
            <MenuLink to="/plan">Plan</MenuLink>
            <MenuLink to="/made2order">Made 2 Order</MenuLink>
            <MenuLink to="/subscription">Subscription</MenuLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
