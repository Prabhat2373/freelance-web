import React, { ComponentType, useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../../store";

const withFreelancerProtection = <Parent extends object>(
  WrappedComponent: ComponentType<Parent>
) => {
  const ComponentWithFreelancerAuth: React.FC<Parent> = (props) => {
    const { isLoggedIn, role, user } = useSelector(
      (state: RootState) => state.user
    );
    // Check if the user is authenticated and has the role of a freelancer
    // useEffect(() => {
    const isFreelancer = isLoggedIn && role === "freelancer";

    if (!isFreelancer) {
      // If the user is not a freelancer, show a 405 page or redirect to a relevant page
      return <Navigate to="/405" />;
    }
    // }, [isLoggedIn, role]);
    // If the user is a freelancer, render the wrapped component inside the FreelancerLayout
    return <WrappedComponent {...props} />;
  };

  return ComponentWithFreelancerAuth;
};

export default withFreelancerProtection;
