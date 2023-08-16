/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';
import { AUTH_ROUTES, MAIN_ROUTES, SIDEBAR_ROUTES } from 'routes';
import Sidebar from './components/Sidebar';
import Container from 'UI/Container';
import Header from './components/Header';
import paths from 'constants/routePaths';

export function App() {
  const { i18n } = useTranslation();
  const [mode, setMode] = React.useState(false);
  const [newMode, setNewMode] = React.useState('');
  const [openSidebar, setOpenSidebar] = React.useState(true);
  const [componentType, setComponentType] = React.useState(false);
  // const ID = JSON.parse(localStorage.getItem('data') || '{}');
  // const [route, setRoute] = React.useState<any[]>([]);

  // React.useEffect(() => {
  //   if (ID) {
  //     setRoute(MAIN_ROUTES);
  //     console.log(route);
  //   } else {
  //     setRoute(AUTH_ROUTES);
  //     console.log(route);
  //   }
  // }, [ID])

  React.useEffect(() => {
    if (mode === true) {
      setNewMode('bg-white text-gray-900');
    } else {
      setNewMode('bg-gray-900');
    }
  }, [mode]);

  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - React Boilerplate"
        defaultTitle="React Boilerplate"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>
      <React.Suspense fallback="Loading...">
        <Routes>
          {[...MAIN_ROUTES, ...AUTH_ROUTES, ...SIDEBAR_ROUTES].map(item => {
            const { path, element: Component } = item;
            return (
              <Route
                key={path}
                path={path}
                element={
                  <Component
                    mode={mode}
                    changeMode={setMode}
                    openSidebar={openSidebar}
                    setOpenSidebar={setOpenSidebar}
                  />
                }
              />
            );
          })}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </React.Suspense>
      <GlobalStyle />
    </BrowserRouter>
  );
}
