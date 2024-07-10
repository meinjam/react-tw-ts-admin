import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PublicRoute = () => {
  const { token, user } = useAuth();

  return token && user ? <Navigate to='/' /> : <Outlet />;
};

export default PublicRoute;
