import CardStep from './CardStep';
import { linkToPayment } from '@/utils/variables';
import { KoHo } from 'next/font/google';
const koho = KoHo({ subsets: ['latin'], weight: '600' });
const koho2 = KoHo({ subsets: ['latin'], weight: '600' });

import { buttonText } from '@/utils/variables';

type Props = {};

export default function Plan(props: Props) {
  return (
    <section className="p-mobile md:p-section ">
      <h1
        className={`${koho.className} text-center text-title font-koho font-medium text-burnt leading-title mb-[60px] `}
      >
        3 passos para mudança
      </h1>
      <div className="flex flex-col md:flex-row md:justify-between">
        <CardStep
          title="01."
          subTitle="Crie sua conta de forma humanizada"
          text="Cadastre-se na plataforma CreditaRS fornecendo as informações básicas da sua empresa e criando suas credenciais de acesso."
        />
        <CardStep
          title="02."
          subTitle="Avalie sua saúde financeira"
          text="Utilize o chatbot para realizar uma avaliação rápida da saúde financeira da sua empresa, gerando relatórios detalhados como fluxo de caixa e demonstração de resultados."
        />
        <CardStep
          title="03."
          subTitle="Conecte-se com instituições financeiras"
          text="Explore as opções de financiamento disponíveis, conecte-se com as instituições financeiras mais adequadas ao seu perfil e inicie o processo de solicitação de crédito diretamente pela plataforma."
        />
      </div>
      <div className="flex justify-center">
        <button
          className={`${koho2.className} btn btn-custon-1 bg-burnt text-white`}
        >
          <a
            className="flex flex-row items-center"
            href={linkToPayment}
            target="_blank"
          >
            <p className="text-[20px] font-bold">{buttonText}</p>
          </a>
        </button>
      </div>
    </section>
  );
}
