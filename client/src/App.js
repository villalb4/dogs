import React from 'react';
import { Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage';
import Home from './Components/Home/Home';
import NewDog from './Components/NewDog/NewDog';
import Details from './Components/Details/Details';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/new dog" component={NewDog} />
      <Route exact path="/details" component={Details} />
    </div>
  );
}

export default App;
