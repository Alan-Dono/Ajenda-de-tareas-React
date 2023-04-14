import React from 'react';
import freeCodeCampLogo from '../imagenes/freecodecamp-logo.png';
import logo from '../hojas-de-estilo/logo.css';

function Logo() {
  return(
    <div className='freecodecamp-logo-contenedor'>
      <img
        src={freeCodeCampLogo}
        className='freecodecamp-logo'
        alt='Logo de freeCodeCamp'
      />
    </div>
  );
}

export default Logo;