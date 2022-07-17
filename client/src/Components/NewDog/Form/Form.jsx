import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import {dogPost} from '../../../Redux/actions/actions';
import { getTemperament } from '../../../Redux/actions/actions';
import './Form.css';



function validar(input) {
  //name
  let errors = {};
  if(!input.name) {
    errors.name = 'debes ponerle un nombre'
  } else if(!/[A-Z]+$/i.test(input.name)) {
    errors.name = 'solo puede contener letras y sin espacios'
  } 
  // /^[A-Z]+$/i

  //height
  if(!input.height_max) {
    errors.height_max = "altura max requerida"
  } else if(input.height_max > 85) {
    errors.height_max = 'debe ser menor a 85 CM' 
  } else if(!/^\[0-9]+/.test(input.height_max)) {
    errors.height_max = 'solo puede contener numeros'
  }

  //agregar a los otros inputs

  if(!input.height_min) {
    errors.height_min = 'altura min requerida'
  } else if(input.height_min >= input.height_max) {
    errors.height_min = 'debe ser menor al max'
  }


  //weight  
  if(!input.weight_max) {
    errors.weight_max = "peso max requerido"
  } else if(input.weight_max > 90) {
    errors.weight_max = 'debe ser menor a 90 KG'
  }

  if(!input.weight_min) {
    errors.weight_min = 'peso min requerido'
  } else if(input.weight_min >= input.weight_max) {
    errors.weight_min= 'debe ser menor al max'
  }


  //life_span
  if(input.life_span_max > 24) {
    errors.life_span_max = 'debe ser menor a 24 Años'
  } else if(input.life_span_min >= input.life_span_max) {
    errors.life_span_min = 'debe ser menor al max'
  }

  return errors;
}


function Form() {

  useEffect(()=> {
    dispatch(getTemperament())
  }, [])

  const temperamentos = useSelector(state => state.temperaments)
  console.log(temperamentos)

  const dispatch = useDispatch()

  const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    image:"",
    name: "",
    height_min: "",
    height_max: "",
    weight_min: "",
    weight_max: "",
    life_span_min: "",
    life_span_max: "",
    temperament: []
  });

  const [selectNameState, setSelectNameState] = useState([])
  
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

  function handleSelect(e){

    if(input.temperament.includes(e.target.value)) return

    setInput({
      ...input,
      temperament: [...input.temperament, e.target.value]
    })

    const selectName = e.target.value;
    if(selectName === "default") return;
    setInput({...input , temperament:[...input.temperament, selectName]})
    setSelectNameState([...selectNameState, temperamentos.find(e => e.id === parseInt(selectName))])
  }

  function handleSubmit(e){
    e.preventDefault();
    if(!errors.name && !errors.height_min && !errors.height_max &&!errors.weight_min && !errors.weight_max) {
      try {
        dispatch(dogPost(input))
        setInput({
          image:"",
          name: "",
          height_min: "",
          height_max: "",
          weight_min: "",
          weight_max: "",
          life_span_min: "",
          life_span_max: "",
          temperament: []
        })
        setSelectNameState([])
      } catch (error) {
        console.log(error)
      }
    } 
  }


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
              <input className='form_input' placeholder='Eje: naruto' onChange={handleChange} name="name" value={input.name}/>
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
          <label>Temperamentos</label>
          <div className="div_input">
            <select className='select_form' name="temperamentos" onChange={handleSelect}>
              {temperamentos.map((t, i) => {
                return(
                  <option className='option_form' key={i} value={t.id}>{t.name}</option>
                )
              })}
            </select>
          </div>
          <ul className='ul_temp'>
            {selectNameState.map((e, i) => {
              return(
              <li className='li_temp' key={i}>{e.name}</li>
              )
            })}
          </ul>
        </div>

        <input className={errors.name || errors.height_min || errors.height_max || errors.weight_min || errors.weight_max ? "submit none" : "submit"} type="submit" value="crear"/>

      </form>
    </div>
  )
}

export default Form