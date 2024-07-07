import Section from '@/components/UI/Section';
import React from 'react';

function OMV() {
  return (
    <div className="p-mobile md:p-section">
      <Section headerLevel={1} title="Visão">
        Simplificar e agilizar o processo de obtenção de crédito bancário para
        pequenas e médias empresas (PMEs) usando análise de dados.
      </Section>
      <Section headerLevel={1} title="Missão" reverse>
        Facilitar o acesso a financiamentos adequados para PMEs, promovendo o
        crescimento sustentável e a estabilidade financeira.
      </Section>
    </div>
  );
}

export default OMV;
