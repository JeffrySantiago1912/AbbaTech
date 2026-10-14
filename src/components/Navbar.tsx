import { useState } from 'react'
import { Code2, Menu, Moon, Sun, X } from 'lucide-react'
import { usePreferences } from '../i18n/Preferences'

const links = [
  { href: '#inicio', key: 'home' },
  { href: '#servicios', key: 'services' },
  { href: '#nosotros', key: 'about' },
  { href: '#proyectos', key: 'work' },
  { href: '#contacto', key: 'contact' },
] as const

export default function Navbar() {
  const { t, locale, setLocale, isDark, toggleTheme } = usePreferences()
  const [open, setOpen] = useState(false)

  return (
    <div className="sticky top-0 z-40">
      <header className="border-b border-slate-200 bg-white/95 backdrop-blur dark:border-white/10 dark:bg-[#0c0c14]/95">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
          <a href="#inicio" className="flex items-center gap-2 font-black tracking-tight text-slate-950 dark:text-white">
            <span className="grid size-8 place-items-center rounded-lg bg-gradient-to-br from-violet-600 to-cyan-500 text-white">
              <Code2 className="h-4 w-4" aria-hidden="true" />
            </span>
            AbbaTech
          </a>
          <nav className="hidden items-center gap-6 lg:flex" aria-label={t.nav.home}>
            {links.map((link) => (
              <a key={link.href} href={link.href} className="text-sm font-medium text-slate-600 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white">
                {t.nav[link.key]}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <div className="flex rounded-full border border-slate-200 p-0.5 text-xs dark:border-white/15" role="group" aria-label={t.nav.language}>
              {(['es', 'en'] as const).map((code) => (
                <button
                  key={code}
                  type="button"
                  onClick={() => setLocale(code)}
                  aria-pressed={locale === code}
                  className={`rounded-full px-2 py-1 uppercase ${locale === code ? 'bg-slate-950 text-white dark:bg-white dark:text-slate-950' : 'text-slate-500'}`}
                >
                  {code}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={isDark ? t.nav.themeLight : t.nav.themeDark}
              className="grid size-9 place-items-center rounded-full border border-slate-200 dark:border-white/15"
            >
              {isDark ? <Sun className="h-4 w-4 text-amber-300" /> : <Moon className="h-4 w-4" />}
            </button>
            <a href="#contacto" className="hidden rounded-full bg-violet-600 px-4 py-2 text-sm font-semibold text-white sm:inline-flex">
              {t.nav.cta}
            </a>
            <button
              type="button"
              className="grid size-9 place-items-center rounded-full border border-slate-200 lg:hidden dark:border-white/15"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-label={open ? t.nav.close : t.nav.open}
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
        {open && (
          <nav className="border-t border-slate-200 px-4 py-3 lg:hidden dark:border-white/10" aria-label={t.nav.home}>
            {links.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="block py-2.5 text-sm font-medium">
                {t.nav[link.key]}
              </a>
            ))}
          </nav>
        )}
      </header>
    </div>
  )
}
