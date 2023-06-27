import React, { lazy } from "react";
import AppLoader from "../components/suspense/AppLoader";

export const Dashboard = AppLoader(
  lazy(() => import("../pages/register/Login"))
);
export const Home = AppLoader(lazy(() => import("../pages/home/Index")));

export const Login = AppLoader(lazy(() => import("../pages/register/Login")));
