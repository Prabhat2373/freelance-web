import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const GuestLayout = ({ children }) => {
  return (
    <div className="flex flex-col ">
      <Navbar />
      <div className="">{children}</div>
      <Footer />
    </div>
  );
};

export default GuestLayout;
