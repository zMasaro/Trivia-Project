import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import React from 'react';

const Preguntas = React.lazy(() => import('./pages/preguntas.jsx'));
const Hero = React.lazy(() => import('./pages/hero.jsx'));

function App() {  
  return (
    <>
      <BrowserRouter>
        <header>
          <Link to={'/'} className='Link'>Inicio</Link>
          <Link to={'/preguntas'} className='Link'>Preguntas</Link>
        </header>

        <Routes>
        <Route path="/" element={<Hero />} />
          <Route path="/preguntas" element={<Preguntas />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
