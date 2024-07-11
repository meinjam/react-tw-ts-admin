import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home.Page';
import PublicRoute from './PublicRoute';
import PrivateRoutes from './PrivateRoutes';
import LoginRegister from '../components/layouts/LoginRegister.Layout';
import NotFound from '../pages/NotFound.Page';
import { LoginSignupRoutes } from '.';
import Admin from '@/components/layouts/Admin.Layout';

const MainRoute = () => {
  return (
    <Routes>
      <Route path='*' element={<NotFound />} />

      {/* Login Register routes */}
      <Route element={<PublicRoute />}>
        {LoginSignupRoutes.map((route, i) => (
          <Route
            key={i}
            path={route.path}
            element={
              <LoginRegister>
                <route.component />
              </LoginRegister>
            }
          />
        ))}
      </Route>

      {/* Private Routes */}
      <Route element={<PrivateRoutes />}>
        <Route
          path='/'
          element={
            <Admin>
              <Home />
            </Admin>
          }
        />
      </Route>
    </Routes>
  );
};

export default MainRoute;
