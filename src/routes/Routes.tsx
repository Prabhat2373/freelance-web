import { Outlet } from "react-router-dom";
import GuestLayout from "../layout/GuestLayout";
import ClientLayout from "../layout/client/ClientLayout";
import FreelancerLayout from "../layout/freelancer/FreelancerLayout";
import { publicRoutes } from "./PublicRoutes";
import { routes } from "./RouteList";
import ProtectedRoutes from "./ProtectedRoutes";
import Layout from "../layout/Layout";
import AppLayout from "../layout/app/AppLayout";
export interface RouteListProps {
  id: string;
  path: string;
  exact?: boolean;
  element?: any;
  routeName: string;
  layout?: React.ComponentType<any>; // Add the layout property
}

// export const AllPages = () => {
//   const childRoute = routes
//     ?.map((list: any) => list?.subMenu)
//     .flat()
//     .filter(Boolean)
//     .map(({ path, element }) => ({ path, element }));
//   const parentRoute = routes
//     ?.filter((element, i) => {
//       if (element.element === undefined) {
//         return false; // skip
//       }
//       return true;
//     })
//     .map(({ path, element }) => ({ path, element }));

//   const all_routes = [
//     {
//       element: (
//         <ProtectedRoutes>
//           <AppLayout isAuthenticated={true} userRole="client" />
//         </ProtectedRoutes>
//       ),
//       children: [...childRoute, ...parentRoute],
//     },
//     {
//       element: (
//         <ProtectedRoutes>
//           <Outlet />
//         </ProtectedRoutes>
//       ),
//     },
//     ...publicRoutes,
//   ];

//   return all_routes;
// };

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
          <AppLayout isAuthenticated userRole="">
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
