'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip as RechartsTooltip,
  Legend as RechartsLegend,
  Bar,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from 'recharts';
import './CreditosDisponiveis.css';
import KPI from './components/KPI';

const proposals = [
  {
    id: '#1',
    link: 'https://www.bndes.gov.br/wps/portal/site/home/financiamento/produto/bndes-microcredito-empreendedor',
    rate: '1.0%',
    description: 'Construção + Créditos',
    payment: 'Pagamento até 90 dias',
  },
  {
    id: '#2',
    link: 'https://www.fomento.pr.gov.br/Microcredito-Facil',
    rate: '2.4%',
    description: 'Construção + Créditos',
    payment: 'Pagamento até 90 dias',
  },
  {
    id: '#3',
    link: 'https://www.caixa.gov.br/empresa/credito-financiamento/capital-de-giro/pronampe/Paginas/default.aspx',
    rate: '1.1%',
    description: 'Construção + Créditos',
    payment: 'Pagamento até 90 dias',
  },
  {
    id: '#4',
    link: 'https://banco.bradesco/banco-da-pj/planejar/index.shtm?utm_source=Google&utm_medium=cpm&utm_campaign=2024-8_a7_alwaysonpj_search_search_consideracao_google_3rdparty&utm_term=alwaysonpj_alwaysonpj_3rdparty_search_&utm_content=31-12-2024_a7_search_exata_nonbrand&gad_source=1&gclid=EAIaIQobChMI68KO5rWyigMV02JIAB15JiH0EAMYAyAAEgLO9_D_BwE',
    rate: '1.7%',
    description: 'Construção + Créditos',
    payment: 'Pagamento até 90 dias',
  },
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
        <h1 className="text-4xl">
          Olá como esta <b>João</b>
        </h1>

        <p className="mt-2">
          Aqui esta uma avaliação da: <u>Panificadora Dois Irmão</u>
        </p>

        <div className="flex mt-2 flex-row flex-wrap">
          <div className="mr-4 mt-2">
            <KPI bgString="bg-green-300" title="Liquidez Corrente">
              <p className="font-bold"> {'>'} 1 (Saudável)</p>
            </KPI>
          </div>
          <div className="mr-4 mt-2">
            <KPI bgString="bg-gray-300" title="Emprestimos disponiveis">
              <p className="font-bold">4</p>
            </KPI>
          </div>
          <div className="mr-4 mt-2">
            <KPI bgString="bg-blue-200" title="Categoria">
              <p className="font-bold">ME</p>
            </KPI>
          </div>
          <div className="mr-4 mt-2">
            <KPI bgString="bg-yellow-200" title="Setor de operação">
              <p className="font-bold">Alimentação</p>
            </KPI>
          </div>
        </div>

        <header className=" mt-4 content-header">
          <h1>Melhores propostas para você</h1>
          <button
            onClick={handlerPerfil}
            className="meuPerfil"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="spinner">
                <div className="double-bounce1"></div>
                <div className="double-bounce2"></div>
              </div>
            ) : (
              'Dashboard'
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
            <a key={item.id} href={item.link} target="_blank">
              <div className="proposal-item">
                <div className="proposal-id">{item.id}</div>
                <div className="proposal-rate">{item.rate}</div>
                <div className="proposal-description">{item.description}</div>
                <div className="proposal-payment">{item.payment}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}

export default CreditosDisponiveis;
