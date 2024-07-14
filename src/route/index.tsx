import Login from '../pages/Login.Page';
import Register from '../pages/Register.Page';

interface RouteTypes {
  path: string;
  component: JSX.Element;
}

export const LoginRegisterRoutes: RouteTypes[] = [
  { path: '/login', component: <Login /> },
  { path: '/register', component: <Register /> },
];
