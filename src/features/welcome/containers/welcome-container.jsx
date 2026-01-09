'use client';

import { WelcomeView } from '../components/welcome-view';
import { useWelcome } from '../hooks/use-welcome';

export function WelcomeContainer() {
  const { t, language, toggleLanguage, features, mode, toggleTheme } = useWelcome();

  return (
    <WelcomeView
      mode={mode}
      language={language}
      toggleTheme={toggleTheme}
      toggleLanguage={toggleLanguage}
      t={t}
      features={features}
    />
  );
}
