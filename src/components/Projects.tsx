import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import { Github, ExternalLink, Utensils, Heart, Scale, Dumbbell, ShoppingBag, Building2 } from 'lucide-react'

type Project = {
  name: string
  category: string
  description: string
  tech: string[]
  icon: LucideIcon
  gradient: string
  github: string
  demo: string
}

const projects: Project[] = [
  {
    name: 'RestoPro',
    category: 'Restaurante',
    description: 'Landing page para restaurante con menú digital interactivo, galería de platos y reservas por WhatsApp.',
    tech: ['React', 'Tailwind', 'WhatsApp'],
    icon: Utensils,
    gradient: 'from-orange-600 via-red-600 to-rose-700',
    github: '#',
    demo: '#',
  },
  {
    name: 'MedCenter',
    category: 'Clínica Médica',
    description: 'Sitio profesional para clínica con listado de servicios médicos, galería y citas por WhatsApp.',
    tech: ['React', 'Vite', 'WhatsApp'],
    icon: Heart,
    gradient: 'from-blue-600 via-cyan-600 to-teal-600',
    github: '#',
    demo: '#',
  },
  {
    name: 'LegalEdge',
    category: 'Bufete de Abogados',
    description: 'Página corporativa elegante con áreas de práctica, equipo legal y consultas iniciales por WhatsApp.',
    tech: ['React', 'Tailwind', 'SEO'],
    icon: Scale,
    gradient: 'from-slate-600 via-gray-600 to-zinc-700',
    github: '#',
    demo: '#',
  },
  {
    name: 'FitZone',
    category: 'Gimnasio & Fitness',
    description: 'Landing dinámica con planes de entrenamiento, horarios de clases y registro express vía WhatsApp.',
    tech: ['React', 'Framer Motion', 'WhatsApp'],
    icon: Dumbbell,
    gradient: 'from-violet-600 via-purple-600 to-indigo-700',
    github: '#',
    demo: '#',
  },
  {
    name: 'ShopNow',
    category: 'Tienda Online',
    description: 'Catálogo de productos visual con descripciones detalladas y pedidos directos por WhatsApp.',
    tech: ['React', 'Tailwind', 'WhatsApp API'],
    icon: ShoppingBag,
    gradient: 'from-pink-600 via-rose-600 to-red-600',
    github: '#',
    demo: '#',
  },
  {
    name: 'HotelSuite',
    category: 'Hotel Boutique',
    description: 'Landing page de lujo con galería de habitaciones, amenidades premium y reservas directas.',
    tech: ['React', 'Vite', 'WhatsApp'],
    icon: Building2,
    gradient: 'from-amber-600 via-yellow-600 to-orange-600',
    github: '#',
    demo: '#',
  },
]

export default function Projects() {
  return (
    <section id="proyectos" className="py-20 lg:py-32 relative transition-colors duration-300">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/3 dark:via-violet-950/5 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-600 dark:text-cyan-400 font-semibold text-sm uppercase tracking-widest mb-4 block">
            Portafolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-5 tracking-tight">
            Proyectos que{' '}
            <span className="text-gradient">hablan por sí solos</span>
          </h2>
          <p className="text-slate-600 dark:text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Cada proyecto refleja nuestro compromiso con la calidad y los resultados. ¿Tu negocio es el próximo?
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.09, duration: 0.55 }}
              whileHover={{ y: -6 }}
              className="glass rounded-2xl overflow-hidden hover:border-slate-300/60 dark:hover:border-white/20 transition-all duration-300 group"
            >
              <div className={`h-44 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                <project.icon className="w-16 h-16 text-white/70" />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a
                    href={project.github}
                    className="w-8 h-8 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                    title="Ver código"
                  >
                    <Github className="w-3.5 h-3.5 text-white" />
                  </a>
                  <a
                    href={project.demo}
                    className="w-8 h-8 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                    title="Ver demo"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-white" />
                  </a>
                </div>
                <div className="absolute bottom-3 left-3">
                  <span className="text-[10px] text-white/70 uppercase tracking-widest font-semibold bg-black/30 backdrop-blur-sm px-2.5 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-slate-900 dark:text-white font-bold text-lg mb-2">{project.name}</h3>
                <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] bg-slate-100 border border-slate-200 text-slate-600 dark:bg-white/5 dark:border-white/10 dark:text-gray-400 px-2.5 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >

        </motion.div>
      </div>
    </section>
  )
}
