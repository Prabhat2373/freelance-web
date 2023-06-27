import React, { HTMLAttributes } from "react";

interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}
const Button = ({ children }: IButtonProps) => {
  return (
    <>
      <button className="px-9 py-3 flex justify-center items-center bg-red-500 text-white font-semibold rounded-full">
        {children}
      </button>
    </>
  );
};

export default Button;
