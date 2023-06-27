import ClientLayout from "../../layout/client/ClientLayout";
import * as LazyElement from "../../utils/LazyLoaded";
import { RouteListProps } from "../Routes";

export const clientRoutes: Array<RouteListProps> = [
  {
    id: "1",
    path: "/cl/dashboard",
    element: <LazyElement.Login />,
    routeName: "Client Dashboard",
    layout: ClientLayout,
  },
];
