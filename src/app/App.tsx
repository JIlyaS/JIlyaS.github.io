import { FC, Suspense } from 'react';

import { LanguageProvider } from '../providers/i18n/LanguageProvider';
import { ThemeProvider } from '../theming';

import './styles/index.scss';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from '../pages/MainPage';
import { AuthPage } from '../pages/AuthPage';

// const Component = () => {
//   const { t, i18n } = useTranslation();

//   const toggle = () => {
//     i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
//   };

//   return (
//     <div>
//       <div>{t('Тестовый пример')}</div>
//       <button onClick={toggle}>{t('Перевод')}</button>
//     </div>
//   );
// };

export const App: FC = () => {
  // const [visible, setVisible] = useState(false);

  return (
    <Suspense fallback="">
      <ThemeProvider>
        <LanguageProvider>
          <div className="app">
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/auth" element={<AuthPage />} />
            </Routes>
          </div>
        </LanguageProvider>
      </ThemeProvider>
    </Suspense>
  );
};

export default App;
