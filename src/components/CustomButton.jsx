import React from "react";

const CustomButton = ({
  btnType,
  title,
  handleClick,
  styles,
  icon: Icon,
  iconStyle,
  iconSize,
}) => {
  return (
    <button
      type={btnType}
      className={`flex items-center rounded-[10px] px-4 font-epilogue text-[16px] font-semibold leading-[26px] ${styles} bg-[#1dc071] text-white transition duration-200 hover:bg-[#1abc70] dark:bg-[#1ec070] dark:hover:bg-[#1dc071]`} // Add transition for smooth hover effect
      onClick={handleClick}
    >
      {Icon && <Icon className={`${iconStyle} mr-2`} size={iconSize} />}
      {title}
    </button>
  );
};

export default CustomButton;
