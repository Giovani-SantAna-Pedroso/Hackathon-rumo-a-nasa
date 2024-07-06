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

import { KoHo } from 'next/font/google';
import CardFeatures from './CardFeatures';
const koho = KoHo({ subsets: ['latin'], weight: '600' });

type Props = {};

export default function Features(Props) {
  return (
    <div className="p-mobile md:p-section">
      <h2
        className={`${koho.className} text-[36px] font-koho font-medium text-primary leading-[26px] mb-[40px] `}
      >
        Areas de atuação
      </h2>
      {/*  AUTOESTIMA, Ansiedade , , , , , VIOLÊNCIA CONTRA A MULHER. */}
      <div className="flex flex-row flex-wrap justify-between">
        <CardFeatures title="Carreira" icon={<FaUserTie />} />
        <CardFeatures title="Depressão" icon={<FaRegSadCry />} />
        <CardFeatures title="Relacionamentos" icon={<FaHeartBroken />} />
        <CardFeatures title="Ansiedade" icon={<BiSad />} />
        <CardFeatures title="Autoconhecimento" icon={<MdSelfImprovement />} />
        <CardFeatures title="Motivação" icon={<BiHappyBeaming />} />
        <CardFeatures title="Violência doméstica" icon={<FaUserInjured />} />
        <CardFeatures title="Empoderamento feminino" icon={<BiFemaleSign />} />
        <CardFeatures
          title="Inteligência emocional"
          icon={<RiPsychotherapyLine />}
        />
      </div>
    </div>
  );
}
