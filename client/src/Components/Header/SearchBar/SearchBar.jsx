import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {searchDogs } from "../../../Redux/actions/actions";
import search_icon from "../../../images/search-icon.svg";
import './SearchBar.css';
import {/*  useHistory, */ Link } from "react-router-dom";

function SearchBar() {

  const dispatch = useDispatch()

  const [nameDog, setNameDog] = useState('')

  const dogsHome = useSelector(state => state.dogsHome)

  function handleClick() {
    if(nameDog) {
      dispatch(searchDogs(nameDog))
    }
  }

  console.log(dogsHome)

  function handleChange(e){
    setNameDog(e.target.value)
    if(nameDog) {
      dispatch(searchDogs(nameDog))
    }
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

      <div className={nameDog.length !== 0 ? "divSearchBar_Results active" : "divSearchBar_Results"}>
        <div className="div_nameResult">
          {nameDog && dogsHome.slice(0, 10).map((d, i) => {
            return (
              <Link className="results" to={`/home/${d.id}`} key={i}>{d.name}</Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default SearchBar;