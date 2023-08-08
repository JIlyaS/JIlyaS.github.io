import { Theme } from './types';
import { keyLocalStorageTheme } from './const';

export const getDefaultTheme = (): Theme => {
  const themeLocalStorage = localStorage.getItem(keyLocalStorageTheme) as Theme;
  if (themeLocalStorage) {
    return themeLocalStorage;
  }
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return defaultDark ? Theme.dark : Theme.light;
};
