import React, { useState } from "react";
import { menu, search } from "../assets";
import { IconHeartHandshake } from "@tabler/icons-react";
import { navLinks } from "../constants";
import { useNavigate } from "react-router-dom";
import ThemeSwitch from "./ThemeSwitch";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/clerk-react";
import { Button } from "./ui/button";
import UserMenu from "../pages/landing/components/UserMenu";

const Navbar = () => {
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const [isActive, setIsActive] = useState("dashboard");
  const navigate = useNavigate();
  const { user } = useUser();

  const handleNavigation = (item) => {
    setIsActive(item.name);
    setToggleDrawer(false);
    navigate(item.link);
  };

  return (
    <div className="mb-[35px] flex flex-col-reverse justify-between gap-6 sm:flex-row">
      {/* Search bar component */}
      <div className="flex h-[52px] w-full flex-row rounded-[100px] bg-[#e9e9e9] py-2 pl-4 pr-2 dark:bg-[#1c1c24] sm:max-w-[498px] lg:flex-1">
        <input
          type="text"
          placeholder="Search for records"
          className="flex w-full bg-transparent font-epilogue text-[14px] font-normal text-[#13131a] placeholder-gray-500 outline-none dark:text-white dark:placeholder:text-[#4b5264]"
        />
        <button className="flex h-full w-[72px] cursor-pointer items-center justify-center rounded-[20px] bg-[#1ec070] dark:bg-[#1dc071]">
          <img
            src={search}
            alt="Search"
            className="h-[15px] w-[15px] object-contain"
          />
        </button>
      </div>

      {/* Authentication button */}
      <div className="mr-2 hidden flex-row justify-end sm:flex">
        <SignedOut>
          <SignInButton forceRedirectUrl="/dashboard">
            <Button variant="outline">Login</Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserMenu />
        </SignedIn>
      </div>

      {/* Mobile view */}
      <div className="relative flex items-center justify-between sm:hidden">
        <div className="flex h-[40px] cursor-pointer items-center justify-center rounded-[10px] bg-[#e3e3db] dark:bg-[#2c2f32]">
          <IconHeartHandshake size={40} color="#1ec070" className="p-2" />
        </div>

        <div className="flex items-center">
          <img
            src={menu}
            alt="Menu"
            className="h-[34px] w-[34px] cursor-pointer object-contain"
            onClick={() => setToggleDrawer((prev) => !prev)}
          />
          <ThemeSwitch className="m-2 flex h-8 w-8 items-center justify-center rounded-full" />
          <SignedOut>
            <SignInButton forceRedirectUrl="/dashboard">
              <Button variant="outline">Login</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserMenu />
          </SignedIn>
        </div>

        {/* Toggle menu sidebar */}
        <div
          className={`absolute left-0 right-0 top-[60px] z-10 bg-[#f5f5f5] py-4 shadow-secondary dark:bg-[#13131a] ${
            !toggleDrawer ? "-translate-y-[100vh]" : "translate-y-0"
          } transition-all duration-700`}
        >
          <ul className="mb-4">
            {navLinks.map((item) => (
              <li
                key={item.name}
                className={`flex cursor-pointer p-4 ${
                  isActive === item.name ? "bg-[#e3e3db] dark:bg-[#3a3a43]" : ""
                }`}
                onClick={() => handleNavigation(item)}
              >
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className={`h-[24px] w-[24px] object-contain ${
                    isActive === item.name ? "grayscale-0" : "grayscale"
                  }`}
                />
                <p
                  className={`ml-[20px] font-epilogue text-[14px] font-semibold ${
                    isActive === item.name ? "text-[#1dc071]" : "text-[#808191]"
                  }`}
                >
                  {item.name}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
