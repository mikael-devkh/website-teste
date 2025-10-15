import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Política de Privacidade | WT Serviços de Tecnologia",
  description:
    "Conheça as práticas de privacidade da WT Serviços de Tecnologia, incluindo coleta, uso e proteção de dados pessoais.",
}

const sections = [
  {
    title: "1. Introdução",
    content:
      "Esta Política de Privacidade descreve como a WT Serviços de Tecnologia coleta, utiliza, armazena e protege as informações pessoais fornecidas por clientes, parceiros e visitantes deste site.",
  },
  {
    title: "2. Dados Coletados",
    content:
      "Podemos coletar dados como nome, e-mail, telefone, empresa, cargo, cidade e outras informações fornecidas voluntariamente em formulários de contato, orçamento ou atendimento.",
  },
  {
    title: "3. Uso das Informações",
    content:
      "Utilizamos os dados para responder solicitações, elaborar propostas comerciais, prestar suporte técnico, enviar comunicações relevantes e melhorar nossos serviços e processos internos.",
  },
  {
    title: "4. Compartilhamento de Dados",
    content:
      "Não comercializamos dados pessoais. O compartilhamento ocorre somente com parceiros necessários à execução dos serviços contratados ou quando exigido por lei ou autoridades regulatórias.",
  },
  {
    title: "5. Segurança das Informações",
    content:
      "Adotamos medidas técnicas e administrativas para proteger os dados contra acessos não autorizados, perda, uso indevido ou divulgação indevida, mantendo controles periódicos de segurança.",
  },
  {
    title: "6. Retenção e Eliminação",
    content:
      "Manteremos os dados pelo tempo necessário para cumprir as finalidades informadas, contratos vigentes e obrigações legais. Após esse período, realizaremos a eliminação ou anonimização dos registros.",
  },
  {
    title: "7. Direitos dos Titulares",
    content:
      "Os titulares podem solicitar acesso, correção, atualização, portabilidade, anonimização ou exclusão de seus dados pessoais, bem como revogar consentimentos concedidos anteriormente.",
  },
  {
    title: "8. Canal de Contato",
    content:
      "Dúvidas, solicitações ou reclamações sobre privacidade podem ser enviadas para o e-mail privacidade@wtservicostecnologia.com.br.",
  },
]

export default function PoliticaDePrivacidadePage() {
  return (
    <div className="bg-gray-950 text-white py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-10">
        <header className="space-y-4 text-center">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Governança de Dados</span>
          <h1 className="text-3xl sm:text-4xl font-bold">Política de Privacidade</h1>
          <p className="text-white/70 text-base sm:text-lg">
            Transparência e segurança no tratamento de dados pessoais, em conformidade com a LGPD e boas práticas de mercado.
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
          Última atualização: {new Date().toLocaleDateString("pt-BR")}
        </footer>
      </div>
    </div>
  )
}
