"use client"

import { useTheme } from '@/shared/components/providers/theme-provider'
import { useI18n } from '@/shared/components/providers/i18n-provider'
import { Navbar } from '../components/layout/navbar'

export function NavbarContainer() {
  const { mode, toggleTheme } = useTheme()
  const { language, toggleLanguage, t } = useI18n()

  return (
    <Navbar 
      mode={mode}
      language={language}
      brandText={t('brand')}
      onToggleTheme={toggleTheme}
      onToggleLanguage={toggleLanguage}
    />
  )
}
