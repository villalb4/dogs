import React from "react";
import imageDogDefault from '../../../images/image-dog-default.jpg';
import banner from '../../../images/banner.jpg';
import './DogDetail.css';

function DogDetail({dog}){

  return(
    <div className="dogDetail">

      <div className="left">
        <div className="profile">
          <div className="div_dog_profile">
            <img className="image_dog_profile" src={dog?.image ? dog?.image : imageDogDefault} alt="dog"/>
          </div>
          <div className="div_dog_name">
            <h2 className="name_dog">{dog?.name}</h2>
            <span className="sobre_dog">SOBRE MI</span>
          </div>
        </div>

        <div className="table_container">
          <table>
            <tr>
              <th className="encabezado_tabla">CARACTERISTICAS</th>
              <th className="encabezado_tabla">MIN</th>
              <th className="encabezado_tabla">MAX</th>
            </tr>
            <tr>
              <td className="table_caracteristicas">ALTURA</td>
              <td className="table_datos">{dog?.weight_min}</td>
              <td className="table_datos">{dog?.weight_max} Cm</td>
            </tr>
            <tr>
              <td className="table_caracteristicas">PESO</td>
              <td className="table_datos">{dog?.height_min}</td>
              <td className="table_datos">{dog?.height_max}Kg</td>
            </tr>
            <tr>
              <td className="table_caracteristicas">AÑOS DE VIDA</td>
              <td className="table_datos">{dog?.life_span_min}</td>
              <td className="table_datos">{dog?.life_span_max}</td>
            </tr>
            <tr>
              <td className="table_caracteristicas table_temp">TEMPERAMENTO</td>
              {/* <td className="table_datos">{dog?.temperament} </td> */}
              <td className="table_datos">{typeof(dog?.temperament) === "string" ? dog?.temperament : dog?.temperament.map(t => {return ` ${t.name}`}).join(",")}</td>
            </tr>
          </table>
        </div>
      </div>

      <div className="right">
        <div className="div_banner">
          <img className="banner" src={banner} alt="banner" />
        </div>
      </div>
    </div>
  )
}

export default DogDetail;