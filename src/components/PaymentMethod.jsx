import React from "react";

const PaymentMethod = ({handleOpen}) => {
  const paymentMethods = [
    {
      name: "Apple Pay",
      icon: "/subscription/applepay.png",
    },
    {
      name: "Credit/Debit Card",
      icon: "/subscription/card.png",
    },
    {
      name: "Pay On Delivery",
      icon: "/subscription/money.png",
    },
  ];

  const orderSummary = {
    discount: 30,
    price: 399,
    subtotal: 399,
    taxes: 20,
    total: 419,
  };

  return (
    <div className="px-4 sm:px-10 md:px-20 py-10 mb-10">
      <div className="flex md:flex-row flex-col justify-center items-center gap-8 md:px-12">
        {/* Payment Methods Section */}
        <div className="md:w-[70%]">
          <h2 className="text-2xl font-semibold mb-4">Payment Method</h2>
          <p className="text-gray-500 mb-6">
            Choose suitable payment method that works best for you
          </p>
          {paymentMethods.map((method, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 border border-gray-300 rounded-lg mb-4 cursor-pointer hover:shadow-md transition-shadow"
            >
              <div className="flex items-center">
                <img
                  src={method.icon}
                  alt={method.name}
                  className="h-12 w-12 mr-4"
                />
                <span className="font-medium">{method.name}</span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          ))}
        </div>

        {/* Order Summary Section */}
        <div className="md:w-[30%]">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Order summary</h2>
            <p className="text-green-500 mb-4">
              You save Rs {orderSummary.discount}/month on subscription
            </p>
            <div className="flex justify-between mb-2">
              <span>Price</span>
              <span>Rs. {orderSummary.price}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>Rs. {orderSummary.subtotal}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Taxes</span>
              <span>Rs. {orderSummary.taxes}</span>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between font-semibold mb-6">
              <span>Total</span>
              <span>Rs. {orderSummary.total}</span>
            </div>
            <button onClick={handleOpen} className="bg-green-500 text-white py-3 px-6 rounded-md w-full hover:bg-green-600 transition-colors">
              Proceed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
