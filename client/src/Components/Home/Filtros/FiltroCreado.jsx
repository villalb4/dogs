import React from "react";
import { filterCreated } from "../../../Redux/actions/actions";
import {useDispatch} from'react-redux';

function FiltroCreado() {
  const dispatch = useDispatch();

  function handleSelect(e){
    const value = e.target.value;
    dispatch(filterCreated(value))
  }

  return (
    <div>
      <select onChange={handleSelect}>
        <option selected disabled>selecciona uno</option>
        <option value="All">Todos</option>
        <option value="Api">API</option>
        <option value="creados">Base de datos</option>
      </select>
    </div>
  )
}

export default FiltroCreado;