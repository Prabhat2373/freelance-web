import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { RootState } from "../store";
import GuestLayout from "./GuestLayout";
import ClientLayout from "./client/ClientLayout";
import FreelancerLayout from "./freelancer/FreelancerLayout";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const { isLoggedIn, role, user } = useSelector(
    (state: RootState) => state.user
  );
  const pagePath = location.pathname;
  console.log("role", role === "freelancer");

  if (pagePath.startsWith("/fl") && role === "freelancer") {
    return <FreelancerLayout>{children}</FreelancerLayout>;
    0;
  } else if (pagePath.startsWith("/cl") && role === "client") {
    return <ClientLayout>{children}</ClientLayout>;
  } else if (
    (pagePath.startsWith("/fl") && role !== "freelancer") ||
    (pagePath.startsWith("/cl") && role !== "client")
  ) {
    return <Navigate to="/405" />;
  } else if (!pagePath.startsWith("/fl") || !pagePath.startsWith("/cl")) {
    return <GuestLayout>{children}</GuestLayout>;
  }
};

export default Layout;
