import React from "react";
import PagesBanner from "../components/PagesBanner";
import data from "../dataCenter/learnData.json";
import { Link } from "react-router-dom";

const Learn = () => {
  return (
    <>
      <PagesBanner title={"Learn"} subtitle={"Recent updates and blogs"} />
      <div className="px-4 sm:px-10 md:px-20 py-10 mb-10">
        <div className="py-5 flex gap-5 p-4">
            <button className="text-md font-semibold text-white bg-[#39B54A] px-8 py-4 rounded-full">Nutrition</button>
            <button className="text-md font-semibold bg-[#EBF8ED] px-8 py-4 rounded-full text-[#39B54A]">Recipes</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 p-4">
          {data.map((card,ind) => (
            <Link to={`/learnDetail/${card.id}`} key={ind} className="bg-white rounded-3xl shadow-md shadow-gray-500 overflow-hidden">
              <div className="relative">
                <img
                  src={card.imageUrl}
                  alt={card.title}
                  className="w-full h-48 object-cover"
                />
                {card.event && (
                  <button className="absolute top-2 left-2 bg-green-500 text-white px-3 py-1 rounded-full text-xs">
                    {card.event}
                  </button>
                )}
                <span className="absolute top-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded-md text-xs">
                  {card.time}
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                <div className="flex items-center justify-between">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                    {card.category}
                  </span>
                  <span className="text-gray-500 text-sm">{card.date}</span>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-red-500 mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{card.likes}</span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.684 13.342C8.886 12.93 9 12.482 9 12c0-.482-.114-.93-.316-1.342m0 2.684a3 3 0 11-6 0 3 3 0 016 0zm6-1.342c.202.412.316.86.316 1.342 0 .482-.114.93-.316 1.342m0-2.684a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Learn;
