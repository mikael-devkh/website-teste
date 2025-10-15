"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface FAQItem {
  question: string
  answer: string
  category: string
}

const faqData: FAQItem[] = [
  {
    category: "Service Desk",
    question: "O que está incluído no Service Desk?",
    answer:
      "Nosso Service Desk inclui suporte técnico remoto N1 e N2, atendimento via telefone, e-mail e chat, gestão de chamados com SLA garantido, monitoramento proativo de sistemas, e relatórios mensais de performance. Atendemos desde questões simples de usuários até problemas mais complexos de infraestrutura.",
  },
  {
    category: "Service Desk",
    question: "Qual é o tempo médio de resposta?",
    answer:
      "Nosso SLA garante resposta em até 30 minutos para chamados críticos e até 2 horas para chamados de prioridade normal. Para chamados de baixa prioridade, o tempo de resposta é de até 4 horas. Oferecemos também suporte 24/7 para clientes com planos premium.",
  },
  {
    category: "Field Service",
    question: "Vocês atendem em todo o Brasil?",
    answer:
      "Sim! Temos cobertura nacional com técnicos especializados em todas as regiões do país. Atendemos em mais de 500 cidades, cobrindo os 27 estados brasileiros. Para regiões mais remotas, coordenamos o deslocamento com antecedência para garantir o atendimento no prazo acordado.",
  },
  {
    category: "Field Service",
    question: "Como funciona o agendamento de visitas técnicas?",
    answer:
      "O agendamento pode ser feito através do nosso portal de chamados, WhatsApp ou telefone. Trabalhamos com janelas de atendimento flexíveis e, sempre que possível, agendamos para o mesmo dia ou próximo dia útil. Para manutenções preventivas, criamos um calendário recorrente de acordo com suas necessidades.",
  },
  {
    category: "Infraestrutura",
    question: "Quais serviços de infraestrutura vocês oferecem?",
    answer:
      "Oferecemos planejamento e execução completa de infraestrutura de TI, incluindo cabeamento estruturado (dados e elétrica), instalação e configuração de servidores, implementação de racks e climatização, organização de data centers, instalação de sistemas de segurança (câmeras, controle de acesso), e muito mais.",
  },
  {
    category: "Infraestrutura",
    question: "Vocês fazem projetos de cabeamento estruturado?",
    answer:
      "Sim! Realizamos todo o projeto de cabeamento estruturado seguindo as normas ABNT e TIA/EIA. Isso inclui levantamento de necessidades, projeto técnico, instalação de pontos de rede, certificação de cabos, documentação completa e garantia de 25 anos nos materiais utilizados.",
  },
  {
    category: "Rollout e IMAC",
    question: "Como vocês organizam um rollout nacional?",
    answer:
      "Criamos um plano detalhado por fase, com cronograma, equipes dedicadas e indicadores de qualidade. Cuidamos da logística de envio e recolhimento de equipamentos, padronizamos a instalação e acompanhamos tudo com relatórios diários para garantir que cada unidade seja atendida dentro do prazo.",
  },
  {
    category: "Rollout e IMAC",
    question: "Vocês fazem gestão de inventário durante os projetos?",
    answer:
      "Sim. Utilizamos ferramentas de controle para registrar ativos instalados, removidos ou realocados. Cada equipamento recebe etiqueta de identificação e entregamos a documentação final com o inventário atualizado para facilitar auditorias e futuras manutenções.",
  },
  {
    category: "Geral",
    question: "Como funciona a contratação dos serviços?",
    answer:
      "O processo é simples: primeiro fazemos uma reunião para entender suas necessidades, depois elaboramos uma proposta personalizada com escopo e valores. Após aprovação, formalizamos o contrato e iniciamos os serviços. Oferecemos planos mensais e projetos pontuais, sempre com transparência total nos custos.",
  },
  {
    category: "Geral",
    question: "Vocês oferecem garantia nos serviços?",
    answer:
      "Sim! Todos os nossos serviços possuem garantia. Para Field Service, garantimos o serviço executado por 90 dias. Em projetos de infraestrutura, a garantia varia de 1 a 25 anos dependendo do tipo de serviço e materiais utilizados. Projetos especiais contam com 3 meses de suporte e correções sem custo adicional.",
  },
]

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
                <span className="w-1 h-6 bg-[#8BC34A] rounded-full" />
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
                              "h-5 w-5 text-[#8BC34A] flex-shrink-0 transition-transform duration-300",
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
            className="inline-flex items-center gap-2 bg-[#8BC34A] hover:bg-[#7CB342] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Fale Conosco pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
