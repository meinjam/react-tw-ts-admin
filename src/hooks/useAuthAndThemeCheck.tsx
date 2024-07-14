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

    if (localAuth) {
      const auth = JSON.parse(localAuth);

      if (auth?.token && auth?.user) {
        loggedIn(auth?.token, auth?.user);
      }
    }

    if (localTheme) {
      const theme = JSON.parse(localTheme);
      document.documentElement.classList.add(theme);
      setCurrentTheme(theme);
    }

    setAuthChecked(true);
  }, []);

  return authChecked;
};

export default useAuthAndThemeCheck;
