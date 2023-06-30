import { RouteListProps } from "./Routes";
import * as LazyElement from "../utils/LazyLoaded";

import { clientRoutes } from "./client/ClientRoutes";
import { freelancerRoutes } from "./freelancer/freelancerRoutes";
import GuestLayout from "../layout/GuestLayout";

export const routes: Array<RouteListProps> = [
  ...freelancerRoutes,
  ...clientRoutes,
  {
    id: "home",
    path: "/",
    element: <LazyElement.Home />,
    routeName: "Freelancer Dashboard",
    layout: GuestLayout,
  },
  {
    id: "home",
    path: "/onboarding",
    element: <LazyElement.Onboarding />,
    routeName: "Freelancer Dashboard",
    layout: GuestLayout,
  },
];
