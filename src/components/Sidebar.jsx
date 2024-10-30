import React, { useEffect, useState } from "react";
import { navLinks } from "../constants";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IconHeartHandshake } from "@tabler/icons-react";
import Icon from "./Icon";
import ThemeSwitch from "./ThemeSwitch";

const Sidebar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState("");
  const { pathname } = useLocation();

  useEffect(() => {
    const activeLink = navLinks.find((item) => pathname === item.link);
    if (activeLink) {
      setIsActive(activeLink.name);
    }
  }, [pathname]);

  console.log(pathname, "from navbar");

  return (
    <div className="sticky top-5 flex h-[93vh] flex-col items-center justify-between">
      {/* Logo and Home link */}
      <Link to={"/"}>
        <div className="rounded-[10px] bg-[#e3e3db] p-2 transition-transform duration-200 hover:scale-105 dark:bg-[#2c2f32]">
          <IconHeartHandshake size={40} color="#1ec070" />
        </div>
      </Link>

      {/* Navigation Links */}
      <div className="mt-12 flex w-[76px] flex-1 flex-col items-center justify-between rounded-[20px] bg-[#e9e9e9] py-4 shadow-lg transition-colors duration-200 dark:bg-[#1c1c24]">
        <div className="flex flex-col items-center justify-center gap-3">
          {navLinks.map((item) => (
            <Icon
              key={item.name}
              {...item}
              style={`cursor-pointer`}
              isActive={isActive}
              handleClick={() => {
                setIsActive(item.name);
                navigate(item.link);
              }}
            />
          ))}
        </div>

        {/* Theme Switch */}
        <ThemeSwitch className="mt-3 flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-200" />
      </div>
    </div>
  );
};

export default Sidebar;
