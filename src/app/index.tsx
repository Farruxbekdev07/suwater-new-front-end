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
import { MAIN_ROUTES, SIDEBAR_ROUTES } from 'routes';
import Sidebar from './components/Sidebar';
import Container from 'UI/Container';

export function App() {
  const { i18n } = useTranslation();
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
        <div className="w-64 max-[640px]:w-20">
          <Sidebar />
        </div>
        <div className="bg-gray-50 dark:bg-gray-900 flex-1">
          <Container>
            <React.Suspense fallback="Loading...">
              <Routes>
                {[...SIDEBAR_ROUTES, ...MAIN_ROUTES].map(item => {
                  const { path, element: Component } = item;
                  return (
                    <Route key={path} path={path} element={<Component />} />
                  );
                })}
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </React.Suspense>
          </Container>
        </div>
      </div>
      <GlobalStyle />
    </BrowserRouter>
  );
}
