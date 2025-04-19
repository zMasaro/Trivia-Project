import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import React from 'react';

const Trivia = React.lazy(() => import('./pages/triviaTest.jsx'));
const Preguntas = React.lazy(() => import('./pages/preguntas.jsx'));

function App() {  
  return (
    <>
      <BrowserRouter>
        <header>
          <Link to={'/'} className='Link'>Inicio</Link>
          <Link to={'/preguntas'} className='Link'>Preguntas</Link>
        </header>

        <Routes>
          <Route path="/" element={<Trivia />} />
          <Route path="/preguntas" element={<Preguntas />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
