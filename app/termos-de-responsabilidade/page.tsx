import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Termos de Responsabilidade | WT Serviços de Tecnologia",
  description:
    "Conheça os termos de responsabilidade da WT Serviços de Tecnologia sobre o uso deste site e a prestação de serviços técnicos.",
}

const sections = [
  {
    title: "1. Objetivo",
    content:
      "Estes Termos de Responsabilidade orientam o uso do site e definem limites de atuação da WT Serviços de Tecnologia na prestação de serviços de Field Service, Service Desk, infraestrutura e desmobilizações de loja.",
  },
  {
    title: "2. Uso do Conteúdo",
    content:
      "As informações apresentadas têm caráter institucional e podem ser atualizadas sem aviso prévio. É proibido o uso comercial ou a reprodução não autorizada de textos, imagens e materiais disponibilizados.",
  },
  {
    title: "3. Obrigações do Cliente",
    content:
      "O cliente deve fornecer informações técnicas, autorizações de acesso e recursos necessários para execução dos serviços contratados, respondendo pela veracidade dos dados e pela segurança dos ambientes disponibilizados.",
  },
  {
    title: "4. Limitação de Responsabilidade",
    content:
      "A WT Serviços de Tecnologia não se responsabiliza por danos indiretos, lucros cessantes, indisponibilidades causadas por terceiros, falhas de infraestrutura não gerenciada ou descumprimento de obrigações fora do escopo contratado.",
  },
  {
    title: "5. Confidencialidade",
    content:
      "Comprometemo-nos a manter o sigilo das informações e credenciais fornecidas, utilizando-as exclusivamente para a execução dos serviços, conforme boas práticas de segurança e acordos firmados.",
  },
  {
    title: "6. Suporte e Garantias",
    content:
      "Os prazos de atendimento, níveis de serviço e garantias serão definidos em contrato ou proposta comercial específica. Serviços fora do escopo poderão ser cobrados adicionalmente mediante aprovação prévia do cliente.",
  },
  {
    title: "7. Legislação Aplicável",
    content:
      "Este documento é regido pelas leis brasileiras. Eventuais controvérsias serão resolvidas no foro da comarca de São Paulo/SP, salvo disposição contratual em contrário.",
  },
  {
    title: "8. Contato",
    content:
      "Em caso de dúvidas sobre estes termos, utilize o canal atendimento@wtservicostecnologia.com.br ou o telefone comercial informado neste site.",
  },
]

export default function TermosDeResponsabilidadePage() {
  return (
    <div className="bg-gray-950 text-white py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-10">
        <header className="space-y-4 text-center">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Compliance Operacional</span>
          <h1 className="text-3xl sm:text-4xl font-bold">Termos de Responsabilidade</h1>
          <p className="text-white/70 text-base sm:text-lg">
            Condições gerais para o uso do site e para a contratação dos serviços técnicos especializados da WT Serviços de Tecnologia.
          </p>
        </header>

        <div className="space-y-8 bg-gray-900/60 border border-white/10 rounded-2xl p-8 shadow-2xl shadow-black/30">
          {sections.map((section) => (
            <section key={section.title} className="space-y-3">
              <h2 className="text-xl font-semibold text-primary">{section.title}</h2>
              <p className="text-white/80 leading-relaxed">{section.content}</p>
            </section>
          ))}
        </div>

        <footer className="text-center text-white/60 text-sm">
          Vigente a partir de {new Date().toLocaleDateString("pt-BR")}
        </footer>
      </div>
    </div>
  )
}
