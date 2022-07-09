import React from 'react';
import Header from '../Header/Header'
import AllCards from './AllCards/AllCards';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <Header />
      <AllCards />
    </div>
  )
}

export default Home;