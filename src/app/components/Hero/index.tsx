'use client';

import { AiOutlineWhatsApp } from 'react-icons/ai';
import Link from 'next/link';
import HerImg from '@public/hero-placerholder.png';
import { KoHo, Encode_Sans } from 'next/font/google';
import a from '@public/images/bussines.webp';
import Image from 'next/image';

const koho = KoHo({ subsets: ['latin'], weight: '400' });
const koho2 = KoHo({ subsets: ['latin'], weight: '600' });
const light = Encode_Sans({ subsets: ['latin'], weight: '300' });
const bold = Encode_Sans({ subsets: ['latin'], weight: '600' });

export default function Hero() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: 'url(images/bussines.webp)',
      }}
    >
      <div className="hero-overlay bg-blackText bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Auxílio sem empecilho</h1>
          <p className="mb-5">
Você enfrenta desafios econômicos que comprometem a recuperação. Nós facilitamos o acesso ao crédito para PMEs, oferecendo o conhecimento e os recursos essenciais para você reconstruir e prosperar. Junte-se a nós e reergue seu empreendimento com confiança!
          </p>

          <div>
            <Link href="/login">
              <button
                className={`${koho2.className} btn btn-custon-1 bg-burnt text-white mr-10`}
              >
                Quero fazer um emprestimo
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

/*
  
    <div
      className="hero text-blackText min-h-screen  md:p-section"
      style={{
        backgroundImage:
          'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)',
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content flex-col lg:flex-row-reverse">
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
        </div>
      </div>
    </div>
  */
