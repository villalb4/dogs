import React, {useState, useEffect} from "react";
import { useSelector, useDispatch} from "react-redux";
import { getDogs, searchDogs } from "../../../Redux/actions/actions";
import {Link} from "react-router-dom";
import search_icon from "../../../images/search-icon.svg";
import './SearchBar.css';

function SearchBar() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getDogs())
  }, [])

  const dogs = useSelector(state => state.dogs);

  // const [dataResult, setDataResult] = useState([]);
  const [nameDog, setNameDog] = useState('')

  // function handleChange(e){
  //   setNameDog(e.target.value.toLowerCase())
  //   if(nameDog) {
  //     const searchResult = dogs.filter(v => {return v.name.toLowerCase().includes(nameDog)})
  //     setDataResult(searchResult)
  //   } else setDataResult([])
  // }

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
          <img className="searchIcon" src={search_icon} alt="serach" />
        </div>
        <input className="searchBar" type="text" placeholder="Buscar" onChange={handleChange} value={nameDog}/>
      </div>

      {nameDog.length !== 0 && (<div className="divSearchBar_Results">
        {dogs.slice(0, 14).map((d, i) => {
          return (
            <Link to={`/home/${d.id}`} className="results" key={i}>
              {/* <div className="div_imageResult"><img className="image_result" src={d.image} alt="result img"/></div> */}
              <div className="div_nameResult"><span className="text_result">{d.name}</span></div>
            </Link>
          )
        })}
      </div>)}
    </div>
  )
}

export default SearchBar;