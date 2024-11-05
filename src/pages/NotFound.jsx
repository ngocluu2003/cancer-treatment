import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-white">
      <div className="mx-4 flex max-w-md flex-col items-center space-y-6 rounded-xl bg-white p-6 text-center shadow-lg dark:bg-gray-800 sm:max-w-lg sm:p-8">
        <h1 className="text-7xl font-bold text-green-600 dark:text-green-500">
          404
        </h1>
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300">
          Page Not Found
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          The page you’re looking for doesn’t exist. It may have been removed,
          or it might be temporarily unavailable.
        </p>
        <button
          onClick={() => navigate("/")}
          className="mt-6 inline-flex items-center justify-center rounded-lg bg-[#1ec070] px-6 py-3 text-lg font-medium text-white shadow-lg hover:bg-[#1dc071] focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:bg-green-500 dark:hover:bg-green-600"
        >
          Go Back to Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
