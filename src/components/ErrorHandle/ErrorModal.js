// file was named model, but this is a modal!
import React from 'react';
import './ErrorModal.css'

const ErrorModal = (props) => {
  return (
    <section className='error-modal'>
      <section className='error-modal-box'>
        <h2 className='error-message'>{props.message}</h2>
      </section>
    </section>
  )
}

export default ErrorModal;
