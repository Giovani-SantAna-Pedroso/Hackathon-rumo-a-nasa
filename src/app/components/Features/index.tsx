import {
  FaUserTie,
  FaHeartBroken,
  FaDiceFive,
  FaRegSadCry,
  FaUserInjured,
} from 'react-icons/fa';
import { BsGraphUp } from 'react-icons/bs';
import { BiDice1, BiSad, BiFemaleSign, BiHappyBeaming } from 'react-icons/bi';
import { MdSelfImprovement } from 'react-icons/md';
import { RiPsychotherapyLine } from 'react-icons/ri';
import { FaPerson } from 'react-icons/fa6';
import { KoHo } from 'next/font/google';
import CardFeatures from './CardFeatures';
import { FaGlobe } from 'react-icons/fa';
const koho = KoHo({ subsets: ['latin'], weight: '600' });

type Props = {};

export default function Features() {
  return (
    <div className="p-mobile md:p-section">
      <h1
        className={`${koho.className} text-[36px] font-koho font-medium text-burnt leading-[26px] mb-[40px] `}
      >
        Funcionalidades
      </h1>
      {/*  AUTOESTIMA, Ansiedade , , , , , VIOLÊNCIA CONTRA A MULHER. */}
      <div className="flex flex-row flex-wrap justify-between">
        <CardFeatures
          title="Análise Preditiva"
          text="Uso de IA usando interação mais humanizada e menos burocrática para avaliar rapidamente a saúde financeira das PMEs"
          icon={<FaUserTie />}
        />
        <CardFeatures
          title="Suporte ao Cliente"
          text=" Nosso suporte usa Inteligencia artificial generativa para trazer em outro nivel a interação com nosso cliente, trazendo facilidade a quem nao entende muito de tecnologia."
          icon={<FaPerson />}
        />
        <CardFeatures
          title="Conexão com Instituições Financeiras Confiáveis"
          text=" Conectar empreendedores com as melhores opções de financiamento com base no perfil financeiro de suas empresas"
          icon={<FaGlobe />}
        />
        <CardFeatures
          title="Dashboards Personalizados"
          text="Fornecimento de dashboards detalhados que oferecem insights financeiros cruciais para tomada de decisões informadas."
          icon={<BsGraphUp />}
        />
      </div>
    </div>
  );
}
