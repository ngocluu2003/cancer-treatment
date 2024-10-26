import React from "react";
import { useState } from "react";
import { navLinks } from "../constants";
import { Link, useNavigate } from "react-router-dom";
import { IconHeartHandshake } from "@tabler/icons-react";
import Icon from "./Icon";
import ThemeSwitch from "./ThemeSwitch";

const Sidebar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState("dashboard");

  return (
    <div className="sticky top-5 flex h-[93vh] flex-col items-center justify-between">
      <Link to={"/"}>
        <div className="rounded-[10px] bg-[#e3e3db] p-2 dark:bg-[#2c2f32]">
          <IconHeartHandshake size={40} color="#1ec070" />
        </div>
      </Link>
      <div className="mt-12 flex w-[76px] flex-1 flex-col items-center justify-between rounded-[20px] bg-[#e9e9e9] py-4 dark:bg-[#1c1c24]">
        <div className="flex flex-col items-center justify-center gap-3">
          {navLinks.map((item) => (
            <Icon
              key={item.name}
              {...item}
              style={"cursor-pointer"}
              isActive={isActive}
              handleClick={() => {
                setIsActive(item.name);
                navigate(item.link);
              }}
            />
          ))}
        </div>
        {/* Replace the sun icon with the ThemeSwitch component */}
        <ThemeSwitch className="mt-3 flex h-10 w-10 items-center justify-center" />
      </div>
    </div>
  );
};

export default Sidebar;
