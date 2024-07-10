import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoutes = () => {
  const { token, user } = useAuth();

  return token && user ? <Outlet /> : <Navigate to='/login' />;
};

export default PrivateRoutes;
