import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import BQuestionsAnswers from './assets/components/QuestionsAnswers/BQuestionsAnswers';

function App() {
  const respuestas = ["Falso","Tercera Opcion de Prueba"]

  return (
    <>
     <BQuestionsAnswers title="Pregunta 1" pregunta="Charly es homosexy? Para responder esta pregunta tomar en cuenta anteriores comportamientos de dicho individuo." respuestas={respuestas} respuestaCorrecta={"Verdadero"}></BQuestionsAnswers>
    </>
  )
}

export default App
