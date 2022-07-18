import React from 'react';
import Header from '../Header/Header';
import AllCards from './AllCards/AllCards';
import ButtonCreateDog from './ButtonCreateDog/ButtonCreateDog';
import Filtros from './Filtros/Filtros'
import Footer from '../Footer/Footer';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <Header />
      <div className='home_options'>
        <ButtonCreateDog />
        <div className='div_filtro_ordernamineto'>
          <Filtros />
          <div className='div_ordernamiento'>
            <span className='ordenar_text'>Ordernar por :</span>
            <select className='select_ordernamiento'>
              <option className='option_name' value="">nombe (asc)</option>
              <option className='option_name' value="">nombe (des)</option>
              <option className='option_name' value="">peso (asc)</option>
              <option className='option_name' value="">peso (des)</option>
            </select>
          </div>
        </div>
      </div>
      <AllCards />
      <Footer />
    </div>
  )
}

export default Home;