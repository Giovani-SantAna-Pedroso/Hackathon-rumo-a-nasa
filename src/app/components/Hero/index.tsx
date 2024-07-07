'use client';

import { AiOutlineWhatsApp } from 'react-icons/ai';
import Link from 'next/link';
import HerImg from '@public/hero-placerholder.png';
import { KoHo, Encode_Sans } from 'next/font/google';
import Image from 'next/image';

const koho = KoHo({ subsets: ['latin'], weight: '400' });
const koho2 = KoHo({ subsets: ['latin'], weight: '600' });
const light = Encode_Sans({ subsets: ['latin'], weight: '300' });
const bold = Encode_Sans({ subsets: ['latin'], weight: '600' });

export default function Hero() {
  return (
    <div className="hero text-blackText min-h-screen bg-primary md:p-section">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Image
          src={HerImg}
          width={480}
          height={480} // Adicionando a altura para evitar layout shift
          alt="Image of the psichollogist"
          className="max-h-[480px] rounded-md"
          priority // Carregar esta imagem com prioridade
        />
        <div>
          <h1
            className={`${koho.className} leading-[40px] md:leading-[60px] text-titleM md:text-title`}
          >
            <span className={`${bold.className}`}>Hello text</span>
          </h1>
          <p className="py-6 my-6 md:w-[50%] text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div>
            <Link href="#">
              <button
                className={`${koho2.className} btn btn-custon-1 bg-burnt text-white mr-10`}
              >
                Necessito ajuda
              </button>
            </Link>
            <Link href="#">
              <button
                className={`${koho2.className} btn btn-custon-1 text-blackText bg-primary border-blackText`}
              >
                Quero ser voluntario
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
