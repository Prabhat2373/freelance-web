import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white flex justify-between px-16 py-4 items-center ">
      <div>
        <h1 className="text-[#FF4C4A] text-3xl font-bold">Logo</h1>
      </div>

      <div>
        <ul className="flex gap-10">
          <li className="text-base font-medium">Find Talent</li>
          <li className="text-base font-medium">Find work</li>
          <li className="text-base font-medium">why us</li>
        </ul>
      </div>
      <div className="flex gap-5">
        <button className="text-base font-medium">Log in</button>
        <button className="px-9 py-3 flex justify-center items-center bg-red-500 text-white font-semibold rounded-full">
          sign up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
