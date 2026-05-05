import { Code2, Mail, Phone, MessageCircle } from 'lucide-react'
import { EMAIL, PHONE, WHATSAPP_LINK } from '../config'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200/80 dark:border-white/[0.06] bg-slate-50/60 dark:bg-transparent transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center">
                <Code2 className="w-4 h-4 text-white" />
              </div>
              <span className="text-slate-900 dark:text-white font-black text-xl tracking-tight">
                Abba<span className="text-gradient-alt">Tech</span>
              </span>
            </div>
            <p className="text-slate-500 dark:text-gray-500 text-sm leading-relaxed mb-5">
              Transformamos tu visión en realidad digital. Landing pages modernas con WhatsApp integrado que generan resultados reales.
            </p>
            <div className="flex gap-2.5" />
          </div>

          <div>
            <h4 className="text-slate-900 dark:text-white font-bold text-sm mb-5">Servicios</h4>
            <ul className="space-y-3">
              {[
                'Landing Pages Modernas',
                'WhatsApp Integrado',
                'Diseño Responsivo',
                'SEO Optimizado',
                'Soporte Técnico',
              ].map((s) => (
                <li key={s}>
                  <a
                    href="#servicios"
                    className="text-slate-500 hover:text-slate-800 dark:text-gray-500 dark:hover:text-gray-300 text-sm transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 dark:text-white font-bold text-sm mb-5">Empresa</h4>
            <ul className="space-y-3">
              {[
                { name: 'Inicio', href: '#inicio' },
                { name: 'Proyectos', href: '#proyectos' },
                { name: '¿Por qué nosotros?', href: '#nosotros' },
                { name: 'Contacto', href: '#contacto' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-500 hover:text-slate-800 dark:text-gray-500 dark:hover:text-gray-300 text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 dark:text-white font-bold text-sm mb-5">Contacto directo</h4>
            <ul className="space-y-4">
              <li>
                <a href={`mailto:${EMAIL}`} className="flex items-start gap-3 group">
                  <Mail className="w-4 h-4 text-violet-500 dark:text-violet-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-500 hover:text-slate-800 dark:text-gray-500 dark:hover:text-gray-300 text-sm transition-colors break-all">
                    {EMAIL}
                  </span>
                </a>
              </li>
              <li>
                <a href={`tel:${PHONE}`} className="flex items-center gap-3 group">
                  <Phone className="w-4 h-4 text-cyan-500 dark:text-cyan-400 flex-shrink-0" />
                  <span className="text-slate-500 hover:text-slate-800 dark:text-gray-500 dark:hover:text-gray-300 text-sm transition-colors">
                    {PHONE}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <MessageCircle className="w-4 h-4 text-green-500 dark:text-green-400 flex-shrink-0" />
                  <span className="text-slate-500 hover:text-green-600 dark:text-gray-500 dark:hover:text-green-400 text-sm transition-colors">
                    WhatsApp disponible
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200/80 dark:border-white/[0.05] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 dark:text-gray-600 text-sm">
            © {year} AbbaTech. Todos los derechos reservados.
          </p>

        </div>
      </div>
    </footer>
  )
}
