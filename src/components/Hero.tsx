import { ArrowRight, Cloud, Headphones, MessageCircle, MonitorSmartphone, Workflow } from 'lucide-react'
import { WHATSAPP_LINK } from '../config'

const offer = [
  { icon: MonitorSmartphone, title: 'Soluciones web y apps', text: 'Sitios y aplicaciones que el negocio usa de verdad.' },
  { icon: Cloud, title: 'Cloud', text: 'Publicación, entornos y operación en la nube.' },
  { icon: Workflow, title: 'Automatización', text: 'WhatsApp, datos y tareas que dejan de hacerse a mano.' },
  { icon: Headphones, title: 'Soporte', text: 'Ajustes y acompañamiento después del lanzamiento.' },
] as const

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid">
      {/* Gradient orbs — more subtle in light mode */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-violet-500/10 dark:bg-violet-700/20 rounded-full blur-[140px] pointer-events-none hidden md:block" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-400/8 dark:bg-cyan-500/12 rounded-full blur-[110px] pointer-events-none hidden md:block" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-pink-500/6 dark:bg-pink-700/10 rounded-full blur-[100px] pointer-events-none hidden md:block" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-36">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          <div className="text-center lg:text-left">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white leading-[1.04] mb-6 tracking-tight">
              Soluciones{' '}
              <span className="text-gradient block sm:inline">tecnológicas</span>{' '}
              para operar tu negocio
            </h1>

            <p className="text-slate-600 dark:text-gray-400 text-lg lg:text-xl max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed">
              Construimos soluciones web, aplicaciones, cloud, automatización y soporte.
              Una página puede ser el inicio. El trabajo sigue hasta el sistema que el equipo usa cada día.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 bg-[#25d366] text-white font-bold px-8 py-4 rounded-2xl text-base shadow-[0_0_30px_rgba(37,211,102,0.3)]"
              >
                <MessageCircle className="w-5 h-5" />
                Cotiza con nosotros
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="mt-10 flex items-center gap-5 justify-center lg:justify-start">
              <div className="flex -space-x-2.5">
                {['#8b5cf6', '#06b6d4', '#ec4899', '#10b981'].map((color, i) => (
                  <div
                    key={color}
                    className="w-9 h-9 rounded-full border-2 border-white dark:border-[#09090f] flex items-center justify-center text-white text-xs font-black"
                    style={{ backgroundColor: color }}
                  >
                    {(['A', 'B', 'C', 'D'] as const)[i]}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5 mb-0.5">
                  {Array.from({ length: 5 }, (_, i) => (
                    <span key={i} className="text-yellow-500 text-sm">★</span>
                  ))}
                </div>
                <p className="text-slate-500 dark:text-gray-500 text-sm">
                  <span className="text-slate-900 dark:text-white font-semibold">50+ clientes</span> confían en nosotros
                </p>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="glass rounded-2xl p-3">
              <ul className="grid gap-3">
                {offer.map((item) => (
                  <li key={item.title} className="flex gap-4 rounded-xl border border-slate-200/80 bg-white/70 p-4 dark:border-white/10 dark:bg-white/5">
                    <item.icon className="mt-0.5 h-5 w-5 shrink-0 text-violet-600 dark:text-violet-300" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white">{item.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-gray-400">{item.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--bg-page)] to-transparent pointer-events-none" />
    </section>
  )
}
