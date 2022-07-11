import React, {useEffect} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import Header from '../Header/Header';
import DogDetail from './DogDetail/DogDetail';
import {getDetail} from '../../Redux/actions/actions'

function Details(props) {

  const dispatch = useDispatch();

  const dog = useSelector(state => state.details);
  const id = props.match.params.id;

  useEffect(() => {
    dispatch(getDetail(id))
  },[dispatch, id])

  console.log(dog)
  console.log("imagen: ", dog.image.url)

  return(
    <div>
      <Header />
      <DogDetail dog={dog}/>
      <img src={dog.image} alt="" />
    </div>
  )
}

export default Details;