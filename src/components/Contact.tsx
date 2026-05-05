import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MessageCircle, Send, ArrowRight, Clock } from 'lucide-react'
import { EMAIL, PHONE, WHATSAPP_LINK, WHATSAPP_NUMBER } from '../config'

type ContactFormState = {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

const initialForm: ContactFormState = {
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState<ContactFormState>(initialForm)

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const key = e.target.name as keyof ContactFormState
    const { value } = e.target
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const text =
      `¡Hola AbbaTech! 👋\n\n` +
      `*Nombre:* ${form.name}\n` +
      `*Email:* ${form.email}\n` +
      (form.phone ? `*Teléfono:* ${form.phone}\n` : '') +
      (form.service ? `*Servicio:* ${form.service}\n` : '') +
      `\n*Mensaje:*\n${form.message}`
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank')
  }

  const inputClass =
    'w-full bg-white border border-slate-200 text-slate-900 placeholder-slate-400 ' +
    'dark:bg-white/5 dark:border-white/10 dark:text-white dark:placeholder-gray-600 ' +
    'rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-violet-500/60 transition-all'

  return (
    <section id="contacto" className="py-20 lg:py-32 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-yellow-600 dark:text-yellow-400 font-semibold text-sm uppercase tracking-widest mb-4 block">
            Contáctanos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-5 tracking-tight">
            ¿Listo para{' '}
            <span className="text-gradient">crecer online?</span>
          </h2>
          <p className="text-slate-600 dark:text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Cuéntanos tu proyecto y te respondemos en menos de 24 horas con una propuesta personalizada y sin compromiso.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-5"
          >
            <div className="glass rounded-2xl p-6">
              <h3 className="text-slate-900 dark:text-white font-bold text-xl mb-6">Información de contacto</h3>
              <div className="space-y-5">
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-4 group">
                  <div className="w-11 h-11 bg-violet-500/10 rounded-xl flex items-center justify-center group-hover:bg-violet-500/20 transition-colors flex-shrink-0">
                    <Mail className="w-5 h-5 text-violet-500 dark:text-violet-400" />
                  </div>
                  <div>
                    <div className="text-slate-500 dark:text-gray-500 text-xs mb-0.5">Email</div>
                    <div className="text-slate-900 dark:text-white font-medium text-sm group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors break-all">
                      {EMAIL}
                    </div>
                  </div>
                </a>

                <a href={`tel:${PHONE}`} className="flex items-center gap-4 group">
                  <div className="w-11 h-11 bg-cyan-500/10 rounded-xl flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors flex-shrink-0">
                    <Phone className="w-5 h-5 text-cyan-500 dark:text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-slate-500 dark:text-gray-500 text-xs mb-0.5">Teléfono</div>
                    <div className="text-slate-900 dark:text-white font-medium text-sm group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                      {PHONE}
                    </div>
                  </div>
                </a>

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-11 h-11 bg-green-500/10 rounded-xl flex items-center justify-center group-hover:bg-green-500/20 transition-colors flex-shrink-0">
                    <MessageCircle className="w-5 h-5 text-green-500 dark:text-green-400" />
                  </div>
                  <div>
                    <div className="text-slate-500 dark:text-gray-500 text-xs mb-0.5">WhatsApp</div>
                    <div className="text-slate-900 dark:text-white font-medium text-sm group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                      {PHONE}
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="glass rounded-2xl p-6">
              <div className="flex items-center gap-2.5 mb-3">
                <Clock className="w-4 h-4 text-yellow-500 dark:text-yellow-400" />
                <span className="text-slate-900 dark:text-white font-semibold text-sm">Horario de atención</span>
              </div>
              <p className="text-slate-600 dark:text-gray-500 text-sm leading-relaxed mb-4">
                Disponibles de lunes a sábado de 8AM a 8PM. ¡Respondemos rápido!
              </p>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-green-600 dark:text-green-400 font-semibold text-sm hover:text-green-700 dark:hover:text-green-300 transition-colors"
              >
                Escribir por WhatsApp ahora
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 glass rounded-2xl p-6 lg:p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-slate-600 dark:text-gray-400 text-xs font-semibold mb-2 block uppercase tracking-wide">
                  Nombre completo
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Tu nombre"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="text-slate-600 dark:text-gray-400 text-xs font-semibold mb-2 block uppercase tracking-wide">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="tu@correo.com"
                  className={inputClass}
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-slate-600 dark:text-gray-400 text-xs font-semibold mb-2 block uppercase tracking-wide">
                  Teléfono / WhatsApp
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+1 (809) 000-0000"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="text-slate-600 dark:text-gray-400 text-xs font-semibold mb-2 block uppercase tracking-wide">
                  Servicio de interés
                </label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="w-full bg-white border border-slate-200 text-slate-900 dark:bg-[#141420] dark:border-white/10 dark:text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-violet-500/60 transition-all appearance-none cursor-pointer"
                >
                  <option value="">Seleccionar...</option>
                  <option value="Landing Page Básica">Landing Page Básica</option>
                  <option value="Landing Page Premium">Landing Page Premium</option>
                  <option value="Landing + WhatsApp Bot">Landing + WhatsApp Bot</option>
                  <option value="Rediseño de sitio actual">Rediseño de sitio actual</option>
                  <option value="Consultoría Web">Consultoría Web</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-slate-600 dark:text-gray-400 text-xs font-semibold mb-2 block uppercase tracking-wide">
                Tu mensaje
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Cuéntanos sobre tu negocio, qué necesitas y cualquier detalle relevante..."
                className={`${inputClass} resize-none`}
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2.5 bg-[#25d366] hover:bg-[#20bd5a] text-white font-bold px-8 py-4 rounded-xl transition-all hover:scale-[1.015] text-base shadow-[0_0_24px_rgba(37,211,102,0.3)] hover:shadow-[0_0_36px_rgba(37,211,102,0.5)]"
            >
              <MessageCircle className="w-5 h-5" />
              Enviar por WhatsApp
              <Send className="w-4 h-4 ml-1" />
            </button>

            <p className="text-slate-500 dark:text-gray-600 text-xs text-center leading-relaxed">
              Al hacer clic, se abrirá WhatsApp con tu mensaje listo para enviar. ¡Respondemos en horas!
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
