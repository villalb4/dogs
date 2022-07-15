import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import {dogPost} from '../../../Redux/actions/actions';
import './Form.css';



function validar(input) {
  //name
  let errors = {};
  if(!input.name) {
    errors.name = 'Debes ponerle un nombre'
  } 

  //height
  if(!input.height_min) {
    errors.height_min = 'altura min requerida'
  }

  if(!input.height_max) {
  errors.height_max = "altura max requerida"
  }

  //weight
  if(!input.weight_min) {
    errors.weight_min = 'peso min requerido'
  }
  
  if(!input.weight_max) {
    errors.weight_max = "peso max requerido"
  }

  return errors;
}


function Form() {

  const dispatch = useDispatch()

  const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    image:"",
    name: "",
    height_min: "",
    height_max: "",
    weight_min: "",
    weight_max: "",
    life_span: "",
    temperament: []
  });
  
  function handleChange(e){
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
    setErrors(validar({
      ...input,
      [e.target.name]: e.target.value
    }))
  }

  function handleSubmit(e){
    e.preventDefault();
    if(!errors.name) {
      try {
        dispatch(dogPost(input))
        alert("Perro creado correctamente")
      } catch (error) {
        alert("perro no creado")
        console.log(error)
      }
    }
    setInput({
      image:"",
      name: "",
      height_min: "",
      height_max: "",
      weight_min: "",
      weight_max: "",
      life_span: "",
      temperament: []
    })
  }


  // ^[a-zA-Z ]*$

  return(
    <div className='Form_container'>
      <h2 className='form_title'>AGREGA LOS DATOS DE TU <span className='form_title_naranja'>PERRO</span></h2>
      <p className='datos_obligatorios'>Datos con * obligatorios</p>

      <form className='form' action="" onSubmit={handleSubmit}>
        {/* ---- INPUT NAME ---- */}
        <div>
          <div>
            <label>Nombre *</label>
            <div className={errors.name ? "div_input error" : "div_input"}>
              <input className='form_input' placeholder='Eje: naruto' onChange={handleChange} name="name" value={input.name} required/>
            </div>
            {errors.name && (<span className='dato_incorrecto'>{errors.name}</span>)}
          </div>
        </div>

        {/* ---- INPUT IMAGE ---- */}
        <div>
          <label>Imagen</label>
          <div className= "div_input">
            <input className='form_input' placeholder='Url de la imagen' onChange={handleChange} name="image" value={input.image}/>
          </div>
        </div>

        {/* ---- INPUT HEIGHT ---- */}
        <div className='div_inputs_dobles'>
          <div className='max'>
            <label>Altura *</label>
            <div className={errors.height_max ? "div_input error" : "div_input"}>
              <input className='form_input min' placeholder='Max' onChange={handleChange} name="height_max" value={input.height_max}/>
              <span className='unidad'>CM</span>
            </div>
            {errors.height_max && (<span className='dato_incorrecto'>{errors.height_max}</span>)}
          </div>

          <div className='min'>
            <label className='label_min'>Peso</label>
            <div className={errors.height_min ? "div_input error" : "div_input"}>
              <input className='form_input max' placeholder='Min' onChange={handleChange} name="height_min" value={input.height_min}/>
              <span className='unidad'>CM</span>
            </div>
            {errors.height_min && (<span className='dato_incorrecto'>{errors.height_min}</span>)}
          </div>
        </div>

        {/* ---- INPUT WEIGHT ---- */}
        <div className='div_inputs_dobles'>
          <div className='max'>
            <label>Peso *</label>
            <div className={errors.weight_max ? "div_input error" : "div_input"}>
              <input className='form_input min' placeholder='Max' onChange={handleChange} name="weight_max" value={input.weight_max}/>
              <span className='unidad'>KG</span>
            </div>
            {errors.weight_max && (<span className='dato_incorrecto'>{errors.weight_max}</span>)}
          </div>

          <div className='min'>
            <label className='label_min'>Peso</label>
            <div className={errors.weight_min ? "div_input error" : "div_input"}>
              <input className='form_input max' placeholder='Min' onChange={handleChange} name="weight_min" value={input.weight_min}/>
              <span className='unidad'>KG</span>
            </div>
            {errors.weight_min && (<span className='dato_incorrecto'>{errors.weight_min}</span>)}
          </div>
        </div>

        {/* ---- INPUT LIFE_SPAN ---- */}
        <div className='div_inputs_dobles'>
          <div className='max'>
            <label>Años de vida</label>
            <div className={errors.life_span_max ? "div_input error" : "div_input"}>
              <input className='form_input min_years' placeholder='Max' onChange={handleChange} name="life_span_max" value={input.life_span_max}/>
              <span className='unidad'>Años</span>
            </div>
            {errors.life_span_max && (<span className='dato_incorrecto'>{errors.life_span_max}</span>)}
          </div>

          <div className='min'>
            <label className='label_min'>Peso</label>
            <div className={errors.life_span_min ? "div_input error" : "div_input"}>
              <input className='form_input max_years' placeholder='Min' onChange={handleChange} name="life_span_min" value={input.life_span_min}/>
              <span className='unidad'>Años</span>
            </div>
            {errors.life_span_min && (<span className='dato_incorrecto'>{errors.life_span_min}</span>)}
          </div>
        </div>
        
        {/* ---- INPUT TEMPERAMENT ---- */}
        <div>
          <label>Temperamento</label>
          <div className="div_input">
            <input className='form_input'/>
          </div>
        </div>

        <input className='submit' type="submit" value="crear"/>

      </form>
    </div>
  )
}

export default Form