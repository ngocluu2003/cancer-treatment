import React, { useCallback, useState } from "react";
import { menu, search } from "../assets";
import CustomButton from "./CustomButton";
import { IconHeartHandshake } from "@tabler/icons-react";
import { navLinks } from "../constants";
import { useNavigate } from "react-router-dom";
import { IconLogin, IconLogout } from "@tabler/icons-react";
import ThemeSwitch from "./ThemeSwitch";
import {
  SignedIn,
  SignedOut,
  SignIn,
  UserButton,
  useUser,
  useAuth,
} from "@clerk/clerk-react";

const Navbar = () => {
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const [isActive, setIsActive] = useState("dashboard");
  const navigate = useNavigate();
  const { isSignedIn, signOut } = useAuth(); // Using Clerk's authentication hook
  const [isOpen, setIsOpen] = useState(false); // State to manage SignIn modal

  const handleLoginLogout = useCallback(async () => {
    try {
      if (isSignedIn) {
        await signOut();
        navigate("/", { replace: true }); // Redirect to home after logout
      } else {
        setIsOpen(true); // Open SignIn modal
      }
    } catch (error) {
      console.error(isSignedIn ? "Logout failed:" : "Login failed:", error);
    }
  }, [isSignedIn, navigate, signOut]);

  return (
    <div className="mb-[35px] flex flex-col-reverse justify-between gap-6 sm:flex-row">
      {/* Search bar component */}
      <div className="flex h-[52px] w-full flex-row rounded-[100px] bg-[#e9e9e9] py-2 pl-4 pr-2 dark:bg-[#1c1c24] sm:max-w-[498px] lg:flex-1">
        <input
          type="text"
          placeholder="Search for records"
          className="flex w-full bg-transparent font-epilogue text-[14px] font-normal text-[#13131a] placeholder-gray-500 outline-none dark:text-white dark:placeholder:text-[#4b5264]"
        />
        <div className="flex h-full w-[72px] cursor-pointer items-center justify-center rounded-[20px] bg-[#1ec070] dark:bg-[#1dc071]">
          <img
            src={search}
            alt="search"
            className="h-[15px] w-[15px] object-contain"
          />
        </div>
      </div>

      {/* Authentication button */}
      <div className="hidden flex-row justify-end gap-2 sm:flex">
        <button
          className={`flex items-center rounded px-4 py-2 transition duration-200 ${
            isSignedIn
              ? "border border-[#1dc071] bg-[#1dc071] text-white hover:bg-[#1abc70]"
              : "border border-red-300 bg-red-500 text-white hover:bg-red-600"
          }`}
          onClick={handleLoginLogout}
        >
          {isSignedIn ? (
            <>
              <IconLogout size={20} className="mr-1" />
              Logout
            </>
          ) : (
            <>
              <IconLogin size={20} className="mr-1" />
              Login
            </>
          )}
        </button>
      </div>

      {/* Mobile view */}
      <div className="relative flex items-center justify-between sm:hidden">
        <div className="flex h-[40px] cursor-pointer items-center justify-center rounded-[10px] bg-[#e3e3db] dark:bg-[#2c2f32]">
          <IconHeartHandshake size={40} color="#1ec070" className="p-2" />
        </div>

        <div className="flex items-center">
          <img
            src={menu}
            alt="menu"
            className="h-[34px] w-[34px] cursor-pointer object-contain"
            onClick={() => setToggleDrawer((prev) => !prev)}
          />
          <ThemeSwitch className="m-2 flex h-8 w-8 items-center justify-center rounded-full" />

          <button
            className={`ml-2 flex items-center rounded px-2 py-1 transition duration-200 ${
              isSignedIn
                ? "border border-[#1dc071] bg-[#1dc071] text-white hover:bg-[#1abc70]"
                : "border border-red-300 bg-red-500 text-white hover:bg-red-600"
            }`}
            onClick={handleLoginLogout}
          >
            {isSignedIn ? <IconLogout size={20} /> : <IconLogin size={20} />}
          </button>
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
                className={`flex p-4 ${
                  isActive === item.name && "bg-[#e3e3db] dark:bg-[#3a3a43]"
                } cursor-pointer`}
                onClick={() => {
                  setIsActive(item.name);
                  setToggleDrawer(false);
                  navigate(item.link);
                }}
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

      {/* SignIn Modal */}
      <SignedOut>
        <SignIn
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          afterSignInUrl="/dashboard" // Redirect after sign-in
        />
      </SignedOut>
    </div>
  );
};

export default Navbar;
