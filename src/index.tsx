import { createRoot } from 'react-dom/client';

import './shared/config/i18n';

import { App } from './app';
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
