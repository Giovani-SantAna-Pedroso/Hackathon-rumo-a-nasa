import React from 'react';
import { ComposableMap, Geographies, Geography, Annotation } from 'react-simple-maps';

// GeoJSON do mapa do Brasil
const geoUrl =
  'https://raw.githubusercontent.com/codeforamerica/click_that_hood/master/public/data/brazil-states.geojson';

// Dados de crédito por estado
const creditoPorEstado = [
  { UF: 'SP', nome: 'São Paulo', credito: 500000, coordinates: [-46.63, -23.55] }, // SP
  { UF: 'RJ', nome: 'Rio de Janeiro', credito: 300000, coordinates: [-43.17, -22.9] }, // RJ
  { UF: 'MG', nome: 'Minas Gerais', credito: 250000, coordinates: [-44.38, -19.92] }, // MG
  { UF: 'BA', nome: 'Bahia', credito: 150000, coordinates: [-38.51, -12.97] }, // BA
  { UF: 'AC', nome: 'Acre', credito: 80000, coordinates: [-70.55, -9.97] }, // AC
];

// Função para pegar a cor com base no crédito
const getColor = (credito) => {
  if (credito >= 400000) return '#0040ff';
  if (credito >= 200000) return '#0066ff';
  return '#80aaff';
};

const MapaBrasil = () => {
  return (
    <div style={{ width: '100%', height: '500px', marginLeft:'50px'}}>
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 1000, // Aumenta a escala do mapa
          center: [-50, -15], // Centraliza o mapa no Brasil
        }}
        style={{ width: '100%', height: '100%' }}
      >
        {/* Geometrias do Mapa */}
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const stateData = creditoPorEstado.find((d) => d.UF === geo.properties.sigla);
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={stateData ? getColor(stateData.credito) : '#ECECEC'}
                  style={{
                    default: { outline: 'none' },
                    hover: { fill: '#FFD700', outline: 'none' },
                    pressed: { fill: '#FF6347', outline: 'none' },
                  }}
                />
              );
            })
          }
        </Geographies>

        {/* Anotações para os Estados com Crédito */}
        {creditoPorEstado.map((estado) => (
          <Annotation
            key={estado.UF}
            subject={estado.coordinates} // Coordenadas do estado
            dx={-30} // Ajuste de posição horizontal
            dy={-10} // Ajuste de posição vertical
            connectorProps={{
              stroke: '#FF0000',
              strokeWidth: 2,
              strokeLinecap: 'round',
            }}
          >
            <text x="0" y="0" textAnchor="start" alignmentBaseline="middle" fill="#FF0000">
              {`${estado.nome}: R$ ${estado.credito.toLocaleString()}`}
            </text>
          </Annotation>
        ))}
      </ComposableMap>
    </div>
  );
};

export default MapaBrasil;
