import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { usePreferences } from '../i18n/Preferences'

export default function Faq() {
  const { t } = usePreferences()
  const [open, setOpen] = useState(0)

  return (
    <section id="preguntas" className="bg-white py-20 dark:bg-[#0c0c14] lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.7fr_1.3fr]">
        <h2 className="text-3xl font-black tracking-tight text-slate-950 dark:text-white sm:text-4xl">{t.faq.title}</h2>
        <div className="space-y-3">
          {t.faq.items.map((item, index) => {
            const isOpen = open === index
            return (
              <div key={item.q} className="rounded-2xl border border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-[#12121a]">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-slate-950 dark:text-white"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : index)}
                >
                  {item.q}
                  <ChevronDown className={`h-4 w-4 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                </button>
                {isOpen && <p className="px-5 pb-5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{item.a}</p>}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
