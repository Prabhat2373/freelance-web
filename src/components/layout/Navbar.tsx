import { RootState } from "@/store";
import { BellIcon, UserIcon } from "lucide-react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ProfileMenu } from "../dropdown/ProfileMenu";

const Navbar = () => {
  const { user, isLoggedIn } = useSelector((state: RootState) => state.user);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white flex justify-between px-16 py-4 items-center ">
      <div>
        <h1 className="text-[#FF4C4A] text-3xl font-bold">Logo</h1>
      </div>

      <div>
        {!isLoggedIn ? (
          <ul className="flex gap-10">
            <li className="text-base font-medium">Find Talent</li>
            <li className="text-base font-medium">Find work</li>
            <li className="text-base font-medium">why us</li>
          </ul>
        ) : (
          <ul className="flex gap-10">
            <li className="text-base font-medium">
              <Link to={"/fl/jobs"}>Browse projects</Link>
            </li>
            <li className="text-base font-medium">
              <Link to="/fl/jobs">My Jobs</Link>
            </li>
            <li className="text-base font-medium">
              <Link to={"/fl/messages"}>Messages</Link>
            </li>
          </ul>
        )}
      </div>
      <div className="flex gap-5">
        {!isLoggedIn ? (
          <div>
            {" "}
            <Link
              to={"/login"}
              className="text-base font-medium p-0 m-0 flex items-center"
            >
              <button>Log in</button>
            </Link>
            <Link to={"/register"}>
              <button className="px-9 py-3 flex justify-center items-center bg-red-500 text-white font-semibold rounded-full">
                sign up
              </button>
            </Link>{" "}
          </div>
        ) : (
          <>
            <div className="flex gap-4">
              <BellIcon className="cursor-pointer" />
              <UserIcon
                className="cursor-pointer"
                onClick={() => setIsOpen((prev) => !prev)}
              />
              {/* <div className="m-4"> */}
              <ProfileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
              {/* </div> */}
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
