import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Package, Truck, Users, Settings } from 'lucide-react';
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import { useTheme } from "../context/ThemeContext";

const Sidebar = () => (
  <aside className="bg-background text-foreground w-64 min-h-screen p-4 border-r">
    <nav className="space-y-2">
      <NavLink to="/" className="flex items-center space-x-2 p-2 hover:bg-accent rounded">
        <LayoutDashboard size={20} />
        <span>Dashboard</span>
      </NavLink>
      <NavLink to="/inventory" className="flex items-center space-x-2 p-2 hover:bg-accent rounded">
        <Package size={20} />
        <span>Inventory</span>
      </NavLink>
      <NavLink to="/shipments" className="flex items-center space-x-2 p-2 hover:bg-accent rounded">
        <Truck size={20} />
        <span>Shipments</span>
      </NavLink>
      <NavLink to="/users" className="flex items-center space-x-2 p-2 hover:bg-accent rounded">
        <Users size={20} />
        <span>Users</span>
      </NavLink>
      <NavLink to="/settings" className="flex items-center space-x-2 p-2 hover:bg-accent rounded">
        <Settings size={20} />
        <span>Settings</span>
      </NavLink>
    </nav>
  </aside>
);

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
  <header className="bg-background text-foreground p-4 border-b">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold">Warehouse Management Dashboard</h1>
        <div className="flex items-center space-x-2">
          <Switch id="theme-toggle" checked={theme === "dark"} onCheckedChange={toggleTheme} />
          <Label htmlFor="theme-toggle">Dark Mode</Label>
        </div>
      </div>
    </header>
  );
};

const Layout = ({ children }) => (
  <div className="flex flex-col min-h-screen bg-background text-foreground">
    <Navbar />
    <div className="flex flex-1">
      <Sidebar />
      <main className="flex-1 p-6">{children}</main>
    </div>
  </div>
);

export default Layout;
