import { Route, Routes } from 'react-router-dom';

// components
import React from 'react';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import About from './pages/About';

// configs
import { PAGE_URL } from './config';
import User from './pages/User';

// layouts
import MainLayout from './components/layouts/MainLayout';

const routesConfig = [
  {
    path: PAGE_URL.ROOT,
    layout: MainLayout,
    element: Dashboard,
  },
  {
    path: PAGE_URL.ABOUT,
    layout: MainLayout,
    element: About,
  },
  {
    path: PAGE_URL.LOGIN,
    element: Login,
  },
  {
    path: PAGE_URL.USER,
    layout: MainLayout,
    element: User,
  },
  {
    path: '*',
    element: <div>404 not found</div>,
  },
];

export default function App() {
  return (
    <div className="mainContent">
      <Routes>
        {routesConfig.map((route) => {
          const Layout = route?.layout || React.Fragment;
          const Component = (route?.element || React.Fragment) as React.ElementType;
          return (
            <Route
              path={route.path}
              element={(
                <Layout>
                  <Component />
                </Layout>
            )}
            />
          );
        })}
      </Routes>
    </div>
  );
}
