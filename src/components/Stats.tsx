import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import { Rocket, Users, Star, Clock } from 'lucide-react'

type Stat = {
  icon: LucideIcon
  value: string
  label: string
  color: string
}

const stats: Stat[] = [
  { icon: Rocket, value: '50+', label: 'Proyectos completados', color: 'text-violet-500 dark:text-violet-400' },
  { icon: Users, value: '30+', label: 'Clientes satisfechos', color: 'text-cyan-500 dark:text-cyan-400' },
  { icon: Star, value: '98%', label: 'Tasa de satisfacción', color: 'text-yellow-500 dark:text-yellow-400' },
  { icon: Clock, value: '24h', label: 'Entrega express', color: 'text-pink-500 dark:text-pink-400' },
]

export default function Stats() {
  return (
    <section className="py-10 border-y border-slate-200/80 dark:border-white/[0.05] bg-slate-50/50 dark:bg-white/[0.01] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center py-4"
            >
              <stat.icon className={`w-6 h-6 ${stat.color} mx-auto mb-2.5`} />
              <div className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight">{stat.value}</div>
              <div className="text-slate-500 dark:text-gray-500 text-sm mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
