/**
 * index.tsx
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';

// Use consistent styling
import 'sanitize.css/sanitize.css';

// Import root app
import { App } from 'app/index';

import { HelmetProvider } from 'react-helmet-async';

import reportWebVitals from 'reportWebVitals';

import './index.css';

import './locales/i18n';
import { ToastContainer } from 'react-toastify';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ApolloProvider } from '@apollo/client';
import { persistor, store } from 'store';
import { PersistGate } from 'redux-persist/integration/react';
import client from './graphql/index';
import { loadErrorMessages, loadDevMessages } from '@apollo/client/dev';
import common_uz from './locales/uz/translation.json';
import common_en from './locales/en/translation.json';
import common_ru from './locales/ru/translation.json';
import { __DEV__ } from '@apollo/client/utilities/globals';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
const queryClient = new QueryClient();

if (__DEV__) {
  // Adds messages only in a dev environment
  loadDevMessages();
  loadErrorMessages();
}

i18next.init({
  interpolation: { escapeValue: false }, // React already does escaping
  lng: 'en', // language to use
  resources: {
    en: {
      common: common_en, // 'common' is our custom namespace
    },
    uz: {
      common: common_uz,
    },
    ru: {
      common: common_ru,
    },
  },
});
root.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <PersistGate loading={null} persistor={persistor}>
        <I18nextProvider i18n={i18next}>
          <HelmetProvider>
            <React.StrictMode>
              <QueryClientProvider client={queryClient}>
                <App />
              </QueryClientProvider>
            </React.StrictMode>
            <ToastContainer autoClose={1500} />
          </HelmetProvider>
        </I18nextProvider>
      </PersistGate>
    </ApolloProvider>
  </Provider>,
);

// Hot reloadable translation json files
if (module.hot) {
  module.hot.accept(['./locales/i18n'], () => {
    // No need to render the App again because i18next works with the hooks
  });
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
