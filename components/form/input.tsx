import React from "react";

const Input: React.FC = ({ ...rest }) => {
  return (
    <input
      {...rest}
      type="tel"
      className={
        "bg-transparent focus:outline-none text-white font-medium text-[22px]"
      }
    />
  );
};

export default Input;
