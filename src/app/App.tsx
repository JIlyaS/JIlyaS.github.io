import { FC, Suspense } from 'react';

import { LanguageProvider } from '../providers/i18n/LanguageProvider';
import { ThemeProvider } from '../theming';

import { Route, Routes } from 'react-router-dom';
import { MainPage } from '../pages/MainPage';
import { AuthPage } from '../pages/AuthPage';
import { Layout } from '../layouts/Layout';
import { ProfilePage } from '../pages/ProfilePage';

import './styles/index.scss';

export const App: FC = () => {
  return (
    <Suspense fallback="">
      <ThemeProvider>
        <LanguageProvider>
          <div className="app">
            <Routes>
              <Route path="/" element={<Layout sidebar={<div></div>} />}>
                <Route index element={<MainPage />} />
                <Route path="profile" element={<ProfilePage />} />
                <Route path="*" element={<div>Not Found</div>} />
              </Route>
              <Route path="/auth" element={<AuthPage />} />
            </Routes>
          </div>
        </LanguageProvider>
      </ThemeProvider>
    </Suspense>
  );
};

export default App;
