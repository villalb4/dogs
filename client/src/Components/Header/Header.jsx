import React from 'react';
import {Link, NavLink} from 'react-router-dom'
import SearchBar from './SearchBar/SearchBar';
import './Header.css';

function Header() {
  return(
    <div className="header">
      <div className="header_cont">
        <Link to="/home" className="logo"><h1 className="logo">DOGS</h1></Link>
        <div className="nav">
          <NavLink to="#" className="about">About</NavLink>
          <SearchBar />
        </div>
      </div>
    </div>
  )
}

export default Header;