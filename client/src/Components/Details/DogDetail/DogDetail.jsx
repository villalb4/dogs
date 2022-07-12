import React from "react";
import './DogDetail.css';

function DogDetail({dog}){
  return(
    <div className="dogDetail">
      <div>
      {/* <img src={dog.image} alt={dog.name} /> */}
        <div>
          <h2>{dog?.name}</h2>
          <span>sobre mi</span>
        </div>
      </div>
    </div>
  )
}

export default DogDetail;