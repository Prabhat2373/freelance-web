import React, { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import FreelancerLayout from "./freelancer/FreelancerLayout";
import ClientLayout from "./client/ClientLayout";
import GuestLayout from "./GuestLayout";

const checkUserRole = (
  pagePath: string,
  isAuthenticated: boolean,
  userRole: string
): string => {
  // If the user is not authenticated, assume guest role
  if (!isAuthenticated) {
    return "guest";
  }

  if (pagePath.startsWith("/fl")) {
    return "freelancer";
  } else if (pagePath.startsWith("/cl")) {
    return "client";
  }

  // Check if the user has a specific role assigned
  if (userRole === "freelancer") {
    return "freelancer";
  } else if (userRole === "client") {
    return "client";
  }

  // Check if the page path starts with "/fl" for freelancer or "/cl" for client

  return "guest"; // Assuming a guest role for all other paths
};

interface LayoutProps {
  isAuthenticated: boolean;
  userRole: string;
  children: ReactNode;
}

const Layout = ({ isAuthenticated, userRole, children }: LayoutProps) => {
  const location = useLocation();
  const role = checkUserRole(location.pathname, isAuthenticated, userRole);
  console.log("role", role);
  if (role === "freelancer") {
    return <FreelancerLayout>{children}</FreelancerLayout>;
  } else if (role === "client") {
    return <ClientLayout>{children}</ClientLayout>;
  } else {
    return <GuestLayout>{children}</GuestLayout>;
  }
};

export default Layout;
