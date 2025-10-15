"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { FileText, CheckCircle2 } from "lucide-react"

export function QuoteFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    employees: "",
    services: [] as string[],
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const serviceOptions = [
    { id: "service-desk", label: "Service Desk (Suporte Remoto)" },
    { id: "field-service", label: "Field Service (Suporte Presencial)" },
    { id: "infrastructure", label: "Infraestrutura de TI" },
    { id: "rollout-imac", label: "Rollout e IMAC (Implantações em escala)" },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Quote form submitted:", formData)

    // Criar mensagem para WhatsApp
    const message = `Olá! Gostaria de solicitar um orçamento:
    
Nome: ${formData.name}
Empresa: ${formData.company}
Email: ${formData.email}
Telefone: ${formData.phone}
Número de Colaboradores: ${formData.employees}
Serviços de Interesse: ${formData.services.join(", ")}
Mensagem: ${formData.message}`

    const whatsappUrl = `https://wa.me/5511951095026?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")

    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        employees: "",
        services: [],
        message: "",
      })
    }, 3000)
  }

  const handleServiceToggle = (serviceId: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter((s) => s !== serviceId)
        : [...prev.services, serviceId],
    }))
  }

  return (
    <section id="orcamento" className="py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#8BC34A]/10 rounded-full mb-6">
            <FileText className="h-8 w-8 text-[#8BC34A]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-balance">
            Solicite um Orçamento Personalizado
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-pretty">
            Preencha o formulário abaixo e nossa equipe entrará em contato com uma proposta sob medida para sua empresa
          </p>
        </div>

        <Card className="max-w-3xl mx-auto border-gray-200 shadow-xl">
          <CardContent className="p-8 md:p-12">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Nome Completo *</Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="João Silva"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="company">Empresa *</Label>
                    <Input
                      id="company"
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Empresa Ltda."
                      className="mt-2"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email">E-mail Corporativo *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="joao@empresa.com.br"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Telefone / WhatsApp *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(11) 99999-9999"
                      className="mt-2"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="employees">Número de Colaboradores *</Label>
                  <Input
                    id="employees"
                    type="text"
                    required
                    value={formData.employees}
                    onChange={(e) => setFormData({ ...formData, employees: e.target.value })}
                    placeholder="Ex: 50-100 colaboradores"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label className="mb-3 block">Serviços de Interesse * (selecione um ou mais)</Label>
                  <div className="space-y-3 bg-gray-50 p-4 rounded-lg">
                    {serviceOptions.map((service) => (
                      <div key={service.id} className="flex items-center space-x-3">
                        <Checkbox
                          id={service.id}
                          checked={formData.services.includes(service.id)}
                          onCheckedChange={() => handleServiceToggle(service.id)}
                        />
                        <Label htmlFor={service.id} className="font-normal cursor-pointer">
                          {service.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Conte-nos mais sobre suas necessidades</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Descreva brevemente o que sua empresa precisa..."
                    className="mt-2 min-h-32"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#8BC34A] hover:bg-[#7CB342] text-white text-lg py-6 font-semibold"
                  disabled={formData.services.length === 0}
                >
                  Solicitar Orçamento via WhatsApp
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  Ao enviar, você será redirecionado para o WhatsApp com suas informações preenchidas
                </p>
              </form>
            ) : (
              <div className="text-center py-12">
                <CheckCircle2 className="h-16 w-16 text-[#8BC34A] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Solicitação Enviada!</h3>
                <p className="text-gray-600">Você será redirecionado para o WhatsApp em instantes...</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
