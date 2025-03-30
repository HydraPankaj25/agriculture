import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import data from "../dataCenter/learnData.json";

const LearnDetails = () => {
  const { id } = useParams();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Find the item in the JSON data that matches the id
  const eventData = data.find((item) => item.id === parseInt(id));

  if (!eventData) {
    return <div>Item not found.</div>; // Handle the case where the item doesn't exist
  }

  return (
    <>
      <div className="px-4 sm:px-10 md:px-20 py-10 mb-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            {/* Image Section */}
            <div className="relative hover:cursor-pointer">
              <img
                src={"../" + eventData.imageUrl}
                alt={eventData.title}
                className="w-full rounded-lg"
              />
              <span className="absolute top-5 right-5 bg-[rgb(0,0,0,0.5)] bg-opacity-50 text-white px-4 py-2 rounded-md text-md md:text-lg">
                {eventData.time}
              </span>
              <div className="p-5 bg-gray-800 -translate-y-[50%] rounded-b-3xl flex justify-between w-full items-center">
                <div className="bg-opacity-70 text-white px-3 py-1 rounded-full text-lg bg-gray-700">
                  Rs {eventData.price}
                </div>
                <Link
                  className="bg-green-500 text-white px-4 py-2 rounded-full"
                  onClick={handleOpenModal}
                >
                  Join Event →
                </Link>
              </div>
            </div>

            {/* Content Section */}
            <div className="flex flex-col justify-start items-start gap-5 text-gray-800">
              <h3 className="text-gray-500 font-thin text-lg">
                {eventData.date}
              </h3>
              <h1 className="text-4xl font-semibold">{eventData.title}</h1>
              <div className="flex items-center justify-start sm:gap-2">
                <span className="text-gray-600 sm:text-lg font-semibold">
                  Most wanted {eventData.category} Essentials :
                </span>
                <span className="text-gray-600 sm:text-lg">
                  {eventData.readTime}
                </span>
              </div>
              <div className="flex space-x-2 mb-4">
                {eventData.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-md font-semibold bg-[#EBF8ED] px-4 sm:px-8 py-2 sm:py-4 rounded-full text-[#39B54A]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-gray-700 sm:text-lg">
                {eventData.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* modal  */}
      <div
        className={`relative z-50 ${!isModalOpen && "hidden"}`}
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        {/* Background backdrop */}
        <div
          className="fixed inset-0 bg-gray-500/75 transition-opacity"
          aria-hidden="true"
          onClick={handleCloseModal}
        ></div>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            {/* Modal panel */}
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg flex justify-center items-center">
              <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                {/* Modal header */}
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">Join Event</h2>
                  <button
                    onClick={handleCloseModal}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                {/* Modal content */}
                <form>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="fullName"
                    >
                      Full Name
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="fullName"
                      type="text"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="phone"
                    >
                      Phone
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="email"
                    >
                      Email Address
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LearnDetails;
