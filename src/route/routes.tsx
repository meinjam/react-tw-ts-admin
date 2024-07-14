import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home.Page';
import PublicRoute from './PublicRoute';
import PrivateRoutes from './PrivateRoutes';
import LoginRegister from '../components/layouts/LoginRegister.Layout';
import NotFound from '../pages/NotFound.Page';
import { LoginRegisterRoutes } from '@/route/index';
import Admin from '@/components/layouts/Admin.Layout';
import { useAuth } from '@/context/AuthContext';
import NotFoundComponent from '@/components/not-found/NotFound.Component';

const MainRoute = () => {
  const { token, user } = useAuth();

  return (
    <Routes>
      <Route path='*' element={<NotFound />} />

      {/* Login Register routes */}
      <Route element={<PublicRoute />}>
        {LoginRegisterRoutes.map((route, i) => (
          <Route key={i} path={route.path} element={<LoginRegister>{route.component}</LoginRegister>} />
        ))}
      </Route>

      {/* Private Routes */}
      <Route element={<PrivateRoutes />}>
        <Route path='/' element={<Navigate to='/admin/home' replace />} />

        <Route
          path='/admin/home'
          element={
            <Admin>
              <Home />
            </Admin>
          }
        />
      </Route>

      {user && token && (
        <Route
          path='/admin/*'
          element={
            <Admin>
              <NotFoundComponent applyMinHeight={true} />
            </Admin>
          }
        />
      )}
    </Routes>
  );
};

export default MainRoute;
