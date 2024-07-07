'use client';

import React from 'react';
import { BsDatabaseDash } from "react-icons/bs";
import { Dashdados } from './../components/dataDash/Dash';
import './meuperfil.css';

const MeuPerfil = () => {
  return (
    <div className="meuPerfil-atual">
      <div className="valor-tomado">
        <h1>Valor tomado <strong> R$ 53.524,10</strong></h1>
        <Dashdados />
      </div>
    </div>
  );
};

export default MeuPerfil;
