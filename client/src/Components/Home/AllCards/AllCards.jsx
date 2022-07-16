import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {getDogs} from '../../../Redux/actions/actions';
import Card from "./Card/Card";
import {Link} from 'react-router-dom';
import Loader from '../Loader/Loader';
import Pagination from '../Pagination/Pagination';
import './AllCards.css';

function AllCards() {

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(8);

  const dispatch = useDispatch();
  const dogs = useSelector(state => state.dogs);

  useEffect(() => {
    dispatch(getDogs())
  }, [dispatch])

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = dogs.slice(indexOfFirstPost, indexOfLastPost)
  const paginate =(page) => {
    setCurrentPage(page)
  }

  function cards() {
    return (
      currentPost.map((dog, i) => (
        <Link to={`/home/${dog.id}`} key={i} className="link_all_cards">
          <Card 
            image={dog.image} 
            name={dog.name} 
            weight_min={dog.weight_min}
            weight_max={dog.weight_max}
            temperament={dog.temperament} 
          /> 
        </Link>
      ))
    )
  }

  return(
    <div className='AllCards_component'>
      <div className='AllCards'>
        {dogs.length !== 0 ? cards() : <Loader />}
      </div>
      <Pagination postPerPage={postPerPage} totalPosts={dogs.length} paginate={paginate}/>
    </div>
  )
}

export default AllCards;


/* function AllCards() {

  const dispatch = useDispatch();
  const dogs = useSelector(state => state.dogs);

  useEffect(() => {
    dispatch(getDogs())
  }, [dispatch])

  function cards() {
    return (
      dogs.map((dog, i) => (
        <Link to={`/home/${dog.id}`} key={i} className="link_all_cards">
          <Card 
            image={dog.image} 
            name={dog.name} 
            weight_min={dog.weight_min}
            weight_max={dog.weight_max}
            temperament={dog.temperament} 
          /> 
        </Link>
      ))
    )
  }

  return(
    <div className='AllCards'>
      {dogs.length !== 0 ? cards() : <Loader />}
    </div>
  )
} */
