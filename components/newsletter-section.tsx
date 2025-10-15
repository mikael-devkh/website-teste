"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Download, CheckCircle2 } from "lucide-react"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Newsletter signup:", email)
    setIsSubmitted(true)
    setEmail("")
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <section className="py-32 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#8BC34A] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#8BC34A] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#8BC34A]/20 rounded-full mb-6">
              <Download className="h-8 w-8 text-[#8BC34A]" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 text-balance">
              Baixe Nosso Guia Gratuito
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto text-pretty">
              Receba o <span className="text-[#8BC34A] font-semibold">Guia Completo de Boas Práticas em TI</span> e
              fique por dentro das últimas tendências e estratégias para otimizar sua infraestrutura tecnológica.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-[#8BC34A] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-white mb-1">Checklist de Segurança</h3>
                  <p className="text-sm text-gray-300">Proteja sua empresa contra ameaças</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-[#8BC34A] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-white mb-1">Otimização de Custos</h3>
                  <p className="text-sm text-gray-300">Reduza gastos com TI em até 40%</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-[#8BC34A] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-white mb-1">Melhores Práticas</h3>
                  <p className="text-sm text-gray-300">Estratégias comprovadas do mercado</p>
                </div>
              </div>
            </div>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    type="email"
                    placeholder="Seu melhor e-mail corporativo"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="pl-12 h-14 bg-white border-white/20 text-gray-900 placeholder:text-gray-500"
                  />
                </div>
                <Button
                  type="submit"
                  className="h-14 px-8 bg-[#8BC34A] hover:bg-[#7CB342] text-white font-semibold whitespace-nowrap"
                >
                  Baixar Guia Grátis
                </Button>
              </form>
            ) : (
              <div className="bg-[#8BC34A]/20 border border-[#8BC34A] rounded-lg p-4 text-center">
                <CheckCircle2 className="h-8 w-8 text-[#8BC34A] mx-auto mb-2" />
                <p className="text-white font-semibold">Obrigado! Verifique seu e-mail.</p>
                <p className="text-sm text-gray-300 mt-1">O guia foi enviado para sua caixa de entrada.</p>
              </div>
            )}

            <p className="text-xs text-gray-400 text-center mt-4">
              Ao se inscrever, você concorda em receber comunicações da WT Tecnologia. Sem spam, prometemos!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
