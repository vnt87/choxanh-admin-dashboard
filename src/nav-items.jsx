import { LayoutDashboard, Package, Truck, Users as UsersIcon, Settings as SettingsIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import Inventory from "./pages/Inventory.jsx";
import Users from "./pages/Users.jsx";
import Settings from "./pages/Settings.jsx";
import Orders from "./pages/Orders.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Dashboard",
    to: "/",
    icon: <LayoutDashboard className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Inventory",
    to: "/inventory",
    icon: <Package className="h-4 w-4" />,
    page: <Inventory />,
  },
  {
    title: "Orders",
    to: "/orders",
    icon: <Truck className="h-4 w-4" />,
    page: <Orders />,
  },
  {
    title: "Users",
    to: "/users",
    icon: <UsersIcon className="h-4 w-4" />,
    page: <Users />,
  },
  {
    title: "Settings",
    to: "/settings",
    icon: <SettingsIcon className="h-4 w-4" />,
    page: <Settings />,
  },
];
