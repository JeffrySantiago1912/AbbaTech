import type { LucideIcon } from 'lucide-react'
import { ExternalLink, Scissors, Pill, Glasses } from 'lucide-react'

type Project = {
  name: string
  category: string
  description: string
  tags: string[]
  icon: LucideIcon
  gradient: string
  demo: string
  image?: string
}

import farmaciaLaHozImg from '../assets/farmacia-lahoz.png'
import farmaciaMaireniImg from '../assets/farmacia-maireni.png'
import barberProImg from '../assets/barber-pro.png'
import optiluxImg from '../assets/optilux.png'


const projects: Project[] = [
  {
    name: 'Barber Pro',
    category: 'Barbería',
    description: 'Sitio para barbería con servicios, presentación visual del negocio y llamado directo a contacto.',
    tags: ['Peluquería', 'Barbería', 'Servicios'],
    icon: Scissors,
    gradient: 'from-slate-700 via-zinc-700 to-neutral-800',
    demo: 'https://jeffrysantiago1912.github.io/Barber-pro/',
    image: barberProImg,
  },

  {
    name: 'Farmacia Maireni',
    category: 'Farmacia',
    description: 'Página informativa de farmacia con enfoque en productos, confianza de marca y acceso rápido al cliente.',
    tags: ['Medicamentos', 'Salud', 'Farmacia'],
    icon: Pill,
    gradient: 'from-blue-900 via-emerald-600 to-rose-500',
    demo: 'https://jeffrysantiago1912.github.io/Farmacia-Maireni/',
    image: farmaciaMaireniImg,
  },

  {
    name: 'Farmacia Ens. La Hoz',
    category: 'Farmacia',
    description: 'Sitio web para farmacia de confianza en La Romana, ofreciendo servicio 24/7 y una amplia gama de productos de salud.',
    tags: ['Salud', 'Farmacia', '24/7'],
    icon: Pill,
    gradient: 'from-green-600 via-emerald-600 to-teal-700',
    demo: 'https://jeffrysantiago1912.github.io/Farmacia-LaHoz/',
    image: farmaciaLaHozImg,
  },

  {
    name: 'Optilux',
    category: 'Optometría',
    description: 'Servicio de optometría a domicilio que ofrece exámenes de la vista y una selección de monturas premium en la comodidad de tu hogar.',
    tags: ['Salud Visual', 'Optometría', 'Servicio a Domicilio'],
    icon: Glasses,
    gradient: 'from-blue-600 via-sky-500 to-cyan-400',
    demo: 'https://opti-lux.netlify.app/',
    image: optiluxImg,
  },

]

export default function Projects() {
  return (
    <section id="proyectos" className="py-20 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/3 dark:via-violet-950/5 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
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
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <div
              key={project.name}
              className="glass rounded-2xl overflow-hidden group"
            >
              <div className={`h-56 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <project.icon className="w-16 h-16 text-white/70" />
                )}
                <div className="absolute inset-0 bg-black/20" />

                <div className="absolute top-3 right-3 flex gap-2">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center"
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
                  {project.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] bg-slate-100 border border-slate-200 text-slate-600 dark:bg-white/5 dark:border-white/10 dark:text-gray-400 px-2.5 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
