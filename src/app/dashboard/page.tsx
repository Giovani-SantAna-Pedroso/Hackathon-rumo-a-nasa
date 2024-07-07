'use client';
import React from 'react';
import img0 from '@public/images/personagem/0.png';
import img1 from '@public/images/personagem/1.png';
import img2 from '@public/images/personagem/2.png';
import img3 from '@public/images/personagem/3.png';
import Image from 'next/image';

function Dashboard() {
  const perguntas = [
    'Precisamos saber quem você é para poder oferecer uma ajuda personalizada',
    'Saber o nome da sua empresa nos ajuda a identificar seu histórico e entender melhor seu contexto',
    'Em que setor sua empresa operava? Isso nos ajuda a entender os desafios específicos que você enfrenta',
  ];
  const imgs = [img0, img1, img2, img3];
  const [step, setStep] = React.useState(0);
  const handleNextQuestion = () => {
    console.log(step, perguntas.length - 1);
    if (step >= perguntas.length - 1) return;
    setStep((atual) => atual + 1);
  };
  const handlePrevQuestion = () => {
    if (step == 0) return;
    setStep((atual) => atual - 1);
  };

  return (
    <div className="flex min-h-screen justify-center items-center">
      {/* formulario  */}
      <div className=" border border-secondary p-2 rounded">
        {/* Pergunta */}
        <p>{perguntas[step]}</p>
        <Image src={imgs[step]} alt="Boneco" />
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
        <div className="flex justify-between">
          <button onClick={handleNextQuestion} className="btn btn-primary">
            {' '}
            Proxima Pergunta
          </button>
          <button onClick={handlePrevQuestion} className="btn btn-secondary">
            {' '}
            Pregunta anterior
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
