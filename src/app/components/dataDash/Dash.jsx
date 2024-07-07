'use client';

import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import './Dash.css'; // Certifique-se de que o caminho para o arquivo CSS está correto

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Valores mensais fictícios variando entre os meses
const monthlyValues = [4500.50, 5200.75, 4800.30, 5500.00, 5000.25, 5400.60, 4900.45, 5300.10, 5100.55, 5250.40, 4950.85, 5200.75];

const data = {
  labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  datasets: [
    {
      label: 'Valor tomado (R$)',
      backgroundColor: 'rgba(75,192,192,0.2)',
      borderColor: 'rgba(75,192,192,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(75,192,192,0.4)',
      hoverBorderColor: 'rgba(75,192,192,1)',
      data: monthlyValues, // Usando os valores mensais fictícios
    },
  ],
};

export const Dashdados = () => (
  <div className="dashboard-container">
    <h2>Exemplo de Gráfico</h2>
    <Line data={data} />
  </div>
);
