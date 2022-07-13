import React from 'react';
import './Form.css';

function Form() {
  return(
    <div className='Form_container'>
      <h2 className='form_title'>AGREGA LOS DATOS DE TU <span className='form_title_naranja'>PERRO</span></h2>
      <form className='form' action="">

        <div>
          <div>
            <label>Nombre</label>
            <div className='div_input'>
              <input className='form_input' type="text" placeholder='Eje: naruto'/>
            </div>
            <span className='dato_incorrecto'>dato incorrecto</span>
          </div>
        </div>

        <div>
          <label>Imagen</label>
          <div className='div_input'>
            <input className='form_input' type="url" placeholder='Url de la imagen'/>
          </div>
          <span className='dato_incorrecto'>dato incorrecto</span>
        </div>

        <div>
          <label>Peso</label>
          <div className='div_input'>
            <input className='form_input' type="url" />
          </div>
          <span className='dato_incorrecto'>dato incorrecto</span>
        </div>

      </form>
    </div>
  )
}

export default Form