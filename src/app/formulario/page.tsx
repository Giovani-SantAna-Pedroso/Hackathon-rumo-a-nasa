'use client';
import React from 'react';
import img0 from '@public/images/personagem/0.png';
import img1 from '@public/images/personagem/1.png';
import img2 from '@public/images/personagem/2.png';
import img3 from '@public/images/personagem/3.png';
import Image from 'next/image';
import { KoHo } from 'next/font/google';
const koho = KoHo({ subsets: ['latin'], weight: '600' });
const koho2 = KoHo({ subsets: ['latin'], weight: '600' });

function Dashboard() {
  const perguntas = [
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
    // {
    //   section: 'Impacto do Desastre',
    //   titulo: 'Descreva o impacto do desastre na sua empresa:',
    //   question:
    //     'Gostaríamos de saber como o desastre afetou sua empresa para entender a gravidade da situação e como podemos ajudar.',
    // },
    // {
    //   section: 'Impacto do Desastre',
    //   titulo: 'Quando o desastre ocorreu?',
    //   question:
    //     'Saber a data do evento nos ajuda a avaliar a urgência do apoio necessário.',
    // },
    // {
    //   section: 'Impacto do Desastre',
    //   titulo: 'Quais foram as principais perdas que você enfrentou?',
    //   question:
    //     'Nos conte sobre as principais perdas, como danos ao prédio ou perda de equipamentos, para podermos direcionar melhor a ajuda.',
    // },
    // {
    //   section: 'Situação Financeira da Empresa',
    //   titulo:
    //     'Qual era o faturamento médio mensal da sua empresa nos últimos 12 meses antes do desastre?',
    //   question:
    //     'Essa informação nos ajuda a entender a saúde financeira da sua empresa antes do desastre.',
    // },
    // {
    //   section: 'Situação Financeira da Empresa',
    //   titulo:
    //     'Você tinha algum empréstimo ou financiamento ativo antes do desastre? Se sim, qual era o valor pendente?',
    //   question:
    //     'Saber sobre financiamentos anteriores nos ajuda a planejar a melhor forma de reestruturar suas finanças.',
    // },
    // {
    //   section: 'Situação Financeira da Empresa',
    //   titulo:
    //     'Qual era a margem de lucro da sua empresa (em percentual) nos últimos 12 meses antes do desastre?',
    //   question:
    //     'Entender a rentabilidade da sua empresa nos dá uma ideia da sua capacidade de recuperação.',
    // },
    // {
    //   section: 'Situação Financeira da Empresa',
    //   titulo: 'Sua empresa tinha seguro contra desastres?',
    //   question:
    //     'Queremos saber se há algum recurso adicional disponível para ajudar na recuperação.',
    // },
    // {
    //   section: 'Situação Financeira da Empresa',
    //   titulo: 'Se sim, qual é o valor que você espera receber do seguro?',
    //   question:
    //     'Isso nos ajuda a calcular a quantia adicional necessária para sua recuperação.',
    // },
    // {
    //   section: 'Necessidades e Planejamento',
    //   titulo:
    //     'Quanto crédito você acredita que seria necessário para reerguer sua empresa?',
    //   question:
    //     'Queremos saber quanto você estima ser necessário para que possamos avaliar a viabilidade do crédito.',
    // },
    // {
    //   section: 'Necessidades e Planejamento',
    //   titulo:
    //     'Quais seriam as principais áreas de investimento com esse crédito?',
    //   question:
    //     'Por favor, nos conte como você planeja usar o crédito. Isso nos ajuda a entender suas prioridades e necessidades específicas.',
    // },
    // {
    //   section: 'Necessidades e Planejamento',
    //   titulo:
    //     'Você tem algum plano de contingência ou estratégia de recuperação? Se sim, por favor, descreva brevemente.',
    //   question:
    //     'Ter um plano mostra que você está preparado para a recuperação. Compartilhe conosco para que possamos alinhar nosso apoio.',
    // },
    // {
    //   section: 'Suporte Adicional',
    //   titulo:
    //     'Você gostaria de receber consultoria financeira ou de negócios para ajudar na recuperação da sua empresa?',
    //   question:
    //     'Estamos aqui para ajudar além do crédito, oferecendo suporte e orientação.',
    // },
    // {
    //   section: 'Suporte Adicional',
    //   titulo:
    //     'Há mais alguma informação que você gostaria de compartilhar conosco para melhor entendermos sua situação?',
    //   question:
    //     'Este espaço é para você compartilhar qualquer detalhe adicional que possa ser relevante para entendermos completamente sua situação.',
    // },
  ];
  const imgs = [
    img0,
    img1,
    img2,
    img3,
    img0,
    img1,
    img2,
    img3,
    img0,
    img1,
    img2,
    img3,
    img0,
    img1,
    img2,
    img3,
    img0,
    img1,
    img2,
    img3,
  ];
  const [step, setStep] = React.useState(0);
  const [ans, setAns] = React.useState(Array(perguntas.length).fill(''));
  const handleInput = (e: any) => {
    const cpAns = [...ans];
    cpAns[step] = e.target.value;
    setAns(cpAns);
  };
  const handleNextQuestion = () => {
    console.log(ans);
    if (step >= perguntas.length - 1) {
      const indexOfEmpty = ans.indexOf('');
      if (indexOfEmpty != -1) {
        setStep(indexOfEmpty);
        alert('Por favor preencha todos os campos');
        console.log(indexOfEmpty);
        return;
      }
      return;
    }
    setStep((atual) => atual + 1);
  };
  const handlePrevQuestion = () => {
    if (step == 0) return;
    setStep((atual) => atual - 1);
  };

  return (
    <div className="flex min-h-screen justify-center items-center">
      {/* formulario  */}
      <div className=" border border-secondary p-2 rounded  w-[80%] md:w-[60%]">
        <div className="relative border-2 border-blackText text-white p-4 rounded-lg">
          {/* Pergunta */}
          <h1 className="text-[14px] text-secondary">
            {perguntas[step].section}
          </h1>
          <h2
            className={`${koho.className} text-[24px]  font-medium text-primary  `}
          >
            {perguntas[step].titulo}
          </h2>
          <p className="text-blackText">{perguntas[step].question}</p>
          <div className="absolute left-4 bottom-[-10px] w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-blackText"></div>
        </div>

        <Image src={imgs[step]} alt="Boneco" />
        <input
          type="text"
          onChange={handleInput}
          value={ans[step]}
          placeholder="Type here"
          className="input input-bordered w-full my-4 "
        />
        <div className="flex justify-between ">
          <button
            onClick={handlePrevQuestion}
            className={`${koho2.className} btn btn-custon-1 text-blackText  border-blackText`}
          >
            Pregunta anterior
          </button>
          <button
            onClick={handleNextQuestion}
            className={`${koho2.className} btn btn-custon-1 bg-burnt text-white `}
          >
            Proxima Pergunta
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
