import { usePreferences } from '../i18n/Preferences'

export default function WhyUs() {
  const { t } = usePreferences()

  return (
    <section id="nosotros" className="bg-slate-50 py-20 dark:bg-[#09090f] lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-violet-600 dark:text-violet-300">{t.about.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 dark:text-white sm:text-5xl">{t.about.title}</h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-300">{t.about.text}</p>
        </div>
        <ol className="divide-y divide-slate-200 rounded-3xl border border-slate-200 bg-white dark:divide-white/10 dark:border-white/10 dark:bg-[#12121a]">
          {t.about.points.map((point, index) => (
            <li key={point.title} className="p-6">
              <p className="text-sm font-black text-violet-600 dark:text-cyan-300">0{index + 1}</p>
              <h3 className="mt-2 text-lg font-semibold text-slate-950 dark:text-white">{point.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{point.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
