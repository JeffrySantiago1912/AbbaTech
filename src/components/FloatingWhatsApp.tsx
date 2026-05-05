import { useState, useEffect } from 'react'
import type { MouseEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, MessageCircle } from 'lucide-react'
import { WHATSAPP_LINK } from '../config'

export default function FloatingWhatsApp() {
  const [showBubble, setShowBubble] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (!dismissed) setShowBubble(true)
    }, 3000)
    return () => window.clearTimeout(timer)
  }, [dismissed])

  const handleDismiss = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setShowBubble(false)
    setDismissed(true)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {showBubble && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.85 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="relative glass rounded-2xl p-4 max-w-[220px]"
          >
            <button
              type="button"
              onClick={handleDismiss}
              className="absolute -top-2 -right-2 w-5 h-5 bg-slate-200 dark:bg-gray-700 hover:bg-slate-300 dark:hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors"
            >
              <X className="w-3 h-3 text-slate-600 dark:text-white" />
            </button>
            <p className="text-slate-900 dark:text-white text-sm font-bold mb-1">¡Hola! 👋</p>
            <p className="text-slate-600 dark:text-gray-400 text-xs leading-relaxed">
              ¿Necesitas una landing page? Te cotizamos gratis en minutos.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block text-center bg-[#25d366] text-white text-xs font-bold py-2 rounded-xl hover:bg-[#20bd5a] transition-colors"
            >
              Escribir ahora →
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: 'spring', stiffness: 220 }}
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.92 }}
        className="relative w-14 h-14 bg-[#25d366] rounded-full flex items-center justify-center shadow-[0_4px_24px_rgba(37,211,102,0.55)] hover:shadow-[0_4px_32px_rgba(37,211,102,0.75)] transition-shadow"
      >
        <span className="absolute inset-0 rounded-full bg-[#25d366] animate-ping opacity-25" />
        <MessageCircle className="w-7 h-7 text-white relative z-10" />
      </motion.a>
    </div>
  )
}
