import { ArrowRight, MessageCircle, Sparkles, Zap } from 'lucide-react'
import { WHATSAPP_LINK } from '../config'

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid">
      {/* Gradient orbs — more subtle in light mode */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-violet-500/10 dark:bg-violet-700/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-400/8 dark:bg-cyan-500/12 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-pink-500/6 dark:bg-pink-700/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-36">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          <div className="text-center lg:text-left">
            <div>
              <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm text-violet-600 dark:text-violet-300 font-semibold mb-7">
                <Sparkles className="w-4 h-4 text-yellow-500 dark:text-yellow-400" />
                Diseño web de alto impacto
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white leading-[1.04] mb-6 tracking-tight">
              Páginas Web que{' '}
              <span className="text-gradient block sm:inline">
                Venden 24/7
              </span>
            </h1>

            <p className="text-slate-600 dark:text-gray-400 text-lg lg:text-xl max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed">
              Diseñamos landing pages modernas, ultra rápidas y con{' '}
              <span className="text-slate-900 dark:text-white font-semibold">WhatsApp integrado</span>{' '}
              para que tus clientes te contacten al instante y tu negocio nunca deje de crecer.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2.5 bg-[#25d366] hover:bg-[#20bd5a] text-white font-bold px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105 text-base shadow-[0_0_30px_rgba(37,211,102,0.3)] hover:shadow-[0_0_40px_rgba(37,211,102,0.5)]"
              >
                <MessageCircle className="w-5 h-5" />
                Cotiza con nosotros
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
            <div className="relative">
              <div className="glass rounded-2xl overflow-hidden glow-purple">
                <div className="bg-slate-100/80 dark:bg-white/5 border-b border-slate-200/80 dark:border-white/10 px-4 py-3 flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 bg-slate-200/60 dark:bg-white/5 rounded-full px-4 py-1.5 text-slate-400 dark:text-gray-500 text-xs font-mono">
                    tunegocio.com
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-br from-violet-950/80 to-black min-h-[340px]">
                  <div className="mb-5">
                    <div className="h-2.5 w-20 bg-violet-400/50 rounded-full mb-3" />
                    <div className="h-5 w-3/4 bg-gradient-to-r from-violet-400 to-cyan-400 rounded-full mb-2" />
                    <div className="h-5 w-1/2 bg-gradient-to-r from-pink-400 to-violet-400 rounded-full mb-4" />
                    <div className="h-2 w-full bg-white/10 rounded-full mb-1.5" />
                    <div className="h-2 w-5/6 bg-white/10 rounded-full mb-1.5" />
                    <div className="h-2 w-4/6 bg-white/8 rounded-full mb-5" />
                    <div className="flex gap-3">
                      <div className="h-9 w-36 bg-gradient-to-r from-violet-600 to-cyan-500 rounded-xl flex items-center justify-center">
                        <span className="text-white text-[10px] font-bold">Contáctanos ahora</span>
                      </div>
                      <div className="h-9 w-24 bg-white/8 border border-white/15 rounded-xl flex items-center justify-center">
                        <span className="text-white/60 text-[10px]">Ver más</span>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {['Diseño', 'Rápido', 'SEO'].map((s) => (
                      <div key={s} className="bg-white/5 border border-white/8 rounded-xl p-3 text-center">
                        <div className="w-5 h-5 bg-violet-500/40 rounded-md mx-auto mb-1.5" />
                        <div className="text-white/70 text-[10px] font-medium">{s}</div>
                      </div>
                    ))}
                  </div>
                  <div className="bg-white/4 border border-white/8 rounded-xl p-3 flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-cyan-500 to-violet-500 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="h-1.5 w-2/3 bg-white/20 rounded-full mb-1.5" />
                      <div className="flex gap-0.5">
                        {Array.from({ length: 5 }, (_, i) => (
                          <span key={i} className="text-yellow-400 text-[8px]">★</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-5 -right-5 bg-[#25d366] text-white px-4 py-2.5 rounded-2xl flex items-center gap-2 shadow-[0_8px_32px_rgba(37,211,102,0.45)]">
                <MessageCircle className="w-4 h-4" />
                <span className="text-xs font-bold">WhatsApp incluido</span>
              </div>

              <div className="absolute -top-5 -left-5 glass px-4 py-2.5 rounded-2xl">
                <div className="text-slate-500 dark:text-gray-500 text-[10px] mb-0.5">Performance</div>
                <div className="text-slate-900 dark:text-white font-black text-sm flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-yellow-500" /> 99/100
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--bg-page)] to-transparent pointer-events-none" />
    </section>
  )
}
