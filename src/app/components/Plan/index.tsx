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
        className={`${koho.className} text-title font-koho font-medium text-burnt leading-title mb-[60px] `}
      >
        3 passos para mudança
      </h1>
      <div className="flex flex-col md:flex-row md:justify-between">
        <CardStep
          title="01."
          subTitle="Avaliação"
          text="O primeiro passo você já deu, chegou até aqui. Muito bem! Em sua primeira sessão já será possível estabelecer um vínculo com sua terapeuta. Fique à vontade, não existe um cronograma pronto para levar à terapia. Importante dizer que nesse espaço você não vai se deparar com críticas ou julgamentos. Independente de qual assunto seja tratado, estarei pronta para te acolher."
        />
        <CardStep
          title="02."
          subTitle="Tratamento"
          text="A profissional vai escolher com muito cuidado as intervenções que serão feitas, vindo de encontro ao que você busca. É importante informar que esse trabalho será realizado em parceria: você e a terapeuta. Os avanços vão acontecer se você estiver disponível para o tratamento."
        />
        <CardStep
          title="03."
          subTitle="Mudança"
          text="É um processo cuidadoso onde cada passo será uma reconstrução que vai te propiciar novos olhares, emoções e comportamentos. Abra-se para o novo, viva o presente momento e prepare-se para o futuro moderadamente. Olhe atentamente para os passos que você já deu, perceba que hoje você vai estar mais perto do que ontem. Estarei no seu suporte!"
        />
      </div>
      <div>
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
