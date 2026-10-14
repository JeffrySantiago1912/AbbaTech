import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { en } from './en'
import { es } from './es'
import type { Dictionary, Locale } from './types'

const dictionaries: Record<Locale, Dictionary> = { es, en }

interface PreferencesValue {
  locale: Locale
  t: Dictionary
  setLocale: (locale: Locale) => void
  isDark: boolean
  toggleTheme: () => void
}

const PreferencesContext = createContext<PreferencesValue | null>(null)

export function PreferencesProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(() => (localStorage.getItem('abbatech-locale') === 'en' ? 'en' : 'es'))
  const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains('dark'))

  useEffect(() => {
    localStorage.setItem('abbatech-locale', locale)
    document.documentElement.lang = locale
    document.title = dictionaries[locale].metaTitle
    document.querySelector('meta[name="description"]')?.setAttribute('content', dictionaries[locale].metaDescription)
  }, [locale])

  const value = useMemo<PreferencesValue>(
    () => ({
      locale,
      t: dictionaries[locale],
      setLocale,
      isDark,
      toggleTheme: () => {
        setIsDark((current) => {
          const next = !current
          document.documentElement.classList.toggle('dark', next)
          localStorage.setItem('abbatech-theme', next ? 'dark' : 'light')
          return next
        })
      },
    }),
    [isDark, locale],
  )

  return <PreferencesContext.Provider value={value}>{children}</PreferencesContext.Provider>
}

export function usePreferences() {
  const value = useContext(PreferencesContext)
  if (!value) throw new Error('usePreferences must be used inside PreferencesProvider')
  return value
}
