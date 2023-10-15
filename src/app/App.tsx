import { FC, Suspense, useContext, useEffect } from 'react';
import { Provider } from 'react-redux';

import { LanguageProvider } from '../providers/i18n/LanguageProvider';
import { ThemeProvider } from '../theming';

import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { MainPage } from '../pages/MainPage';
import { AuthPage } from '../pages/AuthPage';
import { Layout } from '../layouts/Layout';
import { ProfilePage } from '../pages/ProfilePage';
import { useAppDispatch } from '../store';

import './styles/index.scss';
import { setInitValue } from '../slices/init';
import { PrivateRoutes } from '@src/components';
import { AuthContext } from '@src/providers/auth/AuthContext';

export const App: FC = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const isLoggedIn = useContext(AuthContext);

  useEffect(() => {
    dispatch(setInitValue(true));
  }, []);

  // useEffect(() => {
  //   if (isLoggedIn) {
  //     const { from } = location.state || { from: { pathname: '/' } };
  //     navigate(from, { replace: true });
  //   }
  // }, [isLoggedIn, location, navigate]);

  return (
    <Suspense fallback="">
      <ThemeProvider>
        <LanguageProvider>
          <div className="app">
            <Routes>
              <Route path="/" element={<Layout sidebar={<div></div>} />}>
                <Route index element={<MainPage />} />
                <Route path="/" element={<PrivateRoutes />}>
                  <Route path="profile" element={<ProfilePage />} />
                </Route>
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
