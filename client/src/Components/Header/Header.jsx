import React from 'react';
import {Link} from 'react-router-dom'
import SearchBar from './SearchBar/SearchBar';
import './Header.css';
import menu from '../../images/menu.svg';


function Header() {
  return(
    <div className="header">
      <div className="header_cont">
        <div className='div_responsive_header'>
          <Link to="/home" className="logo"><h1 className="logo">DOGS</h1></Link>
          <img className='menu' src={menu} alt="menu" />
        </div>
        <div className="nav">
          <a href="https://github.com/villalb4/Dogs" target="_balck" className="about">GitHub</a>
          {/* <NavLink to="#" className="about">GitHub</NavLink> */}
          <SearchBar />
        </div>
      </div>
    </div>
  )
}

export default Header;