import React from "react";
import './DogDetail.css';

function DogDetail({dog}){
  return(
    <div className="dogDetail">
      <div className="profile">
        <div className="div_dog_profile">
          <img className="image_dog_profile" src={dog?.image} alt="dog"/>
        </div>
        <div className="div_dog_name">
          <h2 className="name_dog">{dog?.name}</h2>
          <span className="sobre_dog">SOBRE MI</span>
        </div>
      </div>

      <div className="table_container">
        <table>
          <tr>
            <th>CARACTERISTICAS</th>
            <th>MIN & MAX</th>
          </tr>
          <tr>
            <td className="table_caracteristicas">ALTURA</td>
            <td className="table_datos">{dog?.weight} Cm</td>
          </tr>
          <tr>
            <td className="table_caracteristicas">PESO</td>
            <td className="table_datos">{dog?.height} Kg</td>
          </tr>
          <tr>
            <td className="table_caracteristicas">AÑOS DE VIDA</td>
            <td className="table_datos">{dog?.life_span} </td>
          </tr>
          <tr>
            <td className="table_caracteristicas table_temp">TEMPERAMENTO</td>
            <td className="table_datos">{dog?.temperament} </td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default DogDetail;