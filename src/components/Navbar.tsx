import { useState, useEffect } from 'react'
import { Code2, Menu, X, ChevronRight, Sun, Moon } from 'lucide-react'
import { WHATSAPP_LINK } from '../config'

const navLinks = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Servicios', href: '#servicios' },
  { name: 'Proyectos', href: '#proyectos' },
  { name: '¿Por qué nosotros?', href: '#nosotros' },
  { name: 'Contacto', href: '#contacto' },
] as const

type NavbarProps = {
  isDark: boolean
  toggleTheme: () => void
}

export default function Navbar({ isDark, toggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 ${
        scrolled
          ? 'bg-white/85 dark:bg-black/70 backdrop-blur-xl border-b border-slate-200/80 dark:border-white/[0.06]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          <a href="#inicio" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center shadow-lg">
              <Code2 className="w-4 h-4 text-white" />
            </div>
            <span className="text-slate-900 dark:text-white font-black text-xl tracking-tight">
              Abba<span className="text-gradient-alt">Tech</span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-600 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <button
              type="button"
              onClick={toggleTheme}
              className="w-9 h-9 rounded-full glass flex items-center justify-center"
              aria-label="Cambiar tema"
            >
              {isDark
                ? <Sun className="w-4 h-4 text-yellow-400" />
                : <Moon className="w-4 h-4 text-slate-600" />
              }
            </button>


          </div>

          <div className="lg:hidden flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              className="w-9 h-9 rounded-full glass flex items-center justify-center"
              aria-label="Cambiar tema"
            >
              {isDark
                ? <Sun className="w-4 h-4 text-yellow-400" />
                : <Moon className="w-4 h-4 text-slate-600" />
              }
            </button>
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-slate-700 dark:text-white p-2 rounded-lg glass"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-white/98 dark:bg-black/95 backdrop-blur-xl border-b border-slate-200 dark:border-white/[0.06] overflow-hidden">
          <div className="px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-slate-700 hover:text-slate-900 dark:text-gray-300 dark:hover:text-white py-3 px-4 rounded-xl hover:bg-slate-50 dark:hover:bg-white/5 text-sm font-medium"
              >
                {link.name}
              </a>
            ))}

          </div>
        </div>
      )}
    </header>
  )
}
