import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { navItems } from "./nav-items";
import Layout from "./components/Layout";
import { ThemeProvider } from "./context/ThemeContext";
import SplashCursor from './components/SplashCursor'
import { SplashCursorProvider } from "./context/SplashCursorContext";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider>
    <SplashCursorProvider>
      <SplashCursor />
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <BrowserRouter>
            <Layout>
              <Routes>
                {navItems.map(({ to, page }) => (
                  <Route key={to} path={to} element={page} />
                ))}
              </Routes>
            </Layout>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </SplashCursorProvider>
  </ThemeProvider>
);

export default App;
