'use client';
import React from 'react';
import img0 from '@public/images/personagem/a2-removebg-preview.png';
import img1 from '@public/images/personagem/a2-removebg-preview.png';
import img2 from '@public/images/personagem/a2-removebg-preview.png';
import img3 from '@public/images/personagem/a2-removebg-preview.png';
import img4 from '@public/images/personagem/a2-removebg-preview.png';
import Image from 'next/image';
import { KoHo } from 'next/font/google';
import { useRouter } from 'next/navigation';
import { perguntasTest } from '@/utils/variables';
const koho = KoHo({ subsets: ['latin'], weight: '600' });
const koho2 = KoHo({ subsets: ['latin'], weight: '600' });

function Dashboard() {
  const perguntas = perguntasTest;
  const imgs = [
    img0,
    img1,
    img2,
    img3,
    img0,
    img1,
    img2,
    img3,
    img0,
    img1,
    img2,
    img3,
    img0,
    img1,
    img2,
    img3,
    img0,
    img1,
    img2,
    img3,
  ];
  const [step, setStep] = React.useState(0);
  const [ans, setAns] = React.useState(Array(perguntas.length).fill(''));
  const router = useRouter();
  const handleInput = (e: any) => {
    const cpAns = [...ans];
    cpAns[step] = e.target.value;
    setAns(cpAns);
  };
  const handleNextQuestion = () => {
    console.log(ans);
    if (step >= perguntas.length - 1) {
      const indexOfEmpty = ans.indexOf('');
      if (indexOfEmpty != -1) {
        setStep(indexOfEmpty);
        alert('Por favor preencha todos os campos');
        console.log(indexOfEmpty);
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
    <div className="flex min-h-screen justify-center items-center">
      {/* formulario  */}
      <div className=" border border-secondary p-2 rounded  w-[80%] md:w-[60%]">
        <div className="relative border-2 border-blackText text-white p-4 rounded-lg">
          {/* Pergunta */}
          {/* <h1 className="text-[14px] text-secondary"> */}
          {/*   {perguntas[step].section} */}
          {/* </h1> */}
          <h1
            className={`${koho.className} text-[24px]  font-medium text-primary  `}
          >
            {perguntas[step].titulo}
          </h1>
          <p className="text-blackText">{perguntas[step].question}</p>
          <div className="absolute left-4 bottom-[-10px] w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-blackText"></div>
        </div>

        <Image src={imgs[step]} alt="Boneco" />
        <input
          type="text"
          onChange={handleInput}
          value={ans[step]}
          placeholder="Type here"
          className="input input-bordered w-full mb-4 "
        />
        <div className="flex justify-between ">
          <button
            onClick={handlePrevQuestion}
            className={`${koho2.className} btn btn-custon-1 text-blackText  border-blackText`}
          >
            Pregunta anterior
          </button>
          <button
            onClick={handleNextQuestion}
            className={`${koho2.className} btn btn-custon-1 bg-burnt text-white `}
          >
            Proxima Pergunta
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
