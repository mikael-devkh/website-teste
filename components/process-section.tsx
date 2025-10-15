import { CheckCircle2, Search, Wrench, ThumbsUp } from "lucide-react"

const steps = [
  {
    icon: CheckCircle2,
    number: "01",
    title: "Abertura de Chamado",
    description: "Você abre um chamado através dos nossos canais de atendimento disponíveis 24/7.",
  },
  {
    icon: Search,
    number: "02",
    title: "Diagnóstico",
    description: "Nossa equipe analisa o problema e identifica a melhor solução rapidamente.",
  },
  {
    icon: Wrench,
    number: "03",
    title: "Atendimento",
    description: "Executamos a solução de forma remota ou presencial, conforme necessário.",
  },
  {
    icon: ThumbsUp,
    number: "04",
    title: "Resolução e Feedback",
    description: "Confirmamos a resolução e coletamos seu feedback para melhoria contínua.",
  },
]

export function ProcessSection() {
  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Como Trabalhamos
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto text-pretty">
            Um processo simples e eficiente para resolver seus problemas de TI
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={index} className="relative group">
                  {/* Connector Line (hidden on mobile, shown on lg+) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-[60%] w-full h-0.5 bg-primary/20 z-0">
                      <div className="h-full bg-primary w-0 group-hover:w-full transition-all duration-500" />
                    </div>
                  )}

                  <div className="relative z-10 text-center">
                    {/* Number Badge */}
                    <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-primary/10 rounded-full mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <Icon className="h-9 w-9 sm:h-10 sm:w-10 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div className="absolute top-0 right-0 w-8 h-8 bg-secondary rounded-full flex items-center justify-center border-2 border-primary">
                      <span className="text-primary font-bold text-sm">{step.number}</span>
                    </div>

                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
