import { createRoot } from 'react-dom/client';

import { App } from './app';
import { ThemeProvider } from './theming';
import { StrictMode } from 'react';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
