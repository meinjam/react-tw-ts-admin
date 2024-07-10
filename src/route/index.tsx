import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home.Page';
import Login from '../pages/Login.Page';
import PublicRoute from './PublicRoute';
import PrivateRoutes from './PrivateRoutes';
import Register from '../pages/Register.Page';
import LoginRegister from '../components/layouts/LoginRegister.Layout';
import NotFound from '../pages/NotFound.Page';

const MainRoute = () => {
  return (
    <Routes>
      <Route path='*' element={<NotFound />} />

      <Route element={<PublicRoute />}>
        <Route
          path='/login'
          element={
            <LoginRegister>
              <Login />
            </LoginRegister>
          }
        />
        <Route
          path='/register'
          element={
            <LoginRegister>
              <Register />
            </LoginRegister>
          }
        />
      </Route>

      <Route element={<PrivateRoutes />}>
        <Route path='/' element={<Home />} />
      </Route>
    </Routes>
  );
};

export default MainRoute;
