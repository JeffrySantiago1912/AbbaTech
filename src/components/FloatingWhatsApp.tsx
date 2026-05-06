import { MessageCircle } from 'lucide-react'
import { WHATSAPP_LINK } from '../config'

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-14 h-14 bg-[#25d366] rounded-full flex items-center justify-center shadow-[0_4px_24px_rgba(37,211,102,0.55)]"
      >
        <MessageCircle className="w-7 h-7 text-white relative z-10" />
      </a>
    </div>
  )
}
