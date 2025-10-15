// ============================================
// ARQUIVO DE POSTS DO BLOG
// ============================================
// Para adicionar um novo artigo ao blog, siga os passos:
//
// 1. Adicione um novo objeto ao array 'blogPosts' abaixo
// 2. Preencha todos os campos obrigatórios:
//    - id: número único sequencial
//    - slug: URL amigável (ex: "meu-novo-artigo")
//    - title: Título do artigo
//    - excerpt: Resumo curto (2-3 linhas)
//    - content: Conteúdo completo em HTML ou texto
//    - author: Nome do autor
//    - date: Data no formato "DD de MMM, YYYY"
//    - category: Categoria do post
//    - image: URL da imagem de capa
//
// 3. Salve o arquivo e o novo post aparecerá automaticamente
// ============================================

export interface BlogPost {
  id: number
  slug: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  category: string
  image: string
}

// ============================================
// ARRAY DE POSTS - ADICIONE NOVOS POSTS AQUI
// ============================================
export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "como-escolher-melhor-servico-field-service",
    title: "Como Escolher o Melhor Parceiro de Field Service e Garantir Suporte Técnico Presencial",
    excerpt:
      "Descubra os critérios essenciais para selecionar um parceiro de Field Service que realmente atenda às necessidades da sua operação.",
    author: "Equipe WT",
    date: "15 de Jan, 2025",
    category: "Field Service",
    image: "/professional-team-meeting-technology.jpg",
    content: `
      <h2>A Importância do Field Service na Era Digital</h2>
      <p>Em um mercado cada vez mais competitivo, compreender como escolher parceiro de field service faz toda a diferença. O atendimento técnico presencial de qualidade tornou-se um diferencial estratégico porque garante suporte técnico presencial alinhado à sua operação e mantém a continuidade dos negócios dos seus clientes.</p>

      <h3>1. Cobertura Geográfica</h3>
      <p>O primeiro critério a considerar é a abrangência do serviço. Um bom parceiro de Field Service deve ter:</p>
      <ul>
        <li>Presença em todas as regiões onde sua empresa atua</li>
        <li>Técnicos locais para atendimento rápido</li>
        <li>Capacidade de escalar operações conforme necessário</li>
      </ul>

      <h3>2. Qualificação da Equipe</h3>
      <p>A expertise técnica é fundamental. Verifique se o fornecedor possui:</p>
      <ul>
        <li>Certificações reconhecidas no mercado</li>
        <li>Programa de treinamento contínuo</li>
        <li>Especialização nos equipamentos que você utiliza</li>
      </ul>

      <h3>3. SLA e Tempo de Resposta</h3>
      <p>Tempo é dinheiro. Um bom serviço de Field Service deve oferecer:</p>
      <ul>
        <li>SLA claro e garantido</li>
        <li>Tempo de resposta compatível com suas necessidades</li>
        <li>Disponibilidade 24/7 para emergências</li>
      </ul>

      <h3>4. Tecnologia e Gestão</h3>
      <p>A tecnologia por trás do serviço faz toda a diferença:</p>
      <ul>
        <li>Sistema de abertura e acompanhamento de chamados</li>
        <li>Relatórios detalhados de atendimento</li>
        <li>Rastreamento em tempo real dos técnicos</li>
      </ul>

      <h2>Conclusão</h2>
      <p>Escolher o parceiro certo de Field Service é uma decisão estratégica que impacta diretamente na satisfação dos seus clientes e na eficiência operacional. Ao avaliar suporte técnico presencial, lembre-se de priorizar fornecedores que entendam o seu segmento e que tenham experiência comprovada em projetos complexos. Na WT, combinamos todos esses elementos para oferecer um serviço de excelência com cobertura nacional.</p>

      <p><strong>Quer saber como podemos ajudar sua empresa?</strong> Entre em contato conosco e descubra nossas soluções personalizadas de Field Service.</p>
    `,
  },
  {
    id: 2,
    slug: "5-sinais-empresa-precisa-service-desk",
    title: "5 Sinais de que Preciso de um Service Desk Profissional na Central de Serviços de TI",
    excerpt:
      "Identifique os indicadores que mostram quando é hora de investir em um Service Desk estruturado para sua operação de TI.",
    author: "Equipe WT",
    date: "10 de Jan, 2025",
    category: "Service Desk",
    image: "/it-support-team-working-computers.jpg",
    content: `
      <h2>Quando Investir em um Service Desk?</h2>
      <p>Muitas empresas começam com suporte técnico informal, mas chega um momento em que a profissionalização se torna necessária. Veja os sinais de que preciso de um service desk estruturado para transformar a central de serviços de TI em um verdadeiro centro de excelência.</p>

      <h3>1. Chamados Perdidos ou Esquecidos</h3>
      <p>Se sua equipe está perdendo o controle dos chamados, com solicitações sendo esquecidas ou atendidas fora de ordem de prioridade, é hora de estruturar um Service Desk. Um sistema adequado para uma central de serviços de TI garante:</p>
      <ul>
        <li>Registro centralizado de todos os chamados</li>
        <li>Priorização automática baseada em criticidade</li>
        <li>Histórico completo de atendimentos</li>
      </ul>

      <h3>2. Falta de Métricas e Indicadores</h3>
      <p>Você sabe qual é o tempo médio de resolução dos seus chamados? Quantos tickets são resolvidos no primeiro contato? Se não tem essas respostas, precisa de um Service Desk que forneça:</p>
      <ul>
        <li>Dashboards em tempo real</li>
        <li>Relatórios de performance</li>
        <li>Análise de tendências e problemas recorrentes</li>
      </ul>

      <h3>3. Crescimento da Demanda</h3>
      <p>Quando o volume de solicitações cresce, a gestão informal não escala. Esses sinais de que preciso de um service desk mais robusto incluem:</p>
      <ul>
        <li>Aumento no tempo de resposta</li>
        <li>Reclamações de usuários sobre demora</li>
        <li>Equipe técnica sobrecarregada</li>
      </ul>

      <h3>4. Falta de Padronização</h3>
      <p>Cada técnico resolve os problemas de um jeito diferente? A falta de padronização resulta em:</p>
      <ul>
        <li>Qualidade inconsistente no atendimento</li>
        <li>Dificuldade em treinar novos colaboradores</li>
        <li>Retrabalho e ineficiência</li>
      </ul>

      <h3>5. Ausência de Base de Conhecimento</h3>
      <p>Se sua equipe resolve os mesmos problemas repetidamente sem documentação, está perdendo tempo e dinheiro. Um Service Desk profissional oferece:</p>
      <ul>
        <li>Base de conhecimento estruturada</li>
        <li>Documentação de soluções</li>
        <li>Self-service para usuários</li>
      </ul>

      <h2>A Solução da WT</h2>
      <p>Na WT, oferecemos Service Desk completo com níveis N1 e N2, garantindo atendimento ágil e eficiente. Nossa equipe especializada utiliza as melhores práticas de ITIL para entregar resultados mensuráveis e fortalecer sua central de serviços de TI.</p>

      <p><strong>Reconheceu algum desses sinais na sua empresa?</strong> Fale conosco e descubra como nosso Service Desk pode transformar seu suporte técnico.</p>
    `,
  },
  {
    id: 3,
    slug: "infraestrutura-ti-investir-base-solida",
    title: "Infraestrutura de TI: Investimento em Infraestrutura de TI como Base para Crescimento de Negócio",
    excerpt:
      "Entenda como uma infraestrutura de TI bem planejada pode ser o diferencial competitivo que sua empresa precisa.",
    author: "Equipe WT",
    date: "5 de Jan, 2025",
    category: "Infraestrutura",
    image: "/modern-data-center-servers.jpg",
    content: `
      <h2>A Fundação do Sucesso Digital</h2>
      <p>Assim como um prédio precisa de alicerces sólidos, sua operação digital depende de investimento em infraestrutura de TI robusta e bem planejada. Vamos explorar por que esse investimento é crucial para criar a base para crescimento de negócio sustentável.</p>

      <h3>O Que é Infraestrutura de TI?</h3>
      <p>A infraestrutura de TI engloba todos os componentes físicos e virtuais necessários para operar e gerenciar ambientes de TI corporativos:</p>
      <ul>
        <li>Hardware: servidores, computadores, dispositivos de rede</li>
        <li>Software: sistemas operacionais, aplicações, ferramentas de gestão</li>
        <li>Rede: cabeamento, switches, roteadores, firewalls</li>
        <li>Data centers: instalações físicas e sistemas de climatização</li>
      </ul>

      <h3>Benefícios de uma Infraestrutura Sólida</h3>
      
      <h4>1. Disponibilidade e Confiabilidade</h4>
      <p>Uma infraestrutura bem projetada garante que seus sistemas estejam sempre disponíveis quando necessário. Esse investimento em infraestrutura de TI significa:</p>
      <ul>
        <li>Menos downtime e interrupções</li>
        <li>Maior produtividade da equipe</li>
        <li>Melhor experiência para clientes</li>
      </ul>

      <h4>2. Escalabilidade</h4>
      <p>Sua empresa está crescendo? Uma boa infraestrutura cresce junto e serve de base para crescimento de negócio estruturado:</p>
      <ul>
        <li>Fácil adição de novos usuários e dispositivos</li>
        <li>Capacidade de suportar aumento de demanda</li>
        <li>Flexibilidade para novas tecnologias</li>
      </ul>

      <h4>3. Segurança</h4>
      <p>Proteção de dados é fundamental. Uma infraestrutura adequada oferece:</p>
      <ul>
        <li>Múltiplas camadas de segurança</li>
        <li>Backup e recuperação de desastres</li>
        <li>Conformidade com regulamentações</li>
      </ul>

      <h4>4. Eficiência Operacional</h4>
      <p>Infraestrutura moderna significa operação mais eficiente e reforça a base para crescimento de negócio contínuo:</p>
      <ul>
        <li>Automação de processos</li>
        <li>Redução de custos operacionais</li>
        <li>Melhor uso de recursos</li>
      </ul>

      <h3>Componentes Essenciais</h3>
      
      <h4>Cabeamento Estruturado</h4>
      <p>A base de tudo. Um cabeamento bem feito garante velocidade e confiabilidade na transmissão de dados.</p>

      <h4>Servidores e Storage</h4>
      <p>O coração da operação. Dimensionamento correto evita gargalos e garante performance.</p>

      <h4>Rede e Conectividade</h4>
      <p>Equipamentos de qualidade e configuração adequada são essenciais para comunicação eficiente.</p>

      <h4>Climatização e Energia</h4>
      <p>Proteção dos equipamentos contra variações de temperatura e problemas elétricos.</p>

      <h2>Como a WT Pode Ajudar</h2>
      <p>Na WT, planejamos e executamos toda a estrutura tecnológica do seu escritório. Desde cabeamento de rede até instalação de servidores e sistemas de climatização, cuidamos de cada detalhe para garantir uma infraestrutura moderna, funcional e preparada para o crescimento.</p>

      <p><strong>Pronto para modernizar sua infraestrutura de TI?</strong> Entre em contato e receba uma avaliação gratuita da sua estrutura atual.</p>
    `,
  },
]

// ============================================
// FUNÇÕES HELPER - NÃO MODIFICAR
// ============================================

// Retorna todos os posts ordenados por data (mais recentes primeiro)
export function getAllBlogPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => b.id - a.id)
}

// Retorna um post específico pelo slug
export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

// Alias para getPostBySlug (compatibilidade)
export function getBlogPost(slug: string): BlogPost | undefined {
  return getPostBySlug(slug)
}

// Retorna posts de uma categoria específica
export function getPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter((post) => post.category === category)
}

// Retorna os N posts mais recentes
export function getRecentPosts(count: number): BlogPost[] {
  return getAllBlogPosts().slice(0, count)
}
