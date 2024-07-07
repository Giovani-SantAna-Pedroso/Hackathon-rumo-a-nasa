'use client';


import { BsDatabaseDash } from "react-icons/bs";
import { Dashdados } from './../components/dataDash/Dash';
import './meuperfil.css';

import { useState } from "react";
import { useRouter } from 'next/navigation';


const MeuPerfil = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const backpage = async () => {
    setIsLoading(true);
    try {
        // Simular chamada à API de login
        await new Promise((resolve) => setTimeout(resolve, 3000));
        router.push('CreditosDisponiveis');
    } catch (error) {
        console.error('Login failed:', error);
    } finally {
        setIsLoading(false);
    }
  };
  return (
    <div className="meuPerfil-atual">
      <div className="valor-tomado">
        <h1>Valor tomado <strong> R$ 53.524,10</strong></h1>
        <p className='back-page' onClick={backpage}>    {isLoading ? "loading...":"Meu Voltar"}</p>
        <Dashdados />
      </div>

      
    </div>
  );
};

export default MeuPerfil;
