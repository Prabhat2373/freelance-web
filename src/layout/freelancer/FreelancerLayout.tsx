import React, { ReactNode } from "react";
import withFreelancerProtection from "../../hoc/freelancer/withFreelancerAuth";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

const FreelancerLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div className="">{children}</div>
      <Footer />
    </div>
  );
};

export default withFreelancerProtection(FreelancerLayout);
