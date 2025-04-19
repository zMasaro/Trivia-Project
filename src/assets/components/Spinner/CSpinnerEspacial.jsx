// SpinnerEspecial.jsx
import React from 'react';
import BSpinner from './BSpinner';
import './SpinnerESpacila.css';  // Aquí importamos el CSS

const CSpinnerEspacial = () => {
  return (
    <>
    <h1>Obteniendo preguntas</h1>

    <div className="spinner-container">
      {/* Aquí los tres spinners, llamando al componente Spinner con diferentes tamaños */}
      <BSpinner size="large" />
      
    </div>                                                                                                                                                   
    </>            
  );
};

export default  CSpinnerEspacial;