import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Package, Truck, Users, Settings, ArrowRightFromLine, ArrowLeftFromLine } from 'lucide-react';
import { Button } from "./ui/button";

const Sidebar = ({ isCollapsed, toggleSidebar }) => (
  <aside className={`bg-background text-foreground h-[calc(100vh-4rem)] p-4 border-r transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-64'} flex flex-col fixed md:relative z-50`}>
    <nav className="space-y-2 flex-1">
      <NavLink to="/" className="flex items-center space-x-2 p-2 hover:bg-accent rounded">
        <LayoutDashboard size={20} />
        {!isCollapsed && <span>Dashboard</span>}
      </NavLink>
      <NavLink to="/inventory" className="flex items-center space-x-2 p-2 hover:bg-accent rounded">
        <Package size={20} />
        {!isCollapsed && <span>Inventory</span>}
      </NavLink>
      <NavLink to="/orders" className="flex items-center space-x-2 p-2 hover:bg-accent rounded">
        <Truck size={20} />
        {!isCollapsed && <span>Orders</span>}
      </NavLink>
      <NavLink to="/users" className="flex items-center space-x-2 p-2 hover:bg-accent rounded">
        <Users size={20} />
        {!isCollapsed && <span>Users</span>}
      </NavLink>
      <NavLink to="/settings" className="flex items-center space-x-2 p-2 hover:bg-accent rounded">
        <Settings size={20} />
        {!isCollapsed && <span>Settings</span>}
      </NavLink>
    </nav>
    <div className="mt-auto pt-4">
      <Button variant="ghost" size="icon" onClick={toggleSidebar} className="w-full">
        {isCollapsed ? 
          <ArrowRightFromLine className="h-4 w-4" /> :
          <ArrowLeftFromLine className="h-4 w-4" />
        }
      </Button>
    </div>
  </aside>
);

export default Sidebar;
