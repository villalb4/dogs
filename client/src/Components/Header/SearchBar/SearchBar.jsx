import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {searchDogs } from "../../../Redux/actions/actions";
import search_icon from "../../../images/search-icon.svg";
import './SearchBar.css';
import { useHistory } from "react-router-dom";

function SearchBar() {

  const history = useHistory();

  const dispatch = useDispatch()

  const [nameDog, setNameDog] = useState('')

  function handleClick() {
    if(nameDog && nameDog === Number) {
      history.push("/home")
      dispatch(searchDogs(nameDog))
    }
  }

  function handleChange(e){
    setNameDog(e.target.value)
  }

  return(
    <div className="searchBar_Container">
      <div className="divInput_SearchBar">
        <div className="div_button_search">
          <button className="button_search" onClick={handleClick}>
            <img className="searchIcon" src={search_icon} alt="serach" />
          </button>
        </div>
        <input className="searchBar" type="text" placeholder="Buscar" onChange={handleChange} value={nameDog}/>
      </div>
    </div>
  )
}

export default SearchBar;