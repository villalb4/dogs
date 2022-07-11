import React from "react";
import './DogDetail.css';

function DogDetail({dog}){
  return(
    <div className="dogDetail">
      <img src={dog.image} alt="" />
    </div>
  )
}

export default DogDetail;