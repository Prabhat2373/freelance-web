import { RouteListProps } from "../Routes";
import * as LazyElement from "../../utils/LazyLoaded";
import FreelancerLayout from "../../layout/freelancer/FreelancerLayout";

export const freelancerRoutes: Array<RouteListProps> = [
  {
    id: "1",
    path: "/fl/dashboard",
    element: <LazyElement.Dashboard />,
    routeName: "Freelancer Dashboard",
    layout: FreelancerLayout,
  },
];
