import React from 'react';
import Header from '../Header/Header'
import AllCards from './AllCards/AllCards';
import CreateDog from './CreateDog/CreateDog';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <Header />
      <div className='home_options'>
        <CreateDog />
      </div>
      <AllCards />
    </div>
  )
}

export default Home;