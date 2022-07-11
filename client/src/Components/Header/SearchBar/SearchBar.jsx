import React from "react";
import './SearchBar.css';
import search_icon from "../../../images/search-icon.svg";
import { useSelector } from "react-redux";

function SearchBar() {

  const dogs = useSelector(state => state.dogs)

  return(
    <div className="searchBar_Container">
      <div className="divInput_SearchBar">
        <img className="searchIcon" src={search_icon} alt="serach" />
        <input className="searchBar" type="text" placeholder="Buscar" />
      </div>
      <div className="divSearchBar_Results">

      </div>
    </div>
  )
}

export default SearchBar;