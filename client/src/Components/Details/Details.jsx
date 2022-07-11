import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../Header/Header';
import DogDetail from './DogDetail/DogDetail';

function Details() {

  const dogs = useSelector(state => state.dogs);

  return(
    <div>
      <Header />
      <DogDetail image={dogs.image}/>
    </div>
  )
}

export default Details;