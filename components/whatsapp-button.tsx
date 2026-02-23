"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5511999999999?text=Ola!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Lar%20Acolher."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#20BD5A] hover:scale-110 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <MessageCircle className="h-7 w-7" fill="currentColor" />
    </a>
  )
}
