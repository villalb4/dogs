import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import Header from '../Header/Header';
import DogDetail from './DogDetail/DogDetail';
import {getDetail} from '../../Redux/actions/actions';
import Footer from '../Footer/Footer';

function Details(props) {

  const dispatch = useDispatch();
  const dog = useSelector(state => state.details);
  const id = props.match.params.id;
  
  useEffect(() => {
    dispatch(getDetail(id))
  },[dispatch, id])

  return(
    <div>
      <Header />
      <DogDetail dog={dog[0]}/>
      <Footer />
    </div>
  )
}

export default Details;