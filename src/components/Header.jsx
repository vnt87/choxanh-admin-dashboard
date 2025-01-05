import { Sun, Moon } from 'lucide-react';
import { Button } from "./ui/button";
import { useTheme } from "../context/ThemeContext";
import { useNavigate } from "react-router-dom";

const Header = ({ toggleSidebar }) => {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  
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
          <Button 
            variant="ghost" 
            className="text-2xl p-0 hover:bg-transparent"
            onClick={() => navigate('/')}
          >
            <h1>
              <span className="font-bold">ChoXanh</span>
              <span className="font-thin"> Admin</span>
            </h1>
          </Button>
        </div>
        <Button variant="ghost" size="icon" onClick={toggleTheme}>
          {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </Button>
      </div>
    </header>
  );
};

export default Header;