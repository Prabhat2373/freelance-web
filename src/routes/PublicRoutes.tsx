import { lazy } from "react";
import AppLoader from "../components/suspense/AppLoader";
import GuestLayout from "../layout/GuestLayout";

const Signup = AppLoader(lazy(() => import("../pages/register/Register")));
const Login = AppLoader(lazy(() => import("../pages/register/Login")));

export const publicRoutes = [
  {
    path: "/register",
    element: (
      <GuestLayout>
        <Signup />
      </GuestLayout>
    ),
  },
  {
    path: "/login",
    element: (
      <GuestLayout>
        <Login />
      </GuestLayout>
    ),
  },
];
