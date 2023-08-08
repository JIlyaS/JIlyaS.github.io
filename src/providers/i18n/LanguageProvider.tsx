import { ReactNode, createContext, useInsertionEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { LANG_STORAGE_KEY } from '../../shared/config/i18n';

export const LanguageContext = createContext(null);

interface Props {
  children: ReactNode;
}

export const LanguageProvider: React.FC<Props> = ({ children }) => {
  const { i18n } = useTranslation();

  useInsertionEffect(() => {
    localStorage.setItem(LANG_STORAGE_KEY, i18n.language);
    const html = document.body.parentElement;
    html.lang = i18n.language;
  }, [i18n.language]);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <LanguageContext.Provider
      value={{ lang: localStorage.getItem(LANG_STORAGE_KEY) || 'ru', toggleLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
