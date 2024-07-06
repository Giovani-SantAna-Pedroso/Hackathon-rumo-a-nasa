export const buttonText = 'Call to Action';
// export const  linkToPayment ="/agendar-consulta-rapida"
export const linkToPayment = '#';

export const plansAvalible = [
  {
    name: 'Consulta individual',
    value: 99.99,
    description: 'Consulta Emergencial',
    nConsultas: 1,
  },
  {
    name: 'Pacote quinzenal',
    description: '2 consulta',
    descountValue: 199.99,
    descountPer: 5,
    value: 189.99,
    nConsultas: 2,
  },
  {
    name: 'Pacote mensal',
    description: '4 consulta',
    descountValue: 399.99,
    descountPer: 10,
    value: 359.99,
    nConsultas: 4,
  },
];
export const BASE_PATH =
  process.env.NODE_ENV == 'development'
    ? 'http://localhost:3000'
    : 'https://cleidesantana.com.br';
