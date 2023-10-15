import { createRoot } from 'react-dom/client';

import './shared/config/i18n';

import { App } from './app';
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { AuthProvider } from './providers/auth/AuthProvider';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <AuthProvider>
          <App />
        </AuthProvider>
      </Provider>
    </BrowserRouter>
  </StrictMode>,
);
