import { createContext } from 'react';

export const Themes = {
  light: 'light',
  dark: 'dark',
};

export const ThemeContext = createContext({
  theme: Themes.light,
  toggleTheme: () => {},
});