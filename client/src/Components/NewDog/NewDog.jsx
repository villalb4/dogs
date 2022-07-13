import React from 'react';
import Header from '../Header/Header';
import Form from './Form/Form';
import './NewDog.css'

function NewDog() {
  return(
    <div className='new_dog'>
      <Header />
      <Form />
    </div>
  )
}

export default NewDog