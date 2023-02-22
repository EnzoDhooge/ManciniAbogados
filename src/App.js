import './App.css'
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Inicio from './views/Inicio';
import Especialidades from './views/Especialidades';
import Nosotros from './views/Nosotros';
import Contacto from './views/Contacto';
import NavBar from './components/compartidos/Navbar/Navbar';
import Footer from './components/compartidos/Footer';


function App() {

  return (
    <div className="App">
      <BrowserRouter>

        <NavBar/>

        <Routes>
          <Route path="/" element={<Inicio/>} />
          <Route path="/especialidades" element={<Especialidades/>} />
          <Route path="/nosotros" element={<Nosotros/>} />
          <Route path="/contacto" element={<Contacto/>} />
        </Routes>

        <Footer/>

      </BrowserRouter>
    </div>
  )
}

export default App
