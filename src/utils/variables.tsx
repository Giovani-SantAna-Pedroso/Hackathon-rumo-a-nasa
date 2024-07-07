export const buttonText = 'Call to Action';
// export const  linkToPayment ="/agendar-consulta-rapida"
export const linkToPayment = '#';
export const perguntas = [
  {
    section: 'Informações Básicas',
    titulo: 'Nome Completo',
    question:
      'Precisamos saber quem você é para poder oferecer uma ajuda personalizada',
  },
  {
    section: 'Informações Básicas',
    titulo: 'Nome da Empresa',
    question:
      'Saber o nome da sua empresa nos ajuda a identificar seu histórico e entender melhor seu contexto',
  },
  {
    section: 'Informações Básicas',
    titulo: 'Setor de Atuação',
    question:
      'Em que setor sua empresa operava? Isso nos ajuda a entender os desafios específicos que você enfrenta',
  },
  {
    section: 'Informações Básicas',
    titulo: 'Localização da Empresa',
    question:
      'Em que setor sua empresa operava? Isso nos ajuda a entender os desafios específicos que você enfrenta',
  },
  {
    section: 'Impacto do Desastre',
    titulo: 'Descreva o impacto do desastre na sua empresa:',
    question:
      'Gostaríamos de saber como o desastre afetou sua empresa para entender a gravidade da situação e como podemos ajudar.',
  },
  {
    section: 'Impacto do Desastre',
    titulo: 'Quando o desastre ocorreu?',
    question:
      'Saber a data do evento nos ajuda a avaliar a urgência do apoio necessário.',
  },
  {
    section: 'Impacto do Desastre',
    titulo: 'Quais foram as principais perdas que você enfrentou?',
    question:
      'Nos conte sobre as principais perdas, como danos ao prédio ou perda de equipamentos, para podermos direcionar melhor a ajuda.',
  },
  {
    section: 'Situação Financeira da Empresa',
    titulo:
      'Qual era o faturamento médio mensal da sua empresa nos últimos 12 meses antes do desastre?',
    question:
      'Essa informação nos ajuda a entender a saúde financeira da sua empresa antes do desastre.',
  },
  {
    section: 'Situação Financeira da Empresa',
    titulo:
      'Você tinha algum empréstimo ou financiamento ativo antes do desastre? Se sim, qual era o valor pendente?',
    question:
      'Saber sobre financiamentos anteriores nos ajuda a planejar a melhor forma de reestruturar suas finanças.',
  },
  {
    section: 'Situação Financeira da Empresa',
    titulo:
      'Qual era a margem de lucro da sua empresa (em percentual) nos últimos 12 meses antes do desastre?',
    question:
      'Entender a rentabilidade da sua empresa nos dá uma ideia da sua capacidade de recuperação.',
  },
  {
    section: 'Situação Financeira da Empresa',
    titulo: 'Sua empresa tinha seguro contra desastres?',
    question:
      'Queremos saber se há algum recurso adicional disponível para ajudar na recuperação.',
  },
  {
    section: 'Situação Financeira da Empresa',
    titulo: 'Se sim, qual é o valor que você espera receber do seguro?',
    question:
      'Isso nos ajuda a calcular a quantia adicional necessária para sua recuperação.',
  },
  {
    section: 'Necessidades e Planejamento',
    titulo:
      'Quanto crédito você acredita que seria necessário para reerguer sua empresa?',
    question:
      'Queremos saber quanto você estima ser necessário para que possamos avaliar a viabilidade do crédito.',
  },
  {
    section: 'Necessidades e Planejamento',
    titulo:
      'Quais seriam as principais áreas de investimento com esse crédito?',
    question:
      'Por favor, nos conte como você planeja usar o crédito. Isso nos ajuda a entender suas prioridades e necessidades específicas.',
  },
  {
    section: 'Necessidades e Planejamento',
    titulo:
      'Você tem algum plano de contingência ou estratégia de recuperação? Se sim, por favor, descreva brevemente.',
    question:
      'Ter um plano mostra que você está preparado para a recuperação. Compartilhe conosco para que possamos alinhar nosso apoio.',
  },
  {
    section: 'Suporte Adicional',
    titulo:
      'Você gostaria de receber consultoria financeira ou de negócios para ajudar na recuperação da sua empresa?',
    question:
      'Estamos aqui para ajudar além do crédito, oferecendo suporte e orientação.',
  },
  {
    section: 'Suporte Adicional',
    titulo:
      'Há mais alguma informação que você gostaria de compartilhar conosco para melhor entendermos sua situação?',
    question:
      'Este espaço é para você compartilhar qualquer detalhe adicional que possa ser relevante para entendermos completamente sua situação.',
  },
];
export const perguntasTest = [
  {
    section: 'Informações Básicas',
    titulo: 'Nome Completo',
    question:
      'Precisamos saber quem você é para poder oferecer uma ajuda personalizada',
  },
  {
    section: 'Informações Básicas',
    titulo: 'Nome da Empresa',
    question:
      'Saber o nome da sua empresa nos ajuda a identificar seu histórico e entender melhor seu contexto',
  },
  {
    section: 'Informações Básicas',
    titulo: 'Setor de Atuação',
    question:
      'Em que setor sua empresa operava? Isso nos ajuda a entender os desafios específicos que você enfrenta',
  },
  {
    section: 'Informações Básicas',
    titulo: 'Localização da Empresa',
    question:
      'Em que setor sua empresa operava? Isso nos ajuda a entender os desafios específicos que você enfrenta',
  },
];
export const plansAvalible = [
  {
    name: 'Consulta individual',
    value: 99.99,
    description: 'Consulta Emergencial',
    nConsultas: 1,
  },
  {
    name: 'Pacote quinzenal',
    description: '2 consulta',
    descountValue: 199.99,
    descountPer: 5,
    value: 189.99,
    nConsultas: 2,
  },
  {
    name: 'Pacote mensal',
    description: '4 consulta',
    descountValue: 399.99,
    descountPer: 10,
    value: 359.99,
    nConsultas: 4,
  },
];
export const BASE_PATH =
  process.env.NODE_ENV == 'development'
    ? 'http://localhost:3000'
    : 'https://cleidesantana.com.br';
