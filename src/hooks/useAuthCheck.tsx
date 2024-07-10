import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';

const useAuthCheck = () => {
  const { loggedIn } = useAuth();
  const [authChecked, setAuthChecked] = useState<boolean>(false);

  useEffect(() => {
    const localAuth = localStorage.getItem('auth');

    if (localAuth) {
      const auth = JSON.parse(localAuth);

      if (auth?.token && auth?.user) {
        loggedIn(auth?.token, auth?.user);
      }
    }

    setAuthChecked(true);
  }, []);

  return authChecked;
};

export default useAuthCheck;
