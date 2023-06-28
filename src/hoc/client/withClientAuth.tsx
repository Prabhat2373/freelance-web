import React, { ComponentType, useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../../store";

const withClientProtection = <Parent extends object>(
  WrappedComponent: ComponentType<Parent>
) => {
  const ComponentWithClientAuth: React.FC<Parent> = (props) => {
    const { user, role, isLoggedIn } = useSelector(
      (state: RootState) => state.user
    );
    // Check if the user is authenticated and has the role of a Client
    // useEffect(() => {
    const isClient = isLoggedIn && role === "Client";

    if (!isClient) {
      // If the user is not a Client, show a 405 page or redirect to a relevant page
      return <Navigate to="/405" />;
    }
    // }, [isLoggedIn, role]);

    // If the user is a Client, render the wrapped component inside the ClientLayout
    return <WrappedComponent {...props} />;
  };

  return ComponentWithClientAuth;
};

export default withClientProtection;
