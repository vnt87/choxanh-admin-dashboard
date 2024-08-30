import { LayoutDashboard, Package, Truck, Users, Settings } from "lucide-react";
import Index from "./pages/Index.jsx";
import Inventory from "./pages/Inventory.jsx";
import Employees from "./pages/Employees.jsx";

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
    title: "Shipments",
    to: "/shipments",
    icon: <Truck className="h-4 w-4" />,
    page: <div>Shipments Page</div>,
  },
  {
    title: "Employees",
    to: "/employees",
    icon: <Users className="h-4 w-4" />,
    page: <Employees />,
  },
  {
    title: "Settings",
    to: "/settings",
    icon: <Settings className="h-4 w-4" />,
    page: <div>Settings Page</div>,
  },
];
