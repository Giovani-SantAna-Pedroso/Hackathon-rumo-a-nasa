import { KoHo } from 'next/font/google';
import CardQuestion from './CardQuestion';
const koho = KoHo({ subsets: ['latin'], weight: '600' });

type Props = {};

export default function FAQ(props: Props) {
  return (
    <section className="p-mobile md:p-section">
      <h1
        className={`${koho.className} text-primary leading-title  text-titleM md:text-title mb-[40px]`}
      >
        Perguntas frequentes
      </h1>
      <div>
        <CardQuestion
          question="Qual é a visão da CreditaRS?"
          answer="Simplificar e agilizar o processo de obtenção de crédito bancário para PMEs usando análise de dados​"
        />
        <CardQuestion
          question="Qual é a missão da CreditaRS"
          answer="Facilitar o acesso a financiamentos adequados para PMEs, promovendo o crescimento sustentável e a estabilidade financeira"
        />
        <CardQuestion
          question="Quais são as funcionalidades essenciais do MVP"
          answer="Avaliação automática de crédito usando IA, correspondência com instituições financeiras e geração de um dashboard básico com relatórios de fluxo de caixa e demonstração de resultados"
        />
        <CardQuestion
          question="Qual é a proposta de valor da CreditaRS"
          answer="Rápida avaliação de crédito, conexão com instituições financeiras adequadas, e dashboards personalizados"
        />
        <CardQuestion
          question="Qual modelo de receita é utilizado?"
          answer="Freemium"
        />
      </div>
    </section>
  );
}
