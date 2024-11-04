import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
//
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-white">
      <div className="space-y-6 rounded-lg bg-white px-6 py-12 text-center shadow-lg dark:bg-gray-800">
        <h1 className="text-5xl font-bold">404</h1>
        <p className="text-lg">
          Oops! The page you’re looking for doesn’t exist. It might have been
          removed or is temporarily unavailable.
        </p>
        <button
          onClick={() => navigate("/")}
          className="mt-4 rounded-md bg-green-600 px-6 py-2 text-lg font-semibold text-white transition-colors hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600"
        >
          Go Back to Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
