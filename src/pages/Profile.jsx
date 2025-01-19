import React, { useEffect, useState } from "react";
import { useUserStateContext } from "../context/UserContext";
import { useUser } from "@clerk/clerk-react";

const Profile = () => {
  const { currentUser } = useUserStateContext();
  const { user, isLoaded } = useUser();
  const [imageUrl, setImageUrl] = useState("");
  const [name, setName] = useState("");
  const [lastSignIn, setLastSignIn] = useState("");

  useEffect(() => {
    if (isLoaded && user) {
      setName(user.fullName);
      setLastSignIn(
        new Date(user.lastSignInAt).toLocaleDateString("vi-VN", {
          weekday: "short",
          year: "numeric",
          month: "short",
          day: "numeric",
        }),
      );
      if (user.hasImage) {
        setImageUrl(user.imageUrl);
      } else {
        setImageUrl("");
      }
    }
  }, [user, isLoaded]);

  if (!currentUser) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-lg text-gray-500">Đang tải...</div>
      </div>
    );
  }

  return (
    <div className="mx-auto mt-16 max-w-lg rounded-lg bg-[#e3e3db] p-6 shadow-lg dark:bg-[#1c1c24]">
      <div className="flex flex-col items-center">
        <div className="relative mb-4 flex h-24 w-24 items-center justify-center rounded-full border-4 border-[#1ec070] shadow-lg dark:border-[#1dc071]">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt="Hồ sơ cá nhân"
              className="h-full w-full rounded-full object-cover transition-transform duration-200 hover:scale-105"
            />
          ) : (
            <span className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-r from-green-400 to-blue-500 text-5xl text-white">
              😊
            </span>
          )}
        </div>
        <h1 className="mb-2 text-3xl font-semibold text-black dark:text-white">
          {name || "Hồ Sơ Người Dùng"}
        </h1>
        <div className="mt-4 w-full">
          <p className="mb-1 text-sm text-gray-700 dark:text-gray-400">
            Lần Đăng Nhập Gần Nhất:
          </p>
          <p className="mb-4 text-lg font-semibold text-black dark:text-white">
            {lastSignIn}
          </p>

          <p className="mb-1 text-sm text-gray-700 dark:text-gray-400">
            Email:
          </p>
          <p className="mb-4 text-lg font-semibold text-black dark:text-white">
            {currentUser.createdBy}
          </p>

          <p className="mb-1 text-sm text-gray-700 dark:text-gray-400">
            Tên Người Dùng:
          </p>
          <p className="mb-4 text-lg font-semibold text-black dark:text-white">
            {currentUser.username}
          </p>

          <p className="mb-1 text-sm text-gray-700 dark:text-gray-400">Tuổi:</p>
          <p className="mb-4 text-lg font-semibold text-black dark:text-white">
            {currentUser.age}
          </p>

          <p className="mb-1 text-sm text-gray-700 dark:text-gray-400">
            Địa Điểm:
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
