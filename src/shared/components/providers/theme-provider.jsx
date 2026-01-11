import { createContext, useContext, useEffect, useState } from 'react';
import { getTheme, darkTheme, lightTheme, sharedTheme } from '@/shared/styles/theme';

const ThemeContext = createContext({
  mode: 'dark',
  theme: getTheme('dark'),
  toggleTheme: () => {},
  setMode: () => {},
});

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}

function generateCSSVariables(theme) {
  const vars = {};

  Object.entries(theme.colors).forEach(([key, value]) => {
    vars[`--color-${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`] = value;
  });

  Object.entries(sharedTheme.spacing).forEach(([key, value]) => {
    vars[`--spacing-${key}`] = value;
  });

  Object.entries(sharedTheme.borderRadius).forEach(([key, value]) => {
    vars[`--radius-${key}`] = value;
  });

  return vars;
}

export function ThemeProvider({ children }) {
  const [mode, setMode] = useState('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('theme-mode');
    if (savedMode === 'light' || savedMode === 'dark') {
      //eslint-disable-next-line react-hooks/set-state-in-effect
      setMode(savedMode);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setMode(prefersDark ? 'dark' : 'light');
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('theme-mode', mode);
    }
  }, [mode, mounted]);

  useEffect(() => {
    if (!mounted) return;

    const themeColors = mode === 'light' ? lightTheme : darkTheme;
    const cssVars = generateCSSVariables(themeColors);

    Object.entries(cssVars).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value);
    });

    document.documentElement.setAttribute('data-theme', mode);
  }, [mode, mounted]);

  const toggleTheme = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const theme = getTheme(mode);

  if (!mounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ mode, theme, toggleTheme, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
