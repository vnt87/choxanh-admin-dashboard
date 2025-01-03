import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Package, Truck, Users, Settings } from 'lucide-react';

const Sidebar = () => (
  <aside className="bg-gray-900 text-white w-64 min-h-screen p-4">
    <nav className="space-y-2">
      <NavLink to="/" className="flex items-center space-x-2 p-2 hover:bg-gray-800 rounded">
        <LayoutDashboard size={20} />
        <span>Dashboard</span>
      </NavLink>
      <NavLink to="/inventory" className="flex items-center space-x-2 p-2 hover:bg-gray-800 rounded">
        <Package size={20} />
        <span>Inventory</span>
      </NavLink>
      <NavLink to="/shipments" className="flex items-center space-x-2 p-2 hover:bg-gray-800 rounded">
        <Truck size={20} />
        <span>Shipments</span>
      </NavLink>
      <NavLink to="/users" className="flex items-center space-x-2 p-2 hover:bg-gray-800 rounded">
        <Users size={20} />
        <span>Users</span>
      </NavLink>
      <NavLink to="/settings" className="flex items-center space-x-2 p-2 hover:bg-gray-800 rounded">
        <Settings size={20} />
        <span>Settings</span>
      </NavLink>
    </nav>
  </aside>
);

const Navbar = () => (
  <header className="bg-gray-800 text-white p-4">
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold">Warehouse Management Dashboard</h1>
    </div>
  </header>
);

const Layout = ({ children }) => (
  <div className="flex flex-col min-h-screen bg-gray-950 text-white">
    <Navbar />
    <div className="flex flex-1">
      <Sidebar />
      <main className="flex-1 p-6">{children}</main>
    </div>
  </div>
);

export default Layout;
