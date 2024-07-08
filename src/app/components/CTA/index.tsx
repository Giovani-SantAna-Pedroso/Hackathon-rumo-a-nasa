import BlobCTA from '../../../public/BlobCTA.svg';
/* import Image from "next/image";
 * import CTAImg from "../../../public/blobCta.png"; */
// import { useContext } from "react";
// import { contextHome } from "@/storage/home";
import CTAImage from '@public/images/hope.webp';
import { KoHo } from 'next/font/google';
const koho2 = KoHo({ subsets: ['latin'], weight: '600' });
const koho = KoHo({ subsets: ['latin'], weight: '600' });

import { buttonText, linkToPayment } from '@/utils/variables';
import Image from 'next/image';
import Link from 'next/link';

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
            oferecendo as ferramentas e o suporte necessários para que
            empreendedores superem momentos críticos e reconstruam seus
            negócios. Estamos prontos para ajudar você a alcançar o sucesso!
          </p>
        </div>
        <div className="">
          <Image
            src={CTAImage}
            width={415}
            height={431}
            className="w-full rounded "
            alt="Mudança"
          />
        </div>
      </div>
      <div>
        <Link href="/login">
          <button
            className={`${koho2.className} btn btn-custon-1 bg-burnt text-white mr-10`}
          >
            Quero fazer um emprestimo
          </button>
        </Link>
      </div>
    </section>
  );
}
