import React, { ComponentType } from "react";
import { Navigate } from "react-router-dom";

const withFreelancerProtection = <Parent extends object>(
  WrappedComponent: ComponentType<Parent>
) => {
  const ComponentWithFreelancerAuth: React.FC<Parent> = (props) => {
    const isAuthenticated = true;
    const userRole = "client";
    // Check if the user is authenticated and has the role of a freelancer
    const isFreelancer = isAuthenticated && userRole === "freelancer";

    if (!isFreelancer) {
      // If the user is not a freelancer, show a 405 page or redirect to a relevant page
      return <Navigate to="/405" />;
    }

    // If the user is a freelancer, render the wrapped component inside the FreelancerLayout
    return <WrappedComponent {...props} />;
  };

  return ComponentWithFreelancerAuth;
};

export default withFreelancerProtection;
