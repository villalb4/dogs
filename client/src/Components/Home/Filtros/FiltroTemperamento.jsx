import React, {useEffect} from "react";
import {filterDog, getTemperament} from '../../../Redux/actions/actions';
import {useDispatch, useSelector} from 'react-redux';

function FiltroTemperamento() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTemperament())
  }, [dispatch])

  const temp = useSelector(state => state.temperaments)

  


  // console.log("ACAAAA :",temp)

  function handleFilter(e){
    const value = e.target.value
    dispatch(filterDog(value))
  }

  return(
    <div>
      Filtros
      <select onChange={handleFilter}>
      {/* <select> */}
        <option value="All">All Temperaments</option>
        {temp && temp.map((t, i) => {
          return (
            <option value={t.name} key={i}>{t.name}</option>
          )
        })}
      </select>
    </div>
  )
}

export default FiltroTemperamento;