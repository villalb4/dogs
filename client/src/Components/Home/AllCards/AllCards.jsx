import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {getDogs} from '../../../Redux/actions/actions';
import Card from "./Card/Card";
import {Link} from 'react-router-dom';
import './AllCards.css';

function AllCards() {

  const dispatch = useDispatch();
  const dogs = useSelector(state => state.dogs);

  useEffect(() => {
    dispatch(getDogs())
  }, [dispatch])

  return(
    <div className='AllCards'>
      {dogs.map((dog, i) => (
        <Link to={`/details/${dog.id}`} key={i} className="link_all_cards">
          <Card image={dog.image} name={dog.name} weight={dog.weight} temperament={dog.temperament}/>
        </Link>
      ))}
    </div>
  )
}

export default AllCards;