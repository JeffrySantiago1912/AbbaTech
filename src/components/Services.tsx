import { AppWindow, Cloud, Headphones, MessageCircle, MonitorSmartphone, Workflow } from 'lucide-react'
import { usePreferences } from '../i18n/Preferences'

const icons = [MonitorSmartphone, AppWindow, Cloud, Workflow, Headphones, MessageCircle]
const bands = [
  'from-violet-600 to-indigo-700',
  'from-cyan-600 to-blue-700',
  'from-sky-500 to-indigo-600',
  'from-amber-500 to-orange-600',
  'from-emerald-600 to-teal-700',
  'from-fuchsia-600 to-violet-700',
]

export default function Services() {
  const { t } = usePreferences()

  return (
    <section id="servicios" className="bg-slate-50 py-20 dark:bg-[#09090f] lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-violet-600 dark:text-violet-300">{t.services.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 dark:text-white sm:text-5xl">{t.services.title}</h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">{t.services.text}</p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((item, index) => {
            const Icon = icons[index] ?? MonitorSmartphone
            return (
              <article key={item.title} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-[#12121a]">
                <div className={`flex h-28 items-end bg-gradient-to-br ${bands[index]} p-5 text-white`}>
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-slate-950 dark:text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{item.text}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
