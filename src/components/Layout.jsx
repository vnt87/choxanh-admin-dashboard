import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from './ui/breadcrumb';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';


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
      <Header toggleSidebar={toggleSidebar} />
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
