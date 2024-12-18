import {
  FaUserTie,
  FaHeartBroken,
  FaDiceFive,
  FaRegSadCry,
  FaUserInjured,
} from 'react-icons/fa';
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
        <CardFeatures title="Suporte ao Cliente" text="" icon={<FaPerson />} />
        <CardFeatures title="Facilidade de uso " text="" icon={<FaGlobe />} />
      </div>
    </div>
  );
}
