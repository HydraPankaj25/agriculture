import React,{useState} from "react";
import successAnimation from "../assets/success-animation.json";
import Lottie from "lottie-react";

const SuccessModal = ({ onClose, success }) => {
  // State to force reset of Lottie animation
  const [animationKey, setAnimationKey] = useState(0);

  const handleClose = () => {
    // Reset the Lottie animation by updating the key
    setAnimationKey((prevKey) => prevKey + 1); 
    onClose();
  };

  return (
    <div
      className={`fixed inset-0 bg-[rgb(0,0,0,0.7)] ${
        success ? "flex" : "hidden"
      } justify-center items-center z-50 transition-opacity duration-300 ease-in-out`}
    >
      <div className="bg-[#8954FE] rounded-lg shadow-xl p-6 w-full max-w-md transform transition-transform duration-500 ease-out scale-95 hover:scale-100">
        {/* Close Button */}
        <div className="flex justify-end mb-4">
          <button
            onClick={handleClose}
            className="text-gray-700 hover:text-gray-900 focus:outline-none hover:cursor-pointer"
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

        {/* Modal Content */}
        <div className="flex flex-col items-center justify-center">
          {/* Success Animation */}
          <div className="relative w-24 h-24 mb-4 flex justify-center items-center">
            {/* Lottie Animation */}
            <div className="h-20 w-20 relative flex justify-center items-center">
              <Lottie
              key={animationKey}
                animationData={successAnimation}
                loop={false}
                autoplay={true}
                style={{ height: 200, width: 200 }} // Adjust size to your preference
              />
            </div>
          </div>

          {/* Success Message */}
          <h2 className="text-2xl font-semibold text-white mb-2">
            Congratulations!
          </h2>
          <p className="text-center text-white mb-6">
            You have successfully subscribed to the daily plan. Stay tuned for
            exciting updates!
          </p>

          {/* Done Button */}
          <button
            onClick={handleClose}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-md w-full transition-colors duration-300 ease-in-out"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
