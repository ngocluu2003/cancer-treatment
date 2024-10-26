import React from "react";

const Icon = ({ style, name, imageUrl, isActive, disabled, handleClick }) => {
  return (
    <div
      className={`h-[48px] w-[48px] rounded-[10px] ${isActive && isActive === name && "bg-[#e0e0e0] dark:bg-[#2c2f32]"} flex items-center justify-center ${style}`}
      onClick={handleClick}
    >
      {!isActive ? (
        <img src={imageUrl} alt="beat-cancer logo" className="h-6 w-6" />
      ) : (
        <img
          src={imageUrl}
          alt="beat-cancer logo"
          className={`h-6 w-6 ${isActive !== name && "grayscale"}`}
        />
      )}
    </div>
  );
};

export default Icon;
