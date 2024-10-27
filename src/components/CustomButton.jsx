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
      className={`rounded-[10px] px-4 font-epilogue text-[16px] font-semibold leading-[26px] text-white ${styles} flex items-center`}
      onClick={handleClick}
    >
      {Icon && <Icon className={iconStyle} size={iconSize} />} {title}
    </button>
  );
};

export default CustomButton;
