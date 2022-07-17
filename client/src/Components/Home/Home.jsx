import React from 'react';
import Header from '../Header/Header';
import AllCards from './AllCards/AllCards';
import ButtonCreateDog from './ButtonCreateDog/ButtonCreateDog';
import Filtros from './Filtros/Filtros';
import Footer from '../Footer/Footer';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <Header />
      <div className='home_options'>
        <ButtonCreateDog />
        <Filtros />
      </div>
      <AllCards />
      <Footer />
    </div>
  )
}

export default Home;