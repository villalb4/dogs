import React, {useState} from "react";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom";
import search_icon from "../../../images/search-icon.svg";
import './SearchBar.css';

function SearchBar() {

  const dogs = useSelector(state => state.dogs);

  const [dataResult, setDataResult] = useState([]);

  function handleChange(e){
    const value = e.target.value.toLowerCase();
    if(value) {
      const searchResult = dogs.filter(v => {
        return v.name.toLowerCase().includes(value)
      })
      setDataResult(searchResult)
    } else setDataResult([])
  }

  return(
    <div className="searchBar_Container">
      <div className="divInput_SearchBar">
        <img className="searchIcon" src={search_icon} alt="serach" />
        <input className="searchBar" type="text" placeholder="Buscar" onChange={handleChange}/>
      </div>

      {dataResult.length !== 0 && (<div className="divSearchBar_Results">
        {dataResult.slice(0, 14).map((d, i) => {
          return (
            <Link to={`/details/${d.id}`} className="results">
              {/* <div className="div_imageResult"><img className="image_result" src={d.image} alt="result img"/></div> */}
              <div className="div_nameResult" key={i}><span className="text_result">{d.name}</span></div>
            </Link>
          )
        })}
      </div>)}
    </div>
  )
}

export default SearchBar;