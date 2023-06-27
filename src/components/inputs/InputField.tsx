import { HTMLAttributes, useState } from "react";
import { FiMail } from "react-icons/fi";

interface InputFieldProps extends HTMLAttributes<HTMLInputElement> {
  icon?: any;
  label?: string;
  error?: string;
  type?: string;
}

const InputField = ({ icon, error, type, ...props }: InputFieldProps) => {
  return (
    <>
      {props.label && <label htmlFor={props.id}></label>}
      <div className="flex items-center py-2 px-4 rounded-lg border border-gray-300">
        {icon}
        <input
          {...props}
          type={type}
          className="flex-grow bg-transparent outline-none"
        />
      </div>

      {error && <span className="text-red-500">{error}</span>}
    </>
  );
};

export default InputField;
