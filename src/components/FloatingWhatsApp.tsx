import { MessageCircle } from 'lucide-react'
import { WHATSAPP_NUMBER } from '../config'
import { usePreferences } from '../i18n/Preferences'

export default function FloatingWhatsApp() {
  const { t } = usePreferences()
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t.contact.greeting)}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-5 right-5 z-40 grid size-14 place-items-center rounded-full bg-[#128C7E] text-white shadow-lg"
    >
      <MessageCircle className="h-7 w-7" aria-hidden="true" />
    </a>
  )
}
