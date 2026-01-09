"use client"

import { createContext, useContext, useEffect, useState, useCallback } from 'react'
import { translations } from '@/shared/lib/i18n/translations'

const I18nContext = createContext({
  language: 'en',
  t: (key) => key,
  setLanguage: () => {},
  toggleLanguage: () => {},
})

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider')
  }
  return context
}

function getNestedValue(obj, path) {
  return path.split('.').reduce((current, key) => {
    return current && current[key] !== undefined ? current[key] : undefined
  }, obj)
}

export function I18nProvider({ children }) {
  const [language, setLanguageState] = useState('en')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const savedLang = localStorage.getItem('language')
    if (savedLang === 'en' || savedLang === 'id') {
      setLanguageState(savedLang)
    } else {
      const browserLang = navigator.language.toLowerCase()
      if (browserLang.startsWith('id')) {
        setLanguageState('id')
      }
    }
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('language', language)
    }
  }, [language, mounted])

  const setLanguage = useCallback((lang) => {
    if (lang === 'en' || lang === 'id') {
      setLanguageState(lang)
    }
  }, [])

  const toggleLanguage = useCallback(() => {
    setLanguageState(prev => prev === 'en' ? 'id' : 'en')
  }, [])

  const t = useCallback((key, fallback) => {
    const currentTranslations = translations[language]
    const value = getNestedValue(currentTranslations, key)
    
    if (value !== undefined) {
      return value
    }
    
    const enValue = getNestedValue(translations.en, key)
    if (enValue !== undefined) {
      return enValue
    }
    
    return fallback || key
  }, [language])

  if (!mounted) {
    return null
  }

  return (
    <I18nContext.Provider value={{ language, t, setLanguage, toggleLanguage }}>
      {children}
    </I18nContext.Provider>
  )
}
