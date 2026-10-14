import { ArrowRight } from 'lucide-react'
import { usePreferences } from '../i18n/Preferences'

export default function Hero() {
  const { t } = usePreferences()

  return (
    <section id="inicio" className="relative overflow-hidden bg-[#07111f] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(124,58,237,0.45),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(6,182,212,0.28),transparent_28%),linear-gradient(180deg,#07111f,#0b1020)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <div>
          <h1 className="max-w-xl text-4xl font-black leading-[1.05] tracking-tight sm:text-6xl">
            {t.hero.titleBefore}{' '}
            <span className="text-cyan-300">{t.hero.titleAccent}</span>{' '}
            {t.hero.titleAfter}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">{t.hero.text}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contacto" className="inline-flex items-center gap-2 rounded-full bg-violet-600 px-6 py-3 text-sm font-semibold text-white">
              {t.hero.primary}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href="#proyectos" className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold">
              {t.hero.secondary}
            </a>
          </div>
          <p className="mt-6 text-sm text-slate-400">{t.hero.place}</p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur-sm sm:p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">{t.hero.panelTitle}</p>
          <ul className="mt-5 divide-y divide-white/10">
            {t.hero.panel.map((item) => (
              <li key={item.label} className="py-4">
                <p className="font-semibold">{item.label}</p>
                <p className="mt-1 text-sm leading-relaxed text-slate-300">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
