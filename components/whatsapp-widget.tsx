"use client"

import { MessageCircle, X } from "lucide-react"
import { useState } from "react"

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const whatsappNumber = "5511951095026"
  const defaultMessage = "Olá, vim pela página da WT Serviços em Tecnologia e gostaria de saber mais dos serviços."

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`
    window.open(url, "_blank")
  }

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {isOpen && (
          <div className="bg-white rounded-lg shadow-2xl p-4 max-w-xs animate-in slide-in-from-bottom-5 duration-300">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-[#8BC34A] rounded-full flex items-center justify-center">
                  <MessageCircle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-gray-900">WT Tecnologia</h4>
                  <p className="text-xs text-gray-500">Online agora</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Fechar"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <p className="text-sm text-gray-600 mb-3">Olá! Como podemos ajudar você hoje?</p>
            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-[#8BC34A] hover:bg-[#7CB342] text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm"
            >
              Iniciar Conversa
            </button>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-[#8BC34A] hover:bg-[#7CB342] text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 group animate-pulse hover:animate-none"
          aria-label="Abrir WhatsApp"
        >
          <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
        </button>
      </div>
    </>
  )
}
