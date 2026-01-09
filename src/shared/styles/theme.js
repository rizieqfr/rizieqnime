export const darkTheme = {
  colors: {
    primary: '#dc2626',
    primaryLight: '#ef4444',
    primaryDark: '#b91c1c',

    bgDark: '#0f0f0f',
    bgCard: '#1a1a1a',
    bgCardHover: '#262626',

    textPrimary: '#ffffff',
    textSecondary: '#d4d4d4',
    textMuted: '#a3a3a3',

    accent: '#fbbf24',
    accentAlt: '#f97316',

    ratingHigh: '#22c55e',
    ratingMedium: '#fbbf24',
    ratingLow: '#ef4444',

    border: '#2a2a2a',
    skeleton: '#2a2a2a',

    gradientStart: '#dc2626',
    gradientEnd: '#fbbf24',
  },
};

export const lightTheme = {
  colors: {
    primary: '#dc2626',
    primaryLight: '#ef4444',
    primaryDark: '#b91c1c',

    bgDark: '#ffffff',
    bgCard: '#fafafa',
    bgCardHover: '#f5f5f5',

    textPrimary: '#171717',
    textSecondary: '#404040',
    textMuted: '#737373',

    accent: '#d97706',
    accentAlt: '#ea580c',

    ratingHigh: '#16a34a',
    ratingMedium: '#ca8a04',
    ratingLow: '#dc2626',

    border: '#e5e5e5',
    skeleton: '#e5e5e5',

    gradientStart: '#dc2626',
    gradientEnd: '#d97706',
  },
};

export const sharedTheme = {
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
  },

  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },

  borderRadius: {
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
    full: '9999px',
  },

  shadows: {
    card: '0 4px 24px rgba(220, 38, 38, 0.1)',
    cardHover: '0 8px 32px rgba(220, 38, 38, 0.2)',
    glow: '0 0 40px rgba(220, 38, 38, 0.3)',
  },

  fonts: {
    body: 'var(--font-outfit), sans-serif',
    display: 'var(--font-outfit), sans-serif',
  },

  transitions: {
    fast: '150ms ease',
    normal: '250ms ease',
    slow: '350ms ease',
  },
};

export const theme = {
  ...sharedTheme,
  ...darkTheme,
};

export function getTheme(mode = 'dark') {
  const colorTheme = mode === 'light' ? lightTheme : darkTheme;
  return {
    ...sharedTheme,
    ...colorTheme,
  };
}
