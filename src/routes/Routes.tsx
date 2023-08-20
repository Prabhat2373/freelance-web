import { Outlet } from "react-router-dom";
import AppLayout from "../layout/app/AppLayout";
import ProtectedRoutes from "./ProtectedRoutes";
import { publicRoutes } from "./PublicRoutes";
import { routes } from "./RouteList";
export interface RouteListProps {
  id: string;
  path: string;
  exact?: boolean;
  element?: any;
  routeName: string;
  layout?: React.ComponentType<any>;
}

export const AllPages = () => {
  const childRoute = routes
    ?.map((list: any) => list?.subMenu)
    .flat()
    .filter(Boolean)
    .map(({ path, element }) => ({ path, element }));
  const parentRoute = routes
    ?.filter((element, i) => {
      if (element.element === undefined) {
        return false; // skip
      }
      return true;
    })
    .map(({ path, element }) => ({ path, element }));

  const all_routes = [
    {
      element: (
        <ProtectedRoutes>
          <AppLayout>
            <Outlet />
          </AppLayout>
        </ProtectedRoutes>
      ),
      children: [...childRoute, ...parentRoute],
    },
    ...publicRoutes,
  ];

  return all_routes;
};
