import React, {useState} from 'react';
import './Form.css';

function Form() {

  const [input, setInput] = useState('');

  function handleSubmit(e){
    e.preventDefault();
    console.log(input)
    setInput('')
  }

  function handleChange(e){
    const value = e.target.value;
    setInput(value)
  }

  return(
    <div className='Form_container'>
      <h2 className='form_title'>AGREGA LOS DATOS DE TU <span className='form_title_naranja'>PERRO</span></h2>
      <form className='form' action="" onSubmit={handleSubmit}>

        <div>
          <div>
            <label>Nombre *</label>
            <div className='div_input'>
              <input className='form_input' onChange={handleChange} placeholder='Eje: naruto' value={input}/>
            </div>
            <span className='dato_incorrecto'>dato incorrecto</span>
          </div>
        </div>

        <div>
          <label>Imagen</label>
          <div className='div_input'>
            <input className='form_input' placeholder='Url de la imagen'/>
          </div>
          <span className='dato_incorrecto'>dato incorrecto</span>
        </div>

        <div className='div_inputs_dobles'>
          <div className='max'>
            <label>Altura *</label>
            <div className='div_input'>
              <input className='form_input min' placeholder='Max'/>
              <span className='unidad'>CM</span>
            </div>
            <span className='dato_incorrecto'>dato incorrecto</span>
          </div>
          <div className='min'>
            <label className='label_min'>Peso</label>
            <div className='div_input'>
              <input className='form_input max' placeholder='Min'/>
              <span className='unidad'>CM</span>
            </div>
            <span className='dato_incorrecto'>dato incorrecto</span>
          </div>
        </div>

        <div className='div_inputs_dobles'>
          <div className='max'>
            <label>Peso *</label>
            <div className='div_input'>
              <input className='form_input min' placeholder='Max'/>
              <span className='unidad'>KG</span>
            </div>
            <span className='dato_incorrecto'>dato incorrecto</span>
          </div>
          <div className='min'>
            <label className='label_min'>Peso</label>
            <div className='div_input'>
              <input className='form_input max' placeholder='Min'/>
              <span className='unidad'>KG</span>
            </div>
            <span className='dato_incorrecto'>dato incorrecto</span>
          </div>
        </div>


        <div className='div_inputs_dobles'>
          <div className='max'>
            <label>Años de vida</label>
            <div className='div_input'>
              <input className='form_input min_years' placeholder='Max'/>
              <span className='unidad'>Años</span>
            </div>
            <span className='dato_incorrecto'>dato incorrecto</span>
          </div>
          <div className='min'>
            <label className='label_min'>Peso</label>
            <div className='div_input'>
              <input className='form_input max_years' placeholder='Min'/>
              <span className='unidad'>Años</span>
            </div>
            <span className='dato_incorrecto'>dato incorrecto</span>
          </div>
        </div>
        

        <div>
          <label>Temperamento</label>
          <div className='div_input'>
            <input className='form_input'/>
          </div>
          <span className='dato_incorrecto'>dato incorrecto</span>
        </div>


        <input className='submit' type="submit" value="crear"/>

      </form>
    </div>
  )
}

export default Form