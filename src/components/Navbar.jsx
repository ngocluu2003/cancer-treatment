import React, { useCallback, useState } from "react";
import { menu, search } from "../assets";
import CustomButton from "./CustomButton";
import { usePrivy } from "@privy-io/react-auth";
import { IconHeartHandshake } from "@tabler/icons-react";
import { navLinks } from "../constants";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import ThemeSwitch from "./ThemeSwitch";

const Navbar = () => {
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const [isActive, setIsActive] = useState("dashboard");
  const navigate = useNavigate();
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
    <div className="mb-[35px] flex flex-col-reverse justify-between gap-6 sm:flex-row">
      {/* search bar component */}
      <div className="flex h-[52px] max-w-[458px] flex-row rounded-[100px] bg-[#1c1c24] py-2 pl-4 pr-2 lg:flex-1">
        <input
          type="text"
          placeholder="search for records"
          className="flex w-full bg-transparent font-epilogue text-[14px] font-normal outline-none dark:text-white dark:placeholder:text-[#4b5264]"
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
        {ready ? (
          <CustomButton
            styles={
              authenticated
                ? "bg-[#1dc071] text-white hover:bg-[#1abc70] border border-[#1dc071]"
                : "bg-red-500 text-white hover:bg-red-600 border border-red-300"
            }
            btnType="button"
            title={authenticated ? "Logout" : "Login"}
            handleClick={handleLoginLogout}
          />
        ) : (
          <div className="mt-4 h-6 w-6 animate-spin rounded-full border-4 border-t-4 border-white border-t-[#1dc071]"></div>
        )}
      </div>
      {/* mobile version */}
      <div className="relative flex items-center justify-between sm:hidden">
        <div className="flex h-[40px] cursor-pointer items-center justify-center rounded-[10px] bg-[#2c2f32]">
          <IconHeartHandshake size={40} color="#1ec070" className="p-2" />
        </div>

        <div className="flex items-center">
          {/* Place ThemeSwitch Component here with custom styles */}

          <img
            src={menu}
            alt="menu"
            className="h-[34px] w-[34px] cursor-pointer object-contain"
            onClick={() => {
              setToggleDrawer((prev) => !prev);
            }}
          />
          <ThemeSwitch className="m-2 flex h-8 w-8 items-center justify-center rounded-full" />

          {ready ? (
            <button
              className={`ml-2 flex items-center rounded px-2 py-1 transition duration-200 ${
                authenticated
                  ? "border border-[#1dc071] bg-[#1dc071] text-white hover:bg-[#1abc70]"
                  : "border border-red-300 bg-red-500 text-white hover:bg-red-600"
              }`}
              onClick={handleLoginLogout}
            >
              <FontAwesomeIcon
                icon={authenticated ? faSignOutAlt : faSignInAlt}
                className="mr-1"
              />
            </button>
          ) : (
            <div className="ml-1 h-6 w-6 animate-spin rounded-full border-4 border-t-4 border-white border-t-[#1dc071]"></div>
          )}
        </div>

        {/* toggle menu sidebar */}
        <div
          className={`absolute left-0 right-0 top-[60px] z-10 bg-[#1c1c24] py-4 shadow-secondary ${!toggleDrawer ? "-translate-y-[100vh]" : "translate-y-0"} transition-all duration-700`}
        >
          <ul className="mb-4">
            {navLinks.map((item) => {
              return (
                <li
                  key={item.name}
                  className={`flex p-4 ${isActive === item.name && "bg-[#3a3a43]"} cursor-pointer`}
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
                      isActive === item.name
                        ? "text-[#1dc071]"
                        : "text-[#808191]"
                    }`}
                  >
                    {item.name}
                  </p>
                </li>
              );
            })}
          </ul>
          <div className="mx-4 flex"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
