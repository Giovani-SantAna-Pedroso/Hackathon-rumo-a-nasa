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
import styles from './Dash.module.css';

import MapaBrasil from "../MapaBrasil/index.jsx"

// Configuração do ChartJS
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// Dados fictícios
const emprestimosData = [
  { regiao: 'Norte', emprestimos: 120, juros: 2.5 },
  { regiao: 'Nordeste', emprestimos: 230, juros: 2.0 },
  { regiao: 'Centro-Oeste', emprestimos: 180, juros: 1.8 },
  { regiao: 'Sudeste', emprestimos: 450, juros: 1.5 },
  { regiao: 'Sul', emprestimos: 300, juros: 1.6 },
  { regiao: 'Roraima', emprestimos: 90, juros: 3.0 },
  { regiao: 'Amapá', emprestimos: 80, juros: 3.2 },
];

const creditoPorEstado = [
  { nome: 'São Paulo', credito: 500000 },
  { nome: 'Rio de Janeiro', credito: 300000 },
  { nome: 'Minas Gerais', credito: 250000 },
  { nome: 'Bahia', credito: 150000 },
  { nome: 'Acre', credito: 80000 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

const lineData = {
  labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  datasets: [
    {
      label: 'Valor Tomado em Empréstimos (R$)',
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1,
      data: [50000, 60000, 55000, 70000, 80000, 75000, 70000, 85000, 90000, 95000, 87000, 93000],
    },
  ],
};

export const Dashdados = () => (
  <div className={styles.container}>
    <h2 className={styles.title}>Painel Administrativo - Empréstimos e Crédito</h2>

    <div className={styles.dashboardGrid}>
      {/* Valores Mensais */}
      <div className={styles.gridItem}>
        <h3 className={styles.chartTitle}>Valores Mensais de Empréstimos</h3>
        <ResponsiveContainer width="100%" height={300}>
          <Line data={lineData} options={{ responsive: true, maintainAspectRatio: false }} />
        </ResponsiveContainer>
      </div>

      {/* Regiões com Mais Empréstimos */}
      <div className={styles.gridItem}>
        <h3 className={styles.chartTitle}>Regiões com Mais Empréstimos</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={emprestimosData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="regiao" />
            <YAxis />
            <RechartsTooltip />
            <RechartsLegend />
            <Bar dataKey="emprestimos" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Taxas de Juros */}
      <div className={styles.gridItem}>
        <h3 className={styles.chartTitle}>Taxas de Juros por Região</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={emprestimosData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="regiao" />
            <YAxis />
            <RechartsTooltip />
            <RechartsLegend />
            <Bar dataKey="juros" fill="#ff8042" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Crédito por Estado */}
      <div className={styles.gridItem}>
        <h3 className={styles.chartTitle}>Crédito Fornecido por Estado</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={creditoPorEstado}
              dataKey="credito"
              nameKey="nome"
              cx="50%"
              cy="50%"
              outerRadius={80}
              label
            >
              {creditoPorEstado.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <RechartsTooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
      
      <MapaBrasil/>
    </div>
  </div>
);
