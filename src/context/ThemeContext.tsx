import { createContext, ReactNode, useContext, useState } from 'react';

interface ThemeContextType {
  currentTheme: string | undefined;
  setCurrentTheme: React.Dispatch<React.SetStateAction<'dark' | 'light' | undefined>>;
  selectCurrentTheme: (variant: 'dark' | 'light') => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<'dark' | 'light' | undefined>(undefined);

  const selectCurrentTheme = (variant: 'dark' | 'light') => {
    setCurrentTheme(variant);
    localStorage.setItem('theme', JSON.stringify(variant));
  };

  const value = { currentTheme, setCurrentTheme, selectCurrentTheme };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within an ThemeProvider');
  }

  return context;
};
