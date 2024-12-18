'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import './CreditosDisponiveis.css';

const proposals = [
  { id: '#1', rate: '5%', description: 'Construção + Créditos', payment: 'Pagamento até 90 dias' },
  { id: '#2', rate: '6%', description: 'Construção + Créditos', payment: 'Pagamento até 90 dias' },
  { id: '#3', rate: '6.1%', description: 'Construção + Créditos', payment: 'Pagamento até 90 dias' },
  { id: '#4', rate: '7%', description: 'Construção + Créditos', payment: 'Pagamento até 90 dias' },
];

function CreditosDisponiveis() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handlerPerfil = async () => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      router.push('meuPerfil');
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="conteudo-principal">
      <div className="content">
        <header className="content-header">
          <h1>Melhor proposta para você</h1>
          <button onClick={handlerPerfil} className="meuPerfil" disabled={isLoading}>
            {isLoading ? (
              <div className="spinner">
                <div className="double-bounce1"></div>
                <div className="double-bounce2"></div>
              </div>
            ) : (
              'Meu Perfil'
            )}
          </button>
        </header>

        <div className="box-content">
          <div className="title-box-content">
            <p>ID</p>
            <p>Taxa</p>
            <p>Descrição</p>
            <p>Forma de Pagamento</p>
          </div>
          {proposals.map((item) => (
            <div key={item.id} className="proposal-item">
              <div className="proposal-id">{item.id}</div>
              <div className="proposal-rate">{item.rate}</div>
              <div className="proposal-description">{item.description}</div>
              <div className="proposal-payment">{item.payment}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default CreditosDisponiveis;
