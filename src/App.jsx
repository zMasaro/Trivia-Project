import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import React from 'react';

const Preguntas = React.lazy(() => import('./pages/preguntas.jsx'));
const Hero = React.lazy(() => import('./pages/hero.jsx'));

function App() {  
  return (
    <>
      <BrowserRouter>
       

        <Routes>
        <Route path="/" element={<Hero />} />
          <Route path="/preguntas" element={<Preguntas />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
