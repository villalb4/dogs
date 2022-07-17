import React, {useState} from "react";
import FiltroTemperamento from "./FiltroTemperamento";
import FiltroCreado from "./FiltroCreado";
import './Filtros.css';
import icon from '../../../images/icon_filtro.svg';

function Filtros() {

  const [open, setOpen] = useState(false)

  function handleClick(){
    setOpen(!open)
  }

  return (
    <div className="filtro">
      <div className="div_button_filter">
        <button className="button_filter" onClick={handleClick}><img className="icon_filtro" src={icon} alt="filter" />Filtros</button>
      </div>
      {
        open && 
        <div className="div_filtros_relative">  
          <div className="div_filtros">
            <div className="div_fil">
              <span>Creado en</span>
              <FiltroCreado />
            </div>
            <div className="div_fil">
              <span>Temperamentos</span>
              <FiltroTemperamento />
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default Filtros;