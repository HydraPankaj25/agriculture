import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#E4F5E8" fill-opacity="1" d="M0,64L48,101.3C96,139,192,213,288,213.3C384,213,480,139,576,138.7C672,139,768,213,864,224C960,235,1056,181,1152,154.7C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg> */}
      <div className="sm:px-10 md:px-20 bg-[#E9F6F0] rounded-t-[5rem] bg-[url(/banner/banner9.jpg)] bg-cover bg-center bg-blend-darken">
        <div className="flex flex-col justify-center items-center ">
          <div className="w-[90%] flex flex-col sm:flex-row gap-5 sm:gap-0 justify-between items-center bg-[#644619] text-white p-8 sm:px-28 rounded-full -translate-y-[40%]">
            <h3 className="uppercase text-lg sm:text-xl font-semibold">
              Subscribe to Newsletter
            </h3>
            <div className="border-b-2 sm:p-2">
              <input
                type="text"
                className="text-white focus:outline-none"
                placeholder="Enter email address..."
              />
              <button>
                <i className="ri-arrow-right-line text-lg sm:text-2xl"></i>
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center sm:p-5">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-14 md:gap-5 p-5 place-items-start md:place-items-center text-gray-700">
              <div className="flex flex-col gap-3 text-sm">
                <h3 className="text-lg font-semibold mb-4">Contact</h3>
                <div className="flex justify-start items-center gap-2">
                  <i className="ri-map-pin-2-line text-lg"></i>
                  <span>
                    Shop 4, Videocon Building, Pali Village, Bandra West,
                    Mumbai, Maharashtra 400050
                  </span>
                </div>
                <div>
                  <i className="ri-phone-line text-lg"></i>
                  <span className="ml-2">+91 981-900-0300, 987 658 7654</span>
                </div>
                <div>
                  <i className="ri-mail-line text-lg"></i>
                  <span className="ml-2">contact@thefarmersstore.in</span>
                </div>
                <div>
                  <i className="ri-time-line text-lg"></i>
                  <span className="ml-2">Work Hours : 8:00am - 12pm</span>
                </div>
              </div>
              <div className="flex flex-col gap-3 text-sm">
                <h3 className="text-lg font-semibold mb-4">Account</h3>
                <Link>My Orders</Link>
                <Link>My Wishlist</Link>
                <Link>Latest Offer</Link>
                <Link>Feedback</Link>
                <Link>Payment</Link>
              </div>
              <div className="flex flex-col gap-3 text-sm">
                <h3 className="text-lg font-semibold mb-4">Help Center</h3>
                <Link>Your Account</Link>
                <Link>Privacy Policy</Link>
                <Link>Terms & Conditions</Link>
                <Link>Cancellation Policy</Link>
                <Link>Refund & Return</Link>
              </div>
              <div className="flex flex-col gap-3 text-sm md:text-white text-gray-700">
                <h3 className="text-lg font-semibold mb-4">Account</h3>
                <Link>About Us</Link>
                <Link>Blog</Link>
                <Link>Contact</Link>
                <Link>Deal of the day</Link>
                <Link>Best Seller</Link>
              </div>
            </div>
          </div>

          <div className="flex justify-between w-full p-4 border-t-2 border-[#39B54A]">
            <div className="font-semibold text-xs sm:text-[1rem]">
              © 2023, All Rights Reserved by{" "}
              <span className="text-[#39B54A]">The Farmer’s Store</span>
            </div>
            <div className="flex gap-2 text-sm sm:text-lg font-semibold">
              <i className="ri-facebook-line p-1 px-2 rounded-full bg-white text-black hover:cursor-pointer"></i>
              <i className="ri-instagram-line p-1 px-2 rounded-full bg-white text-black hover:cursor-pointer"></i>
              <i className="ri-linkedin-line p-1 px-2 rounded-full bg-white text-black hover:cursor-pointer"></i>
              <i className="ri-twitter-x-line p-1 px-2 rounded-full bg-white text-black hover:cursor-pointer"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
