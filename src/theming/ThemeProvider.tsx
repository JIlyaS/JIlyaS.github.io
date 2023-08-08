import {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useContext,
  useInsertionEffect,
  useMemo,
  useState,
} from 'react';
import { Theme, ThemeContextType } from './types';
import { getDefaultTheme } from './utils';
import { keyLocalStorageTheme } from './const';

interface IThemeProviderProps {
  children: ReactNode;
}
export const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);
export const useThemeContext = (): ThemeContextType => useContext(ThemeContext);
export const ThemeProvider: FC<IThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(getDefaultTheme());
  console.log(theme);

  useInsertionEffect(() => {
    localStorage.setItem(keyLocalStorageTheme, theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);
  const toggleTheme = useCallback(
    () => setTheme((v) => (v === Theme.light ? Theme.dark : Theme.light)),
    [],
  );
  const value = useMemo(() => ({ theme, toggleTheme, setTheme }), [theme, toggleTheme, setTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
