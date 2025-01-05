import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from './ui/breadcrumb';
import { Sun, Moon, Heart } from 'lucide-react';
import { Button } from "./ui/button";
import { useTheme } from "../context/ThemeContext";
import Sidebar from './Sidebar';

const Navbar = ({ toggleSidebar }) => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <header className="bg-background text-foreground p-4 border-b">
      <div className="flex items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleSidebar}
            className="md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </Button>
          <h1 className="text-2xl">
            <span className="font-bold">ChoXanh</span>
            <span className="font-thin"> Admin</span>
          </h1>
        </div>
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
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="flex flex-1 relative">
        <>
          <div 
            className={`fixed inset-0 bg-black/50 z-40 md:hidden ${isCollapsed ? 'hidden' : 'block'}`}
            onClick={toggleSidebar}
          />
          <Sidebar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
          <main className={`flex-1 p-4 md:p-6 transition-all duration-300 ${isCollapsed ? 'ml-0 md:ml-20' : 'ml-0 md:ml-64'} max-w-screen-2xl mx-auto w-full`}>
            <div className="flex flex-col items-center w-full">
              <div className="w-full max-w-7xl mb-6">
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
            <div className="w-full max-w-7xl space-y-6">
              {children}
            </div>
              </div>
          </main>
        </>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
