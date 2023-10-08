import React from 'react';
import { Route, Routes } from 'react-router-dom';

// configs
import { PAGE_URL, ROLE } from './config';
import User from './pages/User';

// layouts
import MainLayout from './components/layouts/MainLayout';

// routes
import AuthRoute from './auth/AuthRoute';
import GuestRoute from './auth/GuestRoute';
import RoleRoute from './auth/RoleRoute';

// components
// import Dashboard from './pages/Dashboard';
// import Login from './pages/Login';
// import About from './pages/About';
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Login = React.lazy(() => import('./pages/Login'));
const About = React.lazy(() => import('./pages/About'));
const Error403 = React.lazy(() => import('./pages/Error403'));

const routesConfig = [
  {
    path: PAGE_URL.ROOT,
    layout: MainLayout,
    element: Dashboard,
    auth: AuthRoute,
    roles: [ROLE.ADMIN, ROLE.OPERATOR, ROLE.OWNER],
  },
  {
    path: PAGE_URL.ABOUT,
    layout: MainLayout,
    element: About,
    roles: [ROLE.ALL],
  },
  {
    path: PAGE_URL.LOGIN,
    element: Login,
    auth: GuestRoute,
  },
  {
    path: PAGE_URL.USER,
    layout: MainLayout,
    element: User,
    auth: AuthRoute,
    roles: [ROLE.ADMIN],
  },
  {
    path: PAGE_URL.ERROR_403,
    element: Error403,
  },
  {
    path: '*',
    element: <div>404 not found</div>,
  },
];

export default function App() {
  return (
    <div className="mainContent">
      <React.Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {routesConfig.map((route) => {
            const Layout = route?.layout || React.Fragment;
            const Component = (route?.element || React.Fragment) as React.ElementType;
            const AuthComponent = (route?.auth || React.Fragment) as React.ElementType;
            return (
              <Route
                path={route.path}
                element={(
                  <AuthComponent>
                    <Layout>
                      <RoleRoute roles={route.roles || []}>
                        <Component />
                      </RoleRoute>
                    </Layout>
                  </AuthComponent>

              )}
              />
            );
          })}
        </Routes>
      </React.Suspense>

    </div>
  );
}
