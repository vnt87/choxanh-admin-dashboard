import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from './ui/breadcrumb';
import { LayoutDashboard, Package, Truck, Users, Settings, Sun, Moon, Heart, ArrowRightFromLine, ArrowLeftFromLine } from 'lucide-react';
import { Button } from "./ui/button";
import { useTheme } from "../context/ThemeContext";

const Sidebar = ({ isCollapsed, toggleSidebar }) => (
  <aside className={`bg-background text-foreground h-[calc(100vh-4rem)] p-4 border-r transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-64'} flex flex-col`}>
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

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
  <header className="bg-background text-foreground p-4 border-b">
    <div className="flex items-center justify-between px-6">
      <h1 className="text-2xl">
        <span className="font-bold">ChoXanh</span>
        <span className="font-thin"> Admin</span>
      </h1>
      <Button variant="ghost" size="icon" onClick={toggleTheme}>
        {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      </Button>
    </div>
  </header>
  );
};

const Footer = () => (
  <footer className="bg-background text-foreground p-4 border-t text-center text-sm">
    Crafted with <Heart className="inline h-4 w-4 text-red-500" /> by {' '}
    <a 
      href="https://namvu.net" 
      target="_blank" 
      rel="noopener noreferrer"
      className="hover:underline"
    >
      Nam Vu
    </a>
  </footer>
);

const Layout = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();
  const pathSegments = location.pathname
    .split('/')
    .filter(Boolean)
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="flex flex-1">
        <>
          <Sidebar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
          <main className={`flex-1 p-6 transition-all duration-300 ${isCollapsed ? 'ml-20' : 'ml-64'} max-w-screen-2xl mx-auto`}>
            <div className="mb-6">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
                  </BreadcrumbItem>
                  {location.pathname !== '/' && (
                    <>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        <BreadcrumbLink href={location.pathname}>
                          {pathSegments}
                        </BreadcrumbLink>
                      </BreadcrumbItem>
                    </>
                  )}
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            <div className="space-y-6">
              {children}
            </div>
          </main>
        </>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
