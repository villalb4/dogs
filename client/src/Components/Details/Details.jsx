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

  return(
    <div>
      <Header />
      <DogDetail dog={dog[0]? dog[0] : null}/>
    </div>
  )
}

export default Details;