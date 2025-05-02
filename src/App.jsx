import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import React from 'react';

const Preguntas = React.lazy(() => import('./pages/preguntas.jsx'));
const Hero = React.lazy(() => import('./pages/hero.jsx'));
const Resultado = React.lazy(() => import('./pages/Resultado.jsx'));

function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/preguntas" element={<Preguntas />} />
          <Route path="/resultados" element={<Resultado />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
