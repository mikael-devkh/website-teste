import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle, Shield, Clock, Award, Users } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[80vh] md:min-h-screen flex items-center pt-24 pb-16 sm:pt-28 sm:pb-20 overflow-hidden bg-gradient-to-br from-white via-gray-50 to-primary/5"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/it-team-collaboration.png"
          alt="Equipe WT Tecnologia"
          fill
          className="object-cover opacity-10"
          priority
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 mb-6 text-balance leading-tight">
              Com o Apoio Certo, <span className="text-primary">Sua Empresa Salta Mais Alto.</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-12 text-pretty">Suporte que Resolve, Sem Complicação.</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-200 mb-12 sm:mb-16">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 group w-full sm:w-auto shadow-lg shadow-primary/25"
            >
              <a
                href="https://wa.me/5511951095026?text=Olá, vim pela página da WT-Serviços em Tecnologia e gostaria de saber mais dos serviços."
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Fale com um(a) Especialista
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-2 border-primary text-primary hover:bg-primary hover:text-white bg-white w-full sm:w-auto"
            >
              <a href="#solucoes">Conheça nossas Soluções!</a>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up animation-delay-400">
            {[
              {
                icon: Shield,
                title: "SLA Garantido",
                description: "Compromisso com prazos",
              },
              {
                icon: Clock,
                title: "Suporte 24/7",
                description: "Atendimento contínuo",
              },
              {
                icon: Award,
                title: "Equipe Certificada",
                description: "Profissionais qualificados",
              },
              {
                icon: Users,
                title: "Cobertura Nacional",
                description: "Presença em todo Brasil",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1 text-lg">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
