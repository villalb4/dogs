import React, {useState} from 'react';
import Header from '../Header/Header';
import AllCards from './AllCards/AllCards';
import ButtonCreateDog from './ButtonCreateDog/ButtonCreateDog';
import Filtros from './Filtros/Filtros'
import Footer from '../Footer/Footer';
import { useDispatch } from 'react-redux';
import { orderByName } from '../../Redux/actions/actions';
import './Home.css';

function Home() {

  const dispatch = useDispatch();

  function handleChange(e){
    const value = e.target.value;
    dispatch(orderByName(value))
  }

  const [currentPage, setCurrentPage] = useState(1);
  const [dogsPerPage] = useState(8);

  const indexOfLastDog = currentPage * dogsPerPage;
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;
  

  return (
    <div className="home">
      <Header />
      <div className='home_options'>
        <ButtonCreateDog />
        <div className='div_filtro_ordernamineto'>
          <Filtros currentPage={currentPage} setCurrentPage={setCurrentPage} />
          <div className='div_ordernamiento'>
            <span className='ordenar_text'>Ordernar por :</span>
            <select className='select_ordernamiento' onChange={handleChange}>
              <option className='option_name' select="true" hidden>name</option>
              <option className='option_name' value="asc">nombe (asc)</option>
              <option className='option_name' value="des">nombe (des)</option>
              {/* <option className='option_name' value="PESO_ASC">peso (asc)</option>
              <option className='option_name' value="PESO_DES">peso (des)</option> */}
            </select>
          </div>
        </div>
      </div>
      <AllCards 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        dogsPerPage={dogsPerPage} 
        indexOfFirstDog={indexOfFirstDog} 
        indexOfLastDog={indexOfLastDog}
      />
      <Footer />
    </div>
  )
}

export default Home;