'use client';

import { useI18n } from '@/shared/components/providers/i18n-provider';
import { useTheme } from '@/shared/components/providers/theme-provider';

export function useWelcome() {
  const { t, language, toggleLanguage } = useI18n();
  const { mode, toggleTheme } = useTheme();
  const features = t('welcome.features.list');
  return {
    t,
    language,
    toggleLanguage,
    mode,
    toggleTheme,
    features,
  };
}
