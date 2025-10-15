"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { faqData } from "@/lib/faq-data"

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const categories = Array.from(new Set(faqData.map((item) => item.category)))

  return (
    <section className="py-32 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-balance">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-pretty">
            Tire suas dúvidas sobre nossos serviços e como podemos ajudar sua empresa
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {categories.map((category) => (
            <div key={category} className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-primary rounded-full" />
                {category}
              </h3>
              <div className="space-y-3">
                {faqData
                  .filter((item) => item.category === category)
                  .map((item, index) => {
                    const globalIndex = faqData.indexOf(item)
                    const isOpen = openIndex === globalIndex

                    return (
                      <div
                        key={index}
                        className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
                      >
                        <button
                          onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                        >
                          <span className="font-semibold text-gray-900">{item.question}</span>
                          <ChevronDown
                            className={cn(
                              "h-5 w-5 text-primary flex-shrink-0 transition-transform duration-300",
                              isOpen && "rotate-180",
                            )}
                          />
                        </button>
                        <div
                          className={cn("overflow-hidden transition-all duration-300", isOpen ? "max-h-96" : "max-h-0")}
                        >
                          <div className="px-6 pb-4 text-gray-600 leading-relaxed">{item.answer}</div>
                        </div>
                      </div>
                    )
                  })}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Não encontrou a resposta que procurava?</p>
          <a
            href="https://wa.me/5511951095026?text=Olá, tenho uma dúvida sobre os serviços da WT"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Fale Conosco pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
