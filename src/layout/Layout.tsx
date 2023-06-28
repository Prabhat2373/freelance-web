import React, { ReactNode, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import FreelancerLayout from "./freelancer/FreelancerLayout";
import ClientLayout from "./client/ClientLayout";
import GuestLayout from "./GuestLayout";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const checkHasAccess = (pagePath: string, userRole: string): any => {
  if (pagePath.startsWith("/fl") && userRole === "freelancer") {
    return true;
    0;
  } else if (pagePath.startsWith("/cl") && userRole === "client") {
    return true;
  } else if (
    (pagePath.startsWith("/fl") && userRole !== "freelancer") ||
    (pagePath.startsWith("/cl") && userRole !== "client")
  ) {
    return false;
  }

  // // Check if the user has a specific role assigned
  // if (userRole === "freelancer") {
  //   return "freelancer";
  // } else if (userRole === "client") {
  //   return "client";
  // }

  // Check if the page path starts with "/fl" for freelancer or "/cl" for client

  return false; // Assuming a guest role for all other paths
};

interface LayoutProps {
  // isAuthenticated: boolean;
  // userRole: string;
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const { isLoggedIn, role, user } = useSelector(
    (state: RootState) => state.user
  );
  const [auth, setAuth] = useState(false);
  const isAuthorized = checkHasAccess(location.pathname, role);
  console.log("role", role === "freelancer");

  if (isAuthorized) {
    if (role === "freelancer") {
      return <FreelancerLayout>{children}</FreelancerLayout>;
    } else if (role === "client") {
      return <ClientLayout>{children}</ClientLayout>;
    } else {
      return <GuestLayout>{children}</GuestLayout>;
    }
  } else {
    return <Navigate to="/405" />;
  }
};

export default Layout;
