import BlobCTA from '../../../public/BlobCTA.svg';
/* import Image from "next/image";
 * import CTAImg from "../../../public/blobCta.png"; */
// import { useContext } from "react";
// import { contextHome } from "@/storage/home";
import CTAImage from '@public/CTA.jpg';
import { KoHo } from 'next/font/google';
const koho = KoHo({ subsets: ['latin'], weight: '600' });

import { buttonText, linkToPayment } from '@/utils/variables';
import Image from 'next/image';

type Props = {};

export default function CTA(props: Props) {
  // const context = useContext(contextHome);

  return (
    <section className="p-mobile md:p-section">
      <h1
        className={`${koho.className} leading-title text-primary text-titleM md:text-title md:mb-[40px]`}
      >
        A mudanca esta a apenas um passo
      </h1>
      <div className="flex flex-col-reverse md:flex-row justify-between">
        <div>
          <p className="md:max-w-[34vw] text-text md:text-textM ">
            Descubra a ponte para a recuperação e crescimento das PMEs! Nossa
            solução tecnológica inovadora transforma o acesso ao crédito,
            oferecendo as ferramentas e suporte necessários para que
            empreendedores superem momentos críticos e reergam seus negócios.
            Estamos prontos para ajudar você a alcançar o sucesso!
          </p>
        </div>
        <div className="">
          <Image
            src={CTAImage}
            width={515}
            height={631}
            className="w-full my-[50px]"
            alt="Mudança"
          />
        </div>
      </div>
      <div>
        <button className="btn  btn-custon-1">
          <a
            className="flex flex-row items-center"
            href={linkToPayment}
            target="_blank"
          >
            <p className="text-[20px] font-bold  ">{buttonText}</p>
          </a>
        </button>
      </div>
    </section>
  );
}
