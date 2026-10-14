import type { LucideIcon } from 'lucide-react'
import { AppWindow, Cloud, Headphones, MessageCircle, MonitorSmartphone, Workflow } from 'lucide-react'

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
    icon: MonitorSmartphone,
    title: 'Soluciones web',
    description: 'Sitios de negocio y productos web con la información, el contacto y el recorrido que el cliente necesita.',
    iconColor: 'text-violet-500 dark:text-violet-400',
    bgColor: 'bg-violet-500/10',
    borderHover: 'hover:border-violet-400/40 dark:hover:border-violet-500/30',
  },
  {
    icon: AppWindow,
    title: 'Aplicaciones',
    description: 'Herramientas para citas, clientes, reportes y la operación diaria, más allá de una página de presentación.',
    iconColor: 'text-cyan-500 dark:text-cyan-400',
    bgColor: 'bg-cyan-500/10',
    borderHover: 'hover:border-cyan-400/40 dark:hover:border-cyan-500/30',
  },
  {
    icon: Cloud,
    title: 'Cloud',
    description: 'Publicación, entornos y despliegue para que el producto quede en línea y se pueda seguir operando.',
    iconColor: 'text-sky-500 dark:text-sky-400',
    bgColor: 'bg-sky-500/10',
    borderHover: 'hover:border-sky-400/40 dark:hover:border-sky-500/30',
  },
  {
    icon: Workflow,
    title: 'Automatización',
    description: 'WhatsApp, datos y tareas repetidas conectadas para que el equipo deje de copiar información a mano.',
    iconColor: 'text-yellow-500 dark:text-yellow-400',
    bgColor: 'bg-yellow-500/10',
    borderHover: 'hover:border-yellow-400/40 dark:hover:border-yellow-500/30',
  },
  {
    icon: MessageCircle,
    title: 'Integraciones',
    description: 'Canales de contacto, APIs y herramientas que el negocio ya usa, unidas al sitio o a la aplicación.',
    iconColor: 'text-green-500 dark:text-green-400',
    bgColor: 'bg-green-500/10',
    borderHover: 'hover:border-green-400/40 dark:hover:border-green-500/30',
  },
  {
    icon: Headphones,
    title: 'Soporte',
    description: 'Correcciones, contenido nuevo y acompañamiento después de entregar. El lanzamiento no cierra la relación.',
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
            Web, aplicaciones, cloud, automatización, integraciones y soporte. El alcance se define con el negocio, no se reduce a una landing.
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
