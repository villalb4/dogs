import React from "react";
import './DogDetail.css';

function DogDetail({image, name, height ,weight, life_span, temperament}){
  return(
    <div className="dogDetail">
      <img src={image} />
    </div>
  )
}

export default DogDetail;