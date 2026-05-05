import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import { CheckCircle2, Zap, MessageCircle, Palette, Code2, Shield } from 'lucide-react'
import { WHATSAPP_LINK } from '../config'

type Feature = {
  icon: LucideIcon
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: Zap,
    title: 'Entrega en 24–72 horas',
    description: 'Proceso ágil desde la consulta hasta el lanzamiento. Sin esperar semanas.',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp en todos los proyectos',
    description: 'Botón flotante, links directos y mensajes personalizados incluidos de serie.',
  },
  {
    icon: Palette,
    title: 'Diseño 100% personalizado',
    description: 'Nada de templates genéricos. Cada proyecto refleja la identidad única de tu marca.',
  },
  {
    icon: Code2,
    title: 'Código limpio y escalable',
    description: 'React + Vite: velocidad máxima, seguridad y fácil mantenimiento a largo plazo.',
  },
  {
    icon: Shield,
    title: 'Soporte post-entrega incluido',
    description: 'Período de ajustes y soporte técnico para que siempre funcione perfecto.',
  },
  {
    icon: CheckCircle2,
    title: 'Precios justos y transparentes',
    description: 'Sin costos ocultos. Presupuesto claro desde el inicio, con pagos flexibles.',
  },
]

export default function WhyUs() {
  return (
    <section id="nosotros" className="py-20 lg:py-32 relative overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/3 dark:via-cyan-950/8 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-violet-500/5 dark:bg-violet-700/8 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-pink-600 dark:text-pink-400 font-semibold text-sm uppercase tracking-widest mb-4 block">
              ¿Por qué elegirnos?
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tight leading-[1.1]">
              No somos una agencia más.{' '}
              <span className="text-gradient">Somos tu equipo</span>
            </h2>
            <p className="text-slate-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
              En AbbaTech creemos que cada negocio merece una presencia digital poderosa.
              Combinamos diseño de alta calidad con tecnología moderna y precios que cualquier negocio puede pagar.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-bold px-8 py-4 rounded-2xl hover:opacity-90 hover:scale-105 transition-all shadow-lg text-base"
              >
                <MessageCircle className="w-5 h-5" />
                Hablemos de tu proyecto
              </a>

            </div>


          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.09, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="glass rounded-xl p-5 hover:border-slate-300/60 dark:hover:border-white/20 transition-all duration-300"
              >
                <feature.icon className="w-5 h-5 text-violet-500 dark:text-violet-400 mb-3" />
                <h4 className="text-slate-900 dark:text-white font-semibold text-sm mb-1.5">{feature.title}</h4>
                <p className="text-slate-500 dark:text-gray-500 text-xs leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
