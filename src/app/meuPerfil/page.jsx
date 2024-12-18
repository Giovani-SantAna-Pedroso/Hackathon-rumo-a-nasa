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
      // Simula uma operação de carregamento (ex: API ou navegação)
      await new Promise((resolve) => setTimeout(resolve, 500));
      router.push('CreditosDisponiveis'); // Redireciona para a página desejada
    } catch (error) {
      console.error('Erro ao navegar:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="meuPerfil-container">
      {/* Cabeçalho do Dashboard */}
      <header className="meuPerfil-header">
        <h1 className="titlePerfil">
          <BsDatabaseDash className="icon-title" /> Dashboard
        </h1>
      </header>

      {/* Conteúdo principal */}
      <main className="meuPerfil-main">
        <section className="dados-section">
          <h2 className="valor-tomado">
            Valor tomado: <strong>R$ 53.524,10</strong>
          </h2>
        </section>

        {/* Botão de Voltar com Spinner */}
        <div className="containerBtn">

        <button 
          className={`back-button ${isLoading ? 'loading' : ''}`} 
          onClick={backpage} 
          disabled={isLoading}
          >
          {isLoading ? (
            <div className="spinner">
              <div className="double-bounce1"></div>
              <div className="double-bounce2"></div>
            </div>
          ) : "Voltar"}
        </button>
          </div>

        {/* Dados do Dashboard */}
        <section className="dashboard-dados">
          <Dashdados />
        </section>
      </main>
    </div>
  );
};

export default MeuPerfil;
