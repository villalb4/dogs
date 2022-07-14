import React, {useEffect} from "react";
import {filterDog, getTemperament} from '../../../Redux/actions/actions';
import {useDispatch, useSelector} from 'react-redux';

function FiltroTemperamento() {

  // const dogs = useSelector(state => state.dogs)
  const temp = useSelector(state => state.temperaments)

  
  const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(getTemperament())
  // }, [dispatch])

  // console.log("ACAAAA :",temp)

  // function handleFilter(e){
  //   const value = e.target.value
  //   dispatch(filterDog(value))
  // }

  return(
    <div>
      Filtros
      {/* <select onChange={handleFilter}> */}
      <select>
        <option value="Temperament">Temperamento</option>
        <option value="">API</option>
        <option value="Dog">Base de datos</option>
      </select>
    </div>
  )
}

export default FiltroTemperamento;