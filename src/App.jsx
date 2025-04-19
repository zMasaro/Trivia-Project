import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import React from 'react';

const Trivia = React.lazy(() => import('./pages/triviaTest.jsx'));
const Preguntas = React.lazy(() => import('./pages/preguntas.jsx'));
const Hero = React.lazy(() => import('./pages/hero.jsx'));

function App() {  
  return (
    <>
      <BrowserRouter>
        <header>
          <Link to={'/'} className='Link'>Inicio</Link>
          <Link to={'/formulario'} className='Link'>Formulario</Link>
          <Link to={'/preguntas'} className='Link'>Preguntas</Link>
        </header>

        <Routes>
        <Route path="/" element={<Hero />} />
          <Route path="/formulario" element={<Trivia />} />
          <Route path="/preguntas" element={<Preguntas />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
