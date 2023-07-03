import { RouteListProps } from "../Routes";
import * as LazyElement from "../../utils/LazyLoaded";
import FreelancerLayout from "../../layout/freelancer/FreelancerLayout";

export const freelancerRoutes: Array<RouteListProps> = [
  {
    id: "1",
    path: "/fl",
    element: <LazyElement.Dashboard />,
    routeName: "Freelancer Dashboard",
    layout: FreelancerLayout,
  },
  {
    id: "2",
    path: "/fl/jobs",
    element: <LazyElement.JobsIndex />,
    routeName: "jobs",
    layout: FreelancerLayout,
  },
  {
    id: "2",
    path: "/fl/jobs/view/:id",
    element: <LazyElement.ApplyPage />,
    routeName: "view job",
    layout: FreelancerLayout,
  },
  {
    id: "2",
    path: "/fl/profile",
    element: <LazyElement.FreelancerProfile />,
    routeName: "apply job",
    layout: FreelancerLayout,
  },
];
