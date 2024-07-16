import { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useTheme } from '@/context/ThemeContext';

const useAuthAndThemeCheck = () => {
  const { loggedIn } = useAuth();
  const { setCurrentTheme } = useTheme();
  const [authChecked, setAuthChecked] = useState<boolean>(false);

  useEffect(() => {
    const localAuth = localStorage.getItem('auth');
    const localTheme = localStorage.getItem('theme');
    const root = window.document.documentElement;

    // auth functionality
    if (localAuth) {
      const auth = JSON.parse(localAuth);
      if (auth?.token && auth?.user) {
        loggedIn(auth?.token, auth?.user);
      }
    }

    // theme functions
    root.classList.remove('light', 'dark');

    if (localTheme) {
      const theme = JSON.parse(localTheme);
      root.classList.add(theme);
      setCurrentTheme(theme);
    } else {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      root.classList.add(systemTheme);
      setCurrentTheme(systemTheme);
    }

    setAuthChecked(true);
  }, []);

  return authChecked;
};

export default useAuthAndThemeCheck;
