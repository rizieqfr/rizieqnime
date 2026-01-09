"use client"

import { useI18n } from '@/shared/components/providers/i18n-provider'
import { useTheme } from '@/shared/components/providers/theme-provider'
import { WelcomeView } from '../components/welcome-view'

export function WelcomeContainer() {
  const { t, language, toggleLanguage } = useI18n()
  const { mode, toggleTheme } = useTheme()
  
  const features = t('welcome.features.list')

  return (
    <WelcomeView 
      mode={mode}
      language={language}
      toggleTheme={toggleTheme}
      toggleLanguage={toggleLanguage}
      t={t}
      features={features}
    />
  )
}
