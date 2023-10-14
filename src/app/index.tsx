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
import { store } from 'store';
import { useSelector } from 'react-redux';

export function App() {
  const [mode, setMode] = React.useState(false);
  const [newMode, setNewMode] = React.useState('');
  const [openSidebar, setOpenSidebar] = React.useState(true);
  const token = useSelector((state: any) => state.auth?.user?.token);
  const { language } = useSelector((state: any) => state.auth?.language);
  const { i18n } = useTranslation('translation');

  React.useEffect(() => {
    if (mode) {
      setNewMode('bg-white text-gray-900');
    } else {
      setNewMode('bg-gray-900');
    }
  }, [mode]);

  React.useEffect(() => {
    const handleLanguageChange = () => {
      i18n.changeLanguage('uz');
    };

    i18n.on('uz', handleLanguageChange);

    return () => {
      i18n.off('uz', handleLanguageChange);
    };
  }, []);

  React.useEffect(() => {
    i18n.changeLanguage();
  }, [language]);

  if (!token) {
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
            {AUTH_ROUTES.map(item => {
              const { path, element: Component } = item;
              return <Route key={path} path={path} element={<Component />} />;
            })}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </React.Suspense>
        <GlobalStyle />
      </BrowserRouter>
    );
  }
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - React Boilerplate"
        defaultTitle="React Boilerplate"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>
      <div className="flex">
        <div className={openSidebar ? 'w-64 max-[640px]:w-20' : 'w-0'}>
          <Sidebar open={openSidebar} mode={mode} changeMode={setMode} />
        </div>
        <div className="bg-gray-50 dark:bg-gray-900 flex-1 overflow-auto">
          <Header
            mode={mode}
            open={openSidebar}
            setOpenSidebar={setOpenSidebar}
          />
          <div
            className={`flex-1 overflow-auto ${
              mode ? 'bg-white' : 'bg-gray-900'
            }`}
          >
            <Container sidebarToggle={openSidebar}>
              <React.Suspense fallback="Loading...">
                <Routes>
                  {[...SIDEBAR_ROUTES, ...MAIN_ROUTES].map(item => {
                    const { path, element: Component } = item;
                    return (
                      <Route
                        key={path}
                        path={path}
                        element={<Component mode={mode} />}
                      />
                    );
                  })}
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </React.Suspense>
            </Container>
          </div>
        </div>
      </div>
      <GlobalStyle />
    </BrowserRouter>
  );
}
