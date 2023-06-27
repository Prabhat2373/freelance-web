import React, { ReactNode } from "react";
import withFreelancerProtection from "../../hoc/freelancer/withFreelancerAuth";

const FreelancerLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <h1>Freelancer Layout</h1>
      {children}
    </div>
  );
};

export default withFreelancerProtection(FreelancerLayout);
