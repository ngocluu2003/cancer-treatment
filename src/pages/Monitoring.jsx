import React from "react";
import { useNavigate } from "react-router-dom";

const UnderConstruction = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center p-8 lg:p-16 bg-white dark:bg-[#1C2126] rounded-xl shadow-lg">
        {/* Icon */}
        <div className="mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 text-green-600 dark:text-green-400 mx-auto animate-pulse"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M3 9a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        <h1 className="text-3xl font-extrabold text-gray-800 dark:text-white mb-2">
          We're Building This Page
        </h1>

        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          Our team is working hard to bring this page live. Stay tuned!
        </p>

        <div>
          <button
            onClick={() => navigate("/dashboard")}
            className="inline-block text-md bg-green-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 transition-all duration-300"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default UnderConstruction;
