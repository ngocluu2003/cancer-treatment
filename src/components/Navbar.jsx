import React, { useCallback } from "react";
import { search } from "../assets";
import CustomButton from "./CustomButton";
import { usePrivy } from "@privy-io/react-auth";
const Navbar = () => {
  const { ready, authenticated, login, logout, user } = usePrivy();
  const handleLoginLogout = useCallback(() => {
    if (authenticated) {
      logout();
    } else {
      login().then(() => {
        if (user) {
          // fetch user from the database
        }
      });
    }
  }, [authenticated, user, login, logout]);
  console.log(user);
  return (
    <div className="mb-[35px] flex flex-col-reverse justify-between gap-6 md:flex-row">
      {/* search bar component */}
      <div className="rounded-[100px] flex h-[52px] max-w-[458px] flex-row bg-[#1c1c24] py-2 pl-4 pr-2 lg:flex-1">
        <input
          type="text"
          placeholder="search for records"
          className="flex w-full bg-transparent font-epilogue text-[14px] font-normal text-white outline-none placeholder:text-[#4b5264]"
        />
        <div className="flex h-full w-[72px] cursor-pointer items-center justify-center rounded-[20px] bg-[#4acd8d]">
          <img
            src={search}
            alt="search"
            className="h-[15px] w-[15px] object-contain"
          />
        </div>
      </div>
      <div className="hidden flex-row justify-end gap-2 sm:flex">
        <CustomButton
          styles={authenticated ? "bg-[#1dc071]" : "bg-[#8c6dfd]"}
          btnType={"button"}
          title={authenticated ? "Logout" : "Login"}
          handleClick={handleLoginLogout}
        />
      </div>
    </div>
  );
};

export default Navbar;
