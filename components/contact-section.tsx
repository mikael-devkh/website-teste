"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { MapPin, Phone, Mail } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    machines: "",
    service: "",
    whatsapp: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Chamado aberto com sucesso! Entraremos em contato em breve.")
    setFormData({
      name: "",
      email: "",
      company: "",
      machines: "",
      service: "",
      whatsapp: "",
      message: "",
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleServiceChange = (value: string) => {
    setFormData({
      ...formData,
      service: value,
    })
  }

  return (
    <section id="contato" className="py-20 sm:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Abertura de Chamado
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto text-pretty">
            Abra seu chamado e preencha o formulário abaixo conforme as informações necessárias.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 max-w-6xl mx-auto">
          <Card className="border-border bg-card">
            <CardContent className="p-6 sm:p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Abra seu chamado.</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Nome</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Nome"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Corporativo</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="exemplo@corpo.com"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="company">Nome da Empresa</Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Empresa Ltda."
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="machines">Quantidade de máquinas para atender</Label>
                  <Input
                    id="machines"
                    name="machines"
                    type="number"
                    required
                    value={formData.machines}
                    onChange={handleChange}
                    placeholder="0"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="service-options" id="service-options-label" className="mb-3 block">
                    Serviços de interesse:
                  </Label>
                  <RadioGroup
                    id="service-options"
                    aria-labelledby="service-options-label"
                    value={formData.service}
                    onValueChange={handleServiceChange}
                    className="space-y-3"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="remoto" id="remoto" />
                      <Label htmlFor="remoto" className="font-normal cursor-pointer">
                        Suporte Remoto Mensal
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="loco" id="loco" />
                      <Label htmlFor="loco" className="font-normal cursor-pointer">
                        Suporte in Loco Mensal
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="pontual" id="pontual" />
                      <Label htmlFor="pontual" className="font-normal cursor-pointer">
                        Serviço Pontual
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label htmlFor="whatsapp">Contato WhatsApp:</Label>
                  <Input
                    id="whatsapp"
                    name="whatsapp"
                    type="tel"
                    required
                    value={formData.whatsapp}
                    onChange={handleChange}
                    placeholder="(11) 99999-9999"
                    className="mt-2"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6 font-semibold"
                >
                  Enviar
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="border-border bg-card hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Endereço</h3>
                  <p className="text-foreground/70">
                    Av. Paulista, 1000 - Conj. 501
                    <br />
                    Bela Vista, São Paulo - SP
                    <br />
                    CEP: 01310-100
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Telefone / WhatsApp</h3>
                  <p className="text-foreground/70">
                    <a href="tel:+551130001000" className="hover:text-primary transition-colors">
                      (11) 3000-1000
                    </a>
                    <br />
                    <a
                      href="https://wa.me/5511999999999"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      (11) 99999-9999
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">E-mail</h3>
                  <p className="text-foreground/70">
                    <a href="mailto:contato@wttecnologia.com.br" className="hover:text-primary transition-colors">
                      contato@wttecnologia.com.br
                    </a>
                    <br />
                    <a href="mailto:suporte@wttecnologia.com.br" className="hover:text-primary transition-colors">
                      suporte@wttecnologia.com.br
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="bg-primary/10 rounded-lg p-6 border border-primary/20">
              <h3 className="font-semibold text-foreground mb-2">Horário de Atendimento</h3>
              <p className="text-foreground/70">
                Segunda a Sexta: 8h às 18h
                <br />
                Sábado: 9h às 13h
                <br />
                <span className="text-primary font-semibold">Suporte 24/7 disponível</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
