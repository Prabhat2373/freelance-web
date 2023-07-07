import React, { lazy } from "react";
import AppLoader from "../components/suspense/AppLoader";

export const Dashboard = AppLoader(
  lazy(() => import("../pages/register/Login"))
);
export const Home = AppLoader(lazy(() => import("../pages/ListingPage")));

export const Login = AppLoader(lazy(() => import("../pages/register/Login")));
export const Onboarding = AppLoader(
  lazy(() => import("../pages/onboarding/Onboarding"))
);

export const JobsIndex = AppLoader(
  lazy(() => import("../pages/jobs/JobsIndex"))
);

export const ViewJob = AppLoader(lazy(() => import("../pages/jobs/View")));
export const ApplyJob = AppLoader(lazy(() => import("@pages/jobs/ApplyToJob")));

export const FreelancerProfile = AppLoader(
  lazy(() => import("@pages/freelancer/profile/FreelancerProfile"))
);

export const freelancerContracts = AppLoader(
  lazy(() => import("@pages/freelancer/contracts/Contracts"))
);
