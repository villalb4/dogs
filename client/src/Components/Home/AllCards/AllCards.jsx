import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {getDogs} from '../../../Redux/actions/actions';
import Card from "./Card/Card";
import {Link} from 'react-router-dom';
import Loader from '../Loader/Loader';
import './AllCards.css';

function AllCards() {

  const dispatch = useDispatch();
  const dogs = useSelector(state => state.dogs);

  useEffect(() => {
    dispatch(getDogs())
  }, [dispatch])

  function cards() {
    return (
      dogs.map((dog, i) => (
        <Link to={`/home/${dog.id}`} key={i} className="link_all_cards">
          <Card image={dog.image} name={dog.name} weight={dog.weight} temperament={dog.temperament}/> 
        </Link>
      ))
    )
  }

  return(
    <div className='AllCards'>
      {dogs.length !== 0 ? cards() : <Loader />}
    </div>
  )
}

export default AllCards;