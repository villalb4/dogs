import React from 'react';
import Header from '../Header/Header'
import AllCards from './AllCards/AllCards';
import ButtonCreateDog from './ButtonCreateDog/ButtonCreateDog';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <Header />
      <div className='home_options'>
        <ButtonCreateDog />
      </div>
      <AllCards />
    </div>
  )
}

export default Home;