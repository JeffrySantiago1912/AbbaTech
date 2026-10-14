import { ExternalLink } from 'lucide-react'
import barberOssImg from '../assets/barbeross.jpg'
import farmaciaLaHozImg from '../assets/farmacia-lahoz.png'
import farmaciaMaireniImg from '../assets/farmacia-maireni.png'
import optiluxImg from '../assets/optilux.png'
import rdIntelligenceImg from '../assets/rd-intelligence.jpg'
import { usePreferences } from '../i18n/Preferences'

const media: Record<string, { image: string; demo: string }> = {
  rd: { image: rdIntelligenceImg, demo: 'https://rdintelligence.netlify.app/' },
  optilux: { image: optiluxImg, demo: 'https://opti-lux.netlify.app/' },
  barber: { image: barberOssImg, demo: 'https://barbeross.netlify.app/' },
  maireni: { image: farmaciaMaireniImg, demo: 'https://farmaciamairenisrl.netlify.app' },
  lahoz: { image: farmaciaLaHozImg, demo: 'https://farmacialahoz.netlify.app' },
}

export default function Projects() {
  const { t } = usePreferences()

  return (
    <section id="proyectos" className="bg-white py-20 dark:bg-[#0c0c14] lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-violet-600 dark:text-violet-300">{t.work.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 dark:text-white sm:text-5xl">{t.work.title}</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">{t.work.text}</p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.work.items.map((project) => {
            const item = media[project.id]
            return (
              <article key={project.id} className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-[#12121a]">
                <a href={item.demo} target="_blank" rel="noreferrer" className="relative block h-52 bg-slate-950">
                  <img src={item.image} alt={project.name} className="h-full w-full object-cover object-center" />
                  <span className="absolute bottom-3 left-3 rounded-full bg-black/55 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
                    {project.category}
                  </span>
                  <span className="absolute right-3 top-3 grid size-8 place-items-center rounded-full bg-black/55 text-white">
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                </a>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-slate-950 dark:text-white">{project.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{project.text}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-slate-200 px-2.5 py-1 text-[11px] text-slate-500 dark:border-white/10 dark:text-slate-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
