import { Button } from "@/components/ui/button"
import { ArrowRight, Headphones, Wrench, Network, Truck } from "lucide-react"
import Image from "next/image"

const services = [
  {
    icon: Headphones,
    title: "Service Desk",
  },
  {
    icon: Wrench,
    title: "Field Service",
  },
  {
    icon: Network,
    title: "Instalação de infraestrutura",
  },
  {
    icon: Truck,
    title: "Desmobilizações de Loja",
  },
]

const stats = [
  {
    value: "30K+",
    label: "Projetos Concluídos",
  },
  {
    value: "2K+",
    label: "Clientes Satisfeitos",
  },
  {
    value: "4.8",
    label: "Reviews",
  },
]

export function AboutSection() {
  return (
    <section id="sobre" className="py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Image and Services */}
          <div className="relative">
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/technical-support-team-working-on-computers-and-se.jpg"
                alt="Equipe técnica WT trabalhando"
                fill
                className="object-cover"
              />
            </div>

            {/* Services Box */}
            <div className="absolute bottom-0 left-0 right-0 lg:right-auto lg:w-[280px] bg-gray-900/95 backdrop-blur-sm rounded-t-2xl lg:rounded-2xl p-6 shadow-2xl">
              <div className="space-y-4">
                {services.map((service, index) => {
                  const Icon = service.icon
                  return (
                    <div key={index} className="flex items-center gap-3 text-white group cursor-pointer">
                      <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors">
                        <Icon className="h-5 w-5 text-primary group-hover:text-white transition-colors" />
                      </div>
                      <span className="text-sm font-medium group-hover:text-primary transition-colors">
                        {service.title}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            <div className="mb-4">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Sobre</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance leading-tight">
              Sua empresa não pode parar e nós garantimos que ela continue{" "}
              <span className="text-primary">avançando</span>
            </h2>

            <p className="text-lg text-foreground/70 leading-relaxed mb-8 text-pretty">
              Por isso, somos especialistas em suporte técnico e instalação de infraestrutura completa para pequenos,
              médios e grandes escritórios. Com uma equipe de profissionais capacitada e um BackOffice dedicado,
              garantimos que sua infraestrutura, seus dados e suas equipes estejam sempre operacionais – tudo isso sem
              burocracia, sem complicação e o melhor custo-benefício do mercado. Mais do que um fornecedor, somos um
              parceiro estratégico comprometido em transformar tecnologia em performance, com proximidade,
              responsabilidade e resultados reais.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-foreground/70 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 group shadow-lg shadow-primary/20"
            >
              <a
                href="https://wa.me/5511951095026?text=Olá, vim pela página da WT-Serviços em Tecnologia e gostaria de saber mais dos serviços."
                target="_blank"
                rel="noopener noreferrer"
              >
                Fale com um Especialista
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
