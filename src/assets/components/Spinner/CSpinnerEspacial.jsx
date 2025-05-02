// SpinnerEspecial.jsx
import React from 'react';
import BSpinner from './BSpinner';
import './SpinnerESpacial.css';  

const CSpinnerEspacial = ({text}) => {
  return (
    <>
    

    <div className="spinner-container">
     
      <BSpinner size="large" />
      
    </div>    
    
    <h1 id='h1'>{text}</h1>                                                                                                                                               
    </>            
  );
};

export default  CSpinnerEspacial;