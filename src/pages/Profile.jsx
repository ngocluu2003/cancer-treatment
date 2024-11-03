import React from "react";
import { useUserStateContext } from "../context/UserContext";

const Profile = () => {
  const { currentUser } = useUserStateContext();

  if (!currentUser) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-lg text-gray-500">Loading...</div>
      </div>
    );
  }

  return (
    <div className="mx-auto mt-16 max-w-lg rounded-lg bg-[#e3e3db] p-6 shadow-lg dark:bg-[#1c1c24]">
      <div className="flex flex-col items-center">
        <p className="mb-4 flex h-20 w-20 flex-row items-center justify-center rounded-full bg-green-500">
          <span className="text-6xl">😊</span>
        </p>
        <h1 className="mb-2 text-3xl font-semibold text-black dark:text-white">
          User Profile
        </h1>
        <div className="mt-4 w-full">
          <p className="mb-1 text-sm text-gray-700 dark:text-gray-400">
            Email:
          </p>
          <p className="mb-4 text-lg font-semibold text-black dark:text-white">
            {currentUser.createdBy}
          </p>

          <p className="mb-1 text-sm text-gray-700 dark:text-gray-400">
            Username:
          </p>
          <p className="mb-4 text-lg font-semibold text-black dark:text-white">
            {currentUser.username}
          </p>

          <p className="mb-1 text-sm text-gray-700 dark:text-gray-400">Age:</p>
          <p className="mb-4 text-lg font-semibold text-black dark:text-white">
            {currentUser.age}
          </p>

          <p className="mb-1 text-sm text-gray-700 dark:text-gray-400">
            Location:
          </p>
          <p className="text-lg font-semibold text-black dark:text-white">
            {currentUser.location}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
