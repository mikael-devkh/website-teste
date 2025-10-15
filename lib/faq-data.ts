export interface FAQItem {
  question: string
  answer: string
  category: string
}

export const faqData: FAQItem[] = [
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
    category: "Desmobilizações de Loja",
    question: "Como vocês conduzem uma desmobilização completa de loja?",
    answer:
      "Começamos com o levantamento detalhado dos ativos, definimos cronograma por área e executamos a desmontagem, desconexão e embalagem dos equipamentos. Realizamos logística reversa, descarte adequado e entregamos relatórios de checklist com fotos e inventário atualizado para cada unidade atendida.",
  },
  {
    category: "Desmobilizações de Loja",
    question: "Vocês têm experiência com impressoras Zebra e periféricos de varejo?",
    answer:
      "Sim. Nossa equipe é certificada para tratar impressoras Zebra, scanners e PDVs sensíveis. Cuidamos da limpeza, da proteção durante o transporte, da atualização de inventário por número de série e, quando necessário, realizamos reinstalação ou envio para manutenção especializada.",
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
