'use client';

import { AiOutlineWhatsApp } from 'react-icons/ai';
import Link from 'next/link';
import HerImg from '@public/hero-placerholder.png';
import { KoHo, Encode_Sans } from 'next/font/google';
import a from '@public/images/bussines.webp';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const koho = KoHo({ subsets: ['latin'], weight: '400' });
const koho2 = KoHo({ subsets: ['latin'], weight: '600' });
const light = Encode_Sans({ subsets: ['latin'], weight: '300' });
const bold = Encode_Sans({ subsets: ['latin'], weight: '600' });
export default function Hero() {
  const [password, setPassword] = useState('osascoecidadetop');
  const [email, setEmail] = useState('johndoe@email.com');
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const handleLogin = async () => {
    router.push('formulario');
  };

  return (
    <div
      className="  hero p-0 min-h-screen "
      style={{
        backgroundImage: 'url(images/business_3.jpg)',
      }}
    >
      <div className="hero-overlay bg-blackText bg-opacity-40 p-0"></div>
      <div className="hero-content text-neutral-content h-full text-center p-0">
        <div className="flex flex-row h-full items-center   justify-between ">
          <div className="w-full">
            <h1 className="mb-5 text-5xl font-bold">Auxílio sem empecilho</h1>
            <p className="mb-5">
              Você enfrenta desafios econômicos que comprometem a recuperação.
              Nós facilitamos o acesso ao crédito para PMEs, oferecendo o
              conhecimento e os recursos essenciais para você reconstruir e
              prosperar. Junte-se a nós e reergue seu empreendimento com
              confiança!
            </p>
          </div>
          <div className="flex flex-col justify-center w-full border-l bg-opacity-30 h-full  bg-gray-300">
            <form className="  p-4 rounded-md">
              <h1
                className={`${koho.className} text-title font-koho font-medium text-white  leading-title mb-[60px]`}
              >
                Login
              </h1>
              <div>
                <label className="input input-bordered mb-4 flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                    <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                  </svg>
                  <input
                    type="text"
                    className="grow text-black"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </label>
                <label className="input input-bordered mb-4 flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <input
                    type="password"
                    className="grow text-black"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </label>
                <button
                  type="button"
                  onClick={handleLogin}
                  className="btn bg-secondary text-white p-2 rounded-md w-full flex justify-center items-center"
                  disabled={isLoading} // Desabilita o botão enquanto está carregando
                >
                  {isLoading ? (
                    <AiOutlineLoading3Quarters className="animate-spin mr-2" />
                  ) : (
                    'Login'
                  )}
                </button>
                <div className="flex flex-col ">
                  <Link
                    href="#"
                    className="mt-4 no-underline btn-link text-white justify-start"
                  >
                    Esqueci minha senha
                  </Link>
                  <Link
                    href="#"
                    className="mt-4 no-underline btn-link text-white justify-start"
                  >
                    Criar nova conta
                  </Link>
                  <Link
                    href="#"
                    className="mt-4 no-underline btn-link text-white justify-start"
                  >
                    Fale conoso
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
