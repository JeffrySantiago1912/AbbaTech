import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, Send } from 'lucide-react'
import { WHATSAPP_NUMBER } from '../config'

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
      `Hola AbbaTech!\n\n` +
      `*Nombre:* ${form.name}\n` +
      `*Email:* ${form.email}\n` +
      (form.phone ? `*Telefono:* ${form.phone}\n` : '') +
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
            Contactanos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-5 tracking-tight">
            Listo para{' '}
            <span className="text-gradient">crecer online?</span>
          </h2>
          <p className="text-slate-600 dark:text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Cuentanos tu proyecto y te respondemos en menos de 24 horas con una propuesta personalizada y sin compromiso.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto items-start">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-6 lg:p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-slate-600 dark:text-gray-400 text-xs font-semibold mb-2 block uppercase tracking-wide">
                  Nombre completo
                </label>
                <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Tu nombre" className={inputClass} />
              </div>
              <div>
                <label className="text-slate-600 dark:text-gray-400 text-xs font-semibold mb-2 block uppercase tracking-wide">
                  Correo electronico
                </label>
                <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="tu@correo.com" className={inputClass} />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-slate-600 dark:text-gray-400 text-xs font-semibold mb-2 block uppercase tracking-wide">
                  Telefono / WhatsApp
                </label>
                <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+1 (809) 000-0000" className={inputClass} />
              </div>
              <div>
                <label className="text-slate-600 dark:text-gray-400 text-xs font-semibold mb-2 block uppercase tracking-wide">
                  Servicio de interes
                </label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="w-full bg-white border border-slate-200 text-slate-900 dark:bg-[#141420] dark:border-white/10 dark:text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-violet-500/60 transition-all appearance-none cursor-pointer"
                >
                  <option value="">Seleccionar...</option>
                  <option value="Landing Page Basica">Landing Page Basica</option>
                  <option value="Landing Page Premium">Landing Page Premium</option>
                  <option value="Landing + WhatsApp Bot">Landing + WhatsApp Bot</option>
                  <option value="Rediseno de sitio actual">Rediseno de sitio actual</option>
                  <option value="Consultoria Web">Consultoria Web</option>
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
                placeholder="Cuentanos sobre tu negocio y que necesitas..."
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
          </motion.form>
        </div>
      </div>
    </section>
  )
}
