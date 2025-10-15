"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Headphones, MapPin, Server, Truck, ArrowRight, CheckCircle2, Clock, Users, Zap } from "lucide-react"

const solutions = [
  {
    icon: Headphones,
    title: "Service Desk",
    shortDescription:
      "Oferecemos suporte técnico ágil e eficiente para garantir que o dia a dia da sua empresa não pare.",
    fullDescription:
      "Nossa equipe especializada atua remotamente na resolução de problemas, atendimento de chamados e orientações para os usuários, com foco em performance e satisfação. Oferecemos suporte de Nível 1 e 2, garantindo resolução rápida e eficiente.",
    benefits: [
      "Suporte remoto ágil e eficiente",
      "Atendimento de Nível 1 e 2",
      "Resolução rápida de problemas",
      "Orientação para usuários",
      "Foco em performance e satisfação",
      "Equipe especializada e treinada",
    ],
    image: "/technical-support-team-working-remotely.jpg",
  },
  {
    icon: MapPin,
    title: "Field Service",
    shortDescription: "Levamos o suporte técnico até você com atendimento presencial em todo o Brasil.",
    fullDescription:
      "Nossos profissionais realizam atendimento presencial para manutenção, instalação e resolução de falhas em equipamentos e redes. Com cobertura nacional, garantimos agilidade, qualidade e continuidade das operações da sua empresa.",
    benefits: [
      "Atendimento presencial em todo Brasil",
      "Manutenção preventiva e corretiva",
      "Instalação de equipamentos",
      "Resolução de falhas em redes",
      "Técnicos certificados",
      "Agilidade e qualidade garantidas",
    ],
    image: "/field-technician-installing-network-equipment.jpg",
  },
  {
    icon: Server,
    title: "Infraestrutura",
    shortDescription: "Planejamos e executamos toda a estrutura tecnológica do seu escritório.",
    fullDescription:
      "Oferecemos soluções completas de infraestrutura: cabeamento de rede estruturado, instalação de servidores, roteadores, switches, pontos de energia, organização de racks e climatização. Tudo para entregar um ambiente moderno, funcional e preparado para crescer.",
    benefits: [
      "Cabeamento estruturado",
      "Instalação de servidores e racks",
      "Configuração de redes",
      "Pontos de energia e climatização",
      "Projeto e execução completos",
      "Ambiente preparado para crescimento",
    ],
    image: "/modern-server-room-infrastructure.jpg",
  },
  {
    icon: Truck,
    title: "Desmobilizações de Loja",
    shortDescription:
      "Planejamos e executamos a desmontagem completa de lojas e escritórios, com logística reversa especializada em ativos críticos como impressoras Zebra.",
    fullDescription:
      "Coordenamos cada etapa do encerramento de unidades: inventário dos ativos, desconexão, desmontagem, embalagem, transporte e destinação correta dos equipamentos. Nosso time acompanha toda a operação em campo garantindo padronização, prazos curtos e cuidado especial com dispositivos sensíveis, incluindo impressoras Zebra e periféricos essenciais para o varejo.",
    benefits: [
      "Planejamento e execução ponta a ponta",
      "Inventário, etiquetagem e embalagem segura",
      "Especialistas em impressoras Zebra e periféricos de varejo",
      "Logística reversa com descarte ambientalmente responsável",
      "Equipes presenciais em todo o Brasil",
      "Relatórios de conformidade e checklist fotográfico",
    ],
    image: "/it-support-team-working-computers.jpg",
  },
]

export function SolutionsSection() {
  const [selectedSolution, setSelectedSolution] = useState<number | null>(null)

  return (
    <section id="solucoes" className="py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-balance">
            Nossas <span className="text-primary">Soluções</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-pretty">
            Oferecemos um portfólio completo de serviços para atender todas as necessidades tecnológicas da sua empresa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {solutions.map((solution, index) => {
            const Icon = solution.icon
            return (
              <Card
                key={index}
                className="group relative overflow-hidden hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-3 border-2 border-gray-100 hover:border-primary/30 bg-white cursor-pointer"
                onClick={() => setSelectedSolution(index)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <CardContent className="relative p-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-primary/10">
                    <Icon className="h-10 w-10 text-primary" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
                    {solution.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">{solution.shortDescription}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    <div className="flex items-center gap-1 text-xs text-gray-500 bg-gray-50 px-3 py-1 rounded-full">
                      <Clock className="h-3 w-3" />
                      <span>Rápido</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-gray-500 bg-gray-50 px-3 py-1 rounded-full">
                      <Users className="h-3 w-3" />
                      <span>Especializado</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-gray-500 bg-gray-50 px-3 py-1 rounded-full">
                      <Zap className="h-3 w-3" />
                      <span>Eficiente</span>
                    </div>
                  </div>

                  <Button
                    variant="ghost"
                    className="text-primary hover:text-primary hover:bg-primary/10 p-0 h-auto font-semibold group/btn"
                  >
                    Saiba Mais
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-2 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      <Dialog open={selectedSolution !== null} onOpenChange={() => setSelectedSolution(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedSolution !== null && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center shadow-lg shadow-primary/10">
                    {(() => {
                      const Icon = solutions[selectedSolution].icon
                      return <Icon className="h-8 w-8 text-primary" />
                    })()}
                  </div>
                  <DialogTitle className="text-3xl font-bold text-gray-900">
                    {solutions[selectedSolution].title}
                  </DialogTitle>
                </div>
                <DialogDescription className="text-base text-gray-600 leading-relaxed">
                  {solutions[selectedSolution].fullDescription}
                </DialogDescription>
              </DialogHeader>

              <div className="mt-6">
                <div className="relative mb-6 h-64 w-full overflow-hidden rounded-lg">
                  <Image
                    src={solutions[selectedSolution].image || "/placeholder.svg"}
                    alt={solutions[selectedSolution].title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 768px"
                    priority={false}
                  />
                </div>

                <h4 className="text-xl font-semibold text-gray-900 mb-4">Benefícios e Diferenciais</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {solutions[selectedSolution].benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <Button asChild size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white">
                    <a
                      href={`https://wa.me/5511951095026?text=Olá, vim pela página da WT e gostaria de saber mais sobre ${solutions[selectedSolution].title}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Falar com um Especialista
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
