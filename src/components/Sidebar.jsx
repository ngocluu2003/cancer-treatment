import React from "react";
import { useState } from "react";
import { navLinks } from "../constants";
import { sun } from "../assets";

const Icon = ({ style, name, imageUrl, isActive, disabled, handleClick }) => {
  return (
    <div
      className={`h-[48px] w-[48px] rounded-[10px] ${isActive && isActive === name && "bg-[#2c2f32]"} flex items-center justify-center ${style}`}
      onClick={handleClick}
    >
       
    </div>
  );
};

const Sidebar = () => {
  return <div>Sidebar</div>;
};

export default Sidebar;
