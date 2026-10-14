import { EMAIL, PHONE, WHATSAPP_NUMBER } from '../config'
import { usePreferences } from '../i18n/Preferences'

export default function Footer() {
  const { t } = usePreferences()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200 bg-white dark:border-white/10 dark:bg-[#09090f]">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xl font-black">AbbaTech</p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-slate-500 dark:text-slate-400">{t.footer.blurb}</p>
        </div>
        <div className="space-y-1 text-sm">
          <a className="block" href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <a
            className="block"
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t.contact.greeting)}`}
            target="_blank"
            rel="noreferrer"
          >
            {PHONE}
          </a>
          <a className="block" href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
      </div>
      <p className="border-t border-slate-200 px-4 py-4 text-center text-xs text-slate-500 dark:border-white/10">
        © {year} AbbaTech. {t.footer.rights}
      </p>
    </footer>
  )
}
