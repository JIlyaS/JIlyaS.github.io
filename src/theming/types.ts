export enum Theme {
  dark = 'dark',
  light = 'light',
}

export type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
};
