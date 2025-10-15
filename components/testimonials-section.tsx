"use client"

import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Amanda Reis",
    role: "Coordenadora de TI",
    company: "VersaLog Transportes",
    image: "/professional-woman-smiling.png",
    content:
      "Contratar o Service Desk da WT foi uma virada de chave para nossa operação. O suporte de Nível 1 e 2 nos permite resolver rapidamente qualquer problema sem depender de múltiplos fornecedores. A equipe é ágil, atenciosa e realmente entende a urgência que o ambiente corporativo exige.",
  },
  {
    name: "Marcelo Oliveira",
    role: "Diretor de Operações",
    company: "Rede LojasFácil Osasco",
    image: "/professional-man-smiling.png",
    content:
      "A estrutura de Field Service da WT salvou nossa expansão. Eles conseguiram atender várias unidades no Brasil com um padrão técnico excelente. Desde manutenção de CFTV até configuração de PDVs, tudo foi feito com responsabilidade e compromisso com o resultado.",
  },
  {
    name: "Thaís Pimentel",
    role: "Sócia-fundadora",
    company: "UpOffice Coworking",
    image: "/professional-woman-entrepreneur.png",
    content:
      "Montamos toda a infraestrutura do nosso novo escritório com a WT: elétrica, rede, fibra óptica e até o ar-condicionado. Eles foram precisos no projeto e impecáveis na execução. O resultado foi um espaço pronto para crescer, seguro e 100% funcional desde o primeiro dia.",
  },
  {
    name: "Rafael Barreto",
    role: "CEO",
    company: "IntegraSoft Tecnologia",
    image: "/professional-ceo-man.jpg",
    content:
      "Desenvolver um sistema sob medida com a WT foi uma das melhores decisões estratégicas que tomamos. Eles entenderam nossa operação, sugeriram melhorias e entregaram uma plataforma escalável que hoje é o coração da nossa empresa. Superaram nossas expectativas!",
  },
  {
    name: "Juliana Mendes",
    role: "Analista de Suporte",
    company: "Omega Finance",
    image: "/professional-woman-analyst.jpg",
    content:
      "A WT assumiu a manutenção dos nossos equipamentos e reduziu drasticamente o número de falhas que tínhamos. Além disso, o suporte remoto é rápido e humano, com técnicos que falam nossa linguagem e resolvem de verdade. Isso nos dá tranquilidade para focar no que importa.",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(3)

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1)
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2)
      } else {
        setVisibleCount(3)
      }
    }

    updateVisibleCount()
    window.addEventListener("resize", updateVisibleCount)

    return () => window.removeEventListener("resize", updateVisibleCount)
  }, [])

  useEffect(() => {
    setCurrentIndex((prev) => {
      if (prev + visibleCount > testimonials.length) {
        return Math.max(0, testimonials.length - visibleCount)
      }
      return prev
    })
  }, [visibleCount])

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const nextIndex = prev + visibleCount
      return nextIndex >= testimonials.length ? 0 : nextIndex
    })
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      if (prev === 0) {
        return Math.max(0, testimonials.length - visibleCount)
      }
      return Math.max(0, prev - visibleCount)
    })
  }

  const currentTestimonials = testimonials.slice(currentIndex, currentIndex + visibleCount)
  const totalPages = Math.ceil(testimonials.length / visibleCount)
  const currentPage = Math.floor(currentIndex / visibleCount)

  return (
    <section id="depoimentos" className="py-24 sm:py-32 bg-gray-50 relative overflow-hidden">
      <div className="hidden md:block absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-bl-full -mr-48 -mt-48" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            O que <span className="text-primary">Nossos Clientes</span> Estão Falando
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto mb-10 sm:mb-12">
          {currentTestimonials.map((testimonial, index) => (
            <div key={currentIndex + index} className="flex flex-col">
              <Card className="flex-1 bg-gray-900 border-gray-800 relative group hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-6 sm:p-8">
                  <div className="absolute -bottom-3 left-12 w-6 h-6 bg-gray-900 rotate-45 border-r border-b border-gray-800" />

                  <p className="text-white leading-relaxed text-base">{testimonial.content}</p>
                </CardContent>
              </Card>

              <div className="flex items-center gap-4 mt-6 sm:mt-8 ml-4">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={80}
                  height={80}
                  className="rounded-full border-4 border-white shadow-lg"
                />
                <div>
                  <div className="font-bold text-foreground text-lg">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role} na {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-6">
          <Button
            variant="ghost"
            size="icon"
            onClick={prevSlide}
            disabled={totalPages <= 1}
            className="rounded-full hover:bg-primary/10"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * visibleCount)}
                className={`h-3 w-3 rounded-full transition-all duration-300 ${
                  index === currentPage ? "bg-primary w-8" : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Ir para página ${index + 1}`}
              />
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={nextSlide}
            disabled={totalPages <= 1}
            className="rounded-full hover:bg-primary/10"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  )
}
