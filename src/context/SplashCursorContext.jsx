import { createContext, useContext, useState } from 'react';

const SplashCursorContext = createContext();

export const SplashCursorProvider = ({ children }) => {
  const [isEnabled, setIsEnabled] = useState(true);

  const toggleSplashCursor = () => {
    setIsEnabled(prev => !prev);
  };

  return (
    <SplashCursorContext.Provider value={{ isEnabled, toggleSplashCursor }}>
      {children}
    </SplashCursorContext.Provider>
  );
};

export const useSplashCursor = () => {
  const context = useContext(SplashCursorContext);
  if (!context) {
    throw new Error('useSplashCursor must be used within a SplashCursorProvider');
  }
  return context;
};
