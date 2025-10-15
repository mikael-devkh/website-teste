import { Card, CardContent } from "@/components/ui/card"
import { Shield, Globe, Award, Users } from "lucide-react"

const benefits = [
  {
    icon: Shield,
    title: "SLA Garantido",
    description:
      "Compromisso com prazos e qualidade. Nossos acordos de nível de serviço garantem que você tenha o suporte quando precisar.",
  },
  {
    icon: Globe,
    title: "Cobertura Nacional",
    description:
      "Atendemos em todo o território brasileiro. Onde sua empresa estiver, nossa equipe está pronta para ajudar.",
  },
  {
    icon: Award,
    title: "Equipe Certificada",
    description:
      "Profissionais qualificados e certificados nas principais tecnologias do mercado, garantindo expertise e qualidade.",
  },
  {
    icon: Users,
    title: "Atendimento Personalizado",
    description:
      "Cada cliente é único. Desenvolvemos soluções sob medida para atender as necessidades específicas do seu negócio.",
  },
]

export function WhyChooseSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Por que escolher a <span className="text-primary">WT?</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Diferenciais que fazem da WT a escolha certa para sua empresa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 border-border bg-card"
              >
                <CardContent className="p-8 flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <Icon className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed">{benefit.description}</p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
