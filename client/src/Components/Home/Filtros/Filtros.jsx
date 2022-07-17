import React from "react";
import FiltroTemperamento from "./FiltroTemperamento";
import FiltroCreado from "./FiltroCreado";
import './Filtros.css';

function Filtros() {
  return (
    <div>
      <FiltroCreado />
      <FiltroTemperamento />
    </div>
  )
}

export default Filtros;