import Section from '@/components/UI/Section';
import React from 'react';

function OMV() {
  return (
    <div id="omv" className="p-mobile md:p-section">
      <Section
        backgroundImg="images/vision_2_1.jpeg"
        headerLevel={1}
        title="Visão"
      >
        Simplificar e agilizar o processo de obtenção de crédito bancário para
        pequenas e médias empresas (PMEs) usando análise de dados.
      </Section>
      <Section
        backgroundImg="images/mission_1.webp"
        headerLevel={1}
        title="Missão"
        reverse
      >
        Facilitar o acesso a financiamentos adequados para PMEs, promovendo o
        crescimento sustentável e a estabilidade financeira.
      </Section>
    </div>
  );
}

export default OMV;
