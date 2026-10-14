import { useState, type FormEvent } from 'react'
import { EMAIL, PHONE, WHATSAPP_NUMBER } from '../config'
import { usePreferences } from '../i18n/Preferences'

export default function Contact() {
  const { t } = usePreferences()
  const [service, setService] = useState('')

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const selected = t.services.items.find((item) => item.title === service)
    const serviceLabel = selected?.title ?? (service === 'other' ? t.contact.other : '')
    const text = [
      t.contact.greeting,
      '',
      `${t.contact.name}: ${String(data.get('name') ?? '')}`,
      `${t.contact.email}: ${String(data.get('email') ?? '')}`,
      data.get('phone') ? `${t.contact.phone}: ${String(data.get('phone'))}` : '',
      serviceLabel ? `${t.contact.service}: ${serviceLabel}` : '',
      '',
      String(data.get('message') ?? ''),
    ]
      .filter(Boolean)
      .join('\n')
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer')
  }

  const field = 'mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-950 outline-none focus:border-violet-500 dark:border-white/10 dark:bg-[#0c0c14] dark:text-white'

  return (
    <section id="contacto" className="bg-slate-50 py-20 dark:bg-[#09090f] lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-violet-600 dark:text-violet-300">{t.contact.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 dark:text-white sm:text-5xl">{t.contact.title}</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">{t.contact.text}</p>
          <div className="mt-8 space-y-2 text-sm">
            <p className="text-xs uppercase tracking-[0.14em] text-slate-500">{t.contact.direct}</p>
            <a className="block font-medium" href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <a
              className="block font-medium"
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t.contact.greeting)}`}
              target="_blank"
              rel="noreferrer"
            >
              {PHONE}
            </a>
          </div>
        </div>
        <form onSubmit={onSubmit} className="space-y-4 rounded-3xl border border-slate-200 bg-white p-5 sm:p-7 dark:border-white/10 dark:bg-[#12121a]">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm font-medium">
              {t.contact.name}
              <input name="name" required autoComplete="name" placeholder={t.contact.placeholders.name} className={field} />
            </label>
            <label className="text-sm font-medium">
              {t.contact.email}
              <input name="email" type="email" required autoComplete="email" placeholder={t.contact.placeholders.email} className={field} />
            </label>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm font-medium">
              {t.contact.phone}
              <input name="phone" type="tel" autoComplete="tel" placeholder={t.contact.placeholders.phone} className={field} />
            </label>
            <label className="text-sm font-medium">
              {t.contact.service}
              <select value={service} onChange={(event) => setService(event.target.value)} className={field}>
                <option value="">{t.contact.choose}</option>
                {t.services.items.map((item) => (
                  <option key={item.title} value={item.title}>{item.title}</option>
                ))}
                <option value="other">{t.contact.other}</option>
              </select>
            </label>
          </div>
          <label className="block text-sm font-medium">
            {t.contact.message}
            <textarea name="message" required rows={5} placeholder={t.contact.placeholders.message} className={`${field} resize-y`} />
          </label>
          <button type="submit" className="rounded-full bg-[#128C7E] px-5 py-3 text-sm font-semibold text-white">
            {t.contact.send}
          </button>
        </form>
      </div>
    </section>
  )
}
