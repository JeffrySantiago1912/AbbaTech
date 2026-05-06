import type { LucideIcon } from 'lucide-react'
import { Layout, MessageCircle, Smartphone, Zap, Search, Headphones } from 'lucide-react'

type Service = {
  icon: LucideIcon
  title: string
  description: string
  iconColor: string
  bgColor: string
  borderHover: string
}

const services: Service[] = [
  {
    icon: Layout,
    title: 'Landing Pages Modernas',
    description: 'Diseños únicos, atractivos y personalizados que capturan la atención y convierten visitantes en clientes desde el primer segundo.',
    iconColor: 'text-violet-500 dark:text-violet-400',
    bgColor: 'bg-violet-500/10',
    borderHover: 'hover:border-violet-400/40 dark:hover:border-violet-500/30',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp Integrado',
    description: 'Botón flotante, links directos y mensajes pre-configurados. Tus clientes te contactan en 1 clic, sin barreras.',
    iconColor: 'text-green-500 dark:text-green-400',
    bgColor: 'bg-green-500/10',
    borderHover: 'hover:border-green-400/40 dark:hover:border-green-500/30',
  },
  {
    icon: Smartphone,
    title: 'Diseño Responsivo',
    description: 'Perfecta en móvil, tablet y desktop. Más del 70% de los usuarios navegan desde su teléfono — los atrapamos a todos.',
    iconColor: 'text-cyan-500 dark:text-cyan-400',
    bgColor: 'bg-cyan-500/10',
    borderHover: 'hover:border-cyan-400/40 dark:hover:border-cyan-500/30',
  },
  {
    icon: Zap,
    title: 'Ultra Rápidas',
    description: 'Tiempos de carga mínimos para mejor experiencia de usuario y mejor posición en Google.',
    iconColor: 'text-yellow-500 dark:text-yellow-400',
    bgColor: 'bg-yellow-500/10',
    borderHover: 'hover:border-yellow-400/40 dark:hover:border-yellow-500/30',
  },
  {
    icon: Search,
    title: 'SEO Optimizado',
    description: 'Estructura técnica y contenido optimizado para que Google te encuentre fácilmente y tus clientes también.',
    iconColor: 'text-pink-500 dark:text-pink-400',
    bgColor: 'bg-pink-500/10',
    borderHover: 'hover:border-pink-400/40 dark:hover:border-pink-500/30',
  },
  {
    icon: Headphones,
    title: 'Soporte Post-entrega',
    description: 'No desaparecemos después de entregar. Actualizaciones, correcciones y soporte técnico incluido en cada proyecto.',
    iconColor: 'text-indigo-500 dark:text-indigo-400',
    bgColor: 'bg-indigo-500/10',
    borderHover: 'hover:border-indigo-400/40 dark:hover:border-indigo-500/30',
  },
]

export default function Services() {
  return (
    <section id="servicios" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-violet-600 dark:text-violet-400 font-semibold text-sm uppercase tracking-widest mb-4 block">
            Lo que hacemos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-5 tracking-tight">
            Todo lo que tu negocio{' '}
            <span className="text-gradient">necesita</span>
          </h2>
          <p className="text-slate-600 dark:text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Desde el concepto hasta el lanzamiento, entregamos soluciones web completas, rápidas y de alto impacto para tu negocio.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <div
              key={service.title}
              className={`glass rounded-2xl p-6 ${service.borderHover} cursor-default`}
            >
              <div className={`w-12 h-12 ${service.bgColor} rounded-xl flex items-center justify-center mb-4`}>
                <service.icon className={`w-6 h-6 ${service.iconColor}`} />
              </div>
              <h3 className="text-slate-900 dark:text-white font-bold text-lg mb-2">{service.title}</h3>
              <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
