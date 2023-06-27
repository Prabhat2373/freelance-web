import React, { ComponentType } from "react";
import { Navigate } from "react-router-dom";

const withClientProtection = <Parent extends object>(
  WrappedComponent: ComponentType<Parent>
) => {
  const ComponentWithClientAuth: React.FC<Parent> = (props) => {
    const isAuthenticated = true;
    const userRole = "freelancer";
    // Check if the user is authenticated and has the role of a Client
    const isClient = isAuthenticated && userRole === "Client";

    if (!isClient) {
      // If the user is not a Client, show a 405 page or redirect to a relevant page
      return <Navigate to="/405" />;
    }

    // If the user is a Client, render the wrapped component inside the ClientLayout
    return <WrappedComponent {...props} />;
  };

  return ComponentWithClientAuth;
};

export default withClientProtection;
