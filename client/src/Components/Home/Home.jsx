import React from 'react';
import Header from '../Header/Header';
import AllCards from './AllCards/AllCards';
import ButtonCreateDog from './ButtonCreateDog/ButtonCreateDog';
import FiltroTemperamento from './Filtros/FiltroTemperamento';
import Footer from '../Footer/Footer';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <Header />
      <div className='home_options'>
        <ButtonCreateDog />
        <FiltroTemperamento />
      </div>
      <AllCards />
      <Footer />
    </div>
  )
}

export default Home;