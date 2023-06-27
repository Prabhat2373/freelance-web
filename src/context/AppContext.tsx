import { createContext } from "react";
import { RouteListProps } from "../routes/Routes";

export interface AppContextType {
  moduleFormId: number;
  moduleFormCode: string;
  moduleFormStatuses?: any;
  rolesRights?: any;
  getSpecificStatus?: any;
  currentRoutes?: RouteListProps[];
}
export function createAppContext(): React.Context<AppContextType> {
  return createContext<AppContextType>({
    moduleFormId: 35,
    moduleFormCode: "vendors",
  });
}

export const AppContext = createAppContext();
