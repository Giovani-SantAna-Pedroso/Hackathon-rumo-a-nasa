'use client';
import React from 'react';
import img0 from '@public/images/personagem/a2-removebg-preview.png';
import img1 from '@public/images/personagem/a2-removebg-preview.png';
import img2 from '@public/images/personagem/a2-removebg-preview.png';
import img3 from '@public/images/personagem/a2-removebg-preview.png';
import Image from 'next/image';
import { KoHo } from 'next/font/google';
import { useRouter } from 'next/navigation';
import { perguntasTest } from '@/utils/variables';

const koho = KoHo({ subsets: ['latin'], weight: '600' });
const koho2 = KoHo({ subsets: ['latin'], weight: '600' });

function Dashboard() {
  const perguntas = perguntasTest;
  const imgs = [img0, img1, img2, img3];
  const [step, setStep] = React.useState(0);
  const [ans, setAns] = React.useState([
    'João da Silva',
    'Panificadora Dois Irmão',
    'Alimentação',
    'Rio Grande do Sul',
  ]);
  const router = useRouter();

  const handleInput = (e: any) => {
    const cpAns = [...ans];
    cpAns[step] = e.target.value;
    setAns(cpAns);
  };

  const handleNextQuestion = () => {
    if (step >= perguntas.length - 1) {
      const indexOfEmpty = ans.indexOf('');
      if (indexOfEmpty != -1) {
        setStep(indexOfEmpty);
        alert('Por favor preencha todos os campos');
        return;
      }
      router.push('CreditosDisponiveis');
      return;
    }
    setStep((atual) => atual + 1);
  };

  const handlePrevQuestion = () => {
    if (step == 0) return;
    setStep((atual) => atual - 1);
  };

  return (
    <div className="flex min-h-screen justify-center items-center px-4">
  {/* Formulário */}
  <div className="mt-10 border border-secondary p-4 rounded w-[90%] md:w-[40%]">
    <div className="relative border-2 border-blackText text-white p-4 rounded-lg">
      <h1
        className={`${koho.className} text-[20px] md:text-[24px] font-medium text-primary`}
      >
        {perguntas[step].titulo}
      </h1>
      <p className="text-blackText text-sm md:text-base">
        {perguntas[step].question}
      </p>
      <div className="absolute left-4 bottom-[-10px] w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-blackText"></div>
    </div>

    <Image
      src={imgs[step]}
      alt="Boneco"
      className="w-[50%] md:w-[40%] mx-auto mb-4"
    />
    <input
      type="text"
      onChange={handleInput}
      value={ans[step]}
      placeholder="Digite aqui"
      className="input input-bordered w-full mb-4 text-sm"
    />
    <div className="flex justify-between">
      <button
        onClick={handlePrevQuestion}
        className={`${koho2.className} btn text-xs md:text-sm border-blackText`}
      >
        Anterior
      </button>
      <button
        onClick={handleNextQuestion}
        className={`${koho2.className} btn bg-burnt text-white text-xs md:text-sm`}
      >
        Próxima
      </button>
    </div>
  </div>
</div>

  );
}

export default Dashboard;
