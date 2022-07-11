import React, {lazy, Suspense} from 'react';
import Header from '../Header/Header';
import Loader from './Loader/Loader';
import ButtonCreateDog from './ButtonCreateDog/ButtonCreateDog';
import './Home.css';
const AllCards = lazy(()=>import('./AllCards/AllCards'));

function Home() {
  return (
    <div className="home">
      <Header />

      <div className='home_options'>
        <ButtonCreateDog />
      </div>

      <Suspense fallback={<Loader />}>
        <AllCards />
      </Suspense>
    </div>
  )
}

export default Home;