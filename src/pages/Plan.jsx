import React, { useState } from "react";
import PaymentMethod from "../components/PaymentMethod";
import SuccessModal from "../components/SuccessModal";

const Plan = () => {
  const [success, setSuccess] = useState(false);

  const handleOpen = () => {
    if (!success) {
      setSuccess(true);
    }
  };

  const handleClose = () => {
    if (success) {
      setSuccess(false);
    }
  };

  const plans = [
    {
      title: "DAILY",
      price: "Rs. 399",
      features: ["Ut enim ad", "Ut enim ad", "Ut enim ad"],
      popular: false,
    },
    {
      title: "WEEKLY",
      price: "Rs. 499",
      features: ["Ut enim ad", "Ut enim ad", "Ut enim ad"],
      popular: true,
    },
    {
      title: "MONTHLY",
      price: "Rs. 599",
      features: ["Ut enim ad", "Ut enim ad", "Ut enim ad"],
      popular: false,
    },
  ];
  
  return (
    <>
      <div className="px-4 sm:px-10 md:px-20 py-10 mb-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-semibold text-gray-800 sm:text-4xl">
            Choose your Plan
          </h2>
          <p className="mt-3 text-lg text-gray-500">
            Choose the pricing plan that works best for you.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`p-8 rounded-lg shadow-md relative ${
                plan.popular
                  ? "bg-[#333333] text-white md:-translate-y-[5%]"
                  : "bg-[#E4FFE8] text-black"
              } hover:-translate-y-[5%] duration-300 hover:cursor-pointer`}
            >
              <div className="flex flex-col justify-start items-start">
                <h3 className="text-xl font-semibold mb-4 text-center text-[#39B54A]">
                  {plan.title}
                </h3>
                <p className="text-3xl font-semibold text-center mb-20">
                  {plan.price}
                </p>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className={`flex items-center ${
                        !plan.popular ? "text-black" : "text-white"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2 text-[#39B54A]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 px-4 rounded-md font-semibold ${
                    plan.popular
                      ? "bg-[#39B54A] text-white hover:bg-green-600"
                      : "bg-[#39B54A] text-white hover:bg-green-600"
                  }`}
                >
                  Choose Plan →
                </button>
              </div>
              {plan.popular && (
                <div className="absolute top-5 right-5 text-[#FD9419] bg-white px-4 py-2 rounded-lg">
                  POPULAR
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <PaymentMethod handleOpen={handleOpen} />
      <SuccessModal onClose={handleClose} success={success}/>
    </>
  );
};

export default Plan;
