import Home from "../components/pages/Home";
import UserManagement from "../components/pages/UserManagement";
import Setting from "../components/pages/Setting";
import { Route } from "../types/route";

export const homeRoutes: Route[] = [
  {
    path: "/home",
    children: <Home />,
  },
  {
    path: "/user_management",
    children: <UserManagement />,
  },
  {
    path: "/setting",
    children: <Setting />,
  },
];